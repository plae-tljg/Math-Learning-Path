#!/bin/bash

# Math Learning Path - GitHub Pages 部署脚本
# 使用方法: ./deploy-gh-pages.sh

set -e  # 遇到错误时退出

echo "🚀 开始部署到 GitHub Pages..."

# 使用固定的仓库名
REPO_NAME="Math-Learning-Path"
echo "📦 仓库名: $REPO_NAME"

# 检查是否在正确的分支上
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ] && [ "$CURRENT_BRANCH" != "master" ]; then
    echo "⚠️  警告: 当前分支不是 main 或 master: $CURRENT_BRANCH"
    read -p "是否继续? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "❌ 错误: 有未提交的更改，请先提交或暂存"
    git status --short
    exit 1
fi

echo "✅ 检查通过，开始构建..."

# 构建 Astro 项目到外部目录
echo "📦 构建 Astro 项目到外部目录..."
BUILD_DIR="../math_learning_path_build"

# 清理外部构建目录
if [ -d "$BUILD_DIR" ]; then
    rm -rf "$BUILD_DIR"
fi

# 设置 GitHub Pages 的 base 路径
export PUBLIC_BASE="/$REPO_NAME"
echo "🔧 设置 PUBLIC_BASE=$PUBLIC_BASE"

# 构建 Astro 项目
echo "🔨 运行 Astro 构建..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

# 将构建输出复制到外部目录
echo "📋 复制构建输出到外部目录..."
mkdir -p "$BUILD_DIR"
cp -r dist/* "$BUILD_DIR/"

echo "✅ 构建成功到外部目录: $BUILD_DIR"

# 检查构建目录内容
echo "🔍 检查构建目录内容..."
ls -la "$BUILD_DIR"
echo "📊 构建目录文件数量: $(find "$BUILD_DIR" -type f | wc -l)"

# 检查 gh-pages 分支是否存在
echo "🔍 检查 gh-pages 分支状态..."

# 检查远程分支是否存在
REMOTE_EXISTS=false
if git ls-remote --heads origin gh-pages | grep -q gh-pages; then
    REMOTE_EXISTS=true
    echo "🔄 远程 gh-pages 分支存在"
else
    echo "ℹ️ 远程 gh-pages 分支不存在，将创建新分支"
fi

# 检查本地分支
if git show-ref --verify --quiet refs/heads/gh-pages; then
    echo "🔄 本地 gh-pages 分支存在，切换到该分支..."
    git checkout gh-pages
    
    if [ "$REMOTE_EXISTS" = true ]; then
        echo "🔄 拉取远程分支最新更改..."
        git pull origin gh-pages
    else
        echo "🧹 远程分支不存在，清理本地分支内容..."
        git rm -rf . 2>/dev/null || true
        git clean -fdx 2>/dev/null || true
    fi
else
    echo "🆕 本地 gh-pages 分支不存在，创建新分支..."
    
    if [ "$REMOTE_EXISTS" = true ]; then
        echo "🔄 从远程 gh-pages 分支创建本地分支..."
        git checkout -b gh-pages origin/gh-pages
    else
        echo "🆕 创建空的 gh-pages 分支..."
        git checkout --orphan gh-pages
        git rm -rf . 2>/dev/null || true
        git clean -fdx 2>/dev/null || true
    fi
fi

# 完全清理当前分支，包括所有文件（除了.git目录）
echo "🧹 完全清理当前分支文件..."
git rm -rf . 2>/dev/null || true
git clean -fdx 2>/dev/null || true

# 手动删除可能残留的文件（包括node_modules）
echo "🧹 手动清理残留文件..."
rm -rf node_modules 2>/dev/null || true
rm -rf dist 2>/dev/null || true
rm -rf .astro 2>/dev/null || true
rm -rf .env 2>/dev/null || true

# 从外部构建目录复制文件
echo "📋 从外部构建目录复制文件..."
cp -r "$BUILD_DIR"/* .

# 创建 .nojekyll 文件，防止 Jekyll 忽略 _astro 文件夹
echo "📝 创建 .nojekyll 文件..."
touch .nojekyll

# 检查复制后的文件
echo "🔍 检查复制后的文件..."
ls -la
echo "📊 当前目录文件数量: $(find . -type f | wc -l)"

# 清理外部构建目录
echo "🧹 清理外部构建目录..."
rm -rf "$BUILD_DIR"

# 为 gh-pages 分支创建专门的 .gitignore
echo "📝 创建 gh-pages 分支专用的 .gitignore..."
cat > .gitignore << 'EOF'
# GitHub Pages 分支专用 .gitignore
# 只保留必要的忽略规则

# 系统文件
.DS_Store
Thumbs.db

# 编辑器文件
.vscode/
.idea/
*.swp
*.swo
*~

# 日志文件
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# 临时文件
.tmp/
.temp/
EOF

# 添加所有文件
echo "➕ 添加文件到 Git..."
git add .

# 检查Git状态
echo "🔍 检查Git状态..."
git status

# 检查是否有更改
if [ -z "$(git status --porcelain)" ]; then
    echo "❌ 没有文件更改，这可能是构建问题"
    echo "🔍 检查构建目录是否存在..."
    if [ -d "$BUILD_DIR" ]; then
        echo "构建目录仍然存在，内容："
        ls -la "$BUILD_DIR"
    else
        echo "构建目录已被删除"
    fi
    echo "🔄 切换回 main 分支..."
    git checkout main
    exit 1
fi

# 提交更改
echo "💾 提交更改..."
git commit -m "Deploy to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')"

# 推送到远程
echo "🚀 推送到远程 gh-pages 分支..."
if [ "$REMOTE_EXISTS" = true ]; then
    echo "🔄 更新现有的远程分支..."
    git push origin gh-pages
else
    echo "🆕 创建新的远程分支..."
    git push -u origin gh-pages
fi

# 切换回 main 分支
echo "🔄 切换回 main 分支..."
git checkout main

echo "✅ 部署完成！"
echo ""
echo "📝 下一步操作:"
echo "1. 在 GitHub 仓库设置中启用 Pages"
echo "2. Source 选择 'Deploy from a branch'"
echo "3. Branch 选择 'gh-pages'"
echo "4. 等待几分钟后访问: https://你的用户名.github.io/$REPO_NAME"
echo ""
echo "🔄 下次更新时，只需再次运行: ./deploy-gh-pages.sh"
