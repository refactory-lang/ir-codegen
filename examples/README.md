# ir-codegen examples

Hand-expanded reference output showing what ir-codegen produces for different grammars.
Compare these with the reference implementation in [rust-ir](https://github.com/refactory-lang/rust-ir).

## Fluent API comparison

All three grammars follow the same `BuilderTerminal` pattern from `@refactory/grammar-types`.

### Functions

```ts
// Rust
ir.fn('greet').pub().params('name: &str').returns('String')
  .body('format!("Hello, {name}")').render()
// → pub fn greet(name: &str) -> String {
//       format!("Hello, {name}")
//   }

// Go
ir.fn('greet').params('name string').returns('string')
  .body('return fmt.Sprintf("Hello, %s", name)').render()
// → func greet(name string) string {
//   	return fmt.Sprintf("Hello, %s", name)
//   }

// TypeScript
ir.fn('greet').params('name: string').returns('string')
  .body('return `Hello, ${name}`').render()
// → function greet(name: string): string {
//     return `Hello, ${name}`
//   }
```

### Types / Structs / Classes

```ts
// Rust — struct
ir.struct('Point').pub().body('pub x: f64,\npub y: f64').render()
// → pub struct Point {
//       pub x: f64,
//       pub y: f64,
//   }

// Go — type declaration
ir.type('Point struct {\n\tX float64\n\tY float64\n}').render()
// → type Point struct {
//   	X float64
//   	Y float64
//   }

// TypeScript — interface
ir.interface('Point').body('x: number;\ny: number;').render()
// → interface Point {
//     x: number;
//     y: number;
//   }

// TypeScript — class
ir.class('Point').extends_('Base').body('x = 0;\ny = 0;').render()
// → class Point extends Base {
//     x = 0;
//     y = 0;
//   }

// TypeScript — type alias
ir.type('ID', 'string | number').render()
// → type ID = string | number;
```

### Imports

```ts
// Rust
ir.use('std::collections::HashMap').render()
// → use std::collections::HashMap;

// Go
ir.import('"fmt"').render()
// → import "fmt"

// TypeScript
ir.import("'./utils'").named('foo', 'bar').render()
// → import { foo, bar } from './utils';
```

### Conditionals

```ts
// Rust
ir.if('x > 0').then('x').else_('-x').render()
// → if x > 0 {
//       x
//   } else {
//       -x
//   }

// Go (with initializer)
ir.if('err != nil').init('err := doWork()').then('return err').render()
// → if err := doWork(); err != nil {
//   	return err
//   }

// TypeScript
ir.if('x > 0').then('return x').else_('return -x').render()
// → if (x > 0) {
//     return x
//   } else {
//     return -x
//   }
```

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
