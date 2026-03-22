import { describe, it, expect } from 'vitest';
import { associatedType } from '../src/nodes/associated-type.ts';
import { ir } from '../src/fluent.ts';

describe('associated_type', () => {
  it('should create a associated_type node via factory', () => {
    const node = associatedType({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('associated_type');
  });

  it('should create a associated_type node via fluent API', () => {
    const builder = ir.associated_type(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('associated_type');
  });

  it('should have the correct kind', () => {
    const node = associatedType({
			name: '' /* TODO */,
    });
    expect(node.kind).toBe('associated_type');
  });
});
