import { describe, it, expect } from 'vitest';
import { binaryExpression } from '../src/nodes/binary.ts';
import { ir } from '../src/fluent.ts';

describe('binary_expression', () => {
  it('should create a binary_expression node via factory', () => {
    const node = binaryExpression({
			left: '' /* TODO */,
			operator: '' /* TODO */,
			right: '' /* TODO */,
    });
    expect(node.kind).toBe('binary_expression');
  });

  it('should create a binary_expression node via fluent API', () => {
    const builder = ir.binary(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('binary_expression');
  });

  it('should have the correct kind', () => {
    const node = binaryExpression({
			left: '' /* TODO */,
			operator: '' /* TODO */,
			right: '' /* TODO */,
    });
    expect(node.kind).toBe('binary_expression');
  });
});
