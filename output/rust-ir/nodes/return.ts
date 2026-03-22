import type { BuilderTerminal } from '@refactory/grammar-types';
import type { ReturnExpression, ReturnExpressionConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function returnExpression(config: ReturnExpressionConfig): ReturnExpression {
  return {
    kind: 'return_expression',
    ...config,
  } as ReturnExpression;
}

class ReturnBuilder implements BuilderTerminal<ReturnExpression> {
  private _children?: string;

  constructor() {}

  children(value: string): this {
    this._children = value;
    return this;
  }

  build(): ReturnExpression {
    return returnExpression({
      children: this._children,
    } as ReturnExpressionConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function return_(): ReturnBuilder {
  return new ReturnBuilder();
}
