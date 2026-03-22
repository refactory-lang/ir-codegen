import type { BuilderTerminal } from '@refactory/grammar-types';
import type { AsyncBlock, AsyncBlockConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function asyncBlock(config: AsyncBlockConfig): AsyncBlock {
  return {
    kind: 'async_block',
    ...config,
  } as AsyncBlock;
}

class AsyncBlockBuilder implements BuilderTerminal<AsyncBlock> {
  private _children: string;

  constructor(children: string) {
    this._children = children;
  }

  build(): AsyncBlock {
    return asyncBlock({
      children: this._children,
    } as AsyncBlockConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function async_block(children: string): AsyncBlockBuilder {
  return new AsyncBlockBuilder(children);
}
