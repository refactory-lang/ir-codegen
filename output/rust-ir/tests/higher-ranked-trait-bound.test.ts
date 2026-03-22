import { describe, it, expect } from 'vitest';
import { higherRankedTraitBound } from '../src/nodes/higher-ranked-trait-bound.ts';
import { ir } from '../src/fluent.ts';

describe('higher_ranked_trait_bound', () => {
  it('should create a higher_ranked_trait_bound node via factory', () => {
    const node = higherRankedTraitBound({
			type: '' /* TODO */,
			type_parameters: '' /* TODO */,
    });
    expect(node.kind).toBe('higher_ranked_trait_bound');
  });

  it('should create a higher_ranked_trait_bound node via fluent API', () => {
    const builder = ir.higher_ranked_trait_bound(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('higher_ranked_trait_bound');
  });

  it('should have the correct kind', () => {
    const node = higherRankedTraitBound({
			type: '' /* TODO */,
			type_parameters: '' /* TODO */,
    });
    expect(node.kind).toBe('higher_ranked_trait_bound');
  });
});
