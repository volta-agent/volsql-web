import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
 plugins: [svelte()],
 base: '/', // GitHub Pages serves from root
 build: {
 outDir: 'dist',
 sourcemap: false
 },
 server: {
 port: 3000
 }
});
