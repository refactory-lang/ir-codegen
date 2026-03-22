import type { BuilderTerminal } from '@refactory/grammar-types';
import type { Label, LabelConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

function createLabel(config: LabelConfig): Label {
  return {
    kind: 'label',
    ...config,
  } as Label;
}

class LabelBuilder implements BuilderTerminal<Label> {
  private _children: string;

  constructor(children: string) {
    this._children = children;
  }

  build(): Label {
    return createLabel({
      children: this._children,
    } as LabelConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function label(children: string): LabelBuilder {
  return new LabelBuilder(children);
}
