// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Base URL 配置
// 对于 GitHub Pages 子目录部署，设置为 /Math-Learning-Path
const base = process.env.PUBLIC_BASE || '/Math-Learning-Path';

// 输出当前配置（仅在构建时）
if (process.env.NODE_ENV !== 'development') {
	console.log(`[Astro Config] Base path: "${base || '/'}"`);
}

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	// site 只在生产环境需要，可以通过环境变量设置
	site: process.env.PUBLIC_SITE || undefined,
	base: base,
});
