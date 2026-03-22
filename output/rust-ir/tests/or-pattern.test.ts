import { describe, it, expect } from 'vitest';
import { orPattern } from '../src/nodes/or-pattern.ts';
import { ir } from '../src/fluent.ts';

describe('or_pattern', () => {
  it('should create a or_pattern node via factory', () => {
    const node = orPattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('or_pattern');
  });

  it('should create a or_pattern node via fluent API', () => {
    const builder = ir.or_pattern(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('or_pattern');
  });

  it('should have the correct kind', () => {
    const node = orPattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('or_pattern');
  });
});
