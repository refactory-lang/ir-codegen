import { describe, it, expect } from 'vitest';
import { letDeclaration } from '../src/nodes/let.ts';
import { ir } from '../src/fluent.ts';

describe('let_declaration', () => {
  it('should create a let_declaration node via factory', () => {
    const node = letDeclaration({
			pattern: '' /* TODO */,
    });
    expect(node.kind).toBe('let_declaration');
  });

  it('should create a let_declaration node via fluent API', () => {
    const builder = ir.let_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('let_declaration');
  });

  it('should have the correct kind', () => {
    const node = letDeclaration({
			pattern: '' /* TODO */,
    });
    expect(node.kind).toBe('let_declaration');
  });
});
