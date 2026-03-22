import { describe, it, expect } from 'vitest';
import { letCondition } from '../src/nodes/let-condition.ts';
import { ir } from '../src/fluent.ts';

describe('let_condition', () => {
  it('should create a let_condition node via factory', () => {
    const node = letCondition({
			pattern: '' /* TODO */,
			value: '' /* TODO */,
    });
    expect(node.kind).toBe('let_condition');
  });

  it('should create a let_condition node via fluent API', () => {
    const builder = ir.let_condition(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('let_condition');
  });

  it('should have the correct kind', () => {
    const node = letCondition({
			pattern: '' /* TODO */,
			value: '' /* TODO */,
    });
    expect(node.kind).toBe('let_condition');
  });
});
