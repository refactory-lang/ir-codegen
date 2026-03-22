import { describe, it, expect } from 'vitest';
import { capturedPattern } from '../src/nodes/captured-pattern.ts';
import { ir } from '../src/fluent.ts';

describe('captured_pattern', () => {
  it('should create a captured_pattern node via factory', () => {
    const node = capturedPattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('captured_pattern');
  });

  it('should create a captured_pattern node via fluent API', () => {
    const builder = ir.captured_pattern(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('captured_pattern');
  });

  it('should have the correct kind', () => {
    const node = capturedPattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('captured_pattern');
  });
});
