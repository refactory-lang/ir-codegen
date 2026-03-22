import { describe, it, expect } from 'vitest';
import { lifetime } from '../src/nodes/lifetime.ts';
import { ir } from '../src/fluent.ts';

describe('lifetime', () => {
  it('should create a lifetime node via factory', () => {
    const node = lifetime({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('lifetime');
  });

  it('should create a lifetime node via fluent API', () => {
    const builder = ir.lifetime(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('lifetime');
  });

  it('should have the correct kind', () => {
    const node = lifetime({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('lifetime');
  });
});
