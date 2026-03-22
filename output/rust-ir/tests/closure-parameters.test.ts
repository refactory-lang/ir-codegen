import { describe, it, expect } from 'vitest';
import { closureParameters } from '../src/nodes/closure-parameters.ts';
import { ir } from '../src/fluent.ts';

describe('closure_parameters', () => {
  it('should create a closure_parameters node via factory', () => {
    const node = closureParameters({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('closure_parameters');
  });

  it('should create a closure_parameters node via fluent API', () => {
    const builder = ir.closure_parameters(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('closure_parameters');
  });

  it('should have the correct kind', () => {
    const node = closureParameters({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('closure_parameters');
  });
});
