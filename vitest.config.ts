import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		exclude: ['output/**', 'node_modules/**'],
	},
});
