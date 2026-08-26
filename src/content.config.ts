import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const photos = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/photos' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			image: image(),
			date: z.coerce.date(),
			location: z.string().optional(),
			tags: z.array(z.string()).default([]),
			featured: z.boolean().default(false),
		}),
});

export const collections = { photos };
