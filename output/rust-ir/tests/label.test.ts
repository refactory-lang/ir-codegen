import { describe, it, expect } from 'vitest';
import { label } from '../src/nodes/label.ts';
import { ir } from '../src/fluent.ts';

describe('label', () => {
  it('should create a label node via factory', () => {
    const node = label({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('label');
  });

  it('should create a label node via fluent API', () => {
    const builder = ir.label(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('label');
  });

  it('should have the correct kind', () => {
    const node = label({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('label');
  });
});
