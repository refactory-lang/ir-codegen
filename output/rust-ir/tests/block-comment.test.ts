import { describe, it, expect } from 'vitest';
import { blockComment } from '../src/nodes/block-comment.ts';
import { ir } from '../src/fluent.ts';

describe('block_comment', () => {
  it('should create a block_comment node via factory', () => {
    const node = blockComment({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('block_comment');
  });

  it('should create a block_comment node via fluent API', () => {
    const builder = ir.block_comment(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('block_comment');
  });

  it('should have the correct kind', () => {
    const node = blockComment({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('block_comment');
  });
});
