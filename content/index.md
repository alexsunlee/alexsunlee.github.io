---
comments: false
title: Alex的学习空间
---

## 关于我 · About Me

我是 Alex Sun，北美程序员，有 15 年开发经验，喜欢探索未知世界。这里记录我拆解开源 AI 项目的学习笔记，每篇配一份 PPT。

I'm Alex Sun, a software developer in North America with 15 years of experience and a curiosity for the unknown. Here I share notes on how open-source AI projects are built, each with a slide deck.

有问题或建议？欢迎到 [[留言板]] 留言。Questions or ideas? Leave a message on the [[留言板|guestbook]].

## 讨论群 · Community

欢迎加入 Discord 讨论群 **Beyond AI**，一起聊 AI、编程和新工具。Join **Beyond AI** on Discord to talk about AI, programming and new tools.

<a class="discord-join" href="https://discord.gg/QhQPNtDmf" target="_blank" rel="noopener">加入 Beyond AI · Join on Discord</a>

## 学习笔记

拆解开源 AI 项目的架构与设计，每篇配一份 PPT，持续更新。

<div class="note-list">
<div class="note-card">
<a class="note-card-title" href="/ai-learning/ponytail-·-提示词分发系统架构解析">Ponytail · 提示词分发系统架构解析</a>
<p class="note-card-summary">一段 40 行的提示词，让 AI 写代码时先复用、少写、不省测试。拆解它如何经一个构建器和一批轻量适配器送进 35 个 agent 宿主、靠防漂移 CI 保持一致，以及 Claude Code 里实时显示成本与复用率的 band。</p>
<p class="note-card-meta"><span>更新于 2026-11-02</span><span>基于 ponytail v5.3.3</span><span>约 144 分钟</span></p>
<p class="note-card-tags"><span>Prompt 工程</span><span>Agent</span><span>Claude Code</span></p>
<p class="note-card-actions"><a class="note-card-read" href="/ai-learning/ponytail-·-提示词分发系统架构解析">阅读原文 →</a><a class="note-card-ppt" href="/ai-learning/ponytail-·-提示词分发系统架构解析.pptx" download data-router-ignore>下载 PPT · 44 页 · 1.3 MB</a></p>
</div>
<div class="note-card">
<a class="note-card-title" href="/ai-learning/karpathy-skills-·-llm-编码行为准则解析">Karpathy-Skills · LLM 编码行为准则解析</a>
<p class="note-card-summary">约 70 行的行为准则，把 Karpathy 对 LLM 写代码的三类吐槽（不澄清、过度设计、越界修改）提炼成 4 条原则，同时打包给 Claude Code 和 Cursor。它不给 agent 增加能力，只加「刹车」和「验收标准」。</p>
<p class="note-card-meta"><span>更新于 2026-10-09</span><span>基于 commit 2c60614</span><span>约 23 分钟</span></p>
<p class="note-card-tags"><span>行为准则</span><span>Claude Code</span><span>Cursor</span></p>
<p class="note-card-actions"><a class="note-card-read" href="/ai-learning/karpathy-skills-·-llm-编码行为准则解析">阅读原文 →</a><a class="note-card-ppt" href="/ai-learning/karpathy-skills-·-llm-编码行为准则解析.pptx" download data-router-ignore>下载 PPT · 13 页 · 0.2 MB</a></p>
</div>
</div>
