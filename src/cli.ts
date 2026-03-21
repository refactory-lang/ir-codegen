#!/usr/bin/env node
/**
 * CLI entry point for ir-codegen.
 *
 * Usage:
 *   ir-codegen --grammar rust --nodes struct_item,function_item --output src/generated/
 *   ir-codegen --config ir-codegen.json
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { generate } from './index.js';
import type { CodegenConfig } from './index.js';

function parseArgs(args: string[]): CodegenConfig {
	const config: Partial<CodegenConfig> = {};

	for (let i = 0; i < args.length; i++) {
		const arg = args[i];
		const next = args[i + 1];

		switch (arg) {
			case '--grammar':
				config.grammar = next;
				i++;
				break;
			case '--nodes':
				config.nodes = next?.split(',') ?? [];
				i++;
				break;
			case '--output':
				config.outputDir = next;
				i++;
				break;
			case '--config': {
				if (!next) {
					console.error('--config requires a path argument');
					process.exit(1);
				}
				let raw: string;
				try {
					raw = readFileSync(next, 'utf-8');
				} catch (err) {
					console.error(`Failed to read config file at "${next}": ${err instanceof Error ? err.message : String(err)}`);
					process.exit(1);
				}

				let parsed: unknown;
				try {
					parsed = JSON.parse(raw);
				} catch (err) {
					console.error(`Failed to parse JSON in config file "${next}": ${err instanceof Error ? err.message : String(err)}`);
					process.exit(1);
				}

				if (!parsed || typeof parsed !== 'object') {
					console.error('Config file must contain a JSON object with grammar, nodes, and outputDir fields.');
					process.exit(1);
				}

				const cfg = parsed as Partial<CodegenConfig>;

				if (
					typeof cfg.grammar !== 'string' ||
					!Array.isArray(cfg.nodes) ||
					typeof cfg.outputDir !== 'string'
				) {
					console.error('Invalid config file: expected "grammar" (string), "nodes" (string[]), and "outputDir" (string).');
					process.exit(1);
				}

				return cfg as CodegenConfig;
			}
			case '--help':
				console.log(`
ir-codegen — Generate typed IR builders from tree-sitter grammars

Usage:
  ir-codegen --grammar <lang> --nodes <kind1,kind2,...> --output <dir>
  ir-codegen --config <path>

Options:
  --grammar    Grammar language (e.g., rust, typescript, python)
  --nodes      Comma-separated list of node kinds to generate builders for
  --output     Output directory for generated files
  --config     Path to JSON config file
  --help       Show this help message
`);
				process.exit(0);
				break;
			default:
				console.error(`Unknown argument: ${arg}`);
				process.exit(1);
		}
	}

	if (!config.grammar || !config.nodes || !config.outputDir) {
		console.error('Missing required arguments. Use --help for usage.');
		process.exit(1);
	}

	return config as CodegenConfig;
}

const config = parseArgs(process.argv.slice(2));
const outputDir = config.outputDir;
if (!outputDir) {
	console.error('Missing required --output argument. Use --help for usage.');
	process.exit(1);
}

const result = generate(config);

mkdirSync(outputDir, { recursive: true });

for (const [kind, source] of result.builders) {
	const fileName = kind.replace(/_/g, '-');
	writeFileSync(join(outputDir, `${fileName}.ts`), source);
}

writeFileSync(join(outputDir, 'render.ts'), result.renderer);
writeFileSync(join(outputDir, 'types.ts'), result.types);

for (const [kind, source] of result.tests) {
	const fileName = kind.replace(/_/g, '-');
	writeFileSync(join(outputDir, `${fileName}.test.ts`), source);
}

console.log(`Generated ${result.builders.size} builders`);
console.log(`Generated renderer with ${result.builders.size} cases`);
console.log(`Generated ${result.tests.size} test files`);
console.log(`Output written to ${outputDir}`);
