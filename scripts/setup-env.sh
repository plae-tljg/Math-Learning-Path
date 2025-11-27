#!/bin/bash
# 环境配置脚本
# 用法: ./scripts/setup-env.sh [root|github|subdir|custom]

case "$1" in
  root)
    echo "PUBLIC_BASE=" > .env
    echo "✅ 已配置为根目录部署（无 base URL）"
    ;;
  github)
    echo "PUBLIC_BASE=/Math-Learning-Path" > .env
    echo "✅ 已配置为 GitHub Pages 部署"
    echo "⚠️  请将 /Math-Learning-Path 替换为你的实际仓库名"
    ;;
  subdir)
    echo "PUBLIC_BASE=/ubuntu_setup" > .env
    echo "✅ 已配置为子目录部署"
    echo "⚠️  请将 /ubuntu_setup 替换为你的实际路径"
    ;;
  custom)
    read -p "请输入 base 路径（例如: /my-path）: " base_path
    echo "PUBLIC_BASE=$base_path" > .env
    echo "✅ 已配置为自定义路径: $base_path"
    ;;
  *)
    echo "用法: ./scripts/setup-env.sh [root|github|subdir|custom]"
    echo ""
    echo "选项:"
    echo "  root    - 根目录部署（无 base URL）"
    echo "  github  - GitHub Pages 部署"
    echo "  subdir  - 子目录部署"
    echo "  custom  - 自定义路径"
    exit 1
    ;;
esac

echo ""
echo "当前 .env 内容:"
cat .env

