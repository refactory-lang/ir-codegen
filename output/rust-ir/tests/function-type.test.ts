import { describe, it, expect } from 'vitest';
import { functionType } from '../src/nodes/function-type.ts';
import { ir } from '../src/fluent.ts';

describe('function_type', () => {
  it('should create a function_type node via factory', () => {
    const node = functionType({
			parameters: '' /* TODO */,
    });
    expect(node.kind).toBe('function_type');
  });

  it('should create a function_type node via fluent API', () => {
    const builder = ir.function_type(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('function_type');
  });

  it('should have the correct kind', () => {
    const node = functionType({
			parameters: '' /* TODO */,
    });
    expect(node.kind).toBe('function_type');
  });
});
