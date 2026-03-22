import { describe, it, expect } from 'vitest';
import { whileExpression } from '../src/nodes/while.ts';
import { ir } from '../src/fluent.ts';

describe('while_expression', () => {
  it('should create a while_expression node via factory', () => {
    const node = whileExpression({
			body: '' /* TODO */,
			condition: '' /* TODO */,
    });
    expect(node.kind).toBe('while_expression');
  });

  it('should create a while_expression node via fluent API', () => {
    const builder = ir.while_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('while_expression');
  });

  it('should have the correct kind', () => {
    const node = whileExpression({
			body: '' /* TODO */,
			condition: '' /* TODO */,
    });
    expect(node.kind).toBe('while_expression');
  });
});
