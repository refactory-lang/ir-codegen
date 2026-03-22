import { describe, it, expect } from 'vitest';
import { forExpression } from '../src/nodes/for.ts';
import { ir } from '../src/fluent.ts';

describe('for_expression', () => {
  it('should create a for_expression node via factory', () => {
    const node = forExpression({
			body: '' /* TODO */,
			pattern: '' /* TODO */,
			value: '' /* TODO */,
    });
    expect(node.kind).toBe('for_expression');
  });

  it('should create a for_expression node via fluent API', () => {
    const builder = ir.for_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('for_expression');
  });

  it('should have the correct kind', () => {
    const node = forExpression({
			body: '' /* TODO */,
			pattern: '' /* TODO */,
			value: '' /* TODO */,
    });
    expect(node.kind).toBe('for_expression');
  });
});
