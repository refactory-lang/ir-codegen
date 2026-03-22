import { describe, it, expect } from 'vitest';
import { orderedFieldDeclarationList } from '../src/nodes/ordered-field-declaration-list.ts';
import { ir } from '../src/fluent.ts';

describe('ordered_field_declaration_list', () => {
  it('should create a ordered_field_declaration_list node via factory', () => {
    const node = orderedFieldDeclarationList({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('ordered_field_declaration_list');
  });

  it('should create a ordered_field_declaration_list node via fluent API', () => {
    const builder = ir.ordered_field_declaration_list(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('ordered_field_declaration_list');
  });

  it('should have the correct kind', () => {
    const node = orderedFieldDeclarationList({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('ordered_field_declaration_list');
  });
});
