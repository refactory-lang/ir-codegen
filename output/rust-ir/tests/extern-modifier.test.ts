import { describe, it, expect } from 'vitest';
import { externModifier } from '../src/nodes/extern-modifier.ts';
import { ir } from '../src/fluent.ts';

describe('extern_modifier', () => {
  it('should create a extern_modifier node via factory', () => {
    const node = externModifier({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('extern_modifier');
  });

  it('should create a extern_modifier node via fluent API', () => {
    const builder = ir.extern_modifier(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('extern_modifier');
  });

  it('should have the correct kind', () => {
    const node = externModifier({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('extern_modifier');
  });
});
