import type { AstroInstance } from 'astro';
import { Github, Globe } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'JK',
	favicon: 'favicon.ico',
	owner: 'June Kim',
	profileImage: 'profile.webp',
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/junesjukim',
			icon: Github,
		} as SocialLink,
		{
			name: 'Website',
			url: 'https://junesjukim.github.io/',
			icon: Globe,
		} as SocialLink,
	],
};
