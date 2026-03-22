import { describe, it, expect } from 'vitest';
import { stringLiteral } from '../src/nodes/string-literal.ts';
import { ir } from '../src/fluent.ts';

describe('string_literal', () => {
  it('should create a string_literal node via factory', () => {
    const node = stringLiteral({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('string_literal');
  });

  it('should create a string_literal node via fluent API', () => {
    const builder = ir.string_literal(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('string_literal');
  });

  it('should have the correct kind', () => {
    const node = stringLiteral({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('string_literal');
  });
});
