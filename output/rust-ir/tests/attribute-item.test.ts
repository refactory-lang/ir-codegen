import { describe, it, expect } from 'vitest';
import { attributeItem } from '../src/nodes/attribute.ts';
import { ir } from '../src/fluent.ts';

describe('attribute_item', () => {
  it('should create a attribute_item node via factory', () => {
    const node = attributeItem({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('attribute_item');
  });

  it('should create a attribute_item node via fluent API', () => {
    const builder = ir.attribute(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('attribute_item');
  });

  it('should have the correct kind', () => {
    const node = attributeItem({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('attribute_item');
  });
});
