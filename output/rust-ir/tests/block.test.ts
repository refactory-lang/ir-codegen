import { describe, it, expect } from 'vitest';
import { block } from '../src/nodes/block.ts';
import { ir } from '../src/fluent.ts';

describe('block', () => {
  it('should create a block node via factory', () => {
    const node = block({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('block');
  });

  it('should create a block node via fluent API', () => {
    const builder = ir.block(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('block');
  });

  it('should have the correct kind', () => {
    const node = block({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('block');
  });
});
