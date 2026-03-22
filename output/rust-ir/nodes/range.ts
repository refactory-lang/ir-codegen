import type { BuilderTerminal } from '@refactory/grammar-types';
import type { RangeExpression, RangeExpressionConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function rangeExpression(config: RangeExpressionConfig): RangeExpression {
  return {
    kind: 'range_expression',
    ...config,
  } as RangeExpression;
}

class RangeBuilder implements BuilderTerminal<RangeExpression> {
  private _children: string[] = [];

  constructor() {}

  children(value: string[]): this {
    this._children = value;
    return this;
  }

  build(): RangeExpression {
    return rangeExpression({
      children: this._children,
    } as RangeExpressionConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function range(): RangeBuilder {
  return new RangeBuilder();
}
