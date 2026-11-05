// Shapes for the case study data. Kept apart from the data itself (which imports every screenshot)
// so components can use these types without pulling the images into the component library build.

export type CaseStudyImage = {
  src: string
  alt: string
  // Some Figma exports already render their own card frame/border. For
  // those, skip the gallery's own border so it doesn't double up.
  bare?: boolean
}

// The picture a case study shows on its home page card. `position` is a CSS object-position, for
// steering the crop of a screenshot.
export type CaseStudyCover = CaseStudyImage & { position?: string }

// `tools` lists the technologies behind a step, shown as small pills under its note. In a `chips`
// section the note is not used: each item is one pill.
export type StackItem = { name: string; note?: string; tools?: string[] }

// A block of "how it was built" content for a chapter. `steps` renders as a numbered flow, with the
// tools behind each step; `items` renders as a titled list of tools and what each does; `chips`
// renders as a labelled row of tool names.
export type StackSection = {
  kind: 'steps' | 'items' | 'chips'
  title: string
  items: StackItem[]
}

export type CaseStudyChapter = {
  index: string
  title: string
  body: string[]
  stats?: { group: string; chips: string[] }[]
  validations?: { title: string; body: string }[]
  stack?: StackSection[]
  gallery?: CaseStudyImage[]
}

export type CaseStudyRole = {
  title: string
  scope: string
  // Designers who reported into this role on the project, listed
  // individually the same way CaseStudy.team is.
  reports?: string[]
}

export type CaseStudy = {
  slug: string
  title: string
  shortTitle?: string
  summary: string
  tagline?: string
  cover?: CaseStudyCover
  tags?: string[]
  role?: CaseStudyRole
  team?: string[]
  chapters?: CaseStudyChapter[]
  metrics?: { label: string; value: string }[]
}
