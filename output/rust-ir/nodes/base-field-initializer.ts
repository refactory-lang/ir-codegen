import type { BuilderTerminal } from '@refactory/grammar-types';
import type { BaseFieldInitializer, BaseFieldInitializerConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function baseFieldInitializer(config: BaseFieldInitializerConfig): BaseFieldInitializer {
  return {
    kind: 'base_field_initializer',
    ...config,
  } as BaseFieldInitializer;
}

class BaseFieldInitializerBuilder implements BuilderTerminal<BaseFieldInitializer> {
  private _children: string;

  constructor(children: string) {
    this._children = children;
  }

  build(): BaseFieldInitializer {
    return baseFieldInitializer({
      children: this._children,
    } as BaseFieldInitializerConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function base_field_initializer(children: string): BaseFieldInitializerBuilder {
  return new BaseFieldInitializerBuilder(children);
}
