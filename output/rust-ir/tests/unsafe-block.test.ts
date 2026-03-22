import { describe, it, expect } from 'vitest';
import { unsafeBlock } from '../src/nodes/unsafe-block.ts';
import { ir } from '../src/fluent.ts';

describe('unsafe_block', () => {
  it('should create a unsafe_block node via factory', () => {
    const node = unsafeBlock({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('unsafe_block');
  });

  it('should create a unsafe_block node via fluent API', () => {
    const builder = ir.unsafe_block(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('unsafe_block');
  });

  it('should have the correct kind', () => {
    const node = unsafeBlock({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('unsafe_block');
  });
});
