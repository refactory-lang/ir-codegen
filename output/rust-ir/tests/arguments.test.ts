import { describe, it, expect } from 'vitest';
import { arguments_ } from '../src/nodes/arguments.ts';
import { ir } from '../src/fluent.ts';

describe('arguments', () => {
  it('should create a arguments node via factory', () => {
    const node = arguments_({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('arguments');
  });

  it('should create a arguments node via fluent API', () => {
    const builder = ir.arguments_(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('arguments');
  });

  it('should have the correct kind', () => {
    const node = arguments_({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('arguments');
  });
});
