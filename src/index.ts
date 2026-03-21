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
	/** fluent builder classes + ir namespace */
	fluent: string;
}

/**
 * Generate IR builder code from a tree-sitter grammar definition.
 *
 * @param config - Code generation configuration
 * @returns Generated file contents
 */
export function generate(_config: CodegenConfig): GeneratedFiles {
	// TODO: Implement code generation
	throw new Error('Not yet implemented — see milestone-1 issue');
}
