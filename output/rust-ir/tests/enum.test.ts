import { describe, it, expect } from 'vitest';
import { enumItem } from '../src/nodes/enum.ts';
import { ir } from '../src/fluent.ts';

describe('enum_item', () => {
  it('should create a enum_item node via factory', () => {
    const node = enumItem({
			body: '' /* TODO */,
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('enum_item');
  });

  it('should create a enum_item node via fluent API', () => {
    const builder = ir.enum_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('enum_item');
  });

  it('should have the correct kind', () => {
    const node = enumItem({
			body: '' /* TODO */,
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('enum_item');
  });
});
