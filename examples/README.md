# ir-codegen examples

Hand-expanded reference output showing what ir-codegen produces for different grammars.
Compare these with the reference implementation in [rust-ir](https://github.com/refactory-lang/rust-ir).

## Composition pattern

Nodes are composed bottom-up into a tree. `.build()` creates IR nodes, `.render()` is called **once at the root**.

```ts
// Build child nodes (no rendering yet)
const useHashMap = ir.use('std::collections::HashMap').build();
const point = ir.struct('Point').pub().body('pub x: f64,\npub y: f64').build();
const distance = ir.fn('distance').pub()
  .params('a: &Point', 'b: &Point')
  .returns('f64')
  .body('((a.x - b.x).powi(2) + (a.y - b.y).powi(2)).sqrt()')
  .build();

// Compose into source file and render once
const source = ir.file([useHashMap, point, distance]).render();
```

This produces validated Rust source in a single pass:
```rust
use std::collections::HashMap;

pub struct Point {
    pub x: f64,
    pub y: f64,
}

pub fn distance(a: &Point, b: &Point) -> f64 {
    ((a.x - b.x).powi(2) + (a.y - b.y).powi(2)).sqrt()
}
```

## Cross-language comparison

All three grammars follow the same `BuilderTerminal` pattern from `@refactory/grammar-types`.

### Rust — complete file

```ts
import { ir } from '@refactory/rust-ir';

const items = [
  ir.use('std::collections::HashMap').build(),
  ir.struct('Config').pub().body('pub name: String,\npub value: i64').build(),
  ir.fn('new_config').pub()
    .params('name: &str', 'value: i64')
    .returns('Config')
    .body('Config { name: name.to_string(), value }')
    .build(),
];
const source = ir.file(items).render();
```

### Go — complete file

```ts
import { ir } from './examples/go';

const items = [
  ir.import('"fmt"').build(),
  ir.type('Config struct {\n\tName  string\n\tValue int\n}').build(),
  ir.fn('NewConfig').params('name string', 'value int').returns('Config')
    .body('return Config{Name: name, Value: value}')
    .build(),
  ir.fn('main')
    .body('c := NewConfig("test", 42)\nfmt.Println(c.Name)')
    .build(),
];
const source = ir.file(items).render();
```

### TypeScript — complete file

```ts
import { ir } from './examples/typescript';

const items = [
  ir.import("'./types'").named('Config').build(),
  ir.interface('Shape').body('area(): number;\nperimeter(): number;').build(),
  ir.class('Circle').implements_('Shape')
    .body('constructor(public radius: number) {}\n\narea() {\n  return Math.PI * this.radius ** 2;\n}')
    .build(),
  ir.type('ShapeOrNull', 'Shape | null').build(),
];
const source = ir.file(items).render();
```

## Builder terminals

Every builder has three terminal methods:

| Method | Purpose | When to use |
|--------|---------|-------------|
| `.build()` | Return raw IR node | Composing into a parent node |
| `.render()` | Render with validation | Root-level render (once per file) |
| `.renderSilent()` | Render without validation | Intermediate fragments combined with validation later |

**Rule: `.build()` for composition, `.render()` at the root.**

## Structure

Each example follows the same file layout:

```
examples/<grammar>/
├── src/
│   ├── index.ts           # Public API re-exports
│   ├── types.ts           # Grammar-derived node types + configs
│   ├── render.ts          # Renderer + validator
│   ├── fluent.ts          # ir.* namespace
│   └── nodes/
│       ├── function.ts    # Factory + fluent builder
│       ├── ...            # One file per node kind
```

## Pattern

Every builder file follows the same template:

1. **Factory function** — `functionDeclaration(config)` creates the raw IR node
2. **Builder class** — `FunctionBuilder implements BuilderTerminal<FunctionDeclaration>` with fluent setters
3. **Short-name export** — `fn(name)` returns a new builder instance
4. **Namespace wiring** — `ir.fn` maps to the short-name export
