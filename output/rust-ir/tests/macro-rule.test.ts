import { describe, it, expect } from 'vitest';
import { macroRule } from '../src/nodes/macro-rule.ts';
import { ir } from '../src/fluent.ts';

describe('macro_rule', () => {
  it('should create a macro_rule node via factory', () => {
    const node = macroRule({
			left: '' /* TODO */,
			right: '' /* TODO */,
    });
    expect(node.kind).toBe('macro_rule');
  });

  it('should create a macro_rule node via fluent API', () => {
    const builder = ir.macro_rule(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('macro_rule');
  });

  it('should have the correct kind', () => {
    const node = macroRule({
			left: '' /* TODO */,
			right: '' /* TODO */,
    });
    expect(node.kind).toBe('macro_rule');
  });
});
