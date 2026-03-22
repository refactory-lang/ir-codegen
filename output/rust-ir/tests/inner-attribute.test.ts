import { describe, it, expect } from 'vitest';
import { innerAttributeItem } from '../src/nodes/inner-attribute.ts';
import { ir } from '../src/fluent.ts';

describe('inner_attribute_item', () => {
  it('should create a inner_attribute_item node via factory', () => {
    const node = innerAttributeItem({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('inner_attribute_item');
  });

  it('should create a inner_attribute_item node via fluent API', () => {
    const builder = ir.inner_attribute(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('inner_attribute_item');
  });

  it('should have the correct kind', () => {
    const node = innerAttributeItem({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('inner_attribute_item');
  });
});
