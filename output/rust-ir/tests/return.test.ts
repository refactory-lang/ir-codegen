import { describe, it, expect } from 'vitest';
import { returnExpression } from '../src/nodes/return.ts';
import { ir } from '../src/fluent.ts';

describe('return_expression', () => {
  it('should create a return_expression node via factory', () => {
    const node = returnExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('return_expression');
  });

  it('should create a return_expression node via fluent API', () => {
    const builder = ir.return_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('return_expression');
  });

  it('should have the correct kind', () => {
    const node = returnExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('return_expression');
  });
});
