import { describe, it, expect } from 'vitest';
import { enumVariant } from '../src/nodes/enum-variant.ts';
import { ir } from '../src/fluent.ts';

describe('enum_variant', () => {
  it('should create a enum_variant node via factory', () => {
    const node = enumVariant({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('enum_variant');
  });

  it('should create a enum_variant node via fluent API', () => {
    const builder = ir.enum_variant(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('enum_variant');
  });

  it('should have the correct kind', () => {
    const node = enumVariant({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('enum_variant');
  });
});
