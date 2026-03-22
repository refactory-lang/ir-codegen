import { describe, it, expect } from 'vitest';
import { scopedUseList } from '../src/nodes/scoped-use-list.ts';
import { ir } from '../src/fluent.ts';

describe('scoped_use_list', () => {
  it('should create a scoped_use_list node via factory', () => {
    const node = scopedUseList({
			list: '' /* TODO */,
    });
    expect(node.kind).toBe('scoped_use_list');
  });

  it('should create a scoped_use_list node via fluent API', () => {
    const builder = ir.scoped_use_list(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('scoped_use_list');
  });

  it('should have the correct kind', () => {
    const node = scopedUseList({
			list: '' /* TODO */,
    });
    expect(node.kind).toBe('scoped_use_list');
  });
});
