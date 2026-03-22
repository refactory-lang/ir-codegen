import { describe, it, expect } from 'vitest';
import { functionItem } from '../src/nodes/function.ts';
import { ir } from '../src/fluent.ts';

describe('function_item', () => {
  it('should create a function_item node via factory', () => {
    const node = functionItem({
			body: '' /* TODO */,
			name: '' /* TODO */,
			parameters: '' /* TODO */,
    });
    expect(node.kind).toBe('function_item');
  });

  it('should create a function_item node via fluent API', () => {
    const builder = ir.fn(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('function_item');
  });

  it('should have the correct kind', () => {
    const node = functionItem({
			body: '' /* TODO */,
			name: '' /* TODO */,
			parameters: '' /* TODO */,
    });
    expect(node.kind).toBe('function_item');
  });
});
