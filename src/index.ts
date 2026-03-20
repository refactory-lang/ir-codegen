/**
 * IR Code Generator
 *
 * Reads tree-sitter grammar definitions from @codemod.com/jssg-types
 * and generates:
 * 1. Builder factory functions (structItem(), functionItem(), etc.)
 * 2. Render switch cases
 * 3. Test scaffolding (vitest fixtures)
 *
 * Usage:
 *   ir-codegen --grammar rust --nodes struct_item,function_item --output src/generated/
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { loadGrammar } from './grammar.js';
import type { NodeDefinition } from './grammar.js';

// ---------------------------------------------------------------------------
// Public API types
// ---------------------------------------------------------------------------

export interface CodegenConfig {
	/** Grammar language (e.g., 'rust', 'typescript', 'python') */
	grammar: string;
	/** Node kinds to generate builders for */
	nodes: string[];
	/** Output directory */
	outputDir: string;
	/** Alias map for field renames */
	aliases?: Record<string, Record<string, string>>;
	/** Fields that should be optional in builder config */
	defaultableFields?: string[];
}

export interface GeneratedFiles {
	/** node kind -> builder .ts source */
	builders: Map<string, string>;
	/** render.ts source with all cases */
	renderer: string;
	/** node kind -> test .ts source */
	tests: Map<string, string>;
	/** re-exports from grammar-types */
	types: string;
}

// ---------------------------------------------------------------------------
// Template loading
// ---------------------------------------------------------------------------

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadTemplate(name: string): string {
	return readFileSync(join(__dirname, 'templates', name), 'utf-8');
}

// ---------------------------------------------------------------------------
// Name conversion utilities
// ---------------------------------------------------------------------------

/** 'struct_item' → 'StructItem' */
function snakeToPascal(s: string): string {
	return s
		.split('_')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
}

