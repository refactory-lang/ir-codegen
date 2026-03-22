/**
 * Emits a `render.ts` scaffold with a switch/case for each node kind.
 * Each case contains a TODO comment for manual implementation.
 */

import type { NodeMeta } from '../grammar-reader.ts';
import { toTypeName, toGrammarTypeName } from '../naming.ts';

export interface EmitRenderScaffoldConfig {
  grammar: string;
  nodes: NodeMeta[];
}

export function emitRenderScaffold(config: EmitRenderScaffoldConfig): string {
  const { grammar, nodes } = config;
  const grammarTypeName = toGrammarTypeName(grammar);
  const grammarPrefix = grammarTypeName.slice(0, -5);
  const unionType = `${grammarPrefix}IrNode`;

  const lines: string[] = [];

  // Import the union type
  lines.push(`import type { ${unionType} } from './types.ts';`);
  lines.push(`import { assertValid } from './validate-fast.ts';`);
  lines.push('');

  // indent helper
  lines.push('/** Indent each line of `text` by `level` tabs. */');
  lines.push('export function indent(text: string, level = 1): string {');
  lines.push(`  const prefix = '\\t'.repeat(level);`);
  lines.push('  return text');
  lines.push("    .split('\\n')");
  lines.push('    .map((line) => (line.trim() ? prefix + line : line))');
  lines.push("    .join('\\n');");
  lines.push('}');
  lines.push('');

  // renderSilent function
  lines.push(`/** Render an IR node to source text (no validation). */`);
  lines.push(`export function renderSilent(node: ${unionType}): string {`);
  lines.push('  switch (node.kind) {');

  for (const nodeMeta of nodes) {
    const typeName = toTypeName(nodeMeta.kind);
    lines.push(`    case '${nodeMeta.kind}': {`);
    lines.push(`      // TODO: implement rendering for ${nodeMeta.kind}`);
    lines.push(`      const _typed = node as unknown as import('./types.ts').${typeName};`);
    lines.push(`      return '';`);
    lines.push('    }');
  }

  lines.push('    default:');
  lines.push('      throw new Error(`Unknown node kind: ${(node as any).kind}`);');
  lines.push('  }');
  lines.push('}');
  lines.push('');

  // render function
  lines.push('/** Render an IR node to source text and validate the output. */');
  lines.push(`export function render(node: ${unionType}): string {`);
  lines.push('  return assertValid(renderSilent(node));');
  lines.push('}');
  lines.push('');

  return lines.join('\n');
}
