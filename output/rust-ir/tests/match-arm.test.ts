import { describe, it, expect } from 'vitest';
import { matchArm } from '../src/nodes/match-arm.ts';
import { ir } from '../src/fluent.ts';

describe('match_arm', () => {
  it('should create a match_arm node via factory', () => {
    const node = matchArm({
			pattern: '' /* TODO */,
			value: '' /* TODO */,
    });
    expect(node.kind).toBe('match_arm');
  });

  it('should create a match_arm node via fluent API', () => {
    const builder = ir.match_arm(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('match_arm');
  });

  it('should have the correct kind', () => {
    const node = matchArm({
			pattern: '' /* TODO */,
			value: '' /* TODO */,
    });
    expect(node.kind).toBe('match_arm');
  });
});
