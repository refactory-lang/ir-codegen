import type { BuilderTerminal } from '@refactory/grammar-types';
import type { SlicePattern, SlicePatternConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function slicePattern(config: SlicePatternConfig): SlicePattern {
  return {
    kind: 'slice_pattern',
    ...config,
  } as SlicePattern;
}

class SlicePatternBuilder implements BuilderTerminal<SlicePattern> {
  private _children: string[] = [];

  constructor() {}

  children(value: string[]): this {
    this._children = value;
    return this;
  }

  build(): SlicePattern {
    return slicePattern({
      children: this._children,
    } as SlicePatternConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function slice_pattern(): SlicePatternBuilder {
  return new SlicePatternBuilder();
}
