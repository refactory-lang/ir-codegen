import { describe, it, expect } from 'vitest';
import { constItem } from '../src/nodes/const.ts';
import { ir } from '../src/fluent.ts';

describe('const_item', () => {
  it('should create a const_item node via factory', () => {
    const node = constItem({
			name: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('const_item');
  });

  it('should create a const_item node via fluent API', () => {
    const builder = ir.const_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('const_item');
  });

  it('should have the correct kind', () => {
    const node = constItem({
			name: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('const_item');
  });
});
