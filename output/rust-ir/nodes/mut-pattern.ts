import type { BuilderTerminal } from '@refactory/grammar-types';
import type { MutPattern, MutPatternConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function mutPattern(config: MutPatternConfig): MutPattern {
  return {
    kind: 'mut_pattern',
    ...config,
  } as MutPattern;
}

class MutPatternBuilder implements BuilderTerminal<MutPattern> {
  private _children: string[] = [];

  constructor(children: string) {
    this._children = children;
  }

  build(): MutPattern {
    return mutPattern({
      children: this._children,
    } as MutPatternConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function mut_pattern(children: string): MutPatternBuilder {
  return new MutPatternBuilder(children);
}
