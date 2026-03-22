import { describe, it, expect } from 'vitest';
import { matchExpression } from '../src/nodes/match.ts';
import { ir } from '../src/fluent.ts';

describe('match_expression', () => {
  it('should create a match_expression node via factory', () => {
    const node = matchExpression({
			body: '' /* TODO */,
			value: '' /* TODO */,
    });
    expect(node.kind).toBe('match_expression');
  });

  it('should create a match_expression node via fluent API', () => {
    const builder = ir.match(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('match_expression');
  });

  it('should have the correct kind', () => {
    const node = matchExpression({
			body: '' /* TODO */,
			value: '' /* TODO */,
    });
    expect(node.kind).toBe('match_expression');
  });
});
