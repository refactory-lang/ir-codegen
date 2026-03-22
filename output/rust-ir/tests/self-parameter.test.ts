import { describe, it, expect } from 'vitest';
import { selfParameter } from '../src/nodes/self-parameter.ts';
import { ir } from '../src/fluent.ts';

describe('self_parameter', () => {
  it('should create a self_parameter node via factory', () => {
    const node = selfParameter({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('self_parameter');
  });

  it('should create a self_parameter node via fluent API', () => {
    const builder = ir.self_parameter(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('self_parameter');
  });

  it('should have the correct kind', () => {
    const node = selfParameter({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('self_parameter');
  });
});
