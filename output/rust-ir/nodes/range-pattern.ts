import type { BuilderTerminal } from '@refactory/grammar-types';
import type { RangePattern, RangePatternConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function rangePattern(config: RangePatternConfig): RangePattern {
  return {
    kind: 'range_pattern',
    ...config,
  } as RangePattern;
}

class RangePatternBuilder implements BuilderTerminal<RangePattern> {
  private _children: string[] = [];

  constructor(children: string) {
    this._children = children;
  }

  build(): RangePattern {
    return rangePattern({
      children: this._children,
    } as RangePatternConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function range_pattern(children: string): RangePatternBuilder {
  return new RangePatternBuilder(children);
}
