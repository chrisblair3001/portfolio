---
name: case-study
description: Polish and build portfolio case studies for Chris's site - tighten the UX copy, format screenshots consistently (uniform margins, phone or browser frames, high-resolution), and lay out "how it's built" content. Use whenever the user is writing, editing, reviewing or adding a case study, mentions caseStudies.ts, case study screenshots, gallery images, alt text, device frames or mockups, or says things like "clean up this case study", "make these screenshots consistent", "add a new case study", or "tighten the copy", even if they don't say "skill".
---

# Case study polish

This skill turns rough case study material into pages that look and read as one set. It has three
parts: a **copy pass**, a **screenshot pass**, and **"how it's built" formatting**. Run the parts the
user asks for; if they say "clean up this case study", run all three.

The case studies live in `src/data/caseStudies.ts` (shapes in `src/data/caseStudyTypes.ts`) and render
through `src/pages/CaseStudyDetail.tsx`. Screenshots live in `src/assets/` and are imported at the top
of `caseStudies.ts`. Read those two files before you start so you edit the real data rather than a copy
of it.

## Ground rules

- **Never invent.** Copy edits keep every fact. If you can't verify something, ask. Details in
  `references/copy-rubric.md`, section 1.
- **Show before you write.** Present copy changes as a reviewable list and wait for approval before
  editing `caseStudies.ts`. Image processing is safe to run, since it writes new files and leaves the
  originals alone.
- **Don't overwrite the author's raw screenshots.** Read from their folder, write finished images to
  `src/assets/`. Keep originals wherever the user keeps them.

## Part 1: Copy pass

1. Read `references/copy-rubric.md` in full. It defines the structure, sentence and word rules, voice,
   per-field limits, alt text rules, and how to report edits.
2. Read the case study you're editing, and any notes or source material the user gave you. The source
   material is how you check claims.
3. Go chapter by chapter. Produce the edits list in the format the rubric specifies (original, new
   text, reason), followed by **Questions for the author** and **Left alone on purpose**.
4. Wait for the user to accept, reject or adjust. Then apply the accepted edits to `caseStudies.ts`,
   keeping the file's code style (single quotes, no semicolons, trailing commas).

## Part 2: Screenshot pass

Consistency is the point, so the processing is done by a script, not by eye. The script gives every
image the same canvas height, the same margin, the same background and the same frame drawing.

1. **Gather the raw screenshots** into one folder (ask the user where they are). Raw means unframed:
   no device mockup, no browser chrome. A screenshot that is already framed will get double chrome, so
   ask for the original.
2. **Look at every image** (use Read on each file) and decide its frame. This step needs judgment, so
   don't skip it:
   - `phone`: a phone screen, from a device or simulator.
   - `browser`: a web app in a browser tab; needs `--url`.
   - `window`: a desktop app or a web app where a URL would be noise (title bar and dots only).
   - `bare`: design boards, diagrams, charts, research slides, photos, anything that is already a
     composed picture.
3. **Tag the files** by adding the frame before the extension, using copies or a staging folder so
   the originals keep their names: `today.phone.png`, `home.browser.png`, `editor.window.png`,
   `board.bare.png`.
4. **Dry run first**, then run for real. The report shows each image's frame, size, scale and a
   resolution grade:

   ```bash
   node .claude/skills/case-study/scripts/shots.mjs <folder> --slug <study-slug> --url <host> --dry-run
   node .claude/skills/case-study/scripts/shots.mjs <folder> --slug <study-slug> --url <host> --snippet
   ```

   The output goes to `src/assets/` as WebP by default (use `--format png` if a flat graphic shows
   banding). `node .../shots.mjs --help` lists every option.
5. **Handle resolution warnings honestly.** `soft` or `low-res` means the source is smaller than the
   canvas needs and was enlarged. Don't hide it: tell the user which files to re-export at 2x (the
   warning gives the pixel height needed). Pass `--strict` when you want a failing exit code for
   `low-res` images.
6. **Wire them into the data.** Replace the old imports and gallery entries in `caseStudies.ts` (the
   `--snippet` output prints ready-to-paste lines). Write the alt text yourself by looking at each
   image, following the alt text rules in the rubric. Don't leave `TODO` alts behind.
7. **Check it in the browser.** Open the case study on the dev server and look at the gallery strip
   and the lightbox. Uniform margins should be visible at a glance.

Phone frames sit on a 3:4 card by default so a row of images has similar widths (`--min-aspect 0`
hugs the frame instead). The script never upscales silently and never edits the source file.

## Part 3: "How it's built" formatting

This part is not built yet. For now, use the existing `StackSection` data (`kind: 'steps'` for a
numbered flow, `kind: 'items'` for tools and what each does) rendered by `StackBlock`, and apply the
copy rubric to the notes. When the user asks for something richer, such as a layered diagram, a
decision table or a pipeline graphic, propose the layout and confirm it before building it.
