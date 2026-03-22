import { describe, it, expect } from 'vitest';
import { optionalTypeParameter } from '../src/nodes/optional-type-parameter.ts';
import { ir } from '../src/fluent.ts';

describe('optional_type_parameter', () => {
  it('should create a optional_type_parameter node via factory', () => {
    const node = optionalTypeParameter({
			default_type: '' /* TODO */,
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('optional_type_parameter');
  });

  it('should create a optional_type_parameter node via fluent API', () => {
    const builder = ir.optional_type_parameter(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('optional_type_parameter');
  });

  it('should have the correct kind', () => {
    const node = optionalTypeParameter({
			default_type: '' /* TODO */,
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('optional_type_parameter');
  });
});
