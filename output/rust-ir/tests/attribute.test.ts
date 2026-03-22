import { describe, it, expect } from 'vitest';
import { attribute } from '../src/nodes/attribute.ts';
import { ir } from '../src/fluent.ts';

describe('attribute', () => {
  it('should create a attribute node via factory', () => {
    const node = attribute({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('attribute');
  });

  it('should create a attribute node via fluent API', () => {
    const builder = ir.attribute(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('attribute');
  });

  it('should have the correct kind', () => {
    const node = attribute({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('attribute');
  });
});
