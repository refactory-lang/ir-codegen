import { describe, it, expect } from 'vitest';
import { tokenBindingPattern } from '../src/nodes/token-binding-pattern.ts';
import { ir } from '../src/fluent.ts';

describe('token_binding_pattern', () => {
  it('should create a token_binding_pattern node via factory', () => {
    const node = tokenBindingPattern({
			name: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('token_binding_pattern');
  });

  it('should create a token_binding_pattern node via fluent API', () => {
    const builder = ir.token_binding_pattern(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('token_binding_pattern');
  });

  it('should have the correct kind', () => {
    const node = tokenBindingPattern({
			name: '' /* TODO */,
			type: '' /* TODO */,
    });
    expect(node.kind).toBe('token_binding_pattern');
  });
});
