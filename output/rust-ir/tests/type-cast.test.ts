import { describe, it, expect } from 'vitest';
import { typeCastExpression } from '../src/nodes/type-cast.ts';
import { ir } from '../src/fluent.ts';

describe('type_cast_expression', () => {
  it('should create a type_cast_expression node via factory', () => {
    const node = typeCastExpression({
			type: '' /* TODO */,
			value: '' /* TODO */,
    });
    expect(node.kind).toBe('type_cast_expression');
  });

  it('should create a type_cast_expression node via fluent API', () => {
    const builder = ir.type_cast(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('type_cast_expression');
  });

  it('should have the correct kind', () => {
    const node = typeCastExpression({
			type: '' /* TODO */,
			value: '' /* TODO */,
    });
    expect(node.kind).toBe('type_cast_expression');
  });
});
