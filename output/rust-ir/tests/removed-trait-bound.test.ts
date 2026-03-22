import { describe, it, expect } from 'vitest';
import { removedTraitBound } from '../src/nodes/removed-trait-bound.ts';
import { ir } from '../src/fluent.ts';

describe('removed_trait_bound', () => {
  it('should create a removed_trait_bound node via factory', () => {
    const node = removedTraitBound({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('removed_trait_bound');
  });

  it('should create a removed_trait_bound node via fluent API', () => {
    const builder = ir.removed_trait_bound(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('removed_trait_bound');
  });

  it('should have the correct kind', () => {
    const node = removedTraitBound({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('removed_trait_bound');
  });
});
