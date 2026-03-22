import { describe, it, expect } from 'vitest';
import { dynamicType } from '../src/nodes/dynamic-type.ts';
import { ir } from '../src/fluent.ts';

describe('dynamic_type', () => {
  it('should create a dynamic_type node via factory', () => {
    const node = dynamicType({
			trait: '' /* TODO */,
    });
    expect(node.kind).toBe('dynamic_type');
  });

  it('should create a dynamic_type node via fluent API', () => {
    const builder = ir.dynamic_type(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('dynamic_type');
  });

  it('should have the correct kind', () => {
    const node = dynamicType({
			trait: '' /* TODO */,
    });
    expect(node.kind).toBe('dynamic_type');
  });
});
