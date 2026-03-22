import { describe, it, expect } from 'vitest';
import { shorthandFieldInitializer } from '../src/nodes/shorthand-field-initializer.ts';
import { ir } from '../src/fluent.ts';

describe('shorthand_field_initializer', () => {
  it('should create a shorthand_field_initializer node via factory', () => {
    const node = shorthandFieldInitializer({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('shorthand_field_initializer');
  });

  it('should create a shorthand_field_initializer node via fluent API', () => {
    const builder = ir.shorthand_field_initializer(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('shorthand_field_initializer');
  });

  it('should have the correct kind', () => {
    const node = shorthandFieldInitializer({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('shorthand_field_initializer');
  });
});
