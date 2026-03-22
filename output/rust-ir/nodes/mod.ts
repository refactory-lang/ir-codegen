import type { BuilderTerminal } from '@refactory/grammar-types';
import type { ModItem, ModItemConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function modItem(config: ModItemConfig): ModItem {
  return {
    kind: 'mod_item',
    ...config,
  } as ModItem;
}

class ModBuilder implements BuilderTerminal<ModItem> {
  private _body?: string;
  private _name: string;
  private _children?: string;

  constructor(name: string) {
    this._name = name;
  }

  body(value: string): this {
    this._body = value;
    return this;
  }

  children(value: string): this {
    this._children = value;
    return this;
  }

  build(): ModItem {
    return modItem({
      body: this._body,
      name: this._name,
      children: this._children,
    } as ModItemConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function mod(name: string): ModBuilder {
  return new ModBuilder(name);
}
