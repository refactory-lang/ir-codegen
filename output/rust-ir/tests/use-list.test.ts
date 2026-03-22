import { describe, it, expect } from 'vitest';
import { useList } from '../src/nodes/use-list.ts';
import { ir } from '../src/fluent.ts';

describe('use_list', () => {
  it('should create a use_list node via factory', () => {
    const node = useList({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('use_list');
  });

  it('should create a use_list node via fluent API', () => {
    const builder = ir.use_list(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('use_list');
  });

  it('should have the correct kind', () => {
    const node = useList({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('use_list');
  });
});
