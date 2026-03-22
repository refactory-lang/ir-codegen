# @refactory/ir-codegen

Code generator for IR builders -- reads tree-sitter grammar definitions and generates typed builder factories, fluent Builder classes, fluent `ir` namespace, renderers, and test scaffolding.

## What it does

Given a tree-sitter grammar and a list of node kinds, `ir-codegen` generates:

1. **Type definitions** -- Grammar-derived TypeScript types for all IR nodes
2. **Builder factory functions** -- Type-safe factory functions (e.g., `structItem()`, `functionItem()`) that create IR nodes
3. **Fluent Builder classes** -- Builder classes implementing `BuilderTerminal` from `@refactory/grammar-types` with fluent setter methods
4. **Fluent `ir` namespace** -- Short-name namespace (e.g., `ir.fn()`, `ir.structItem()`) mapping to builder constructors
5. **Render scaffold** -- Switch cases for a recursive renderer that converts IR nodes back to source code
6. **Test scaffolding** -- Vitest test files with round-trip validation (build -> render -> parse -> validate)
7. **Barrel index** -- Re-exports for all generated modules

## Usage

### CLI

```bash
# Generate rust-ir into an output directory
npx tsx scripts/generate-rust-ir.ts [output-dir]
```

### Programmatic API

```ts
import { generate, listNodeKinds } from '@refactory/ir-codegen';

generate({
  grammar: 'rust',
  nodes: listNodeKinds('rust'),
  outputDir: 'src',
});
```

The generator reads grammar `.d.ts` files, extracts node metadata (fields, children, required/optional), and emits all output files.

### Generated output structure

```
<outputDir>/
├── index.ts           # Barrel re-exports
├── types.ts           # Grammar-derived node types
├── fluent.ts          # ir.* namespace
├── render.ts          # Render switch-case scaffold (hand-edit cases)
├── render-valid.ts    # render() / renderSilent() pipeline
├── validate-fast.ts   # Regex-based validation scaffold
└── nodes/
    ├── struct-item.ts     # structItem() factory + StructItemBuilder
    ├── function-item.ts   # functionItem() factory + FunctionItemBuilder
    ├── ...                # One file per node kind (134 for Rust)
```

## Source files

| File | Purpose |
|------|---------|
| `src/grammar-reader.ts` | Reads grammar `.d.ts` files, extracts node metadata |
| `src/naming.ts` | Naming conventions -- PascalCase types, camelCase builders, fluent keys |
| `src/emitters/types.ts` | Emits grammar-derived TypeScript type definitions |
| `src/emitters/builder.ts` | Emits factory function + fluent Builder class per node kind |
| `src/emitters/fluent.ts` | Emits `ir.*` namespace |
| `src/emitters/index-file.ts` | Emits barrel index |
| `src/emitters/render-scaffold.ts` | Emits render switch-case scaffold |
| `src/emitters/test.ts` | Emits vitest test scaffold per node kind |

## Templates

The code generator uses template strings in `src/templates/`:

- `builder.ts.template` -- Factory function + fluent Builder class with type imports and field assignments
- `fluent-namespace.ts.template` -- `ir` namespace object mapping short names to builder constructors
- `render-case.ts.template` -- Switch case template for the recursive renderer
- `test.ts.template` -- Vitest test template with round-trip validation

## How it relates to other packages

- **@refactory/grammar-types** -- Provides the type-level machinery (`NodeType`, `BuilderConfig`, `BuilderTerminal`) that generated code imports
- **rust-ir** -- The primary consumer; regenerated from ir-codegen with 134 node kinds from the tree-sitter-rust grammar

## Installation

```bash
pnpm add @refactory/ir-codegen
```

## Requirements

- Node.js 20+
- `@codemod.com/jssg-types` for grammar type definitions
- `@refactory/grammar-types` for type projections
