import { describe, it, expect } from 'vitest';
import { fieldDeclaration } from '../src/nodes/field.ts';
import { ir } from '../src/fluent.ts';

describe('field_declaration', () => {
  it('should create a field_declaration node via factory', () => {
    const node = fieldDeclaration({
			name: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('field_declaration');
  });

  it('should create a field_declaration node via fluent API', () => {
    const builder = ir.field(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('field_declaration');
  });

  it('should have the correct kind', () => {
    const node = fieldDeclaration({
			name: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('field_declaration');
  });
});
