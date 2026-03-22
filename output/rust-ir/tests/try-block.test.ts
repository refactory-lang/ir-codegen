import { describe, it, expect } from 'vitest';
import { tryBlock } from '../src/nodes/try-block.ts';
import { ir } from '../src/fluent.ts';

describe('try_block', () => {
  it('should create a try_block node via factory', () => {
    const node = tryBlock({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('try_block');
  });

  it('should create a try_block node via fluent API', () => {
    const builder = ir.try_block(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('try_block');
  });

  it('should have the correct kind', () => {
    const node = tryBlock({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('try_block');
  });
});
