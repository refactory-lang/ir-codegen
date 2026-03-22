import { describe, it, expect } from 'vitest';
import { tokenRepetition } from '../src/nodes/token-repetition.ts';
import { ir } from '../src/fluent.ts';

describe('token_repetition', () => {
  it('should create a token_repetition node via factory', () => {
    const node = tokenRepetition({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('token_repetition');
  });

  it('should create a token_repetition node via fluent API', () => {
    const builder = ir.token_repetition(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('token_repetition');
  });

  it('should have the correct kind', () => {
    const node = tokenRepetition({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('token_repetition');
  });
});
