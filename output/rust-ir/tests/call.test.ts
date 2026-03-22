import { describe, it, expect } from 'vitest';
import { callExpression } from '../src/nodes/call.ts';
import { ir } from '../src/fluent.ts';

describe('call_expression', () => {
  it('should create a call_expression node via factory', () => {
    const node = callExpression({
			arguments: '' /* TODO */,
			function: '' /* TODO */,
    });
    expect(node.kind).toBe('call_expression');
  });

  it('should create a call_expression node via fluent API', () => {
    const builder = ir.call(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('call_expression');
  });

  it('should have the correct kind', () => {
    const node = callExpression({
			arguments: '' /* TODO */,
			function: '' /* TODO */,
    });
    expect(node.kind).toBe('call_expression');
  });
});
