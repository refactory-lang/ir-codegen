import { describe, it, expect } from 'vitest';
import { rawStringLiteral } from '../src/nodes/raw-string-literal.ts';
import { ir } from '../src/fluent.ts';

describe('raw_string_literal', () => {
  it('should create a raw_string_literal node via factory', () => {
    const node = rawStringLiteral({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('raw_string_literal');
  });

  it('should create a raw_string_literal node via fluent API', () => {
    const builder = ir.raw_string_literal(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('raw_string_literal');
  });

  it('should have the correct kind', () => {
    const node = rawStringLiteral({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('raw_string_literal');
  });
});
