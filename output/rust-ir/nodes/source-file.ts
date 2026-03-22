import type { BuilderTerminal } from '@refactory/grammar-types';
import type { SourceFile, SourceFileConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function sourceFile(config: SourceFileConfig): SourceFile {
  return {
    kind: 'source_file',
    ...config,
  } as SourceFile;
}

class SourceFileBuilder implements BuilderTerminal<SourceFile> {
  private _children: string[] = [];

  constructor() {}

  children(value: string[]): this {
    this._children = value;
    return this;
  }

  build(): SourceFile {
    return sourceFile({
      children: this._children,
    } as SourceFileConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function file(): SourceFileBuilder {
  return new SourceFileBuilder();
}
