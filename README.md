# @refactory/ir-codegen

Code generator for IR builders -- reads tree-sitter grammar definitions and generates typed builder factories, renderers, and test scaffolding.

## What it does

Given a tree-sitter grammar and a list of node kinds, `ir-codegen` generates:

1. **Builder factory functions** -- Type-safe factory functions (e.g., `structItem()`, `functionItem()`) that create IR nodes
2. **Render switch cases** -- Cases for a recursive renderer that converts IR nodes back to source code
3. **Test scaffolding** -- Vitest test files with round-trip validation (build -> render -> parse -> validate)
4. **Type re-exports** -- Convenience type definitions derived from `@refactory/grammar-types`

## Usage

### CLI

```bash
# Generate builders for specific node kinds
ir-codegen --grammar rust --nodes struct_item,function_item --output src/generated/

# Use a config file
ir-codegen --config ir-codegen.json
```

### Programmatic API

```ts
import { generate } from '@refactory/ir-codegen';

const result = generate({
  grammar: 'rust',
  nodes: ['struct_item', 'function_item', 'impl_item'],
  outputDir: 'src/generated/',
  aliases: {
    parameter: { pattern: 'name' },
  },
  defaultableFields: ['body', 'typeParameters', 'children'],
});

// result.builders  -- Map<string, string> of builder source files
// result.renderer  -- render.ts source with all switch cases
// result.tests     -- Map<string, string> of test source files
// result.types     -- type re-exports source
```

### Config file format

```json
{
  "grammar": "rust",
  "nodes": ["struct_item", "function_item", "impl_item"],
  "outputDir": "src/generated/",
  "aliases": {
    "parameter": { "pattern": "name" }
  },
  "defaultableFields": ["body", "typeParameters", "children"]
}
```

## Templates

The code generator uses template strings in `src/templates/`:

- `builder.ts.template` -- Factory function template with type imports and field assignments
- `render-case.ts.template` -- Switch case template for the recursive renderer
- `test.ts.template` -- Vitest test template with round-trip validation

## How it relates to other packages

- **@refactory/grammar-types** -- Provides the type-level machinery (`NodeType`, `BuilderConfig`) that generated code imports
- **rust-ir** -- The first consumer; its hand-written builders serve as the reference implementation for generated output

## Installation

```bash
pnpm add @refactory/ir-codegen
```

## Requirements

- Node.js 20+
- `@codemod.com/jssg-types` for grammar type definitions
- `@refactory/grammar-types` for type projections
