import { describe, it, expect } from 'vitest';
import { negativeLiteral } from '../src/nodes/negative-literal.ts';
import { ir } from '../src/fluent.ts';

describe('negative_literal', () => {
  it('should create a negative_literal node via factory', () => {
    const node = negativeLiteral({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('negative_literal');
  });

  it('should create a negative_literal node via fluent API', () => {
    const builder = ir.negative_literal(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('negative_literal');
  });

  it('should have the correct kind', () => {
    const node = negativeLiteral({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('negative_literal');
  });
});
