import { describe, it, expect } from 'vitest';
import { referenceType } from '../src/nodes/reference-type.ts';
import { ir } from '../src/fluent.ts';

describe('reference_type', () => {
  it('should create a reference_type node via factory', () => {
    const node = referenceType({
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('reference_type');
  });

  it('should create a reference_type node via fluent API', () => {
    const builder = ir.reference_type(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('reference_type');
  });

  it('should have the correct kind', () => {
    const node = referenceType({
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('reference_type');
  });
});
