---
title: "CJK 排版示範：中文閱讀體驗的細節"
description: "本篇展示這個 fork 對於 CJK（中文、日文、韓文）內容的字體與排版支援。"
date: 2026-03-25T00:00:00Z
categories: ["blog"]
tags: ["typography", "cjk", "demo"]
authors: ["jane-doe"]
draft: false
---

This post is intentionally written in Traditional Chinese to demonstrate the fork's CJK typography support. If you're an English-only reader, feel free to skip.

## 為什麼這篇文章存在

這個 fork 雖然以英文為預設配置，但在 `src/styles/main.css` 中保留了 CJK 字體載入的範例註解。如果你的部落格主要使用中文、日文或韓文內容，你可以在那邊取消註解，啟用 Noto Sans TC、Noto Sans JP 等字體。

## 字體效果展示

以下是中英混排的測試段落：

> 在資訊爆炸的時代，blogging（部落格寫作）這件事看似古老，實際上比以往更重要。一個自有平台讓你脫離 algorithm-driven feed 的綁架，真正擁有自己的 readers 與 archive。

注意中英文間的間距、行高（line-height）、與標點符號的處理。如果你看到任何排版瑕疵（例如標點突出邊界、中英文擠在一起），歡迎在 GitHub repo 開 issue。

## 啟用 CJK 字體（給設定者）

在 `src/styles/main.css` 中找到 `/* CJK fonts (optional) */` 註解，依照範例 import Noto 字體並調整 `--font-primary` 變數即可。

Replace this post with your own writing when you set up your blog.
