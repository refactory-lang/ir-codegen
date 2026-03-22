import { describe, it, expect } from 'vitest';
import { indexExpression } from '../src/nodes/index.ts';
import { ir } from '../src/fluent.ts';

describe('index_expression', () => {
  it('should create a index_expression node via factory', () => {
    const node = indexExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('index_expression');
  });

  it('should create a index_expression node via fluent API', () => {
    const builder = ir.index(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('index_expression');
  });

  it('should have the correct kind', () => {
    const node = indexExpression({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('index_expression');
  });
});
