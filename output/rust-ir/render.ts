import type { RustIrNode } from './types.ts';
import { assertValid } from './validate-fast.ts';

/** Indent each line of `text` by `level` tabs. */
export function indent(text: string, level = 1): string {
  const prefix = '\t'.repeat(level);
  return text
    .split('\n')
    .map((line) => (line.trim() ? prefix + line : line))
    .join('\n');
}

/** Render an IR node to source text (no validation). */
export function renderSilent(node: RustIrNode): string {
  switch (node.kind) {
    case 'abstract_type': {
      // TODO: implement rendering for abstract_type
      const _typed = node as unknown as import('./types.ts').AbstractType;
      return '';
    }
    case 'arguments': {
      // TODO: implement rendering for arguments
      const _typed = node as unknown as import('./types.ts').Arguments;
      return '';
    }
    case 'array_expression': {
      // TODO: implement rendering for array_expression
      const _typed = node as unknown as import('./types.ts').ArrayExpression;
      return '';
    }
    case 'array_type': {
      // TODO: implement rendering for array_type
      const _typed = node as unknown as import('./types.ts').ArrayType;
      return '';
    }
    case 'assignment_expression': {
      // TODO: implement rendering for assignment_expression
      const _typed = node as unknown as import('./types.ts').AssignmentExpression;
      return '';
    }
    case 'associated_type': {
      // TODO: implement rendering for associated_type
      const _typed = node as unknown as import('./types.ts').AssociatedType;
      return '';
    }
    case 'async_block': {
      // TODO: implement rendering for async_block
      const _typed = node as unknown as import('./types.ts').AsyncBlock;
      return '';
    }
    case 'attribute': {
      // TODO: implement rendering for attribute
      const _typed = node as unknown as import('./types.ts').Attribute;
      return '';
    }
    case 'attribute_item': {
      // TODO: implement rendering for attribute_item
      const _typed = node as unknown as import('./types.ts').AttributeItem;
      return '';
    }
    case 'await_expression': {
      // TODO: implement rendering for await_expression
      const _typed = node as unknown as import('./types.ts').AwaitExpression;
      return '';
    }
    case 'base_field_initializer': {
      // TODO: implement rendering for base_field_initializer
      const _typed = node as unknown as import('./types.ts').BaseFieldInitializer;
      return '';
    }
    case 'binary_expression': {
      // TODO: implement rendering for binary_expression
      const _typed = node as unknown as import('./types.ts').BinaryExpression;
      return '';
    }
    case 'block': {
      // TODO: implement rendering for block
      const _typed = node as unknown as import('./types.ts').Block;
      return '';
    }
    case 'block_comment': {
      // TODO: implement rendering for block_comment
      const _typed = node as unknown as import('./types.ts').BlockComment;
      return '';
    }
    case 'bounded_type': {
      // TODO: implement rendering for bounded_type
      const _typed = node as unknown as import('./types.ts').BoundedType;
      return '';
    }
    case 'bracketed_type': {
      // TODO: implement rendering for bracketed_type
      const _typed = node as unknown as import('./types.ts').BracketedType;
      return '';
    }
    case 'break_expression': {
      // TODO: implement rendering for break_expression
      const _typed = node as unknown as import('./types.ts').BreakExpression;
      return '';
    }
    case 'call_expression': {
      // TODO: implement rendering for call_expression
      const _typed = node as unknown as import('./types.ts').CallExpression;
      return '';
    }
    case 'captured_pattern': {
      // TODO: implement rendering for captured_pattern
      const _typed = node as unknown as import('./types.ts').CapturedPattern;
      return '';
    }
    case 'closure_expression': {
      // TODO: implement rendering for closure_expression
      const _typed = node as unknown as import('./types.ts').ClosureExpression;
      return '';
    }
    case 'closure_parameters': {
      // TODO: implement rendering for closure_parameters
      const _typed = node as unknown as import('./types.ts').ClosureParameters;
      return '';
    }
    case 'compound_assignment_expr': {
      // TODO: implement rendering for compound_assignment_expr
      const _typed = node as unknown as import('./types.ts').CompoundAssignmentExpr;
      return '';
    }
    case 'const_block': {
      // TODO: implement rendering for const_block
      const _typed = node as unknown as import('./types.ts').ConstBlock;
      return '';
    }
    case 'const_item': {
      // TODO: implement rendering for const_item
      const _typed = node as unknown as import('./types.ts').ConstItem;
      return '';
    }
    case 'const_parameter': {
      // TODO: implement rendering for const_parameter
      const _typed = node as unknown as import('./types.ts').ConstParameter;
      return '';
    }
    case 'constrained_type_parameter': {
      // TODO: implement rendering for constrained_type_parameter
      const _typed = node as unknown as import('./types.ts').ConstrainedTypeParameter;
      return '';
    }
    case 'continue_expression': {
      // TODO: implement rendering for continue_expression
      const _typed = node as unknown as import('./types.ts').ContinueExpression;
      return '';
    }
    case 'declaration_list': {
      // TODO: implement rendering for declaration_list
      const _typed = node as unknown as import('./types.ts').DeclarationList;
      return '';
    }
    case 'dynamic_type': {
      // TODO: implement rendering for dynamic_type
      const _typed = node as unknown as import('./types.ts').DynamicType;
      return '';
    }
    case 'else_clause': {
      // TODO: implement rendering for else_clause
      const _typed = node as unknown as import('./types.ts').ElseClause;
      return '';
    }
    case 'enum_item': {
      // TODO: implement rendering for enum_item
      const _typed = node as unknown as import('./types.ts').EnumItem;
      return '';
    }
    case 'enum_variant': {
      // TODO: implement rendering for enum_variant
      const _typed = node as unknown as import('./types.ts').EnumVariant;
      return '';
    }
    case 'enum_variant_list': {
      // TODO: implement rendering for enum_variant_list
      const _typed = node as unknown as import('./types.ts').EnumVariantList;
      return '';
    }
    case 'expression_statement': {
      // TODO: implement rendering for expression_statement
      const _typed = node as unknown as import('./types.ts').ExpressionStatement;
      return '';
    }
    case 'extern_crate_declaration': {
      // TODO: implement rendering for extern_crate_declaration
      const _typed = node as unknown as import('./types.ts').ExternCrateDeclaration;
      return '';
    }
    case 'extern_modifier': {
      // TODO: implement rendering for extern_modifier
      const _typed = node as unknown as import('./types.ts').ExternModifier;
      return '';
    }
    case 'field_declaration': {
      // TODO: implement rendering for field_declaration
      const _typed = node as unknown as import('./types.ts').FieldDeclaration;
      return '';
    }
    case 'field_declaration_list': {
      // TODO: implement rendering for field_declaration_list
      const _typed = node as unknown as import('./types.ts').FieldDeclarationList;
      return '';
    }
    case 'field_expression': {
      // TODO: implement rendering for field_expression
      const _typed = node as unknown as import('./types.ts').FieldExpression;
      return '';
    }
    case 'field_initializer': {
      // TODO: implement rendering for field_initializer
      const _typed = node as unknown as import('./types.ts').FieldInitializer;
      return '';
    }
    case 'field_initializer_list': {
      // TODO: implement rendering for field_initializer_list
      const _typed = node as unknown as import('./types.ts').FieldInitializerList;
      return '';
    }
    case 'field_pattern': {
      // TODO: implement rendering for field_pattern
      const _typed = node as unknown as import('./types.ts').FieldPattern;
      return '';
    }
    case 'for_expression': {
      // TODO: implement rendering for for_expression
      const _typed = node as unknown as import('./types.ts').ForExpression;
      return '';
    }
    case 'for_lifetimes': {
      // TODO: implement rendering for for_lifetimes
      const _typed = node as unknown as import('./types.ts').ForLifetimes;
      return '';
    }
    case 'foreign_mod_item': {
      // TODO: implement rendering for foreign_mod_item
      const _typed = node as unknown as import('./types.ts').ForeignModItem;
      return '';
    }
    case 'function_item': {
      // TODO: implement rendering for function_item
      const _typed = node as unknown as import('./types.ts').FunctionItem;
      return '';
    }
    case 'function_modifiers': {
      // TODO: implement rendering for function_modifiers
      const _typed = node as unknown as import('./types.ts').FunctionModifiers;
      return '';
    }
    case 'function_signature_item': {
      // TODO: implement rendering for function_signature_item
      const _typed = node as unknown as import('./types.ts').FunctionSignatureItem;
      return '';
    }
    case 'function_type': {
      // TODO: implement rendering for function_type
      const _typed = node as unknown as import('./types.ts').FunctionType;
      return '';
    }
    case 'generic_function': {
      // TODO: implement rendering for generic_function
      const _typed = node as unknown as import('./types.ts').GenericFunction;
      return '';
    }
    case 'generic_type': {
      // TODO: implement rendering for generic_type
      const _typed = node as unknown as import('./types.ts').GenericType;
      return '';
    }
    case 'generic_type_with_turbofish': {
      // TODO: implement rendering for generic_type_with_turbofish
      const _typed = node as unknown as import('./types.ts').GenericTypeWithTurbofish;
      return '';
    }
    case 'higher_ranked_trait_bound': {
      // TODO: implement rendering for higher_ranked_trait_bound
      const _typed = node as unknown as import('./types.ts').HigherRankedTraitBound;
      return '';
    }
    case 'if_expression': {
      // TODO: implement rendering for if_expression
      const _typed = node as unknown as import('./types.ts').IfExpression;
      return '';
    }
    case 'impl_item': {
      // TODO: implement rendering for impl_item
      const _typed = node as unknown as import('./types.ts').ImplItem;
      return '';
    }
    case 'index_expression': {
      // TODO: implement rendering for index_expression
      const _typed = node as unknown as import('./types.ts').IndexExpression;
      return '';
    }
    case 'inner_attribute_item': {
      // TODO: implement rendering for inner_attribute_item
      const _typed = node as unknown as import('./types.ts').InnerAttributeItem;
      return '';
    }
    case 'label': {
      // TODO: implement rendering for label
      const _typed = node as unknown as import('./types.ts').Label;
      return '';
    }
    case 'let_chain': {
      // TODO: implement rendering for let_chain
      const _typed = node as unknown as import('./types.ts').LetChain;
      return '';
    }
    case 'let_condition': {
      // TODO: implement rendering for let_condition
      const _typed = node as unknown as import('./types.ts').LetCondition;
      return '';
    }
    case 'let_declaration': {
      // TODO: implement rendering for let_declaration
      const _typed = node as unknown as import('./types.ts').LetDeclaration;
      return '';
    }
    case 'lifetime': {
      // TODO: implement rendering for lifetime
      const _typed = node as unknown as import('./types.ts').Lifetime;
      return '';
    }
    case 'line_comment': {
      // TODO: implement rendering for line_comment
      const _typed = node as unknown as import('./types.ts').LineComment;
      return '';
    }
    case 'loop_expression': {
      // TODO: implement rendering for loop_expression
      const _typed = node as unknown as import('./types.ts').LoopExpression;
      return '';
    }
    case 'macro_definition': {
      // TODO: implement rendering for macro_definition
      const _typed = node as unknown as import('./types.ts').MacroDefinition;
      return '';
    }
    case 'macro_invocation': {
      // TODO: implement rendering for macro_invocation
      const _typed = node as unknown as import('./types.ts').MacroInvocation;
      return '';
    }
    case 'macro_rule': {
      // TODO: implement rendering for macro_rule
      const _typed = node as unknown as import('./types.ts').MacroRule;
      return '';
    }
    case 'match_arm': {
      // TODO: implement rendering for match_arm
      const _typed = node as unknown as import('./types.ts').MatchArm;
      return '';
    }
    case 'match_block': {
      // TODO: implement rendering for match_block
      const _typed = node as unknown as import('./types.ts').MatchBlock;
      return '';
    }
    case 'match_expression': {
      // TODO: implement rendering for match_expression
      const _typed = node as unknown as import('./types.ts').MatchExpression;
      return '';
    }
    case 'match_pattern': {
      // TODO: implement rendering for match_pattern
      const _typed = node as unknown as import('./types.ts').MatchPattern;
      return '';
    }
    case 'mod_item': {
      // TODO: implement rendering for mod_item
      const _typed = node as unknown as import('./types.ts').ModItem;
      return '';
    }
    case 'mut_pattern': {
      // TODO: implement rendering for mut_pattern
      const _typed = node as unknown as import('./types.ts').MutPattern;
      return '';
    }
    case 'negative_literal': {
      // TODO: implement rendering for negative_literal
      const _typed = node as unknown as import('./types.ts').NegativeLiteral;
      return '';
    }
    case 'optional_type_parameter': {
      // TODO: implement rendering for optional_type_parameter
      const _typed = node as unknown as import('./types.ts').OptionalTypeParameter;
      return '';
    }
    case 'or_pattern': {
      // TODO: implement rendering for or_pattern
      const _typed = node as unknown as import('./types.ts').OrPattern;
      return '';
    }
    case 'ordered_field_declaration_list': {
      // TODO: implement rendering for ordered_field_declaration_list
      const _typed = node as unknown as import('./types.ts').OrderedFieldDeclarationList;
      return '';
    }
    case 'parameter': {
      // TODO: implement rendering for parameter
      const _typed = node as unknown as import('./types.ts').Parameter;
      return '';
    }
    case 'parameters': {
      // TODO: implement rendering for parameters
      const _typed = node as unknown as import('./types.ts').Parameters;
      return '';
    }
    case 'parenthesized_expression': {
      // TODO: implement rendering for parenthesized_expression
      const _typed = node as unknown as import('./types.ts').ParenthesizedExpression;
      return '';
    }
    case 'pointer_type': {
      // TODO: implement rendering for pointer_type
      const _typed = node as unknown as import('./types.ts').PointerType;
      return '';
    }
    case 'qualified_type': {
      // TODO: implement rendering for qualified_type
      const _typed = node as unknown as import('./types.ts').QualifiedType;
      return '';
    }
    case 'range_expression': {
      // TODO: implement rendering for range_expression
      const _typed = node as unknown as import('./types.ts').RangeExpression;
      return '';
    }
    case 'range_pattern': {
      // TODO: implement rendering for range_pattern
      const _typed = node as unknown as import('./types.ts').RangePattern;
      return '';
    }
    case 'raw_string_literal': {
      // TODO: implement rendering for raw_string_literal
      const _typed = node as unknown as import('./types.ts').RawStringLiteral;
      return '';
    }
    case 'ref_pattern': {
      // TODO: implement rendering for ref_pattern
      const _typed = node as unknown as import('./types.ts').RefPattern;
      return '';
    }
    case 'reference_expression': {
      // TODO: implement rendering for reference_expression
      const _typed = node as unknown as import('./types.ts').ReferenceExpression;
      return '';
    }
    case 'reference_pattern': {
      // TODO: implement rendering for reference_pattern
      const _typed = node as unknown as import('./types.ts').ReferencePattern;
      return '';
    }
    case 'reference_type': {
      // TODO: implement rendering for reference_type
      const _typed = node as unknown as import('./types.ts').ReferenceType;
      return '';
    }
    case 'removed_trait_bound': {
      // TODO: implement rendering for removed_trait_bound
      const _typed = node as unknown as import('./types.ts').RemovedTraitBound;
      return '';
    }
    case 'return_expression': {
      // TODO: implement rendering for return_expression
      const _typed = node as unknown as import('./types.ts').ReturnExpression;
      return '';
    }
    case 'scoped_identifier': {
      // TODO: implement rendering for scoped_identifier
      const _typed = node as unknown as import('./types.ts').ScopedIdentifier;
      return '';
    }
    case 'scoped_type_identifier': {
      // TODO: implement rendering for scoped_type_identifier
      const _typed = node as unknown as import('./types.ts').ScopedTypeIdentifier;
      return '';
    }
    case 'scoped_use_list': {
      // TODO: implement rendering for scoped_use_list
      const _typed = node as unknown as import('./types.ts').ScopedUseList;
      return '';
    }
    case 'self_parameter': {
      // TODO: implement rendering for self_parameter
      const _typed = node as unknown as import('./types.ts').SelfParameter;
      return '';
    }
    case 'shorthand_field_initializer': {
      // TODO: implement rendering for shorthand_field_initializer
      const _typed = node as unknown as import('./types.ts').ShorthandFieldInitializer;
      return '';
    }
    case 'slice_pattern': {
      // TODO: implement rendering for slice_pattern
      const _typed = node as unknown as import('./types.ts').SlicePattern;
      return '';
    }
    case 'source_file': {
      // TODO: implement rendering for source_file
      const _typed = node as unknown as import('./types.ts').SourceFile;
      return '';
    }
    case 'static_item': {
      // TODO: implement rendering for static_item
      const _typed = node as unknown as import('./types.ts').StaticItem;
      return '';
    }
    case 'string_literal': {
      // TODO: implement rendering for string_literal
      const _typed = node as unknown as import('./types.ts').StringLiteral;
      return '';
    }
    case 'struct_expression': {
      // TODO: implement rendering for struct_expression
      const _typed = node as unknown as import('./types.ts').StructExpression;
      return '';
    }
    case 'struct_item': {
      // TODO: implement rendering for struct_item
      const _typed = node as unknown as import('./types.ts').StructItem;
      return '';
    }
    case 'struct_pattern': {
      // TODO: implement rendering for struct_pattern
      const _typed = node as unknown as import('./types.ts').StructPattern;
      return '';
    }
    case 'token_binding_pattern': {
      // TODO: implement rendering for token_binding_pattern
      const _typed = node as unknown as import('./types.ts').TokenBindingPattern;
      return '';
    }
    case 'token_repetition': {
      // TODO: implement rendering for token_repetition
      const _typed = node as unknown as import('./types.ts').TokenRepetition;
      return '';
    }
    case 'token_repetition_pattern': {
      // TODO: implement rendering for token_repetition_pattern
      const _typed = node as unknown as import('./types.ts').TokenRepetitionPattern;
      return '';
    }
    case 'token_tree': {
      // TODO: implement rendering for token_tree
      const _typed = node as unknown as import('./types.ts').TokenTree;
      return '';
    }
    case 'token_tree_pattern': {
      // TODO: implement rendering for token_tree_pattern
      const _typed = node as unknown as import('./types.ts').TokenTreePattern;
      return '';
    }
    case 'trait_bounds': {
      // TODO: implement rendering for trait_bounds
      const _typed = node as unknown as import('./types.ts').TraitBounds;
      return '';
    }
    case 'trait_item': {
      // TODO: implement rendering for trait_item
      const _typed = node as unknown as import('./types.ts').TraitItem;
      return '';
    }
    case 'try_block': {
      // TODO: implement rendering for try_block
      const _typed = node as unknown as import('./types.ts').TryBlock;
      return '';
    }
    case 'try_expression': {
      // TODO: implement rendering for try_expression
      const _typed = node as unknown as import('./types.ts').TryExpression;
      return '';
    }
    case 'tuple_expression': {
      // TODO: implement rendering for tuple_expression
      const _typed = node as unknown as import('./types.ts').TupleExpression;
      return '';
    }
    case 'tuple_pattern': {
      // TODO: implement rendering for tuple_pattern
      const _typed = node as unknown as import('./types.ts').TuplePattern;
      return '';
    }
    case 'tuple_struct_pattern': {
      // TODO: implement rendering for tuple_struct_pattern
      const _typed = node as unknown as import('./types.ts').TupleStructPattern;
      return '';
    }
    case 'tuple_type': {
      // TODO: implement rendering for tuple_type
      const _typed = node as unknown as import('./types.ts').TupleType;
      return '';
    }
    case 'type_arguments': {
      // TODO: implement rendering for type_arguments
      const _typed = node as unknown as import('./types.ts').TypeArguments;
      return '';
    }
    case 'type_binding': {
      // TODO: implement rendering for type_binding
      const _typed = node as unknown as import('./types.ts').TypeBinding;
      return '';
    }
    case 'type_cast_expression': {
      // TODO: implement rendering for type_cast_expression
      const _typed = node as unknown as import('./types.ts').TypeCastExpression;
      return '';
    }
    case 'type_item': {
      // TODO: implement rendering for type_item
      const _typed = node as unknown as import('./types.ts').TypeItem;
      return '';
    }
    case 'type_parameters': {
      // TODO: implement rendering for type_parameters
      const _typed = node as unknown as import('./types.ts').TypeParameters;
      return '';
    }
    case 'unary_expression': {
      // TODO: implement rendering for unary_expression
      const _typed = node as unknown as import('./types.ts').UnaryExpression;
      return '';
    }
    case 'union_item': {
      // TODO: implement rendering for union_item
      const _typed = node as unknown as import('./types.ts').UnionItem;
      return '';
    }
    case 'unsafe_block': {
      // TODO: implement rendering for unsafe_block
      const _typed = node as unknown as import('./types.ts').UnsafeBlock;
      return '';
    }
    case 'use_as_clause': {
      // TODO: implement rendering for use_as_clause
      const _typed = node as unknown as import('./types.ts').UseAsClause;
      return '';
    }
    case 'use_declaration': {
      // TODO: implement rendering for use_declaration
      const _typed = node as unknown as import('./types.ts').UseDeclaration;
      return '';
    }
    case 'use_list': {
      // TODO: implement rendering for use_list
      const _typed = node as unknown as import('./types.ts').UseList;
      return '';
    }
    case 'use_wildcard': {
      // TODO: implement rendering for use_wildcard
      const _typed = node as unknown as import('./types.ts').UseWildcard;
      return '';
    }
    case 'variadic_parameter': {
      // TODO: implement rendering for variadic_parameter
      const _typed = node as unknown as import('./types.ts').VariadicParameter;
      return '';
    }
    case 'visibility_modifier': {
      // TODO: implement rendering for visibility_modifier
      const _typed = node as unknown as import('./types.ts').VisibilityModifier;
      return '';
    }
    case 'where_clause': {
      // TODO: implement rendering for where_clause
      const _typed = node as unknown as import('./types.ts').WhereClause;
      return '';
    }
    case 'where_predicate': {
      // TODO: implement rendering for where_predicate
      const _typed = node as unknown as import('./types.ts').WherePredicate;
      return '';
    }
    case 'while_expression': {
      // TODO: implement rendering for while_expression
      const _typed = node as unknown as import('./types.ts').WhileExpression;
      return '';
    }
    case 'yield_expression': {
      // TODO: implement rendering for yield_expression
      const _typed = node as unknown as import('./types.ts').YieldExpression;
      return '';
    }
    default:
      throw new Error(`Unknown node kind: ${(node as any).kind}`);
  }
}

/** Render an IR node to source text and validate the output. */
export function render(node: RustIrNode): string {
  return assertValid(renderSilent(node));
}
