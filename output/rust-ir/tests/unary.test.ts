import { describe, it, expect } from 'vitest';
import { unaryExpression } from '../src/nodes/unary.ts';
import { ir } from '../src/fluent.ts';

describe('unary_expression', () => {
  it('should create a unary_expression node via factory', () => {
    const node = unaryExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('unary_expression');
  });

  it('should create a unary_expression node via fluent API', () => {
    const builder = ir.unary(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('unary_expression');
  });

  it('should have the correct kind', () => {
    const node = unaryExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('unary_expression');
  });
});