/** 'struct_item' → 'structItem' */
function snakeToCamel(s: string): string {
	const pascal = snakeToPascal(s);
	return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

/** 'struct_item' → 'struct-item' */
function snakeToKebab(s: string): string {
	return s.replace(/_/g, '-');
}

/** 'rust' → 'RustTypes' */
function grammarTypeName(grammar: string): string {
	return snakeToPascal(grammar) + 'Types';
}

// ---------------------------------------------------------------------------
// Template rendering
// ---------------------------------------------------------------------------

/** Replace all occurrences of `{{PLACEHOLDER}}` in a template string. */
function fill(template: string, replacements: Record<string, string>): string {
	return Object.entries(replacements).reduce(
		(result, [key, value]) => result.replaceAll(`{{${key}}}`, value),
		template,
	);
}

// ---------------------------------------------------------------------------
// Code generation helpers
// ---------------------------------------------------------------------------

/**
 * Produce the config spread for the builder body.
 * The builder function accepts a `config` object and spreads it onto the return value,
 * with `kind` set as a const assertion.
 */
function configSpread(): string {
	return '...config,';
}

/**
 * Produce render field comments for the render-case template.
 * Each field becomes a commented-out line showing how it would be rendered.
 */
function buildRenderFields(def: NodeDefinition): string {
	const lines: string[] = [];

	const fields = def.fields ?? {};
	for (const [fieldName, slot] of Object.entries(fields)) {
		const camel = snakeToCamel(fieldName);
		if (slot.required) {
			lines.push(`\tparts.push(renderNode(node.${camel}));`);
		} else {
			lines.push(`\tif (node.${camel}) parts.push(renderNode(node.${camel}));`);
		}
	}

	if (def.children) {
		if (def.children.required) {
			lines.push('\tparts.push(renderNode(node.children));');
		} else {
			lines.push('\tif (node.children) parts.push(renderNode(node.children));');
		}
	}

	return lines.join('\n') || '\t// no fields';
}

/**
 * Produce a minimal config object for the test template.
 * Only required fields with sensible placeholder values are included.
 */
function buildMinimalConfig(def: NodeDefinition): string {
	const lines: string[] = [];

	const fields = def.fields ?? {};
	for (const [fieldName, slot] of Object.entries(fields)) {
		if (!slot.required) continue;
		const camel = snakeToCamel(fieldName);
		lines.push(`\t\t\t${camel}: '<${camel}>',`);
	}

	return lines.join('\n') || '\t\t\t// no required fields';
}

// ---------------------------------------------------------------------------
// Main generator
// ---------------------------------------------------------------------------

/**
 * Generate IR builder code from a tree-sitter grammar definition.
 *
 * @param config - Code generation configuration
 * @returns Generated file contents
 */
export function generate(config: CodegenConfig): GeneratedFiles {
	const schema = loadGrammar(config.grammar);
	const grammarType = grammarTypeName(config.grammar);

	const builderTemplate = loadTemplate('builder.ts.template');
	const renderCaseTemplate = loadTemplate('render-case.ts.template');
	const testTemplate = loadTemplate('test.ts.template');

	const builders = new Map<string, string>();
	const tests = new Map<string, string>();
	const renderCaseParts: string[] = [];

	for (const nodeKind of config.nodes) {
		const def = schema[nodeKind];
		if (!def) {
			throw new Error(
				`Node kind '${nodeKind}' not found in '${config.grammar}' grammar. ` +
					`Available named nodes: ${Object.keys(schema)
						.filter((k) => schema[k]?.named)
						.slice(0, 10)
						.join(', ')}, ...`,
			);
		}

		const typeName = snakeToPascal(nodeKind);
		const factoryName = snakeToCamel(nodeKind);
		const fileName = snakeToKebab(nodeKind);

		const substitutions = {
			NODE_KIND: nodeKind,
			GRAMMAR: config.grammar,
			GRAMMAR_TYPE: grammarType,
			TYPE_NAME: typeName,
			FACTORY_NAME: factoryName,
			FILE_NAME: fileName,
			FIELD_ASSIGNMENTS: configSpread(),
			RENDER_FIELDS: buildRenderFields(def),
			MINIMAL_CONFIG: buildMinimalConfig(def),
		};

		builders.set(nodeKind, fill(builderTemplate, substitutions));
		renderCaseParts.push(fill(renderCaseTemplate, substitutions));
		tests.set(nodeKind, fill(testTemplate, substitutions));
	}

	const renderer = buildRenderer(config.grammar, grammarType, renderCaseParts);
	const types = buildTypesFile(config.grammar, grammarType, config.nodes);

	return { builders, renderer, tests, types };
}

// ---------------------------------------------------------------------------
// Renderer and types file builders
// ---------------------------------------------------------------------------

function buildRenderer(
	grammar: string,
	grammarType: string,
	renderCaseParts: string[],
): string {
	return [
		`/**`,
		` * Render switch cases for the ${grammar} grammar.`,
		` *`,
		` * Generated by ir-codegen. Do not edit manually.`,
		` */`,
		``,
		`import type ${grammarType} from '@codemod.com/jssg-types/langs/${grammar}';`,
		`import type { NodeType } from '@refactory/grammar-types';`,
		``,
		`export function render(node: NodeType<${grammarType}, string>): string {`,
		`\tswitch (node.kind) {`,
		...renderCaseParts,
		`\t\tdefault:`,
		`\t\t\treturn '';`,
		`\t}`,
		`}`,
		``,
	].join('\n');
}

function buildTypesFile(
	grammar: string,
	grammarType: string,
	nodeKinds: string[],
): string {
	const typeExports = nodeKinds
		.map((kind) => {
			const typeName = snakeToPascal(kind);
			return `export type { ${typeName}, ${typeName}Config } from './${snakeToKebab(kind)}.js';`;
		})
		.join('\n');

	return [
		`/**`,
		` * Re-exports for ${grammar} grammar types.`,
		` *`,
		` * Generated by ir-codegen. Do not edit manually.`,
		` */`,
		``,
		`import type ${grammarType} from '@codemod.com/jssg-types/langs/${grammar}';`,
		`export type { NodeType, BuilderConfig } from '@refactory/grammar-types';`,
		`export type { ${grammarType} };`,
		``,
		typeExports,
		``,
	].join('\n');
}
