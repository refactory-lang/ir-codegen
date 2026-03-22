import { describe, it, expect } from 'vitest';
import { implItem } from '../src/nodes/impl.ts';
import { ir } from '../src/fluent.ts';

describe('impl_item', () => {
  it('should create a impl_item node via factory', () => {
    const node = implItem({
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('impl_item');
  });

  it('should create a impl_item node via fluent API', () => {
    const builder = ir.impl(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('impl_item');
  });

  it('should have the correct kind', () => {
    const node = implItem({
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('impl_item');
  });
});
