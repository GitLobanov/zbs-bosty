import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				cover_image: z.string().optional(),
				boosty_url: z.string().url().optional(),
				author: z.string().optional(),
				year: z.number().optional(),
				status: z.string().optional(),
				chapters_count: z.number().optional(),
				genres: z.array(z.string()).optional(),
				tags: z.array(z.string()).optional(),
			}),
		}),
	}),
};
