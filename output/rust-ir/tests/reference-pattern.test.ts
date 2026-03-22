import { describe, it, expect } from 'vitest';
import { referencePattern } from '../src/nodes/reference-pattern.ts';
import { ir } from '../src/fluent.ts';

describe('reference_pattern', () => {
  it('should create a reference_pattern node via factory', () => {
    const node = referencePattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('reference_pattern');
  });

  it('should create a reference_pattern node via fluent API', () => {
    const builder = ir.reference_pattern(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('reference_pattern');
  });

  it('should have the correct kind', () => {
    const node = referencePattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('reference_pattern');
  });
});
