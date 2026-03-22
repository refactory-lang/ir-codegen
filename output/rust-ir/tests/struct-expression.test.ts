import { describe, it, expect } from 'vitest';
import { structExpression } from '../src/nodes/struct.ts';
import { ir } from '../src/fluent.ts';

describe('struct_expression', () => {
  it('should create a struct_expression node via factory', () => {
    const node = structExpression({
			body: '' /* TODO */,
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('struct_expression');
  });

  it('should create a struct_expression node via fluent API', () => {
    const builder = ir.struct_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('struct_expression');
  });

  it('should have the correct kind', () => {
    const node = structExpression({
			body: '' /* TODO */,
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('struct_expression');
  });
});
