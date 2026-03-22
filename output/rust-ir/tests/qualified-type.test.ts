import { describe, it, expect } from 'vitest';
import { qualifiedType } from '../src/nodes/qualified-type.ts';
import { ir } from '../src/fluent.ts';

describe('qualified_type', () => {
  it('should create a qualified_type node via factory', () => {
    const node = qualifiedType({
			alias: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('qualified_type');
  });

  it('should create a qualified_type node via fluent API', () => {
    const builder = ir.qualified_type(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('qualified_type');
  });

  it('should have the correct kind', () => {
    const node = qualifiedType({
			alias: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('qualified_type');
  });
});
