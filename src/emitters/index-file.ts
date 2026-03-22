/**
 * Emits an `index.ts` file that re-exports all public API surface:
 * types, factory functions, render, validate, and fluent namespace.
 */

import { toFactoryName, toFileName } from '../naming.ts';

export interface EmitIndexConfig {
  grammar: string;
  nodeKinds: string[];
}

export function emitIndex(config: EmitIndexConfig): string {
  const { nodeKinds } = config;
  const lines: string[] = [];

  // --- Re-export all types ---
  lines.push("export * from './types.ts';");
  lines.push('');

  // --- Re-export render ---
  lines.push("export { render, renderSilent } from './render.ts';");
  lines.push('');

  // --- Re-export validate ---
  lines.push("export { validateFast, assertValid } from './validate-fast.ts';");
  lines.push("export { validate } from './validate.ts';");
  lines.push('');

  // --- Re-export each factory function from its builder file ---
  for (const kind of nodeKinds) {
    const factoryName = toFactoryName(kind);
    const fileName = toFileName(kind);
    lines.push(`export { ${factoryName} } from './nodes/${fileName}.ts';`);
  }
  lines.push('');

  // --- Re-export fluent namespace ---
  lines.push("export { ir } from './fluent.ts';");
  lines.push('');

  return lines.join('\n');
}
