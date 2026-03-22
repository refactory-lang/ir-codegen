import { describe, it, expect } from 'vitest';
import { typeParameters } from '../src/nodes/type-parameters.ts';
import { ir } from '../src/fluent.ts';

describe('type_parameters', () => {
  it('should create a type_parameters node via factory', () => {
    const node = typeParameters({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('type_parameters');
  });

  it('should create a type_parameters node via fluent API', () => {
    const builder = ir.type_parameters(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('type_parameters');
  });

  it('should have the correct kind', () => {
    const node = typeParameters({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('type_parameters');
  });
});
