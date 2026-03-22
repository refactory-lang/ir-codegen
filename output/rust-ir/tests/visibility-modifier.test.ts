import { describe, it, expect } from 'vitest';
import { visibilityModifier } from '../src/nodes/visibility-modifier.ts';
import { ir } from '../src/fluent.ts';

describe('visibility_modifier', () => {
  it('should create a visibility_modifier node via factory', () => {
    const node = visibilityModifier({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('visibility_modifier');
  });

  it('should create a visibility_modifier node via fluent API', () => {
    const builder = ir.visibility_modifier(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('visibility_modifier');
  });

  it('should have the correct kind', () => {
    const node = visibilityModifier({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('visibility_modifier');
  });
});
