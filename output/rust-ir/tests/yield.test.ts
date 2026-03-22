import { describe, it, expect } from 'vitest';
import { yieldExpression } from '../src/nodes/yield.ts';
import { ir } from '../src/fluent.ts';

describe('yield_expression', () => {
  it('should create a yield_expression node via factory', () => {
    const node = yieldExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('yield_expression');
  });

  it('should create a yield_expression node via fluent API', () => {
    const builder = ir.yield_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('yield_expression');
  });

  it('should have the correct kind', () => {
    const node = yieldExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('yield_expression');
  });
});
