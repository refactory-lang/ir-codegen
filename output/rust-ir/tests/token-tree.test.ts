import { describe, it, expect } from 'vitest';
import { tokenTree } from '../src/nodes/token-tree.ts';
import { ir } from '../src/fluent.ts';

describe('token_tree', () => {
  it('should create a token_tree node via factory', () => {
    const node = tokenTree({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('token_tree');
  });

  it('should create a token_tree node via fluent API', () => {
    const builder = ir.token_tree(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('token_tree');
  });

  it('should have the correct kind', () => {
    const node = tokenTree({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('token_tree');
  });
});
