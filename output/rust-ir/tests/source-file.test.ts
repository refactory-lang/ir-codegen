import { describe, it, expect } from 'vitest';
import { sourceFile } from '../src/nodes/source-file.ts';
import { ir } from '../src/fluent.ts';

describe('source_file', () => {
  it('should create a source_file node via factory', () => {
    const node = sourceFile({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('source_file');
  });

  it('should create a source_file node via fluent API', () => {
    const builder = ir.file(/* TODO: args */);
    const node = builder.build();
    expect(node.kind).toBe('source_file');
  });

  it('should have the correct kind', () => {
    const node = sourceFile({
			/* TODO: add required fields */
    });
    expect(node.kind).toBe('source_file');
  });
});
