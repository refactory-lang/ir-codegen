import { describe, it, expect } from 'vitest';
import { scopedTypeIdentifier } from '../src/nodes/scoped-type-identifier.ts';
import { ir } from '../src/fluent.ts';

describe('scoped_type_identifier', () => {
  it('should create a scoped_type_identifier node via factory', () => {
    const node = scopedTypeIdentifier({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('scoped_type_identifier');
  });

  it('should create a scoped_type_identifier node via fluent API', () => {
    const builder = ir.scoped_type_identifier(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('scoped_type_identifier');
  });

  it('should have the correct kind', () => {
    const node = scopedTypeIdentifier({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('scoped_type_identifier');
  });
});
