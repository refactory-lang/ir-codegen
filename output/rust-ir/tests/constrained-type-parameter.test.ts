import { describe, it, expect } from 'vitest';
import { constrainedTypeParameter } from '../src/nodes/constrained-type-parameter.ts';
import { ir } from '../src/fluent.ts';

describe('constrained_type_parameter', () => {
  it('should create a constrained_type_parameter node via factory', () => {
    const node = constrainedTypeParameter({
			bounds: '' /* TODO */,
			left: '' /* TODO */,
    });
    expect(node.kind).toBe('constrained_type_parameter');
  });

  it('should create a constrained_type_parameter node via fluent API', () => {
    const builder = ir.constrained_type_parameter(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('constrained_type_parameter');
  });

  it('should have the correct kind', () => {
    const node = constrainedTypeParameter({
			bounds: '' /* TODO */,
			left: '' /* TODO */,
    });
    expect(node.kind).toBe('constrained_type_parameter');
  });
});
