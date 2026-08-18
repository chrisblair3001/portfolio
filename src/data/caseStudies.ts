import caseOnboarding from '../assets/case-onboarding.svg'
import caseSupport from '../assets/case-support.svg'
import caseGreenlight from '../assets/case-greenlight.png'
import greenlightNavBefore from '../assets/greenlight-nav-before.png'
import greenlightWireframes from '../assets/greenlight-wireframes.png'
import greenlightImpactParent from '../assets/greenlight-impact-parent.png'
import greenlightImpactChild from '../assets/greenlight-impact-child.png'
import omniHero from '../assets/omni-hero.png'
import omniAgentFlow from '../assets/omni-agent-flow.png'
import omniMobile from '../assets/omni-mobile.png'
import smartscanHero from '../assets/smartscan-hero.png'
import smartscanProcess from '../assets/smartscan-process.png'
import smartscanGallery from '../assets/smartscan-gallery.png'

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
    slug: 'omni-enterprise-chat-experience',
    title: 'Omni: A Chat Experience for the Enterprise',
    summary:
      "Designed airia's enterprise AI assistant, unifying company knowledge, search, and support into one trustworthy place to ask a question.",
    image: omniHero,
    bgColor: '#f1eefc',
    tags: ['Enterprise AI', 'Conversational Design', 'Design Leadership'],
    sections: [
      {
        heading: 'Overview',
        body: [
          "airia is an enterprise AI platform — Omni is the assistant at its center, threaded through search, support, and a growing library of custom agents. As adoption grew, so did the number of ways employees could ask it something.",
        ],
      },
      {
        heading: 'The problem',
        body: [
          'Before Omni, getting an answer inside a large company meant knowing exactly where to look: one tool for policy documents, another for IT tickets, a wiki that was always a version behind, and a search bar that rarely returned what you actually needed. There was no single, trustworthy place to just ask.',
        ],
      },
      {
        heading: 'My role',
        body: [
          "I led design for Omni's core experience, directing a team of three designers while staying hands-on with the interaction model myself — the part of the product every other surface, including Agent Studio and the admin console, would end up inheriting.",
        ],
      },
      {
        heading: 'The solution',
        body: [
          'We built one assistant with three ways in that all resolve to the same trustworthy answer: ask a direct question and get a sourced response, search across every connected company file, or route straight into IT support when the answer needs a human process, not just information. Whichever door someone came in through, the interaction — and the confidence in the answer — stayed the same.',
        ],
        image: omniHero,
        imageAlt: 'Three Omni entry points: direct Q&A with sources, file search, and IT support',
      },
      {
        heading: 'Going further',
        body: [
          "Some questions aren't one-off — they're something someone will ask again next week. When Omni recognized that pattern, it offered to turn the exchange into a reusable agent on the spot: describe what you want in plain language, and Omni scaffolds the agent's instructions, knowledge sources, and schedule for you to review, rather than build from scratch.",
        ],
        image: omniAgentFlow,
        imageAlt: 'Conversation flow showing Omni scaffolding a new email-summary agent from a plain-language request',
      },
      {
        heading: 'Extending the pattern',
        body: [
          'The same interaction model — one input, multiple resolution paths, consistent sourcing — had to hold up outside the desktop too. We adapted it into a lighter, responsive shell for mobile, and matched every screen across light and dark themes to meet enterprise IT requirements.',
        ],
        image: omniMobile,
        imageAlt: "Omni's navigation adapted for a responsive mobile shell",
      },
      {
        heading: 'Impact',
        body: [
          "Omni became the default first stop for company knowledge — the place people reached for before opening a wiki, filing a ticket, or pinging a coworker who \"probably knows.\" It also became the foundation the rest of airia's platform built on: Agent Studio, the admin console, and Security & Governance all extended patterns Omni introduced first.",
        ],
      },
    ],
  },
  {
    slug: 'smart-scan-file-organization',
    title: 'Smart Scan: File Organization in Plain Language',
    summary:
      'Designed a plain-language rule builder that tags, extracts, and summarizes across an entire file library in one pass — no folders required.',
    image: smartscanHero,
    bgColor: '#fdf3e3',
    tags: ['Enterprise AI', 'File Management', 'Product Design'],
    sections: [
      {
        heading: 'Overview',
        body: [
          "Smart Scan lives inside airia's Files hub — the same knowledge base that powers Omni's search and citations. As teams connected more of their company files, the hub filled up faster than anyone could keep it organized by hand.",
        ],
      },
      {
        heading: 'The problem',
        body: [
          'Folders and filters assume you already know how you want things organized. In practice, people describe what they\'re looking for the way they\'d say it out loud — "photos from the beach trip," "anything that mentions the Q3 roadmap" — and traditional file organization tools don\'t speak that language. Doing it by hand across hundreds of files didn\'t scale, and nobody wanted to write a filter query to tag their own vacation photos.',
        ],
      },
      {
        heading: 'My role',
        body: [
          'I designed Smart Scan end to end, from the first single-rule version through the flexible, multi-criteria builder that shipped.',
        ],
      },
      {
        heading: 'The solution',
        body: [
          'Smart Scan runs three kinds of actions across a selected set of files: Tag labels files by whatever criteria you describe, Extract pulls out text and references that match a prompt, and Summarize condenses files down to what matters. You write the rule the way you\'d explain it to a person — "all photos taken on the beach," tag with "Vacation" — and Smart Scan applies it across every selected file in one pass.',
        ],
        image: smartscanHero,
        imageAlt: 'Smart Scan panel showing Tag, Extract, and Summarize actions configured in plain language',
      },
      {
        heading: 'Iterating toward flexibility',
        body: [
          "The first version let you set exactly one rule per action, which worked for simple cases but broke down fast — real organizing usually means several criteria at once. I redesigned each action into its own card that could hold multiple rules: tag by trip and by document type in a single Smart Scan, each with its own \"+ Add\" rather than forcing separate runs.",
        ],
        image: smartscanProcess,
        imageAlt: 'Comparison of the single-rule Smart Scan panel and the redesigned multi-criteria version',
      },
      {
        heading: 'Reusable, not disposable',
        body: [
          "A Smart Scan isn't a one-time action — it's saved, named, and re-runnable. \"Organize all of my vacation files\" or \"Categorize my travel pictures as 'wanderlust'\" show up in All Scans with when they last ran and how many files they touched, and can be renamed, duplicated, exported, or deleted like any other saved object.",
        ],
        image: smartscanGallery,
        imageAlt: 'All Scans list showing saved, named Smart Scans with run history and file counts',
      },
      {
        heading: 'Impact',
        body: [
          'Smart Scan turned file organization from a recurring chore into something people set up once and let run. Instead of manually sorting new uploads into folders, people described what they wanted and let a saved Scan keep the library organized going forward.',
        ],
      },
    ],
  },
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
