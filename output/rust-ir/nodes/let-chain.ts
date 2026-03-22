import type { BuilderTerminal } from '@refactory/grammar-types';
import type { LetChain, LetChainConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function letChain(config: LetChainConfig): LetChain {
  return {
    kind: 'let_chain',
    ...config,
  } as LetChain;
}

class LetChainBuilder implements BuilderTerminal<LetChain> {
  private _children: string[] = [];

  constructor(children: string) {
    this._children = children;
  }

  build(): LetChain {
    return letChain({
      children: this._children,
    } as LetChainConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function let_chain(children: string): LetChainBuilder {
  return new LetChainBuilder(children);
}
