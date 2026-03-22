import { describe, it, expect } from 'vitest';
import { tupleType } from '../src/nodes/tuple-type.ts';
import { ir } from '../src/fluent.ts';

describe('tuple_type', () => {
  it('should create a tuple_type node via factory', () => {
    const node = tupleType({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('tuple_type');
  });

  it('should create a tuple_type node via fluent API', () => {
    const builder = ir.tuple_type(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('tuple_type');
  });

  it('should have the correct kind', () => {
    const node = tupleType({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('tuple_type');
  });
});
