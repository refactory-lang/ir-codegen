import { describe, it, expect } from 'vitest';
import { forLifetimes } from '../src/nodes/for-lifetimes.ts';
import { ir } from '../src/fluent.ts';

describe('for_lifetimes', () => {
  it('should create a for_lifetimes node via factory', () => {
    const node = forLifetimes({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('for_lifetimes');
  });

  it('should create a for_lifetimes node via fluent API', () => {
    const builder = ir.for_lifetimes(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('for_lifetimes');
  });

  it('should have the correct kind', () => {
    const node = forLifetimes({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('for_lifetimes');
  });
});
