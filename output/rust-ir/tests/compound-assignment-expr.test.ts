import { describe, it, expect } from 'vitest';
import { compoundAssignmentExpr } from '../src/nodes/compound-assignment-expr.ts';
import { ir } from '../src/fluent.ts';

describe('compound_assignment_expr', () => {
  it('should create a compound_assignment_expr node via factory', () => {
    const node = compoundAssignmentExpr({
			left: '' /* TODO */,
			operator: '' /* TODO */,
			right: '' /* TODO */,
    });
    expect(node.kind).toBe('compound_assignment_expr');
  });

  it('should create a compound_assignment_expr node via fluent API', () => {
    const builder = ir.compound_assignment_expr(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('compound_assignment_expr');
  });

  it('should have the correct kind', () => {
    const node = compoundAssignmentExpr({
			left: '' /* TODO */,
			operator: '' /* TODO */,
			right: '' /* TODO */,
    });
    expect(node.kind).toBe('compound_assignment_expr');
  });
});
