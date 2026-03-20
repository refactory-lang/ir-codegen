/**
 * Grammar schema parser.
 *
 * Reads tree-sitter grammar type definitions from @codemod.com/jssg-types
 * and returns structured node definitions used by the code generator.
 */

import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// ---------------------------------------------------------------------------
// Grammar schema types
// ---------------------------------------------------------------------------

export interface GrammarTypeRef {
	type: string;
	named: boolean;
}

export interface SlotInfo {
	multiple: boolean;
	required: boolean;
	types: GrammarTypeRef[];
}

export interface NodeDefinition {
	type: string;
	named: boolean;
	fields?: Record<string, SlotInfo>;
	children?: SlotInfo;
	subtypes?: GrammarTypeRef[];
}

export type GrammarSchema = Record<string, NodeDefinition>;

// ---------------------------------------------------------------------------
// Grammar loader
// ---------------------------------------------------------------------------

/**
 * Load and parse a grammar schema from @codemod.com/jssg-types.
 *
 * @param grammar - Grammar language (e.g., 'rust', 'typescript', 'python')
 * @returns Parsed grammar schema with node definitions
 */
export function loadGrammar(grammar: string): GrammarSchema {
	// Resolve path to the .d.ts file — jssg-types exports these as their default.
	const dtsPath: string = require.resolve(`@codemod.com/jssg-types/langs/${grammar}`);
	const content = readFileSync(dtsPath, 'utf-8');

	// The file format follows the auto-generation pattern from tree-sitter:
	//   // Auto-generated from tree-sitter-<grammar>
	//   /* eslint-disable */
	//   /* prettier-ignore */
	//   type <grammar>Types = { ... };
	//   export default <grammar>Types;
	//
	// The object literal between `type <name>Types = ` and `;\nexport` is valid
	// JSON — all keys and string values use double quotes, matching JSON syntax.
	// This regex is tightly coupled to the @codemod.com/jssg-types generation
	// format. If that format changes, the regex must be updated accordingly.
	const match = /type \w+Types = ({[\s\S]+});\s*\nexport/.exec(content);
	if (!match) {
		throw new Error(
			`Cannot parse grammar schema for '${grammar}'. ` +
				`Unexpected format in ${dtsPath}`,
		);
	}

	return JSON.parse(match[1]) as GrammarSchema;
}

/**
 * Return only the named node definitions that have explicit field definitions.
 * Skips union/supertype nodes (which only have `subtypes`).
 */
export function namedFieldNodes(schema: GrammarSchema): Record<string, NodeDefinition> {
	return Object.fromEntries(
		Object.entries(schema).filter(
			([, def]) => def.named && def.fields !== undefined,
		),
	);
}
