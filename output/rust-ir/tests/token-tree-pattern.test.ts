import { describe, it, expect } from 'vitest';
import { tokenTreePattern } from '../src/nodes/token-tree-pattern.ts';
import { ir } from '../src/fluent.ts';

describe('token_tree_pattern', () => {
  it('should create a token_tree_pattern node via factory', () => {
    const node = tokenTreePattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('token_tree_pattern');
  });

  it('should create a token_tree_pattern node via fluent API', () => {
    const builder = ir.token_tree_pattern(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('token_tree_pattern');
  });

  it('should have the correct kind', () => {
    const node = tokenTreePattern({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('token_tree_pattern');
  });
});
