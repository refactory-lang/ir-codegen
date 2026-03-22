import { describe, it, expect } from 'vitest';
import { wherePredicate } from '../src/nodes/where-predicate.ts';
import { ir } from '../src/fluent.ts';

describe('where_predicate', () => {
  it('should create a where_predicate node via factory', () => {
    const node = wherePredicate({
			bounds: '' /* TODO */,
			left: '' /* TODO */,
    });
    expect(node.kind).toBe('where_predicate');
  });

  it('should create a where_predicate node via fluent API', () => {
    const builder = ir.where_predicate(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('where_predicate');
  });

  it('should have the correct kind', () => {
    const node = wherePredicate({
			bounds: '' /* TODO */,
			left: '' /* TODO */,
    });
    expect(node.kind).toBe('where_predicate');
  });
});
