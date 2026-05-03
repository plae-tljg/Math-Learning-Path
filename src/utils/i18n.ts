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

// 翻译字典
export const translations: Translation = {
	// 导航
	'nav.home': {
		zh: '首页',
		en: 'Home',
	},
	'nav.getting-started': {
		zh: '入门指南',
		en: 'Getting Started',
	},
	'nav.university': {
		zh: '大学数学',
		en: 'University Math',
	},
	'nav.algebraic-geometry': {
		zh: '代数几何',
		en: 'Algebraic Geometry',
	},
	'nav.switch-lang': {
		zh: 'English',
		en: '中文',
	},

	// 通用
	'common.title': {
		zh: '数学学习路径',
		en: 'Math Learning Path',
	},
	'common.subtitle': {
		zh: '单子碰撞论：数学的统一框架',
		en: 'Monad Collision Theory: A Unified Framework for Mathematics',
	},

	// 首页
	'home.welcome': {
		zh: '欢迎来到数学学习路径指南',
		en: 'Welcome to the Math Learning Path Guide',
	},
	'home.tagline': {
		zh: '探索数学的统一哲学',
		en: 'Explore the Unified Philosophy of Mathematics',
	},
	'home.about': {
		zh: '关于这个项目',
		en: 'About This Project',
	},
	'home.about-desc': {
		zh: '这个网站分享数学各领域的系统学习路径，基于"单子碰撞论"这一独特的学习哲学。我们相信，数学学习不仅是记忆定理，更是理解基本概念之间的碰撞与联系。',
		en: 'This website shares systematic learning paths for various fields of mathematics, based on the unique learning philosophy of "Monad Collision Theory". We believe that learning mathematics is not just memorizing theorems, but understanding the collisions and connections between fundamental concepts.',
	},
	'home.learning-paths': {
		zh: '学习路径',
		en: 'Learning Paths',
	},
	'home.levels': {
		zh: '层次体系',
		en: 'Level System',
	},
	'home.monad-theory': {
		zh: '单子碰撞论',
		en: 'Monad Collision Theory',
	},
	'home.monad-desc': {
		zh: '数学中最基本的不可分概念，本身是"无"，但包含"有"的潜能。当两个或多个单子碰撞时，便产生新结构、新定理。',
		en: 'The most fundamental indivisible concept in mathematics. It is "nothing" but contains the potential of "something". When two or more monads collide, new structures and theorems emerge.',
	},

	// 入门指南
	'getting-started.title': {
		zh: '数学入门指南',
		en: 'Getting Started with Mathematics',
	},
	'getting-started.welcome': {
		zh: '欢迎！这里是我作为数学专业毕业生的经验分享。',
		en: 'Welcome! Here I share my experience as a math graduate.',
	},
	'getting-started.tips': {
		zh: '学习建议',
		en: 'Learning Tips',
	},
	'getting-started.high-school': {
		zh: '高中数学基础',
		en: 'High School Mathematics',
	},

	// 大学数学
	'university.title': {
		zh: '大学数学学习',
		en: 'University Mathematics',
	},
	'university.subtitle': {
		zh: '系统学习大学数学科目',
		en: 'Systematic Study of University Mathematics',
	},
	'university.subjects': {
		zh: '学习科目',
		en: 'Subjects',
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
