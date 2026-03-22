import { describe, it, expect } from 'vitest';
import { ifExpression } from '../src/nodes/if.ts';
import { ir } from '../src/fluent.ts';

describe('if_expression', () => {
  it('should create a if_expression node via factory', () => {
    const node = ifExpression({
			condition: '' /* TODO */,
			consequence: '' /* TODO */,
    });
    expect(node.kind).toBe('if_expression');
  });

  it('should create a if_expression node via fluent API', () => {
    const builder = ir.if_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('if_expression');
  });

  it('should have the correct kind', () => {
    const node = ifExpression({
			condition: '' /* TODO */,
			consequence: '' /* TODO */,
    });
    expect(node.kind).toBe('if_expression');
  });
});
