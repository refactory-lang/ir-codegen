import { describe, it, expect } from 'vitest';
import { genericTypeWithTurbofish } from '../src/nodes/generic-type-with-turbofish.ts';
import { ir } from '../src/fluent.ts';

describe('generic_type_with_turbofish', () => {
  it('should create a generic_type_with_turbofish node via factory', () => {
    const node = genericTypeWithTurbofish({
			type: '' /* TODO */,
			type_arguments: '' /* TODO */,
    });
    expect(node.kind).toBe('generic_type_with_turbofish');
  });

  it('should create a generic_type_with_turbofish node via fluent API', () => {
    const builder = ir.generic_type_with_turbofish(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('generic_type_with_turbofish');
  });

  it('should have the correct kind', () => {
    const node = genericTypeWithTurbofish({
			type: '' /* TODO */,
			type_arguments: '' /* TODO */,
    });
    expect(node.kind).toBe('generic_type_with_turbofish');
  });
});
