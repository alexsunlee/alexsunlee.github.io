# alexsunlee.github.io

Alex的学习空间：AI 开源项目架构拆解与演讲笔记，项目拆解配有 PPT。

在线阅读：<https://alexsunlee.github.io>

## 更新内容

笔记放在 `content/`（Obsidian 语法：双链、callout、mermaid 都支持），首页是 `content/index.md`。

```bash
npm ci
npx quartz build --serve   # 本地预览 http://localhost:8080
git add content && git commit -m "update notes" && git push   # push 到 main 后自动部署
```

站点由 [Quartz](https://quartz.jzhao.xyz) 生成（MIT），GitHub Actions 构建并发布到 GitHub Pages。
