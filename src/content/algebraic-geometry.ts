/**
 * 代数几何学习路径 - 双语内容
 * 在同一个文件中维护中英文内容
 */
import type { Lang } from '../utils/i18n';

export interface BilingualContent {
	title: string;
	content: {
		intro: string;
		prerequisites: {
			title: string;
			items: string[];
		};
		textbooks: {
			title: string;
			beginner: {
				title: string;
				items: Array<{
					author: string;
					book: string;
					notes: string[];
				}>;
			};
			intermediate: {
				title: string;
				items: Array<{
					author: string;
					book: string;
					notes: string[];
				}>;
			};
			advanced: {
				title: string;
				items: Array<{
					author: string;
					book: string;
					notes: string[];
				}>;
			};
		};
		learningPath: {
			title: string;
			phases: Array<{
				title: string;
				duration: string;
				items: string[];
			}>;
		};
		theorems: {
			title: string;
			items: Array<{
				name: string;
				description: string;
			}>;
		};
		tips: {
			title: string;
			items: string[];
		};
		resources: {
			title: string;
			items: Array<{
				name: string;
				url: string;
				description: string;
			}>;
		};
		formulas: {
			title: string;
			examples: Array<{
				description: string;
				formula: string;
				displayMode: boolean;
			}>;
		};
	};
}

