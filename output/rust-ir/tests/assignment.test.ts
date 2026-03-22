import { describe, it, expect } from 'vitest';
import { assignmentExpression } from '../src/nodes/assignment.ts';
import { ir } from '../src/fluent.ts';

describe('assignment_expression', () => {
  it('should create a assignment_expression node via factory', () => {
    const node = assignmentExpression({
			left: '' /* TODO */,
			right: '' /* TODO */,
    });
    expect(node.kind).toBe('assignment_expression');
  });

  it('should create a assignment_expression node via fluent API', () => {
    const builder = ir.assignment(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('assignment_expression');
  });

  it('should have the correct kind', () => {
    const node = assignmentExpression({
			left: '' /* TODO */,
			right: '' /* TODO */,
    });
    expect(node.kind).toBe('assignment_expression');
  });
});
