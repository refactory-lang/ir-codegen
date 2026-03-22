import { describe, it, expect } from 'vitest';
import { bracketedType } from '../src/nodes/bracketed-type.ts';
import { ir } from '../src/fluent.ts';

describe('bracketed_type', () => {
  it('should create a bracketed_type node via factory', () => {
    const node = bracketedType({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('bracketed_type');
  });

  it('should create a bracketed_type node via fluent API', () => {
    const builder = ir.bracketed_type(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('bracketed_type');
  });

  it('should have the correct kind', () => {
    const node = bracketedType({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('bracketed_type');
  });
});
