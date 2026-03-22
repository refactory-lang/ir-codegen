import { describe, it, expect } from 'vitest';
import { structPattern } from '../src/nodes/struct-pattern.ts';
import { ir } from '../src/fluent.ts';

describe('struct_pattern', () => {
  it('should create a struct_pattern node via factory', () => {
    const node = structPattern({
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('struct_pattern');
  });

  it('should create a struct_pattern node via fluent API', () => {
    const builder = ir.struct_pattern(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('struct_pattern');
  });

  it('should have the correct kind', () => {
    const node = structPattern({
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('struct_pattern');
  });
});
