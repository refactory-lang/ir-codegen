import type { BuilderTerminal } from '@refactory/grammar-types';
import type { SelfParameter, SelfParameterConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function selfParameter(config: SelfParameterConfig): SelfParameter {
  return {
    kind: 'self_parameter',
    ...config,
  } as SelfParameter;
}

class SelfParameterBuilder implements BuilderTerminal<SelfParameter> {
  private _children: string[] = [];

  constructor(children: string) {
    this._children = children;
  }

  build(): SelfParameter {
    return selfParameter({
      children: this._children,
    } as SelfParameterConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function self_parameter(children: string): SelfParameterBuilder {
  return new SelfParameterBuilder(children);
}
