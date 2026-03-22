import { describe, it, expect } from 'vitest';
import { functionModifiers } from '../src/nodes/function-modifiers.ts';
import { ir } from '../src/fluent.ts';

describe('function_modifiers', () => {
  it('should create a function_modifiers node via factory', () => {
    const node = functionModifiers({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('function_modifiers');
  });

  it('should create a function_modifiers node via fluent API', () => {
    const builder = ir.function_modifiers(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('function_modifiers');
  });

  it('should have the correct kind', () => {
    const node = functionModifiers({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('function_modifiers');
  });
});
