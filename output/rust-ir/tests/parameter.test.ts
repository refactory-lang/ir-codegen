import { describe, it, expect } from 'vitest';
import { parameter } from '../src/nodes/parameter.ts';
import { ir } from '../src/fluent.ts';

describe('parameter', () => {
  it('should create a parameter node via factory', () => {
    const node = parameter({
			pattern: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('parameter');
  });

  it('should create a parameter node via fluent API', () => {
    const builder = ir.parameter(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('parameter');
  });

  it('should have the correct kind', () => {
    const node = parameter({
			pattern: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('parameter');
  });
});
