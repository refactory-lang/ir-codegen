import { describe, it, expect } from 'vitest';
import { functionSignatureItem } from '../src/nodes/function-signature.ts';
import { ir } from '../src/fluent.ts';

describe('function_signature_item', () => {
  it('should create a function_signature_item node via factory', () => {
    const node = functionSignatureItem({
			name: '' /* TODO */,
			parameters: '' /* TODO */,
    });
    expect(node.kind).toBe('function_signature_item');
  });

  it('should create a function_signature_item node via fluent API', () => {
    const builder = ir.function_signature(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('function_signature_item');
  });

  it('should have the correct kind', () => {
    const node = functionSignatureItem({
			name: '' /* TODO */,
			parameters: '' /* TODO */,
    });
    expect(node.kind).toBe('function_signature_item');
  });
});
