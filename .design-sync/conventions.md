## How to build with Portfolio

Portfolio is the personal site of a product design leader, in a dark "Night" design: a near-black page, off-white text, one lime accent, a lime-to-teal gradient on one accent phrase in the home hero headline (other headlines are plain white), thin hairlines, and small monospace labels. Pages are quiet and typographic; the only decoration is a field of fine hairlines behind the home page hero. Build every screen on the dark `bg` surface.

### Set up

Link `styles.css` once, load the bundle, and wrap your whole tree in `PortfolioProvider`. The provider supplies the router that `Header`, `PageShell` and the other building blocks need for their links (without it they throw), and the Night page surface: the `bg` background, `body` text color and Manrope, so nothing renders on a white page.

```jsx
const { PortfolioProvider, Header, CaseStudies } = window.Portfolio;

<PortfolioProvider>
  <main style={{ background: 'var(--color-bg)', color: 'var(--color-body)', fontFamily: 'var(--font-sans)' }}>
    <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }}>
      <Header />
    </div>
  </main>
</PortfolioProvider>
```

### Styling idiom: components first, then CSS variables

- Use the library components for the header, footer, page frame, case study grid, gallery, lightbox, stack block and next-case-study row. They are built with Tailwind utilities, and the stylesheet only contains the utilities the components themselves use. **Do not write Tailwind utility classes for your own markup**; other class names will silently do nothing. For your own layout use plain CSS or inline `style` with the variables below.
- Colors are `var(--color-*)`: `bg` (page, #121212), `ink` (the light fill that pills take on hover, with `bg` as their text), `heading`, `body`, `muted` (secondary text), `label` (section labels and mono meta), `border` (pill outlines), `hairline` (1px dividers), `accent` (lime: links, chapter numbers, progress track), and the gradient stops `g1` (lime) and `g2` (teal). The accent is for dark backgrounds only.
- Three typefaces, as variables: `var(--font-display)` is Bricolage Grotesque for headlines, **bold, sentence case, `letter-spacing: -0.045em`, line height about 0.92 to 1.05** (never uppercase, never stretched); `var(--font-sans)` is Manrope for body copy (15 to 18px at a 1.6 line height) and labels, which are 13.6px semibold uppercase written like `// Case studies`; `var(--font-mono)` is JetBrains Mono at 500, 11 to 13px, uppercase with `letter-spacing: 0.06em`, for numbering, captions and meta.
- Gradient text, used sparingly (the home hero's accent phrase, not page titles): `background-image: linear-gradient(93deg, var(--color-g1) 0%, var(--color-g2) 60%); background-clip: text; color: transparent`. Give gradient letters padding with an equal negative margin (`padding: .2em .14em; margin: -.2em -.14em`) so overhangs are not clipped.
- Shapes: pills are fully rounded (`border-radius: 9999px`) with a 1px `border` outline and `bg` fill; on hover they fill with `ink` and the text turns `bg` (200ms). Images are `border-radius: 4px` to `6px`, with a 1px `hairline` border where they sit on the page. No shadows. Everything else is square and flat.
- Motion is restrained: `Reveal` fades a section up by 40px once as it scrolls into view; case study cards show the cover in a small window on a tinted stage (`#181716`), and on hover the stage lightens and the window lifts 6px and scales to 1.02 over 700ms on one ease-out curve; respect `prefers-reduced-motion`.
- Layout: a centered column, `max-width: 1152px` on the home page and simple pages, 1440px with 1280px of content on case study pages, with `clamp(24px, 6vw, 80px)` side padding. Home sections are at least one viewport tall.

### Where to look

- `styles.css` and the `_ds_bundle.css` it imports hold every token and component style.
- `components/<group>/<Name>/<Name>.prompt.md` has usage and examples for each component; `<Name>.d.ts` has its props.
- Pill buttons, tag chips and mono labels are not components: build them from the plain CSS described above.
