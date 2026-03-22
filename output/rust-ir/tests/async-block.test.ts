import { describe, it, expect } from 'vitest';
import { asyncBlock } from '../src/nodes/async-block.ts';
import { ir } from '../src/fluent.ts';

describe('async_block', () => {
  it('should create a async_block node via factory', () => {
    const node = asyncBlock({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('async_block');
  });

  it('should create a async_block node via fluent API', () => {
    const builder = ir.async_block(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('async_block');
  });

  it('should have the correct kind', () => {
    const node = asyncBlock({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('async_block');
  });
});
