import { describe, it, expect } from 'vitest';
import { traitItem } from '../src/nodes/trait.ts';
import { ir } from '../src/fluent.ts';

describe('trait_item', () => {
  it('should create a trait_item node via factory', () => {
    const node = traitItem({
			body: '' /* TODO */,
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('trait_item');
  });

  it('should create a trait_item node via fluent API', () => {
    const builder = ir.trait(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('trait_item');
  });

  it('should have the correct kind', () => {
    const node = traitItem({
			body: '' /* TODO */,
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('trait_item');
  });
});
