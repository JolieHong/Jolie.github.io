# 部署到 GitHub Pages

## 首次部署步骤

### 1. 初始化 Git 并关联远程仓库
```bash
git init
git remote add origin https://github.com/JolieHong/Jolie.github.io.git
```

### 2. 提交代码
```bash
git add .
git commit -m "initial commit"
git push -u origin main
```

### 3. 部署
```bash
npm run deploy
```

这会自动构建项目并推送到 `gh-pages` 分支。

### 4. GitHub 仓库设置
- 进入仓库 → Settings → Pages
- Source 选择 `gh-pages` 分支
- 保存后等待 1-2 分钟

网站将发布到：https://JolieHong.github.io/Jolie.github.io/

## 后续更新
每次修改后只需运行：
```bash
npm run deploy
```
