import { describe, it, expect } from 'vitest';
import { expressionStatement } from '../src/nodes/expression.ts';
import { ir } from '../src/fluent.ts';

describe('expression_statement', () => {
  it('should create a expression_statement node via factory', () => {
    const node = expressionStatement({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('expression_statement');
  });

  it('should create a expression_statement node via fluent API', () => {
    const builder = ir.expression(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('expression_statement');
  });

  it('should have the correct kind', () => {
    const node = expressionStatement({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('expression_statement');
  });
});
