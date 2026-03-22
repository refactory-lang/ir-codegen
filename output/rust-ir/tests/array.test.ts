import { describe, it, expect } from 'vitest';
import { arrayExpression } from '../src/nodes/array.ts';
import { ir } from '../src/fluent.ts';

describe('array_expression', () => {
  it('should create a array_expression node via factory', () => {
    const node = arrayExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('array_expression');
  });

  it('should create a array_expression node via fluent API', () => {
    const builder = ir.array(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('array_expression');
  });

  it('should have the correct kind', () => {
    const node = arrayExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('array_expression');
  });
});
