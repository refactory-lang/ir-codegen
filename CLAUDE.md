## Project: ir-codegen

Code generator for IR builders. Part of the [refactory-lang](https://github.com/refactory-lang) organization. Reads tree-sitter grammar definitions from `@codemod.com/jssg-types` and generates typed builder factories, fluent Builder classes, fluent `ir` namespace, renderers, and test scaffolding.

### Architecture

- **Entry** (`src/index.ts`): `CodegenConfig` interface and `generate()` function (fully implemented)
- **Grammar Reader** (`src/grammar-reader.ts`): Reads `.d.ts` grammar files, extracts node metadata (fields, children, required/optional)
- **Naming** (`src/naming.ts`): Naming conventions — PascalCase types, camelCase builders, fluent namespace keys
- **Emitters** (`src/emitters/`): Code generation modules, one per output concern
  - `types.ts` — Grammar-derived TypeScript type definitions
  - `builder.ts` — Factory function + fluent Builder class (implements `BuilderTerminal`)
  - `fluent.ts` — `ir.*` namespace mapping short names to builder constructors
  - `index-file.ts` — `index.ts` barrel re-exports
  - `render-scaffold.ts` — Render switch-case scaffold
  - `render-valid.ts` — `render()` / `renderSilent()` pipeline scaffold
  - `validate.ts` — Validation scaffold
  - `config.ts` — Config/constants scaffold
  - `test.ts` — Vitest test scaffold per node kind
- **Templates** (`src/templates/`): Template strings for generated code
  - `builder.ts.template` — factory function + fluent Builder class implementing `BuilderTerminal` from `@refactory/grammar-types`, with fluent setter methods and `render()`/`renderSilent()` terminals
  - `fluent-namespace.ts.template` — generates the `ir` namespace object that maps short names (e.g., `ir.fn()`, `ir.structItem()`) to fluent builder constructors
  - `render-case.ts.template` — switch case template
  - `test.ts.template` — vitest test template (includes fluent API test cases)

### Running

```bash
pnpm typecheck     # type check (tsgo)
pnpm test          # run tests (vitest) — 67 tests passing
pnpm lint          # lint (oxlint)
pnpm format        # format (oxfmt)

# Generate rust-ir output
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

### Key Files

| File | Purpose |
|------|---------|
| `src/index.ts` | Public API: `CodegenConfig`, `GeneratedFiles`, `generate()` |
| `src/grammar-reader.ts` | Grammar `.d.ts` reader — extracts node metadata |
| `src/naming.ts` | Naming conventions (PascalCase, camelCase, fluent keys) |
| `src/emitters/types.ts` | Type definitions emitter |
| `src/emitters/builder.ts` | Builder factory + fluent class emitter |
| `src/emitters/fluent.ts` | `ir` namespace emitter |
| `src/emitters/index-file.ts` | Barrel index emitter |
| `src/emitters/render-scaffold.ts` | Render switch-case scaffold emitter |
| `src/emitters/test.ts` | Vitest test scaffold emitter |
| `src/templates/builder.ts.template` | Builder factory function + fluent Builder class (implements BuilderTerminal) |
| `src/templates/fluent-namespace.ts.template` | `ir` namespace mapping short names to builder constructors |
| `src/templates/render-case.ts.template` | Render switch case template |
| `src/templates/test.ts.template` | Vitest test template (includes fluent API tests) |
| `package.json` | Package config |

### Conventions

- Generated code imports types from `@refactory/grammar-types`
- Templates use `{{PLACEHOLDER}}` syntax for variable substitution
- Package ships TypeScript source directly; consumers must use a TS-aware bundler or the Codemod JSSG runtime
- Uses `pnpm` as package manager
- Type checking via `tsgo` (native TypeScript compiler)
- `generate()` reads grammar `.d.ts` files and emits: types, builder factories, fluent Builder classes, fluent `ir` namespace, render scaffolds, and tests

### Speckit Workflow

This repo uses [speckit](https://github.com/speckit) for specification-driven development.

- **Specs**: `specs/<NNN-feature-name>/spec.md` -- feature specifications
- **Plans**: `specs/<NNN-feature-name>/plan.md` -- implementation plans with tasks
- **Checklists**: `specs/<NNN-feature-name>/checklists/` -- quality gates
- **Templates**: `.specify/templates/` -- spec, plan, task, checklist templates
- **Extensions**: `.specify/extensions/` -- verify, sync, review, workflow hooks

**Branch convention**: Feature branches are named `<NNN>-<short-name>` matching the spec directory.

**Issue -> Spec flow**: Issues labeled `ready-to-spec` trigger the `ready-to-spec-notify` workflow, which assigns Copilot to run the speckit workflow and produce a spec + plan + tasks.
