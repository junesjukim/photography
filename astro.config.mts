import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Standalone site served from the domain root.
// Set SITE_URL at build time (the deploy workflow does) to match the real address.
// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL || 'https://junekim-photo.github.io',
	base: '/',
	vite: {
		plugins: [tailwindcss()],
	},
});
