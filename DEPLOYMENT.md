# 部署说明

## 环境变量配置

Astro 会自动读取 `.env` 文件中的环境变量。创建 `.env` 文件并设置以下变量：

### 环境变量说明

- `PUBLIC_BASE`: 部署的基础路径
  - 根目录部署：留空或设置为空字符串 `PUBLIC_BASE=`
  - 子目录部署：设置为路径，如 `PUBLIC_BASE=/Math-Learning-Path`
  
- `PUBLIC_SITE`: 网站完整 URL（可选）
  - 例如：`PUBLIC_SITE=https://your-username.github.io`

## 部署方式

### 方式 1: 使用 npm 脚本（推荐）

```bash
# 部署到根目录（无 base URL）
npm run build:root

# 部署到 GitHub Pages（假设仓库名为 Math-Learning-Path）
npm run build:github

# 部署到自定义子目录
npm run build:subdir
```

### 方式 2: 使用 .env 文件

1. 创建 `.env` 文件（复制下面的示例配置）

2. 根据部署场景选择配置：

**根目录部署 (.env):**
```
PUBLIC_BASE=
```

**GitHub Pages 部署 (.env):**
```
PUBLIC_BASE=/Math-Learning-Path
```

**自定义子目录部署 (.env):**
```
PUBLIC_BASE=/your-custom-path
```

3. 运行构建：
```bash
npm run build
```

### 方式 3: 命令行直接设置

```bash
# 根目录
PUBLIC_BASE= npm run build

# GitHub Pages
PUBLIC_BASE=/Math-Learning-Path npm run build

# 自定义路径
PUBLIC_BASE=/ubuntu_setup npm run build
```

## 常见部署场景

### GitHub Pages
```bash
PUBLIC_BASE=/Math-Learning-Path npm run build
# 然后将 dist/ 目录内容推送到 gh-pages 分支
```

### 本地服务器根目录 (/var/www/html)
```bash
PUBLIC_BASE= npm run build
sudo cp -r dist/* /var/www/html/
```

### 本地服务器子目录 (/var/www/html/ubuntu_setup)
```bash
PUBLIC_BASE=/ubuntu_setup npm run build
sudo cp -r dist/* /var/www/html/ubuntu_setup/
```

## 验证配置

构建后检查 `dist/index.html` 中的链接，确保它们包含正确的基础路径。

