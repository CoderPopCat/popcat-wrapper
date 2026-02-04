import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: 'src/index.js',
	target: 'es2020',
	platform: 'node',
	format: ['cjs', 'esm'],
	shims: true,
	clean: true,
});
