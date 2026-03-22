import { describe, it, expect } from 'vitest';
import { matchBlock } from '../src/nodes/match-block.ts';
import { ir } from '../src/fluent.ts';

describe('match_block', () => {
  it('should create a match_block node via factory', () => {
    const node = matchBlock({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('match_block');
  });

  it('should create a match_block node via fluent API', () => {
    const builder = ir.match_block(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('match_block');
  });

  it('should have the correct kind', () => {
    const node = matchBlock({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('match_block');
  });
});
