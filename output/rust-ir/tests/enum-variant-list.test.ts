import { describe, it, expect } from 'vitest';
import { enumVariantList } from '../src/nodes/enum-variant-list.ts';
import { ir } from '../src/fluent.ts';

describe('enum_variant_list', () => {
  it('should create a enum_variant_list node via factory', () => {
    const node = enumVariantList({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('enum_variant_list');
  });

  it('should create a enum_variant_list node via fluent API', () => {
    const builder = ir.enum_variant_list(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('enum_variant_list');
  });

  it('should have the correct kind', () => {
    const node = enumVariantList({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('enum_variant_list');
  });
});
