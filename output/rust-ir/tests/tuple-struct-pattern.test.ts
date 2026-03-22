import { describe, it, expect } from 'vitest';
import { tupleStructPattern } from '../src/nodes/tuple-struct-pattern.ts';
import { ir } from '../src/fluent.ts';

describe('tuple_struct_pattern', () => {
  it('should create a tuple_struct_pattern node via factory', () => {
    const node = tupleStructPattern({
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('tuple_struct_pattern');
  });

  it('should create a tuple_struct_pattern node via fluent API', () => {
    const builder = ir.tuple_struct_pattern(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('tuple_struct_pattern');
  });

  it('should have the correct kind', () => {
    const node = tupleStructPattern({
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('tuple_struct_pattern');
  });
});
