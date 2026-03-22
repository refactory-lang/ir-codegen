import { describe, it, expect } from 'vitest';
import { externCrateDeclaration } from '../src/nodes/extern-crate.ts';
import { ir } from '../src/fluent.ts';

describe('extern_crate_declaration', () => {
  it('should create a extern_crate_declaration node via factory', () => {
    const node = externCrateDeclaration({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('extern_crate_declaration');
  });

  it('should create a extern_crate_declaration node via fluent API', () => {
    const builder = ir.extern_crate(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('extern_crate_declaration');
  });

  it('should have the correct kind', () => {
    const node = externCrateDeclaration({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('extern_crate_declaration');
  });
});
