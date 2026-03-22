import type { BuilderTerminal } from '@refactory/grammar-types';
import type { Block, BlockConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

function createBlock(config: BlockConfig): Block {
  return {
    kind: 'block',
    ...config,
  } as Block;
}

class BlockBuilder implements BuilderTerminal<Block> {
  private _children: string[] = [];

  constructor() {}

  children(value: string[]): this {
    this._children = value;
    return this;
  }

  build(): Block {
    return createBlock({
      children: this._children,
    } as BlockConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function block(): BlockBuilder {
  return new BlockBuilder();
}
