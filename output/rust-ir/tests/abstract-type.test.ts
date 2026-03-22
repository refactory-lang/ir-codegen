import { describe, it, expect } from 'vitest';
import { abstractType } from '../src/nodes/abstract-type.ts';
import { ir } from '../src/fluent.ts';

describe('abstract_type', () => {
  it('should create a abstract_type node via factory', () => {
    const node = abstractType({
			trait: '' /* TODO */,
    });
    expect(node.kind).toBe('abstract_type');
  });

  it('should create a abstract_type node via fluent API', () => {
    const builder = ir.abstract_type(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('abstract_type');
  });

  it('should have the correct kind', () => {
    const node = abstractType({
			trait: '' /* TODO */,
    });
    expect(node.kind).toBe('abstract_type');
  });
});
