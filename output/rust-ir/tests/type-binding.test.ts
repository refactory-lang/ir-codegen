import { describe, it, expect } from 'vitest';
import { typeBinding } from '../src/nodes/type-binding.ts';
import { ir } from '../src/fluent.ts';

describe('type_binding', () => {
  it('should create a type_binding node via factory', () => {
    const node = typeBinding({
			name: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('type_binding');
  });

  it('should create a type_binding node via fluent API', () => {
    const builder = ir.type_binding(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('type_binding');
  });

  it('should have the correct kind', () => {
    const node = typeBinding({
			name: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('type_binding');
  });
});
