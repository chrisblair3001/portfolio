// The design system's public surface: every reusable building block of the site. The site itself
// imports these by file; this index exists so the library can be bundled as one entry (see
// .design-sync/ for the Claude Design sync). Pages are not exported: they are compositions of these
// pieces plus the case study data, and live in Storybook as Screens.
export { default as Bio } from '../components/Bio'
export { default as CaseStudies } from '../components/CaseStudies'
export { default as CursorGlow } from '../components/CursorGlow'
export { default as Divider } from '../components/Divider'
export { default as ExpandableImage } from '../components/ExpandableImage'
export { default as Footer } from '../components/Footer'
export { default as Header } from '../components/Header'
export { default as Hero } from '../components/Hero'
export { default as ImageGallery } from '../components/ImageGallery'
export { default as Intro } from '../components/Intro'
export { default as Lightbox } from '../components/Lightbox'
export { default as PageShell } from '../components/PageShell'
export { default as SectionDots } from '../components/SectionDots'
export { default as StackBlock } from '../components/StackBlock'
export { default as StickyHeader } from '../components/StickyHeader'
export { PortfolioProvider } from './PortfolioProvider'
export type {
  CaseStudy,
  CaseStudyChapter,
  CaseStudyImage,
  StackItem,
  StackSection,
} from '../data/caseStudyTypes'
