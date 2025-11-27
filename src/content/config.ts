import { defineCollection, z } from 'astro:content';

// 定义内容集合的 schema
const learningPathSchema = z.object({
	title: z.string(),
	titleEn: z.string(),
	description: z.string().optional(),
	descriptionEn: z.string().optional(),
	lang: z.enum(['zh', 'en']),
	order: z.number().optional(),
});

export const collections = {
	'learning-paths': defineCollection({
		type: 'content',
		schema: learningPathSchema,
	}),
};

