import { describe, it, expect } from 'vitest';
import { loopExpression } from '../src/nodes/loop.ts';
import { ir } from '../src/fluent.ts';

describe('loop_expression', () => {
  it('should create a loop_expression node via factory', () => {
    const node = loopExpression({
			body: '' /* TODO */,
    });
    expect(node.kind).toBe('loop_expression');
  });

  it('should create a loop_expression node via fluent API', () => {
    const builder = ir.loop(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('loop_expression');
  });

  it('should have the correct kind', () => {
    const node = loopExpression({
			body: '' /* TODO */,
    });
    expect(node.kind).toBe('loop_expression');
  });
});
