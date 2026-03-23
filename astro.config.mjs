// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ваш-username.github.io',
	base: '/ваше-название-репозитория',
	integrations: [
		starlight({
			title: 'Zabaichen Bank Selector',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
			],
			components: {
				Footer: './src/components/Overrides/Footer.astro',
			},
			sidebar: [
				{
					label: 'Наши книги',
					autogenerate: { directory: 'books' },
				},
				{
					label: 'Справочник',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
