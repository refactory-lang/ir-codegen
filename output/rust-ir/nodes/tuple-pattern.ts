import type { BuilderTerminal } from '@refactory/grammar-types';
import type { TuplePattern, TuplePatternConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function tuplePattern(config: TuplePatternConfig): TuplePattern {
  return {
    kind: 'tuple_pattern',
    ...config,
  } as TuplePattern;
}

class TuplePatternBuilder implements BuilderTerminal<TuplePattern> {
  private _children: string[] = [];

  constructor() {}

  children(value: string[]): this {
    this._children = value;
    return this;
  }

  build(): TuplePattern {
    return tuplePattern({
      children: this._children,
    } as TuplePatternConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function tuple_pattern(): TuplePatternBuilder {
  return new TuplePatternBuilder();
}
