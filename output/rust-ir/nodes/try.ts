import type { BuilderTerminal } from '@refactory/grammar-types';
import type { TryExpression, TryExpressionConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function tryExpression(config: TryExpressionConfig): TryExpression {
  return {
    kind: 'try_expression',
    ...config,
  } as TryExpression;
}

class TryBuilder implements BuilderTerminal<TryExpression> {
  private _children: string;

  constructor(children: string) {
    this._children = children;
  }

  build(): TryExpression {
    return tryExpression({
      children: this._children,
    } as TryExpressionConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function try_(children: string): TryBuilder {
  return new TryBuilder(children);
}
