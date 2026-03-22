import { describe, it, expect } from 'vitest';
import { foreignModItem } from '../src/nodes/foreign-mod.ts';
import { ir } from '../src/fluent.ts';

describe('foreign_mod_item', () => {
  it('should create a foreign_mod_item node via factory', () => {
    const node = foreignModItem({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('foreign_mod_item');
  });

  it('should create a foreign_mod_item node via fluent API', () => {
    const builder = ir.foreign_mod(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('foreign_mod_item');
  });

  it('should have the correct kind', () => {
    const node = foreignModItem({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('foreign_mod_item');
  });
});
