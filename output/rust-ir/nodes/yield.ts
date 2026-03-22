import type { BuilderTerminal } from '@refactory/grammar-types';
import type { YieldExpression, YieldExpressionConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function yieldExpression(config: YieldExpressionConfig): YieldExpression {
  return {
    kind: 'yield_expression',
    ...config,
  } as YieldExpression;
}

class YieldBuilder implements BuilderTerminal<YieldExpression> {
  private _children?: string;

  constructor() {}

  children(value: string): this {
    this._children = value;
    return this;
  }

  build(): YieldExpression {
    return yieldExpression({
      children: this._children,
    } as YieldExpressionConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function yield_(): YieldBuilder {
  return new YieldBuilder();
}
