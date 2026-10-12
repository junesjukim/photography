import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Served as a project page under the existing user site: junesjukim.github.io/photography/
// https://astro.build/config
export default defineConfig({
	site: 'https://junesjukim.github.io',
	base: '/photography',
	vite: {
		plugins: [tailwindcss()],
	},
});
