import { describe, it, expect } from 'vitest';
import { rangeExpression } from '../src/nodes/range.ts';
import { ir } from '../src/fluent.ts';

describe('range_expression', () => {
  it('should create a range_expression node via factory', () => {
    const node = rangeExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('range_expression');
  });

  it('should create a range_expression node via fluent API', () => {
    const builder = ir.range(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('range_expression');
  });

  it('should have the correct kind', () => {
    const node = rangeExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('range_expression');
  });
});
