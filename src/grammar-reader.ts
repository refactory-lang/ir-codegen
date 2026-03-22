import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// --- Public types ---

export interface FieldMeta {
	name: string;
	required: boolean;
	multiple: boolean;
	types: string[];
}

export interface ChildrenMeta {
	required: boolean;
	multiple: boolean;
	types: string[];
}

export interface NodeMeta {
	kind: string;
	fields: FieldMeta[];
	hasChildren: boolean;
	children?: ChildrenMeta;
}

// --- Raw grammar shape (mirrors the .d.ts JSON structure) ---

interface RawFieldEntry {
	required: boolean;
	multiple: boolean;
	types: Array<{ type: string; named: boolean }>;
}

interface RawNodeEntry {
	type: string;
	named: boolean;
	fields?: Record<string, RawFieldEntry>;
	children?: RawFieldEntry;
	subtypes?: Array<{ type: string; named: boolean }>;
}

type GrammarMap = Record<string, RawNodeEntry>;

// --- Cache ---

const grammarCache = new Map<string, GrammarMap>();

function loadGrammar(grammar: string): GrammarMap {
	const cached = grammarCache.get(grammar);
	if (cached) return cached;

	// resolve the package entry point, then navigate to the lang file
	const entryUrl = import.meta.resolve('@codemod.com/jssg-types');
	const entryPath = fileURLToPath(entryUrl);
	// entry is at <pkg>/src/index.d.ts, so pkg root is dirname(dirname(entryPath))
	const pkgRoot = dirname(dirname(entryPath));
	const filePath = join(pkgRoot, 'src', 'langs', `${grammar}.d.ts`);
	const content = readFileSync(filePath, 'utf-8');

	const match = content.match(/type \w+Types = ({.*});/s);
	if (!match) {
		throw new Error(
			`Could not parse grammar type literal from ${filePath}`,
		);
	}

	const parsed = JSON.parse(match[1]) as GrammarMap;
	grammarCache.set(grammar, parsed);
	return parsed;
}

// --- Public API ---

/**
 * Read metadata for a single node kind from a grammar .d.ts file.
 */
export function readGrammarNode(grammar: string, nodeKind: string): NodeMeta {
	const grammarMap = loadGrammar(grammar);
	const entry = grammarMap[nodeKind];

	if (!entry) {
		throw new Error(
			`Node kind "${nodeKind}" not found in ${grammar} grammar`,
		);
	}

	const fields: FieldMeta[] = [];
	if (entry.fields) {
		for (const [name, raw] of Object.entries(entry.fields)) {
			fields.push({
				name,
				required: raw.required,
				multiple: raw.multiple,
				types: raw.types.map((t) => t.type),
			});
		}
	}

	const hasChildren = entry.children != null;

	const result: NodeMeta = { kind: nodeKind, fields, hasChildren };

	if (entry.children) {
		result.children = {
			required: entry.children.required,
			multiple: entry.children.multiple,
			types: entry.children.types.map((t) => t.type),
		};
	}

	return result;
}

/**
 * List all named node kinds that have fields or children.
 * Filters out `_` prefixed abstract types and subtypes-only entries.
 */
export function listNodeKinds(grammar: string): string[] {
	const grammarMap = loadGrammar(grammar);

	return Object.keys(grammarMap).filter((key) => {
		// Skip abstract types prefixed with _
		if (key.startsWith('_')) return false;

		const entry = grammarMap[key];

		// Skip entries that only have subtypes (no fields, no children)
		const hasFields =
			entry.fields != null && Object.keys(entry.fields).length > 0;
		const hasChildren = entry.children != null;

		return hasFields || hasChildren;
	});
}
