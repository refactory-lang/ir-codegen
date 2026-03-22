import { describe, it, expect } from 'vitest';
import { arrayType } from '../src/nodes/array-type.ts';
import { ir } from '../src/fluent.ts';

describe('array_type', () => {
  it('should create a array_type node via factory', () => {
    const node = arrayType({
			element: '' /* TODO */,
    });
    expect(node.kind).toBe('array_type');
  });

  it('should create a array_type node via fluent API', () => {
    const builder = ir.array_type(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('array_type');
  });

  it('should have the correct kind', () => {
    const node = arrayType({
			element: '' /* TODO */,
    });
    expect(node.kind).toBe('array_type');
  });
});
