---
title: "Debugging Astro Content Collections: A Field Guide"
description: "Common issues you'll hit with Content Collections, and the fixes that have worked for me."
date: 2026-03-10T00:00:00Z
categories: ["blog"]
tags: ["astro", "debugging", "tutorial"]
authors: ["jane-doe"]
draft: false
---

Astro's Content Collections are great when they work, and confusing when they don't. Here are three issues I've hit repeatedly, and how to fix each.

## 1. Schema validation fails on build but not in dev

Symptom: `yarn dev` runs fine, `yarn build` fails with a schema error on a specific file.

Cause: dev mode is more forgiving. The build runs strict validation. Check the file's frontmatter against your schema in `src/content.config.ts`.

```typescript
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});
```

## 2. Images in markdown don't optimize

Symptom: You wrote `![alt](./image.jpg)` and the image loads but isn't optimized.

Cause: Astro only optimizes images that go through the `<Image>` component or are imported as ES modules. Use MDX and `<Image>` for full optimization.

## 3. Type narrowing breaks after a frontmatter change

Symptom: TypeScript errors that didn't exist before you added an optional field.

Cause: Astro caches types in `.astro/types.d.ts`. Run `yarn check` to regenerate.

Replace this post with your own writing when you set up your blog.
