/**
 * Tests for the ir-codegen generate() function.
 */

import { describe, it, expect } from 'vitest';
import { generate } from './index.js';
import type { CodegenConfig } from './index.js';

const RUST_CONFIG: CodegenConfig = {
	grammar: 'rust',
	nodes: ['struct_item', 'function_item'],
	outputDir: 'src/generated/',
};

describe('generate()', () => {
	it('returns GeneratedFiles with correct keys', () => {
		const result = generate(RUST_CONFIG);

		expect(result.builders).toBeInstanceOf(Map);
		expect(result.tests).toBeInstanceOf(Map);
		expect(typeof result.renderer).toBe('string');
		expect(typeof result.types).toBe('string');
	});

	it('generates a builder for each requested node kind', () => {
		const result = generate(RUST_CONFIG);

		expect(result.builders.has('struct_item')).toBe(true);
		expect(result.builders.has('function_item')).toBe(true);
		expect(result.builders.size).toBe(2);
	});

	it('generates a test for each requested node kind', () => {
		const result = generate(RUST_CONFIG);

		expect(result.tests.has('struct_item')).toBe(true);
		expect(result.tests.has('function_item')).toBe(true);
		expect(result.tests.size).toBe(2);
	});

	describe('builder output', () => {
		it('struct_item builder imports from @refactory/grammar-types', () => {
			const result = generate(RUST_CONFIG);
			const builder = result.builders.get('struct_item')!;

			expect(builder).toContain("from '@refactory/grammar-types'");
		});

		it('struct_item builder imports RustTypes from @codemod.com/jssg-types', () => {
			const result = generate(RUST_CONFIG);
			const builder = result.builders.get('struct_item')!;

			expect(builder).toContain("from '@codemod.com/jssg-types/langs/rust'");
		});

		it('struct_item builder contains correct type names', () => {
			const result = generate(RUST_CONFIG);
			const builder = result.builders.get('struct_item')!;

			expect(builder).toContain('StructItem');
			expect(builder).toContain('StructItemConfig');
			expect(builder).toContain("kind: 'struct_item' as const");
		});

		it('struct_item builder exports a structItem factory function', () => {
			const result = generate(RUST_CONFIG);
			const builder = result.builders.get('struct_item')!;

			expect(builder).toContain('export function structItem(');
		});

		it('function_item builder exports a functionItem factory function', () => {
			const result = generate(RUST_CONFIG);
			const builder = result.builders.get('function_item')!;

			expect(builder).toContain('export function functionItem(');
		});

		it('builder contains no {{PLACEHOLDER}} tokens (all substitutions applied)', () => {
			const result = generate(RUST_CONFIG);
			for (const [kind, source] of result.builders) {
				expect(source, `builder for ${kind} has unresolved placeholder`).not.toMatch(
					/\{\{[A-Z_]+\}\}/,
				);
			}
		});
	});

	describe('renderer output', () => {
		it('renderer contains a switch statement', () => {
			const result = generate(RUST_CONFIG);
			expect(result.renderer).toContain('switch');
		});

		it('renderer contains case for each node kind', () => {
			const result = generate(RUST_CONFIG);
			expect(result.renderer).toMatch(/(^|\n)[ \t]*case 'struct_item'/);
			expect(result.renderer).toMatch(/(^|\n)[ \t]*case 'function_item'/);
		});

		it('renderer has no {{PLACEHOLDER}} tokens', () => {
			const result = generate(RUST_CONFIG);
			expect(result.renderer).not.toMatch(/\{\{[A-Z_]+\}\}/);
		});
	});

	describe('test output', () => {
		it('struct_item test imports from vitest', () => {
			const result = generate(RUST_CONFIG);
			const test = result.tests.get('struct_item')!;

			expect(test).toContain("from 'vitest'");
		});

		it('test output has no {{PLACEHOLDER}} tokens', () => {
			const result = generate(RUST_CONFIG);
			for (const [kind, source] of result.tests) {
				expect(source, `test for ${kind} has unresolved placeholder`).not.toMatch(
					/\{\{[A-Z_]+\}\}/,
				);
			}
		});
	});

	describe('types output', () => {
		it('types file re-exports from @refactory/grammar-types', () => {
			const result = generate(RUST_CONFIG);
			expect(result.types).toContain("from '@refactory/grammar-types'");
		});

		it('types file has no {{PLACEHOLDER}} tokens', () => {
			const result = generate(RUST_CONFIG);
			expect(result.types).not.toMatch(/\{\{[A-Z_]+\}\}/);
		});
	});

	describe('error handling', () => {
		it('throws for unknown node kind', () => {
			const config: CodegenConfig = {
				grammar: 'rust',
				nodes: ['nonexistent_node'],
				outputDir: 'out/',
			};

			expect(() => generate(config)).toThrow(/nonexistent_node/);
		});

		it('throws for unknown grammar', () => {
			const config: CodegenConfig = {
				grammar: 'nonexistent_grammar',
				nodes: ['some_node'],
				outputDir: 'out/',
			};

			expect(() => generate(config)).toThrow();
		});
	});
});
