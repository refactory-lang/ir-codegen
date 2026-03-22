import { describe, it, expect } from 'vitest';
import { genericFunction } from '../src/nodes/generic-function.ts';
import { ir } from '../src/fluent.ts';

describe('generic_function', () => {
  it('should create a generic_function node via factory', () => {
    const node = genericFunction({
			function: '' /* TODO */,
			type_arguments: '' /* TODO */,
    });
    expect(node.kind).toBe('generic_function');
  });

  it('should create a generic_function node via fluent API', () => {
    const builder = ir.generic_function(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('generic_function');
  });

  it('should have the correct kind', () => {
    const node = genericFunction({
			function: '' /* TODO */,
			type_arguments: '' /* TODO */,
    });
    expect(node.kind).toBe('generic_function');
  });
});
