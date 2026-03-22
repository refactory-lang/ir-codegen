import { describe, it, expect } from 'vitest';
import { breakExpression } from '../src/nodes/break.ts';
import { ir } from '../src/fluent.ts';

describe('break_expression', () => {
  it('should create a break_expression node via factory', () => {
    const node = breakExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('break_expression');
  });

  it('should create a break_expression node via fluent API', () => {
    const builder = ir.break_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('break_expression');
  });

  it('should have the correct kind', () => {
    const node = breakExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('break_expression');
  });
});
