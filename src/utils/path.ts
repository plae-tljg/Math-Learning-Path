/**
 * 获取应用的 base 路径
 * 在 Astro 中，可以通过 import.meta.env.BASE_URL 获取
 */
export function getBasePath(): string {
	return import.meta.env.BASE_URL;
}

/**
 * 构建完整路径，自动处理 base
 */
export function getPath(path: string): string {
	const base = getBasePath();
	// 确保 base 以 / 结尾，path 以 / 开头
	const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	return `${normalizedBase}${normalizedPath}`;
}

