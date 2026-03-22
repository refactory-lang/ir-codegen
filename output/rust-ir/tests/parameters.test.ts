import { describe, it, expect } from 'vitest';
import { parameters } from '../src/nodes/parameters.ts';
import { ir } from '../src/fluent.ts';

describe('parameters', () => {
  it('should create a parameters node via factory', () => {
    const node = parameters({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('parameters');
  });

  it('should create a parameters node via fluent API', () => {
    const builder = ir.parameters(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('parameters');
  });

  it('should have the correct kind', () => {
    const node = parameters({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('parameters');
  });
});
