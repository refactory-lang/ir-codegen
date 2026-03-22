import type { BuilderTerminal } from '@refactory/grammar-types';
import type { TypeBinding, TypeBindingConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function typeBinding(config: TypeBindingConfig): TypeBinding {
  return {
    kind: 'type_binding',
    ...config,
  } as TypeBinding;
}

class TypeBindingBuilder implements BuilderTerminal<TypeBinding> {
  private _name: string;
  private _type: string;
  private _typeArguments?: string;

  constructor(name: string) {
    this._name = name;
  }

  type(value: string): this {
    this._type = value;
    return this;
  }

  typeArguments(value: string): this {
    this._typeArguments = value;
    return this;
  }

  build(): TypeBinding {
    return typeBinding({
      name: this._name,
      type: this._type,
      typeArguments: this._typeArguments,
    } as TypeBindingConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function type_binding(name: string): TypeBindingBuilder {
  return new TypeBindingBuilder(name);
}
