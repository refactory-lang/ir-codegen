import type { BuilderTerminal } from '@refactory/grammar-types';
import type { EnumVariant, EnumVariantConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function enumVariant(config: EnumVariantConfig): EnumVariant {
  return {
    kind: 'enum_variant',
    ...config,
  } as EnumVariant;
}

class EnumVariantBuilder implements BuilderTerminal<EnumVariant> {
  private _body?: string;
  private _name: string;
  private _value?: string;
  private _children?: string;

  constructor(name: string) {
    this._name = name;
  }

  body(value: string): this {
    this._body = value;
    return this;
  }

  value(value: string): this {
    this._value = value;
    return this;
  }

  children(value: string): this {
    this._children = value;
    return this;
  }

  build(): EnumVariant {
    return enumVariant({
      body: this._body,
      name: this._name,
      value: this._value,
      children: this._children,
    } as EnumVariantConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function enum_variant(name: string): EnumVariantBuilder {
  return new EnumVariantBuilder(name);
}
