import type { BuilderTerminal } from '@refactory/grammar-types';
import type { TraitBounds, TraitBoundsConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function traitBounds(config: TraitBoundsConfig): TraitBounds {
  return {
    kind: 'trait_bounds',
    ...config,
  } as TraitBounds;
}

class TraitBoundsBuilder implements BuilderTerminal<TraitBounds> {
  private _children: string[] = [];

  constructor(children: string) {
    this._children = children;
  }

  build(): TraitBounds {
    return traitBounds({
      children: this._children,
    } as TraitBoundsConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function trait_bounds(children: string): TraitBoundsBuilder {
  return new TraitBoundsBuilder(children);
}
