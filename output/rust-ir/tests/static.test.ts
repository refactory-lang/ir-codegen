import { describe, it, expect } from 'vitest';
import { staticItem } from '../src/nodes/static.ts';
import { ir } from '../src/fluent.ts';

describe('static_item', () => {
  it('should create a static_item node via factory', () => {
    const node = staticItem({
			name: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('static_item');
  });

  it('should create a static_item node via fluent API', () => {
    const builder = ir.static_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('static_item');
  });

  it('should have the correct kind', () => {
    const node = staticItem({
			name: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('static_item');
  });
});
