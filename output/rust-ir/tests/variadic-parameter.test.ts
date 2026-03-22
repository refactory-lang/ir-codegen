import { describe, it, expect } from 'vitest';
import { variadicParameter } from '../src/nodes/variadic-parameter.ts';
import { ir } from '../src/fluent.ts';

describe('variadic_parameter', () => {
  it('should create a variadic_parameter node via factory', () => {
    const node = variadicParameter({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('variadic_parameter');
  });

  it('should create a variadic_parameter node via fluent API', () => {
    const builder = ir.variadic_parameter(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('variadic_parameter');
  });

  it('should have the correct kind', () => {
    const node = variadicParameter({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('variadic_parameter');
  });
});
