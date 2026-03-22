import { describe, it, expect } from 'vitest';
import { boundedType } from '../src/nodes/bounded-type.ts';
import { ir } from '../src/fluent.ts';

describe('bounded_type', () => {
  it('should create a bounded_type node via factory', () => {
    const node = boundedType({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('bounded_type');
  });

  it('should create a bounded_type node via fluent API', () => {
    const builder = ir.bounded_type(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('bounded_type');
  });

  it('should have the correct kind', () => {
    const node = boundedType({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('bounded_type');
  });
});
