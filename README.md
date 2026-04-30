# Bookworm Light Astro — Dark Mode Edition

> **Unofficial fork of [Bookworm Light Astro](https://github.com/themefisher/bookworm-light-astro)
> by [Themefisher](https://themefisher.com) (MIT).** This is an independent community fork.
> Not endorsed by, affiliated with, or sponsored by Themefisher.

## What's added on top of upstream

- **Dark mode** with View Transitions persistence and dynamic logo switching
- **CSS variable mapping fixes** for dark mode (proper theming across components)
- **Bug fixes** for logo sizing, post hero image aspect ratios, author page covers, and similar-posts links
- **Typography refinements** with Inter as the default and an optional one-click CJK setup
- **Simplified categories** (`blog` / `lifestyle`) with default cover images and a fallback

Light mode is intentionally kept visually close to upstream. If you prefer the original look, just don't toggle dark mode.

## Original work

The original Bookworm Light Astro by Themefisher is excellent. This fork exists only to address specific needs not yet upstreamed. Please consider supporting the original at https://themefisher.com.

## Tech stack

- [Astro](https://astro.build/) 6
- [Tailwind CSS](https://tailwindcss.com/) 4
- React 19 (kept from upstream)
- TypeScript
- [Pages CMS](https://pagescms.org/) integration

## Quick start

```bash
# Clone or fork this repo, then:
yarn install
yarn dev
```

Open `http://localhost:4321` in your browser.

## Customization

- **Site config:** Edit `src/config/site.ts` (URL, name, social links, navigation)
- **Categories:** The schema in `src/content.config.ts` defines `blog` and `lifestyle`. Add more in the enum + add corresponding cover images in `public/images/defaults/`
- **Default cover fallback:** Toggle `settings.default_cover_enabled` in `src/config/config.json` (default: `true`). When disabled, posts without an explicit `image:` frontmatter render without a hero image instead of falling back to a category-based default cover.
- **Dark mode logo:** Replace `public/images/dark-logo.png` and `public/images/logo.png`
- **CJK fonts:** Uncomment the block at the bottom of `src/styles/main.css` (see comments inline)

## Building for production

```bash
yarn build
yarn preview
```

## Differences from upstream — at-a-glance

| Aspect | Upstream Bookworm Light | This fork |
|--------|-------------------------|-----------|
| Dark mode | Not included | Yes, with persistence |
| Hero image aspect | Variable | Constrained (`aspect-video`) |
| Logo size | Default | 1.3× larger |
| Categories | (none) | `blog` / `lifestyle` / fallback |
| Default font | Lora + system | Inter + Lora; CJK optional |

## License

Code is released under the [MIT License](./LICENSE) — same as upstream. The original Themefisher copyright notice is preserved.

Demo images in this repository come from [Pexels](https://www.pexels.com/) and [Unsplash](https://unsplash.com/) under their respective free licenses. See [docs/image-sources.md](./docs/image-sources.md) for attributions.

## Want more?

Looking for an Instagram-style layout, photo grid, or a polished commercial
theme designed for visual creators? An upcoming product called **Snapjot**
is being built specifically for that use case. Stay tuned.

## Reporting issues

This fork lives at: `https://github.com/chialin/bookworm-light-astro-darkmode`

Please report fork-specific issues here. For upstream issues (general Bookworm Light Astro behavior), see [the original repo](https://github.com/themefisher/bookworm-light-astro/issues).
