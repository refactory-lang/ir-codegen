import type { BuilderTerminal } from '@refactory/grammar-types';
import type { TryBlock, TryBlockConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function tryBlock(config: TryBlockConfig): TryBlock {
  return {
    kind: 'try_block',
    ...config,
  } as TryBlock;
}

class TryBlockBuilder implements BuilderTerminal<TryBlock> {
  private _children: string;

  constructor(children: string) {
    this._children = children;
  }

  build(): TryBlock {
    return tryBlock({
      children: this._children,
    } as TryBlockConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function try_block(children: string): TryBlockBuilder {
  return new TryBlockBuilder(children);
}
