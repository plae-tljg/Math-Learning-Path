/**
 * 国际化工具函数
 * 用于管理多语言内容
 */

export type Lang = 'zh' | 'en';

export interface Translation {
	[key: string]: {
		zh: string;
		en: string;
	};
}

// 翻译字典 - 可以集中管理所有翻译
export const translations: Translation = {
	'nav.home': {
		zh: '首页',
		en: 'Home',
	},
	'nav.algebraic-geometry': {
		zh: '代数几何',
		en: 'Algebraic Geometry',
	},
	'nav.switch-lang': {
		zh: 'English',
		en: '中文',
	},
	'common.title': {
		zh: '数学学习路径',
		en: 'Math Learning Path',
	},
	'home.welcome': {
		zh: '欢迎来到我的数学学习路径指南！这里记录了我作为数学专业毕业生的学习经验，希望能为其他学习者提供参考。',
		en: 'Welcome to my math learning path guide! Here I document my learning experience as a math graduate, hoping to provide reference for other learners.',
	},
	'home.about': {
		zh: '关于这个项目',
		en: 'About This Project',
	},
	'home.about-desc': {
		zh: '这个网站旨在分享数学各个领域的系统学习路径，包括推荐教材、学习顺序、重要概念等。',
		en: 'This website aims to share systematic learning paths for various fields of mathematics, including recommended textbooks, learning sequences, and important concepts.',
	},
	'home.learning-paths': {
		zh: '学习路径',
		en: 'Learning Paths',
	},
};

/**
 * 获取翻译文本
 */
export function t(key: string, lang: Lang): string {
	const translation = translations[key];
	if (!translation) {
		console.warn(`Translation missing for key: ${key}`);
		return key;
	}
	return translation[lang] || translation.zh;
}

/**
 * 切换语言后的路径
 */
export function getLangPath(path: string, fromLang: Lang, toLang: Lang): string {
	return path.replace(`/${fromLang}/`, `/${toLang}/`);
}

