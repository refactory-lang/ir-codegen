import { describe, it, expect } from 'vitest';
import { tokenRepetitionPattern } from '../src/nodes/token-repetition-pattern.ts';
import { ir } from '../src/fluent.ts';

describe('token_repetition_pattern', () => {
  it('should create a token_repetition_pattern node via factory', () => {
    const node = tokenRepetitionPattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('token_repetition_pattern');
  });

  it('should create a token_repetition_pattern node via fluent API', () => {
    const builder = ir.token_repetition_pattern(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('token_repetition_pattern');
  });

  it('should have the correct kind', () => {
    const node = tokenRepetitionPattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('token_repetition_pattern');
  });
});
