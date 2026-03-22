import { describe, it, expect } from 'vitest';
import { mutPattern } from '../src/nodes/mut-pattern.ts';
import { ir } from '../src/fluent.ts';

describe('mut_pattern', () => {
  it('should create a mut_pattern node via factory', () => {
    const node = mutPattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('mut_pattern');
  });

  it('should create a mut_pattern node via fluent API', () => {
    const builder = ir.mut_pattern(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('mut_pattern');
  });

  it('should have the correct kind', () => {
    const node = mutPattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('mut_pattern');
  });
});
