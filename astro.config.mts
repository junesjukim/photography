import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://junesjukim.github.io',
	base: 'photography',
	vite: {
		plugins: [tailwindcss()],
	},
});
