import { describe, it, expect } from 'vitest';
import { tupleExpression } from '../src/nodes/tuple.ts';
import { ir } from '../src/fluent.ts';

describe('tuple_expression', () => {
  it('should create a tuple_expression node via factory', () => {
    const node = tupleExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('tuple_expression');
  });

  it('should create a tuple_expression node via fluent API', () => {
    const builder = ir.tuple(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('tuple_expression');
  });

  it('should have the correct kind', () => {
    const node = tupleExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('tuple_expression');
  });
});
