import { describe, it, expect } from 'vitest';
import { slicePattern } from '../src/nodes/slice-pattern.ts';
import { ir } from '../src/fluent.ts';

describe('slice_pattern', () => {
  it('should create a slice_pattern node via factory', () => {
    const node = slicePattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('slice_pattern');
  });

  it('should create a slice_pattern node via fluent API', () => {
    const builder = ir.slice_pattern(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('slice_pattern');
  });

  it('should have the correct kind', () => {
    const node = slicePattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('slice_pattern');
  });
});
