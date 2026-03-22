import { describe, it, expect } from 'vitest';
import { useAsClause } from '../src/nodes/use-as-clause.ts';
import { ir } from '../src/fluent.ts';

describe('use_as_clause', () => {
  it('should create a use_as_clause node via factory', () => {
    const node = useAsClause({
			alias: '' /* TODO */,
			path: '' /* TODO */,
    });
    expect(node.kind).toBe('use_as_clause');
  });

  it('should create a use_as_clause node via fluent API', () => {
    const builder = ir.use_as_clause(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('use_as_clause');
  });

  it('should have the correct kind', () => {
    const node = useAsClause({
			alias: '' /* TODO */,
			path: '' /* TODO */,
    });
    expect(node.kind).toBe('use_as_clause');
  });
});
