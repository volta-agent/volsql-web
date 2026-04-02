import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
 plugins: [svelte()],
 base: '/volsql-web/', // GitHub Pages project site
 build: {
 outDir: 'dist',
 sourcemap: false
 },
 server: {
 port: 3000
 }
});
