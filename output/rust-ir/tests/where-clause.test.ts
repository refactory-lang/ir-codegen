import { describe, it, expect } from 'vitest';
import { whereClause } from '../src/nodes/where-clause.ts';
import { ir } from '../src/fluent.ts';

describe('where_clause', () => {
  it('should create a where_clause node via factory', () => {
    const node = whereClause({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('where_clause');
  });

  it('should create a where_clause node via fluent API', () => {
    const builder = ir.where_clause(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('where_clause');
  });

  it('should have the correct kind', () => {
    const node = whereClause({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('where_clause');
  });
});
