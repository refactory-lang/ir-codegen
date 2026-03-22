/**
 * Naming conventions for converting tree-sitter grammar node kinds
 * to TypeScript identifiers.
 */

const SUFFIXES = ['_item', '_declaration', '_statement', '_expression'] as const;

const JS_RESERVED = new Set([
  'if', 'for', 'while', 'class', 'import', 'export', 'type', 'in', 'do',
  'switch', 'return', 'break', 'continue', 'default', 'new', 'delete',
  'throw', 'try', 'catch', 'finally', 'with', 'yield', 'super', 'this',
  'void', 'typeof', 'instanceof', 'enum', 'const', 'let', 'var',
  'function', 'extends', 'implements', 'interface', 'package', 'private',
  'protected', 'public', 'static', 'struct', 'use',
]);

const SHORT_NAME_ALIASES: Record<string, string> = {
  function_item: 'fn',
  source_file: 'file',
  program: 'file',
};

/** Convert snake_case to camelCase */
function snakeToCamel(s: string): string {
  return s.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}

/** Convert snake_case to PascalCase */
function snakeToPascal(s: string): string {
  const camel = snakeToCamel(s);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

/** Strip known suffixes from a kind string */
function stripSuffix(kind: string): string {
  for (const suffix of SUFFIXES) {
    if (kind.endsWith(suffix)) {
      return kind.slice(0, -suffix.length);
    }
  }
  return kind;
}

/** snake_case to camelCase: `struct_item` -> `structItem` */
export function toFactoryName(kind: string): string {
  return snakeToCamel(kind);
}

/** snake_case to PascalCase: `struct_item` -> `StructItem` */
export function toTypeName(kind: string): string {
  return snakeToPascal(kind);
}

/** Strip suffix, PascalCase + "Builder": `struct_item` -> `StructBuilder` */
export function toBuilderClassName(kind: string): string {
  return snakeToPascal(stripSuffix(kind)) + 'Builder';
}

/**
 * Ergonomic short name for fluent API.
 * Uses hardcoded aliases for common kinds, strips suffixes,
 * and appends `_` if the result is a JS reserved word.
 */
export function toShortName(kind: string): string {
  if (SHORT_NAME_ALIASES[kind] !== undefined) {
    return SHORT_NAME_ALIASES[kind];
  }
  const shortName = stripSuffix(kind);
  if (JS_RESERVED.has(shortName)) {
    return shortName + '_';
  }
  return shortName;
}

/** kebab-case without suffix: `struct_item` -> `struct` */
export function toFileName(kind: string): string {
  const stripped = stripSuffix(kind);
  return stripped.replace(/_/g, '-');
}

/** PascalCase + "Types": `rust` -> `RustTypes` */
export function toGrammarTypeName(grammar: string): string {
  return snakeToPascal(grammar) + 'Types';
}

/** snake_case to camelCase: `return_type` -> `returnType` */
export function toFieldName(field: string): string {
  return snakeToCamel(field);
}
