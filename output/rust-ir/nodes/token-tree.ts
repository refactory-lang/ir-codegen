import type { BuilderTerminal } from '@refactory/grammar-types';
import type { TokenTree, TokenTreeConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function tokenTree(config: TokenTreeConfig): TokenTree {
  return {
    kind: 'token_tree',
    ...config,
  } as TokenTree;
}

class TokenTreeBuilder implements BuilderTerminal<TokenTree> {
  private _children: string[] = [];

  constructor() {}

  children(value: string[]): this {
    this._children = value;
    return this;
  }

  build(): TokenTree {
    return tokenTree({
      children: this._children,
    } as TokenTreeConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function token_tree(): TokenTreeBuilder {
  return new TokenTreeBuilder();
}
