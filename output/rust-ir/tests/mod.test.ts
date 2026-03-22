import { describe, it, expect } from 'vitest';
import { modItem } from '../src/nodes/mod.ts';
import { ir } from '../src/fluent.ts';

describe('mod_item', () => {
  it('should create a mod_item node via factory', () => {
    const node = modItem({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('mod_item');
  });

  it('should create a mod_item node via fluent API', () => {
    const builder = ir.mod(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('mod_item');
  });

  it('should have the correct kind', () => {
    const node = modItem({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('mod_item');
  });
});
