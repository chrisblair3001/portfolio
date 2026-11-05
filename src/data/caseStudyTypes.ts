// Shapes for the case study data. Kept apart from the data itself (which imports every screenshot)
// so components can use these types without pulling the images into the component library build.

export type CaseStudyImage = {
  src: string
  alt: string
  // Some Figma exports already render their own card frame/border. For
  // those, skip the gallery's own border so it doesn't double up.
  bare?: boolean
}

export type StackItem = { name: string; note: string }

// A block of "how it was built" content for a chapter. `steps` renders as a
// numbered flow; `items` renders as a titled list of tools and what each does.
export type StackSection = {
  kind: 'steps' | 'items'
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
  tags?: string[]
  role?: CaseStudyRole
  team?: string[]
  chapters?: CaseStudyChapter[]
  metrics?: { label: string; value: string }[]
}
