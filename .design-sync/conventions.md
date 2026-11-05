## How to build with Portfolio

Portfolio is the personal site of a product design leader: a clean white page, near-black text, a single red accent, and a wide, bold, uppercase Archivo headline style. Pages are quiet and typographic; the only decoration is a halftone dot trail that follows the cursor on the home page. Build every screen on the white `bg` surface.

### Set up

Link `styles.css` once, load the bundle, and wrap your whole tree in `PortfolioProvider`. The provider supplies the router that `Header`, `PageShell` and the other building blocks need for their links (without it they throw).

```jsx
const { PortfolioProvider, Header, CaseStudies } = window.Portfolio;

<PortfolioProvider>
  <main style={{ background: 'var(--color-bg)', color: 'var(--color-body)', fontFamily: 'var(--font-archivo)' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '24px 80px' }}>
      <Header />
    </div>
  </main>
</PortfolioProvider>
```

### Styling idiom: components first, then CSS variables

- Use the library components for the header, footer, page frame, case study list, gallery, lightbox and stack block. They are built with Tailwind utilities, and the stylesheet only contains the utilities the components themselves use. **Do not write Tailwind utility classes for your own markup**; other class names will silently do nothing. For your own layout use plain CSS or inline `style` with the variables below.
- Colors are `var(--color-*)`: `bg` (page, white), `ink` (near-black surfaces and pill hover), `heading`, `body`, `muted`, `label` (uppercase section labels), `border` (pill outlines), `hairline` (1px dividers), `base-secondary` (case study descriptions) and `accent` (the red, for the logo mark and links only).
- Type is Archivo, `var(--font-archivo)`, at weights 400 to 900 with its width axis. Headlines are **bold, uppercase and set wide with `font-stretch: 125%`**; body copy is 16 to 18px at a 1.6 line height in `body`; section labels are 16px semibold uppercase in `label`, written like `// Case studies`. Manrope appears only in the footer's copyright line.
- Shapes: pills are fully rounded (`border-radius: 9999px`) with a 1px `border` outline, white fill, and a hover that fills them with `ink` and turns the text white. Images are `border-radius: 8px` with a 1px `hairline` border and a faint shadow (`0 2px 4px 2px rgba(0,0,0,0.06)`). Everything else is square and flat.
- Text that sits over the cursor-glow dot trail gets a per-line white backdrop (`background: #fff; padding: 2px 6px; box-decoration-break: clone`), so the copy stays legible.
- Layout: content sits in a centered column, `max-width: 1280px`, with 24px side padding on phones, 40px on tablets and 80px on desktop. Sections on the home page are full viewport height.

### Where to look

- `styles.css` and the `_ds_bundle.css` it imports hold every token and component style.
- `components/<group>/<Name>/<Name>.prompt.md` has usage and examples for each component; `<Name>.d.ts` has its props.
- The pill, tag-chip and highlight styles are described above rather than shipped as components; rebuild them with the plain CSS given in the styling idiom section.
