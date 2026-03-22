import { describe, it, expect } from 'vitest';
import { constParameter } from '../src/nodes/const-parameter.ts';
import { ir } from '../src/fluent.ts';

describe('const_parameter', () => {
  it('should create a const_parameter node via factory', () => {
    const node = constParameter({
			name: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('const_parameter');
  });

  it('should create a const_parameter node via fluent API', () => {
    const builder = ir.const_parameter(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('const_parameter');
  });

  it('should have the correct kind', () => {
    const node = constParameter({
			name: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('const_parameter');
  });
});
