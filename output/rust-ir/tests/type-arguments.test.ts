import { describe, it, expect } from 'vitest';
import { typeArguments } from '../src/nodes/type-arguments.ts';
import { ir } from '../src/fluent.ts';

describe('type_arguments', () => {
  it('should create a type_arguments node via factory', () => {
    const node = typeArguments({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('type_arguments');
  });

  it('should create a type_arguments node via fluent API', () => {
    const builder = ir.type_arguments(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('type_arguments');
  });

  it('should have the correct kind', () => {
    const node = typeArguments({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('type_arguments');
  });
});
