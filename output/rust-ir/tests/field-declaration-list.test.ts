import { describe, it, expect } from 'vitest';
import { fieldDeclarationList } from '../src/nodes/field-declaration-list.ts';
import { ir } from '../src/fluent.ts';

describe('field_declaration_list', () => {
  it('should create a field_declaration_list node via factory', () => {
    const node = fieldDeclarationList({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('field_declaration_list');
  });

  it('should create a field_declaration_list node via fluent API', () => {
    const builder = ir.field_declaration_list(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('field_declaration_list');
  });

  it('should have the correct kind', () => {
    const node = fieldDeclarationList({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('field_declaration_list');
  });
});
