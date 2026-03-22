import { describe, it, expect } from 'vitest';
import { baseFieldInitializer } from '../src/nodes/base-field-initializer.ts';
import { ir } from '../src/fluent.ts';

describe('base_field_initializer', () => {
  it('should create a base_field_initializer node via factory', () => {
    const node = baseFieldInitializer({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('base_field_initializer');
  });

  it('should create a base_field_initializer node via fluent API', () => {
    const builder = ir.base_field_initializer(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('base_field_initializer');
  });

  it('should have the correct kind', () => {
    const node = baseFieldInitializer({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('base_field_initializer');
  });
});
