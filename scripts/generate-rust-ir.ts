/**
 * Generate rust-ir output files from ir-codegen.
 *
 * Usage: npx tsx scripts/generate-rust-ir.ts
 *
 * Outputs to: output/rust-ir/
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { generate } from '../src/index.ts';
import { listNodeKinds } from '../src/grammar-reader.ts';
import { emitIndex } from '../src/emitters/index-file.ts';
import { resolveFileNames } from '../src/naming.ts';

const OUTPUT_DIR = join(import.meta.dirname!, '..', 'output', 'rust-ir');

// 1. Get all named node kinds from the Rust grammar
const allKinds = listNodeKinds('rust');
console.log(`Found ${allKinds.length} Rust node kinds`);

// 2. Generate all files
const result = generate({
	grammar: 'rust',
	nodes: allKinds,
	outputDir: 'src',
});

// 3. Resolve collision-free file names
const fileNames = resolveFileNames(allKinds);

// 4. Write output files
mkdirSync(join(OUTPUT_DIR, 'nodes'), { recursive: true });

// types.ts
writeFileSync(join(OUTPUT_DIR, 'types.ts'), result.types);
console.log('  wrote types.ts');

// fluent.ts
writeFileSync(join(OUTPUT_DIR, 'fluent.ts'), result.fluent);
console.log('  wrote fluent.ts');

// render.ts (scaffold)
writeFileSync(join(OUTPUT_DIR, 'render.ts'), result.renderer);
console.log('  wrote render.ts');

// nodes/*.ts
for (const [kind, source] of result.builders) {
	const fileName = fileNames.get(kind)!;
	writeFileSync(join(OUTPUT_DIR, 'nodes', `${fileName}.ts`), source);
}
console.log(`  wrote ${result.builders.size} node builders`);

// tests/*.ts
mkdirSync(join(OUTPUT_DIR, 'tests'), { recursive: true });
for (const [kind, source] of result.tests) {
	const fileName = fileNames.get(kind)!;
	writeFileSync(join(OUTPUT_DIR, 'tests', `${fileName}.test.ts`), source);
}
console.log(`  wrote ${result.tests.size} test files`);

// index.ts
const indexSource = emitIndex({ grammar: 'rust', nodeKinds: allKinds });
writeFileSync(join(OUTPUT_DIR, 'index.ts'), indexSource);
console.log('  wrote index.ts');

console.log(`\nDone! Output in ${OUTPUT_DIR}`);
