import { describe, it, expect } from 'vitest';
import { elseClause } from '../src/nodes/else-clause.ts';
import { ir } from '../src/fluent.ts';

describe('else_clause', () => {
  it('should create a else_clause node via factory', () => {
    const node = elseClause({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('else_clause');
  });

  it('should create a else_clause node via fluent API', () => {
    const builder = ir.else_clause(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('else_clause');
  });

  it('should have the correct kind', () => {
    const node = elseClause({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('else_clause');
  });
});
