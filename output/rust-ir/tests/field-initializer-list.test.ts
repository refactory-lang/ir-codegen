import { describe, it, expect } from 'vitest';
import { fieldInitializerList } from '../src/nodes/field-initializer-list.ts';
import { ir } from '../src/fluent.ts';

describe('field_initializer_list', () => {
  it('should create a field_initializer_list node via factory', () => {
    const node = fieldInitializerList({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('field_initializer_list');
  });

  it('should create a field_initializer_list node via fluent API', () => {
    const builder = ir.field_initializer_list(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('field_initializer_list');
  });

  it('should have the correct kind', () => {
    const node = fieldInitializerList({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('field_initializer_list');
  });
});
