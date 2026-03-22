import { describe, it, expect } from 'vitest';
import { useWildcard } from '../src/nodes/use-wildcard.ts';
import { ir } from '../src/fluent.ts';

describe('use_wildcard', () => {
  it('should create a use_wildcard node via factory', () => {
    const node = useWildcard({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('use_wildcard');
  });

  it('should create a use_wildcard node via fluent API', () => {
    const builder = ir.use_wildcard(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('use_wildcard');
  });

  it('should have the correct kind', () => {
    const node = useWildcard({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('use_wildcard');
  });
});
