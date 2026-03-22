import type { BuilderTerminal } from '@refactory/grammar-types';
import type { TokenRepetitionPattern, TokenRepetitionPatternConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function tokenRepetitionPattern(config: TokenRepetitionPatternConfig): TokenRepetitionPattern {
  return {
    kind: 'token_repetition_pattern',
    ...config,
  } as TokenRepetitionPattern;
}

class TokenRepetitionPatternBuilder implements BuilderTerminal<TokenRepetitionPattern> {
  private _children: string[] = [];

  constructor() {}

  children(value: string[]): this {
    this._children = value;
    return this;
  }

  build(): TokenRepetitionPattern {
    return tokenRepetitionPattern({
      children: this._children,
    } as TokenRepetitionPatternConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function token_repetition_pattern(): TokenRepetitionPatternBuilder {
  return new TokenRepetitionPatternBuilder();
}
