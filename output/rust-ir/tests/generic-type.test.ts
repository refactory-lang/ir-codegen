import { describe, it, expect } from 'vitest';
import { genericType } from '../src/nodes/generic-type.ts';
import { ir } from '../src/fluent.ts';

describe('generic_type', () => {
  it('should create a generic_type node via factory', () => {
    const node = genericType({
			type: '' /* TODO */,
			type_arguments: '' /* TODO */,
    });
    expect(node.kind).toBe('generic_type');
  });

  it('should create a generic_type node via fluent API', () => {
    const builder = ir.generic_type(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('generic_type');
  });

  it('should have the correct kind', () => {
    const node = genericType({
			type: '' /* TODO */,
			type_arguments: '' /* TODO */,
    });
    expect(node.kind).toBe('generic_type');
  });
});
