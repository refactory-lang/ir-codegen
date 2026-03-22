import { describe, it, expect } from 'vitest';
import { structItem } from '../src/nodes/struct.ts';
import { ir } from '../src/fluent.ts';

describe('struct_item', () => {
  it('should create a struct_item node via factory', () => {
    const node = structItem({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('struct_item');
  });

  it('should create a struct_item node via fluent API', () => {
    const builder = ir.struct_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('struct_item');
  });

  it('should have the correct kind', () => {
    const node = structItem({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('struct_item');
  });
});
