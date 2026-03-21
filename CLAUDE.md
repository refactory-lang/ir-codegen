## Project: ir-codegen

Code generator for IR builders. Part of the [refactory-lang](https://github.com/refactory-lang) organization. Reads tree-sitter grammar definitions from `@codemod.com/jssg-types` and generates typed builder factories, renderers, and test scaffolding.

### Architecture

- **Entry** (`src/index.ts`): `CodegenConfig` interface and `generate()` function
- **CLI** (`src/cli.ts`): Command-line entry point with argument parsing
- **Templates** (`src/templates/`): Template strings for generated code
  - `builder.ts.template` -- factory function + fluent Builder class implementing `BuilderTerminal` from `@refactory/grammar-types`, with fluent setter methods and `render()`/`renderSilent()` terminals
  - `fluent-namespace.ts.template` -- generates the `ir` namespace object that maps short names (e.g., `ir.fn()`, `ir.struct()`) to fluent builder constructors
  - `render-case.ts.template` -- switch case template
  - `test.ts.template` -- vitest test template (includes fluent API test cases)

### Running

```bash
pnpm typecheck     # type check (tsgo)
pnpm test          # run tests (vitest)
pnpm lint          # lint (oxlint)
pnpm format        # format (oxfmt)
```

### Key Files

| File | Purpose |
|------|---------|
| `src/index.ts` | Public API: `CodegenConfig`, `GeneratedFiles`, `generate()` |
| `src/cli.ts` | CLI entry point |
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

### Speckit Workflow

This repo uses [speckit](https://github.com/speckit) for specification-driven development.

- **Specs**: `specs/<NNN-feature-name>/spec.md` -- feature specifications
- **Plans**: `specs/<NNN-feature-name>/plan.md` -- implementation plans with tasks
- **Checklists**: `specs/<NNN-feature-name>/checklists/` -- quality gates
- **Templates**: `.specify/templates/` -- spec, plan, task, checklist templates
- **Extensions**: `.specify/extensions/` -- verify, sync, review, workflow hooks

**Branch convention**: Feature branches are named `<NNN>-<short-name>` matching the spec directory.

**Issue -> Spec flow**: Issues labeled `ready-to-spec` trigger the `ready-to-spec-notify` workflow, which assigns Copilot to run the speckit workflow and produce a spec + plan + tasks.
