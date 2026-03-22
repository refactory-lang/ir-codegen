import { describe, it, expect } from 'vitest';
import { matchPattern } from '../src/nodes/match-pattern.ts';
import { ir } from '../src/fluent.ts';

describe('match_pattern', () => {
  it('should create a match_pattern node via factory', () => {
    const node = matchPattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('match_pattern');
  });

  it('should create a match_pattern node via fluent API', () => {
    const builder = ir.match_pattern(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('match_pattern');
  });

  it('should have the correct kind', () => {
    const node = matchPattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('match_pattern');
  });
});
