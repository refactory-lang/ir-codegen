import { describe, it, expect } from 'vitest';
import { tuplePattern } from '../src/nodes/tuple-pattern.ts';
import { ir } from '../src/fluent.ts';

describe('tuple_pattern', () => {
  it('should create a tuple_pattern node via factory', () => {
    const node = tuplePattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('tuple_pattern');
  });

  it('should create a tuple_pattern node via fluent API', () => {
    const builder = ir.tuple_pattern(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('tuple_pattern');
  });

  it('should have the correct kind', () => {
    const node = tuplePattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('tuple_pattern');
  });
});
