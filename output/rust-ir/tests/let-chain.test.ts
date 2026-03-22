import { describe, it, expect } from 'vitest';
import { letChain } from '../src/nodes/let-chain.ts';
import { ir } from '../src/fluent.ts';

describe('let_chain', () => {
  it('should create a let_chain node via factory', () => {
    const node = letChain({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('let_chain');
  });

  it('should create a let_chain node via fluent API', () => {
    const builder = ir.let_chain(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('let_chain');
  });

  it('should have the correct kind', () => {
    const node = letChain({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('let_chain');
  });
});
