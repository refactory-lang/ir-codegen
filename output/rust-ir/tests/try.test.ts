import { describe, it, expect } from 'vitest';
import { tryExpression } from '../src/nodes/try.ts';
import { ir } from '../src/fluent.ts';

describe('try_expression', () => {
  it('should create a try_expression node via factory', () => {
    const node = tryExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('try_expression');
  });

  it('should create a try_expression node via fluent API', () => {
    const builder = ir.try_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('try_expression');
  });

  it('should have the correct kind', () => {
    const node = tryExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('try_expression');
  });
});
