import { describe, it, expect } from 'vitest';
import { unionItem } from '../src/nodes/union.ts';
import { ir } from '../src/fluent.ts';

describe('union_item', () => {
  it('should create a union_item node via factory', () => {
    const node = unionItem({
			body: '' /* TODO */,
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('union_item');
  });

  it('should create a union_item node via fluent API', () => {
    const builder = ir.union(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('union_item');
  });

  it('should have the correct kind', () => {
    const node = unionItem({
			body: '' /* TODO */,
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('union_item');
  });
});
