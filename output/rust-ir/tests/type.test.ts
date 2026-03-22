import { describe, it, expect } from 'vitest';
import { typeItem } from '../src/nodes/type.ts';
import { ir } from '../src/fluent.ts';

describe('type_item', () => {
  it('should create a type_item node via factory', () => {
    const node = typeItem({
			name: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('type_item');
  });

  it('should create a type_item node via fluent API', () => {
    const builder = ir.type_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('type_item');
  });

  it('should have the correct kind', () => {
    const node = typeItem({
			name: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('type_item');
  });
});
