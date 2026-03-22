import type { BuilderTerminal } from '@refactory/grammar-types';
import type { NegativeLiteral, NegativeLiteralConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function negativeLiteral(config: NegativeLiteralConfig): NegativeLiteral {
  return {
    kind: 'negative_literal',
    ...config,
  } as NegativeLiteral;
}

class NegativeLiteralBuilder implements BuilderTerminal<NegativeLiteral> {
  private _children: string;

  constructor(children: string) {
    this._children = children;
  }

  build(): NegativeLiteral {
    return negativeLiteral({
      children: this._children,
    } as NegativeLiteralConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function negative_literal(children: string): NegativeLiteralBuilder {
  return new NegativeLiteralBuilder(children);
}
