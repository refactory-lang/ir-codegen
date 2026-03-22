import { describe, it, expect } from 'vitest';
import { scopedIdentifier } from '../src/nodes/scoped-identifier.ts';
import { ir } from '../src/fluent.ts';

describe('scoped_identifier', () => {
  it('should create a scoped_identifier node via factory', () => {
    const node = scopedIdentifier({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('scoped_identifier');
  });

  it('should create a scoped_identifier node via fluent API', () => {
    const builder = ir.scoped_identifier(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('scoped_identifier');
  });

  it('should have the correct kind', () => {
    const node = scopedIdentifier({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('scoped_identifier');
  });
});
