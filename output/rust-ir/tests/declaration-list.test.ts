import { describe, it, expect } from 'vitest';
import { declarationList } from '../src/nodes/declaration-list.ts';
import { ir } from '../src/fluent.ts';

describe('declaration_list', () => {
  it('should create a declaration_list node via factory', () => {
    const node = declarationList({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('declaration_list');
  });

  it('should create a declaration_list node via fluent API', () => {
    const builder = ir.declaration_list(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('declaration_list');
  });

  it('should have the correct kind', () => {
    const node = declarationList({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('declaration_list');
  });
});
