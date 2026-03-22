import { describe, it, expect } from 'vitest';
import { parenthesizedExpression } from '../src/nodes/parenthesized.ts';
import { ir } from '../src/fluent.ts';

describe('parenthesized_expression', () => {
  it('should create a parenthesized_expression node via factory', () => {
    const node = parenthesizedExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('parenthesized_expression');
  });

  it('should create a parenthesized_expression node via fluent API', () => {
    const builder = ir.parenthesized(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('parenthesized_expression');
  });

  it('should have the correct kind', () => {
    const node = parenthesizedExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('parenthesized_expression');
  });
});
