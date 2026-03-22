import { describe, it, expect } from 'vitest';
import { fieldExpression } from '../src/nodes/field.ts';
import { ir } from '../src/fluent.ts';

describe('field_expression', () => {
  it('should create a field_expression node via factory', () => {
    const node = fieldExpression({
			field: '' /* TODO */,
			value: '' /* TODO */,
    });
    expect(node.kind).toBe('field_expression');
  });

  it('should create a field_expression node via fluent API', () => {
    const builder = ir.field(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('field_expression');
  });

  it('should have the correct kind', () => {
    const node = fieldExpression({
			field: '' /* TODO */,
			value: '' /* TODO */,
    });
    expect(node.kind).toBe('field_expression');
  });
});
