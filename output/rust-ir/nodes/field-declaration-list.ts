import type { BuilderTerminal } from '@refactory/grammar-types';
import type { FieldDeclarationList, FieldDeclarationListConfig } from '../types.ts';
import { renderSilent } from '../render.ts';
import { assertValid } from '../validate-fast.ts';

export function fieldDeclarationList(config: FieldDeclarationListConfig): FieldDeclarationList {
  return {
    kind: 'field_declaration_list',
    ...config,
  } as FieldDeclarationList;
}

class FieldDeclarationListBuilder implements BuilderTerminal<FieldDeclarationList> {
  private _children: string[] = [];

  constructor() {}

  children(value: string[]): this {
    this._children = value;
    return this;
  }

  build(): FieldDeclarationList {
    return fieldDeclarationList({
      children: this._children,
    } as FieldDeclarationListConfig);
  }

  render(): string {
    return assertValid(renderSilent(this.build()));
  }

  renderSilent(): string {
    return renderSilent(this.build());
  }
}

export function field_declaration_list(): FieldDeclarationListBuilder {
  return new FieldDeclarationListBuilder();
}
