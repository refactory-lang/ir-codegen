import { describe, it, expect } from 'vitest';
import { macroDefinition } from '../src/nodes/macro-definition.ts';
import { ir } from '../src/fluent.ts';

describe('macro_definition', () => {
  it('should create a macro_definition node via factory', () => {
    const node = macroDefinition({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('macro_definition');
  });

  it('should create a macro_definition node via fluent API', () => {
    const builder = ir.macro_definition(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('macro_definition');
  });

  it('should have the correct kind', () => {
    const node = macroDefinition({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('macro_definition');
  });
});
