import { describe, it, expect } from 'vitest';
import { closureExpression } from '../src/nodes/closure.ts';
import { ir } from '../src/fluent.ts';

describe('closure_expression', () => {
  it('should create a closure_expression node via factory', () => {
    const node = closureExpression({
			body: '' /* TODO */,
			parameters: '' /* TODO */,
    });
    expect(node.kind).toBe('closure_expression');
  });

  it('should create a closure_expression node via fluent API', () => {
    const builder = ir.closure(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('closure_expression');
  });

  it('should have the correct kind', () => {
    const node = closureExpression({
			body: '' /* TODO */,
			parameters: '' /* TODO */,
    });
    expect(node.kind).toBe('closure_expression');
  });
});
