import { describe, it, expect } from 'vitest';
import { rangePattern } from '../src/nodes/range-pattern.ts';
import { ir } from '../src/fluent.ts';

describe('range_pattern', () => {
  it('should create a range_pattern node via factory', () => {
    const node = rangePattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('range_pattern');
  });

  it('should create a range_pattern node via fluent API', () => {
    const builder = ir.range_pattern(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('range_pattern');
  });

  it('should have the correct kind', () => {
    const node = rangePattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('range_pattern');
  });
});
