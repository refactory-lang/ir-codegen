import { describe, it, expect } from 'vitest';
import { useDeclaration } from '../src/nodes/use.ts';
import { ir } from '../src/fluent.ts';

describe('use_declaration', () => {
  it('should create a use_declaration node via factory', () => {
    const node = useDeclaration({
			argument: '' /* TODO */,
    });
    expect(node.kind).toBe('use_declaration');
  });

  it('should create a use_declaration node via fluent API', () => {
    const builder = ir.use_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('use_declaration');
  });

  it('should have the correct kind', () => {
    const node = useDeclaration({
			argument: '' /* TODO */,
    });
    expect(node.kind).toBe('use_declaration');
  });
});
