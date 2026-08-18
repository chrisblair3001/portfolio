import caseOnboarding from '../assets/case-onboarding.svg'
import caseSupport from '../assets/case-support.svg'
import caseGreenlight from '../assets/case-greenlight.png'
import greenlightNavBefore from '../assets/greenlight-nav-before.png'
import greenlightWireframes from '../assets/greenlight-wireframes.png'
import greenlightImpactParent from '../assets/greenlight-impact-parent.png'
import greenlightImpactChild from '../assets/greenlight-impact-child.png'

export type CaseStudySection = {
  heading: string
  body: string[]
  image?: string
  imageAlt?: string
}

export type CaseStudy = {
  slug: string
  title: string
  summary: string
  image: string
  bgColor: string
  tags?: string[]
  sections?: CaseStudySection[]
  metrics?: { label: string; value: string }[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'reinventing-enterprise-onboarding',
    title: 'Reinventing Enterprise Onboarding',
    summary:
      'Reduced time-to-value by 40% through a guided, modular onboarding framework for a SaaS platform.',
    image: caseOnboarding,
    bgColor: '#eef2fc',
  },
  {
    slug: 'streamlining-customer-support',
    title: 'Streamlining Customer Support',
    summary:
      'Enhanced customer satisfaction by 30% with an AI-driven support system that resolves queries in real time.',
    image: caseSupport,
    bgColor: '#ecf9f1',
  },
  {
    slug: 'rebuilding-greenlights-ia',
    title: "Rebuilding Greenlight's IA",
    summary:
      "Untangled a sprawling parent-dashboard menu into one clear, task-based navigation system shared across Greenlight's parent and child experiences.",
    image: caseGreenlight,
    bgColor: '#eaf5f0',
    tags: ['Fintech', 'Information Architecture', 'Navigation'],
    metrics: [
      { label: 'Plan upgrades', value: 'Up ~10%' },
      { label: 'Plan downgrades', value: 'Down ~10%' },
      { label: 'Support contacts', value: 'Trended down' },
      { label: 'Safety Hub visits', value: 'Roughly doubled' },
      { label: 'Lesson completions', value: 'Up ~5%' },
    ],
    sections: [
      {
        heading: 'Overview',
        body: [
          "Greenlight pairs a debit card for kids with a money app for the whole family — parents manage allowance, chores, and savings; kids learn to spend, save, and invest under supervision. As the product grew, so did its navigation: new tools and settings kept getting bolted onto an already dense parent menu.",
        ],
      },
      {
        heading: 'The problem',
        body: [
          "A navigation audit turned up a parent dashboard with dozens of menu items, several appearing in more than one place — parent settings, notifications, and referral tools were each duplicated across different sections of the app. New users struggled to find core actions; longtime users often didn't realize features existed at all.",
        ],
        image: greenlightNavBefore,
        imageAlt: "Diagram of Greenlight's existing, sprawling navigation structure",
      },
      {
        heading: 'Research & process',
        body: [
          "I ran usability sessions and card-sorting exercises with parents to understand how they actually thought about the app, rather than how its feature list had grown. Four questions kept surfacing: what do I need to act on, where do I get a task done, where do I learn something, and how do I keep up with family activity. That reframing became the spine of the new IA.",
          "From there, I prototyped a range of tab-bar structures — from a lean two-tab version to a fuller five-tab one — and tested them against those same user mental models before converging on a shared structure that worked for both the parent and child experience.",
        ],
        image: greenlightWireframes,
        imageAlt: 'Wireframes for the redesigned Parent Home, My GL, and Child Home screens',
      },
      {
        heading: 'The solution',
        body: [
          'The new IA organizes everything under five consistent tabs — Home, Money, Chores, Safety, and Level Up — mirrored across the parent and child apps so both experiences finally speak the same language. Deep settings and secondary tools moved out of one sprawling menu and into the sections where people would actually look for them.',
        ],
      },
      {
        heading: 'Impact',
        body: [
          'Early results were promising: plan upgrades rose and downgrades fell, support contacts trended down, and engagement with secondary features like Safety Hub and financial lessons climbed noticeably on both the parent and child side.',
        ],
        image: greenlightImpactParent,
        imageAlt: 'Parent app screens for Home, Money, Chores, Safety, and Level Up',
      },
      {
        heading: 'Child experience',
        body: [
          'The same structure carried through to the kid-facing app, keeping the mental model consistent as families moved between the two.',
        ],
        image: greenlightImpactChild,
        imageAlt: 'Child app screens for Home, Money, Chores, Safety, and Level Up',
      },
    ],
  },
]
