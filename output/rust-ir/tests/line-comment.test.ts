import { describe, it, expect } from 'vitest';
import { lineComment } from '../src/nodes/line-comment.ts';
import { ir } from '../src/fluent.ts';

describe('line_comment', () => {
  it('should create a line_comment node via factory', () => {
    const node = lineComment({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('line_comment');
  });

  it('should create a line_comment node via fluent API', () => {
    const builder = ir.line_comment(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('line_comment');
  });

  it('should have the correct kind', () => {
    const node = lineComment({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('line_comment');
  });
});
