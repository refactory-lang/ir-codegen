import { describe, it, expect } from 'vitest';
import { awaitExpression } from '../src/nodes/await.ts';
import { ir } from '../src/fluent.ts';

describe('await_expression', () => {
  it('should create a await_expression node via factory', () => {
    const node = awaitExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('await_expression');
  });

  it('should create a await_expression node via fluent API', () => {
    const builder = ir.await_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('await_expression');
  });

  it('should have the correct kind', () => {
    const node = awaitExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('await_expression');
  });
});
