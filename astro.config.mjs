// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Base URL 配置
// Astro 会自动读取 .env 文件中的环境变量
// 优先级：命令行环境变量 > .env 文件 > 默认值
const getBase = () => {
	// 从环境变量读取 PUBLIC_BASE
	// 注意：PUBLIC_ 前缀的变量会被 Astro 自动暴露给客户端
	// 但在 astro.config.mjs 中，我们需要使用 process.env
	const base = process.env.PUBLIC_BASE;
	
	// 如果明确设置为空字符串，返回空字符串（根目录部署）
	if (base === '') {
		return '';
	}
	
	// 如果设置了值，返回该值
	if (base) {
		// 确保以 / 开头
		return base.startsWith('/') ? base : `/${base}`;
	}
	
	// 开发环境默认为空（根路径）
	if (process.env.NODE_ENV === 'development') {
		return '';
	}
	
	// 生产环境默认也为空（根目录部署）
	// 如果需要部署到子目录，请设置 PUBLIC_BASE 环境变量
	return '';
};

const base = getBase();

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
