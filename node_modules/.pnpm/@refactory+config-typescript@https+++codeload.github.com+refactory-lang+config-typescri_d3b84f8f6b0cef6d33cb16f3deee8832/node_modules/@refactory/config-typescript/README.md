# @refactory/config-typescript

Shared TypeScript toolchain configuration for all [refactory-lang](https://github.com/refactory-lang) repositories.

## Install

```bash
pnpm add -D @refactory/config-typescript@github:refactory-lang/config-typescript
```

## Usage

### tsconfig.json

```json
{
  "extends": "@refactory/config-typescript/tsconfig.base.json",
  "include": ["src/**/*.ts"]
}
```

### oxlint

```bash
oxlint -c node_modules/@refactory/config-typescript/oxlintrc.json .
```

### oxfmt

```bash
oxfmt --config node_modules/@refactory/config-typescript/oxfmt.json .
```

### package.json scripts

```json
{
  "scripts": {
    "typecheck": "tsgo --noEmit",
    "lint": "oxlint -c node_modules/@refactory/config-typescript/oxlintrc.json .",
    "format": "oxfmt --config node_modules/@refactory/config-typescript/oxfmt.json ."
  }
}
```

## What's included

| File | Purpose |
|------|---------|
| `tsconfig.base.json` | Strict ESNext + NodeNext, `verbatimModuleSyntax`, `isolatedModules` |
| `oxlintrc.json` | `eqeqeq`, `no-eval`, `no-var`, `prefer-const`, `no-throw-literal` |
| `oxfmt.json` | 2-space indent, 100-char width, single quotes, trailing commas |

## Toolchain

All refactory-lang TypeScript repos use:

| Tool | Purpose |
|------|---------|
| `pnpm` | Package manager |
| `@typescript/native-preview` (tsgo) | Type checking |
| `oxlint` | Linting |
| `oxfmt` | Formatting |
| `vitest` | Testing |
