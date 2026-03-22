/**
 * Emits a `fluent.ts` file containing an `ir` namespace object
 * that maps short names to builder constructor functions.
 */

import { toShortName, toFileName } from '../naming.ts';

export interface EmitFluentConfig {
  grammar: string;
  nodeKinds: string[];
}

export function emitFluent(config: EmitFluentConfig): string {
  const { nodeKinds } = config;
  const lines: string[] = [];

  // Build import/export info for each node kind
  const entries = nodeKinds.map((kind) => {
    const shortName = toShortName(kind);
    const fileName = toFileName(kind);
    // Namespace key strips trailing underscore (object properties don't need escaping)
    const key = shortName.endsWith('_') ? shortName.slice(0, -1) : shortName;
    return { shortName, fileName, key };
  });

  // --- Imports ---
  for (const entry of entries) {
    lines.push(`import { ${entry.shortName} } from './nodes/${entry.fileName}.ts';`);
  }

  lines.push('');

  // --- Namespace object ---
  lines.push('export const ir = {');

  for (const entry of entries) {
    if (entry.key === entry.shortName) {
      // No aliasing needed — shorthand property
      lines.push(`  ${entry.key},`);
    } else {
      // Key differs from import name — explicit mapping
      lines.push(`  ${entry.key}: ${entry.shortName},`);
    }
  }

  lines.push('};');
  lines.push('');

  return lines.join('\n');
}
