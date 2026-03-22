import { describe, it, expect } from 'vitest';
import { continueExpression } from '../src/nodes/continue.ts';
import { ir } from '../src/fluent.ts';

describe('continue_expression', () => {
  it('should create a continue_expression node via factory', () => {
    const node = continueExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('continue_expression');
  });

  it('should create a continue_expression node via fluent API', () => {
    const builder = ir.continue_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('continue_expression');
  });

  it('should have the correct kind', () => {
    const node = continueExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('continue_expression');
  });
});
