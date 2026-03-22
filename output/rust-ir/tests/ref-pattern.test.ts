import { describe, it, expect } from 'vitest';
import { refPattern } from '../src/nodes/ref-pattern.ts';
import { ir } from '../src/fluent.ts';

describe('ref_pattern', () => {
  it('should create a ref_pattern node via factory', () => {
    const node = refPattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('ref_pattern');
  });

  it('should create a ref_pattern node via fluent API', () => {
    const builder = ir.ref_pattern(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('ref_pattern');
  });

  it('should have the correct kind', () => {
    const node = refPattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('ref_pattern');
  });
});
