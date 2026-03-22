import { describe, it, expect } from 'vitest';
import { fieldInitializer } from '../src/nodes/field-initializer.ts';
import { ir } from '../src/fluent.ts';

describe('field_initializer', () => {
  it('should create a field_initializer node via factory', () => {
    const node = fieldInitializer({
			field: '' /* TODO */,
			value: '' /* TODO */,
    });
    expect(node.kind).toBe('field_initializer');
  });

  it('should create a field_initializer node via fluent API', () => {
    const builder = ir.field_initializer(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('field_initializer');
  });

  it('should have the correct kind', () => {
    const node = fieldInitializer({
			field: '' /* TODO */,
			value: '' /* TODO */,
    });
    expect(node.kind).toBe('field_initializer');
  });
});
