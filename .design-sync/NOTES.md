# design-sync notes: portfolio

Setup specifics for syncing this site into Claude Design. Mirrors the pattern used in ~/Desktop/dispatch/web.

## How it is wired

- **Library entry:** `src/design-system/index.ts` exports the components plus the case study types. `PortfolioProvider` wraps them in a `MemoryRouter` (several components use `<Link>`).
- **Stories:** `src/**/*.stories.tsx`. Groups: Foundations, Primitives, Layout, Sections, Content, Effects, Screens.
  - Screens (Home, CaseStudy, Resume, Contact, NotFound) are full pages. They use the real case study data and images, so they are the only stories that need the real assets.
  - Component stories use inline sample data (SVG data URIs), no image files.
- **Fonts:** Archivo Variable (weight 100-900, width 62-125%) and Manrope, self-hosted from `@fontsource*`. The headings rely on `font-stretch: 125%`, so keep the variable `standard.css` import in `.storybook/preview.tsx`.
- **Tokens:** Tailwind v4 `@theme` block in `src/index.css`. `Foundations/Colors` and `Foundations/Typography` stories document them.
- **Asset inlining:** `scripts/inline-lib-assets.mjs` turns `import x from './a.jpg'` in the lib output into base64 constants so the bundle is self-contained. Type-only imports live in `src/data/caseStudyTypes.ts` so the lib build never pulls in `caseStudies.ts` (about 60 image imports).

## Rebuild commands

```bash
npm run build:lib                                              # tsc -p tsconfig.lib.json + inline assets -> dist-lib/
npx storybook build -c .storybook -o .design-sync/sb-reference # static Storybook used as the visual reference
npm run storybook                                              # dev server on :6006
```

## Caveats

- **iCloud Desktop:** this repo lives on a synced Desktop. Build output with thousands of small files can stall or conflict. If a sync step writes a big output folder, use `--out ./ds-bundle.nosync` (the `.nosync` suffix keeps iCloud from touching it) and symlink `ds-bundle` to it. Both are gitignored.
- **Gitignored:** `dist-lib`, `storybook-static`, `ds-bundle`, `ds-bundle.nosync`, `.design-sync/sb-reference`, `.design-sync/.cache`, `.design-sync/previews`. Only `config.json`, `conventions.md` and this file are committed.
- **No `projectId` in config.json yet.** The `/design-sync` skill creates (or lets you pick) the Claude Design project on first run and records it.
- **Stories that are not components:** Screens and Foundations are mapped to `null` in `titleMap` so they appear as reference, not as importable components.
- **Re-syncs:** after changing a component's props, update its story args first, otherwise the preview in Claude Design shows stale variants.
- Standalone Claude Design is scheduled to close on Dec 14, 2026. Check the replacement flow before relying on this long term.

## First sync log (2026-11-04)

Project: https://claude.ai/design/p/37fe9de6-69b5-458f-8f8c-05bceadc4994 ("Design portfolio site", id pinned in config.json). 15/15 components graded `match`, validate clean, 132 files uploaded.

Always pass `--out ./ds-bundle.nosync` (not `./ds-bundle`) to build/validate/compare/resync and use `--entry dist-lib/design-system/index.js --node-modules ./node_modules`. `npm run build:lib` must run first (it is `buildCmd`), and `.design-sync/sb-reference` must be rebuilt whenever stories or components change.

### Fixes (symptom -> cause -> fix)

- [GENERAL] `position: fixed` stories look broken in cards (Lightbox: dark sliver at the top; SectionDots: dots missing) -> the card wrapper contains fixed positioning, so the fixed box is the wrapper's own height -> size the story's parents (Lightbox wrapped in `h-screen`; SectionDots sections are `34vh` so three fill one viewport). Fix it in the story, not in an owned preview.
- Bio portrait cut off at the bottom -> default card/capture viewport is 900x700 and the section is taller -> `overrides.Bio.viewport = "900x1010"`.
- `[FONT_MISSING] "Archivo"` -> theme stack is `"Archivo Variable", "Archivo", sans-serif`, fontsource only registers "Archivo Variable" -> `.storybook/fonts.css` also registers plain "Archivo" from the same woff2 (relative path into node_modules). Both names now ship.
- `[GRID_OVERFLOW]` on Intro -> `cardMode: "column"`.
- `[RENDER_THIN]` on Bio/Header/ImageGallery/StackBlock -> their `OnPhone` stories only set the Storybook viewport global, which cards can't apply, so they render identically -> skipped (also Hero's). StickyHeader `Scrolled` is skipped because it is driven by a play function that scrolls the window.
- `CSS_FROM_STORYBOOK`: styles are scraped from the compiled Storybook CSS (the lib build ships no CSS). `[CSS_ASSETS]` about 23 url() refs is expected; the fonts are copied separately.

### Known and accepted

- Screens (Home, CaseStudy, Resume, Contact, NotFound), Foundations and Patterns are `null` in `titleMap`: reference stories, not components. Their sync is intentionally absent.
- Storybook's panel for tall components is shrunk to fit the sheet, so text looks smaller on the left than the right; compare the raw PNGs if in doubt.

### Re-sync risks (watch-list)

- Stories use inline sample data (SVG data URIs). If a component gains required props, update its story first or the preview silently shows stale variants.
- Grades follow the story files: editing `*.stories.tsx` re-captures and needs a re-grade.
- `titleMap` and `overrides` skip ids are story ids (`layout-header--on-phone`); renaming a story export silently un-skips it.
- `.storybook/fonts.css` relies on `node_modules/@fontsource-variable/archivo/files/archivo-latin-standard-normal.woff2` existing; a fontsource major bump may rename it.
- Only the latin Archivo subset is registered for the plain "Archivo" name (the "Archivo Variable" face has latin, latin-ext and vietnamese).
- Toolchain at sync time: Node v25.6, Storybook 10.6.5, Playwright chromium headless shell 156. The iCloud-synced Desktop is why output goes to `ds-bundle.nosync`.
- The Standalone Claude Design product closes by Dec 14, 2026; re-check where this project lives before the next sync.
