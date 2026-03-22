import { describe, it, expect } from 'vitest';
import { pointerType } from '../src/nodes/pointer-type.ts';
import { ir } from '../src/fluent.ts';

describe('pointer_type', () => {
  it('should create a pointer_type node via factory', () => {
    const node = pointerType({
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('pointer_type');
  });

  it('should create a pointer_type node via fluent API', () => {
    const builder = ir.pointer_type(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('pointer_type');
  });

  it('should have the correct kind', () => {
    const node = pointerType({
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('pointer_type');
  });
});