export const algebraicGeometryContent: Record<Lang, BilingualContent> = {
	zh: {
		title: '代数几何学习路径',
		content: {
			intro: '代数几何是现代数学中一个非常重要的分支，它研究代数方程组的几何性质。',
			prerequisites: {
				title: '前置知识',
				items: [
					'**抽象代数**：群、环、域的基本理论',
					'**交换代数**：理想、局部化、Noether 环等',
					'**拓扑学**：基本拓扑概念，特别是 Zariski 拓扑',
					'**微分几何**（可选但推荐）：流形、切空间等概念',
				],
			},
			textbooks: {
				title: '推荐教材',
				beginner: {
					title: '入门级',
					items: [
						{
							author: 'Fulton, W.',
							book: 'Algebraic Curves: An Introduction to Algebraic Geometry',
							notes: ['从平面曲线开始，循序渐进', '适合初学者'],
						},
						{
							author: 'Reid, M.',
							book: 'Undergraduate Algebraic Geometry',
							notes: ['面向本科生的友好介绍', '包含大量例子'],
						},
					],
				},
				intermediate: {
					title: '中级',
					items: [
						{
							author: 'Hartshorne, R.',
							book: 'Algebraic Geometry',
							notes: ['经典教材，但较为抽象', '建议在有一定基础后阅读'],
						},
						{
							author: 'Shafarevich, I.R.',
							book: 'Basic Algebraic Geometry',
							notes: ['两卷本，内容全面', '第一卷：代数簇、概形', '第二卷：概形与复几何'],
						},
					],
				},
				advanced: {
					title: '高级',
					items: [
						{
							author: 'Grothendieck',
							book: 'EGA (Éléments de géométrie algébrique)',
							notes: ['现代代数几何的奠基之作', '适合深入研究'],
						},
					],
				},
			},
			learningPath: {
				title: '学习路径',
				phases: [
					{
						title: '第一阶段：基础概念',
						duration: '1-2 个月',
						items: [
							'仿射代数簇和射影代数簇',
							'不可约性和维数',
							'正则函数和态射',
							'基本例子：直线、圆锥曲线、三次曲线',
						],
					},
					{
						title: '第二阶段：概形理论',
						duration: '2-3 个月',
						items: [
							'概形的定义和基本性质',
							'层和层的上同调',
							'概形之间的态射',
							'分离性和有限型',
						],
					},
					{
						title: '第三阶段：深入主题',
						duration: '3-6 个月',
						items: [
							'上同调理论',
							'除子理论',
							'相交理论',
							'特殊主题：椭圆曲线、K3 曲面等',
						],
					},
				],
			},
			theorems: {
				title: '重要定理',
				items: [
					{
						name: 'Hilbert 零点定理',
						description: '连接代数和几何的桥梁',
					},
					{
						name: 'Riemann-Roch 定理',
						description: '曲线上的重要结果',
					},
					{
						name: 'Serre 对偶',
						description: '上同调理论的核心',
					},
				],
			},
			tips: {
				title: '学习建议',
				items: [
					'**多做练习**：代数几何需要大量计算来培养直觉',
					'**画图理解**：即使在高维情况下，低维例子也很重要',
					'**学习交换代数**：这是代数几何的语言基础',
					'**阅读原始文献**：理解重要定理的历史背景',
				],
			},
			resources: {
				title: '在线资源',
				items: [
					{
						name: 'Stacks Project',
						url: 'https://stacks.math.columbia.edu/',
						description: '完整的代数几何参考',
					},
					{
						name: "Vakil's Foundations of Algebraic Geometry",
						url: 'https://math.stanford.edu/~vakil/216blog/',
						description: '优秀的在线教材',
					},
				],
			},
			formulas: {
				title: '数学公式示例',
				examples: [
					{
						description: 'Hilbert 零点定理：如果 $I$ 是 $k[x_1, \\ldots, x_n]$ 的理想，那么',
						formula: 'I(V(I)) = \\sqrt{I}',
						displayMode: true,
					},
					{
						description: 'Riemann-Roch 定理（曲线版本）：对于曲线 $C$ 上的除子 $D$，有',
						formula: '\\ell(D) - \\ell(K - D) = \\deg(D) + 1 - g',
						displayMode: true,
					},
					{
						description: '其中 $g$ 是曲线的亏格，$K$ 是典范除子。',
						formula: '',
						displayMode: false,
					},
				],
			},
		},
	},
	en: {
		title: 'Algebraic Geometry Learning Path',
		content: {
			intro: 'Algebraic geometry is a very important branch of modern mathematics that studies the geometric properties of systems of algebraic equations.',
			prerequisites: {
				title: 'Prerequisites',
				items: [
					'**Abstract Algebra**: Basic theory of groups, rings, and fields',
					'**Commutative Algebra**: Ideals, localization, Noetherian rings, etc.',
					'**Topology**: Basic topological concepts, especially Zariski topology',
					'**Differential Geometry** (optional but recommended): Manifolds, tangent spaces, etc.',
				],
			},
			textbooks: {
				title: 'Recommended Textbooks',
				beginner: {
					title: 'Beginner Level',
					items: [
						{
							author: 'Fulton, W.',
							book: 'Algebraic Curves: An Introduction to Algebraic Geometry',
							notes: ['Starts with plane curves, progressive approach', 'Suitable for beginners'],
						},
						{
							author: 'Reid, M.',
							book: 'Undergraduate Algebraic Geometry',
							notes: ['Friendly introduction for undergraduates', 'Contains many examples'],
						},
					],
				},
				intermediate: {
					title: 'Intermediate Level',
					items: [
						{
							author: 'Hartshorne, R.',
							book: 'Algebraic Geometry',
							notes: ['Classic textbook, but quite abstract', 'Recommended to read after having some foundation'],
						},
						{
							author: 'Shafarevich, I.R.',
							book: 'Basic Algebraic Geometry',
							notes: ['Two volumes, comprehensive content', 'Volume 1: Algebraic varieties, schemes', 'Volume 2: Schemes and complex geometry'],
						},
					],
				},
				advanced: {
					title: 'Advanced Level',
					items: [
						{
							author: 'Grothendieck',
							book: 'EGA (Éléments de géométrie algébrique)',
							notes: ['Foundational work of modern algebraic geometry', 'Suitable for in-depth study'],
						},
					],
				},
			},
			learningPath: {
				title: 'Learning Path',
				phases: [
					{
						title: 'Phase 1: Basic Concepts',
						duration: '1-2 months',
						items: [
							'Affine and projective algebraic varieties',
							'Irreducibility and dimension',
							'Regular functions and morphisms',
							'Basic examples: lines, conic curves, cubic curves',
						],
					},
					{
						title: 'Phase 2: Scheme Theory',
						duration: '2-3 months',
						items: [
							'Definition and basic properties of schemes',
							'Sheaves and sheaf cohomology',
							'Morphisms between schemes',
							'Separatedness and finite type',
						],
					},
					{
						title: 'Phase 3: Advanced Topics',
						duration: '3-6 months',
						items: [
							'Cohomology theory',
							'Divisor theory',
							'Intersection theory',
							'Special topics: elliptic curves, K3 surfaces, etc.',
						],
					},
				],
			},
			theorems: {
				title: 'Important Theorems',
				items: [
					{
						name: "Hilbert's Nullstellensatz",
						description: 'Bridge connecting algebra and geometry',
					},
					{
						name: 'Riemann-Roch Theorem',
						description: 'Important result on curves',
					},
					{
						name: 'Serre Duality',
						description: 'Core of cohomology theory',
					},
				],
			},
			tips: {
				title: 'Learning Tips',
				items: [
					'**Do many exercises**: Algebraic geometry requires extensive computation to develop intuition',
					'**Draw diagrams**: Even in high dimensions, low-dimensional examples are important',
					'**Learn commutative algebra**: This is the linguistic foundation of algebraic geometry',
					'**Read original papers**: Understand the historical background of important theorems',
				],
			},
			resources: {
				title: 'Online Resources',
				items: [
					{
						name: 'Stacks Project',
						url: 'https://stacks.math.columbia.edu/',
						description: 'Complete reference for algebraic geometry',
					},
					{
						name: "Vakil's Foundations of Algebraic Geometry",
						url: 'https://math.stanford.edu/~vakil/216blog/',
						description: 'Excellent online textbook',
					},
				],
			},
			formulas: {
				title: 'Mathematical Formula Examples',
				examples: [
					{
						description: "Hilbert's Nullstellensatz: If $I$ is an ideal in $k[x_1, \\ldots, x_n]$, then",
						formula: 'I(V(I)) = \\sqrt{I}',
						displayMode: true,
					},
					{
						description: 'Riemann-Roch Theorem (curve version): For a divisor $D$ on a curve $C$, we have',
						formula: '\\ell(D) - \\ell(K - D) = \\deg(D) + 1 - g',
						displayMode: true,
					},
					{
						description: 'where $g$ is the genus of the curve and $K$ is the canonical divisor.',
						formula: '',
						displayMode: false,
					},
				],
			},
		},
	},
};

