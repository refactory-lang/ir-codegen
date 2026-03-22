import { describe, it, expect } from 'vitest';
import { fieldPattern } from '../src/nodes/field-pattern.ts';
import { ir } from '../src/fluent.ts';

describe('field_pattern', () => {
  it('should create a field_pattern node via factory', () => {
    const node = fieldPattern({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('field_pattern');
  });

  it('should create a field_pattern node via fluent API', () => {
    const builder = ir.field_pattern(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('field_pattern');
  });

  it('should have the correct kind', () => {
    const node = fieldPattern({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('field_pattern');
  });
});
