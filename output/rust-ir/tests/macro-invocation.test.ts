import { describe, it, expect } from 'vitest';
import { macroInvocation } from '../src/nodes/macro-invocation.ts';
import { ir } from '../src/fluent.ts';

describe('macro_invocation', () => {
  it('should create a macro_invocation node via factory', () => {
    const node = macroInvocation({
			macro: '' /* TODO */,
    });
    expect(node.kind).toBe('macro_invocation');
  });

  it('should create a macro_invocation node via fluent API', () => {
    const builder = ir.macro_invocation(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('macro_invocation');
  });

  it('should have the correct kind', () => {
    const node = macroInvocation({
			macro: '' /* TODO */,
    });
    expect(node.kind).toBe('macro_invocation');
  });
});
