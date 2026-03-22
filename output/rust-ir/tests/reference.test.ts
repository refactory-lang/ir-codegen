import { describe, it, expect } from 'vitest';
import { referenceExpression } from '../src/nodes/reference.ts';
import { ir } from '../src/fluent.ts';

describe('reference_expression', () => {
  it('should create a reference_expression node via factory', () => {
    const node = referenceExpression({
			value: '' /* TODO */,
    });
    expect(node.kind).toBe('reference_expression');
  });

  it('should create a reference_expression node via fluent API', () => {
    const builder = ir.reference(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('reference_expression');
  });

  it('should have the correct kind', () => {
    const node = referenceExpression({
			value: '' /* TODO */,
    });
    expect(node.kind).toBe('reference_expression');
  });
});
