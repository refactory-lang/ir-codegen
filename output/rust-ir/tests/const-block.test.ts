import { describe, it, expect } from 'vitest';
import { constBlock } from '../src/nodes/const-block.ts';
import { ir } from '../src/fluent.ts';

describe('const_block', () => {
  it('should create a const_block node via factory', () => {
    const node = constBlock({
			body: '' /* TODO */,
    });
    expect(node.kind).toBe('const_block');
  });

  it('should create a const_block node via fluent API', () => {
    const builder = ir.const_block(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('const_block');
  });

  it('should have the correct kind', () => {
    const node = constBlock({
			body: '' /* TODO */,
    });
    expect(node.kind).toBe('const_block');
  });
});
