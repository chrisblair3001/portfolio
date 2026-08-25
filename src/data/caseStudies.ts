import omniHero from '../assets/omni-hero.png'
import omniAgentFlow from '../assets/omni-agent-flow.png'
import omniMobile from '../assets/omni-mobile.png'
import smartscanHero from '../assets/smartscan-hero.png'
import smartscanProcess from '../assets/smartscan-process.png'
import smartscanGallery from '../assets/smartscan-gallery.png'
import glxHypothesis from '../assets/glx-hypothesis.png'
import glxPersonaTina from '../assets/glx-persona-tina.png'
import glxFamilyNetwork from '../assets/glx-family-network.png'
import glxParentSegments from '../assets/glx-parent-segments.png'
import glxSegmentSizes from '../assets/glx-segment-sizes.png'
import glxConceptHub from '../assets/glx-concept-hub.png'
import glxConceptHeartbeat from '../assets/glx-concept-heartbeat.png'
import glxConceptAssistant from '../assets/glx-concept-assistant.png'
import glxConceptRecap from '../assets/glx-concept-recap.png'
import glxUserTestResults from '../assets/glx-user-test-results.png'
import glxTreeTestResults from '../assets/glx-tree-test-results.png'
import glxWireframeUpdates from '../assets/glx-wireframe-updates.png'
import glxHifiUpdates from '../assets/glx-hifi-updates.png'
import glxParentExperience from '../assets/glx-parent-experience.png'
import glxKidExperience from '../assets/glx-kid-experience.png'
import glxTabBarDocs from '../assets/glx-tab-bar-docs.png'

export type CaseStudyImage = {
  src: string
  alt: string
}

export type CaseStudyChapter = {
  index: string
  title: string
  body: string[]
  stats?: { group: string; chips: string[] }[]
  validations?: { title: string; body: string }[]
  gallery?: CaseStudyImage[]
}

export type CaseStudyRole = {
  title: string
  scope: string
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

export const caseStudies: CaseStudy[] = [
  {
    slug: 'omni-enterprise-chat-experience',
    title: 'Omni: A Chat Experience for the Enterprise',
    shortTitle: 'Omni',
    summary:
      "Designed airia's enterprise AI assistant, unifying company knowledge, search, and support into one trustworthy place to ask a question.",
    tagline: 'A full featured chat experience for the enterprise',
    tags: ['Enterprise AI', 'Conversational Design', 'Design Leadership'],
    chapters: [
      {
        index: '01',
        title: 'Overview',
        body: [
          "airia is an enterprise AI platform — Omni is the assistant at its center, threaded through search, support, and a growing library of custom agents. As adoption grew, so did the number of ways employees could ask it something.",
        ],
      },
      {
        index: '02',
        title: 'The problem',
        body: [
          'Before Omni, getting an answer inside a large company meant knowing exactly where to look: one tool for policy documents, another for IT tickets, a wiki that was always a version behind, and a search bar that rarely returned what you actually needed. There was no single, trustworthy place to just ask.',
        ],
      },
      {
        index: '03',
        title: 'My role',
        body: [
          "I led design for Omni's core experience, directing a team of three designers while staying hands-on with the interaction model myself — the part of the product every other surface, including Agent Studio and the admin console, would end up inheriting.",
        ],
      },
      {
        index: '04',
        title: 'The solution',
        body: [
          'We built one assistant with three ways in that all resolve to the same trustworthy answer: ask a direct question and get a sourced response, search across every connected company file, or route straight into IT support when the answer needs a human process, not just information. Whichever door someone came in through, the interaction — and the confidence in the answer — stayed the same.',
        ],
        gallery: [
          { src: omniHero, alt: 'Three Omni entry points: direct Q&A with sources, file search, and IT support' },
        ],
      },
      {
        index: '05',
        title: 'Going further',
        body: [
          "Some questions aren't one-off — they're something someone will ask again next week. When Omni recognized that pattern, it offered to turn the exchange into a reusable agent on the spot: describe what you want in plain language, and Omni scaffolds the agent's instructions, knowledge sources, and schedule for you to review, rather than build from scratch.",
        ],
        gallery: [
          { src: omniAgentFlow, alt: 'Conversation flow showing Omni scaffolding a new email-summary agent from a plain-language request' },
        ],
      },
      {
        index: '06',
        title: 'Extending the pattern',
        body: [
          'The same interaction model — one input, multiple resolution paths, consistent sourcing — had to hold up outside the desktop too. We adapted it into a lighter, responsive shell for mobile, and matched every screen across light and dark themes to meet enterprise IT requirements.',
        ],
        gallery: [{ src: omniMobile, alt: "Omni's navigation adapted for a responsive mobile shell" }],
      },
      {
        index: '07',
        title: 'Impact',
        body: [
          "Omni became the default first stop for company knowledge — the place people reached for before opening a wiki, filing a ticket, or pinging a coworker who \"probably knows.\" It also became the foundation the rest of airia's platform built on: Agent Studio, the admin console, and Security & Governance all extended patterns Omni introduced first.",
        ],
      },
    ],
  },
  {
    slug: 'smart-scan-file-organization',
    title: 'Smart Scan: File Organization in Plain Language',
    shortTitle: 'Smartscan',
    summary:
      'Designed a plain-language rule builder that tags, extracts, and summarizes across an entire file library in one pass — no folders required.',
    tagline: 'Intelligent file organization',
    tags: ['Enterprise AI', 'File Management', 'Product Design'],
    chapters: [
      {
        index: '01',
        title: 'Overview',
        body: [
          "Smart Scan lives inside airia's Files hub — the same knowledge base that powers Omni's search and citations. As teams connected more of their company files, the hub filled up faster than anyone could keep it organized by hand.",
        ],
      },
      {
        index: '02',
        title: 'The problem',
        body: [
          'Folders and filters assume you already know how you want things organized. In practice, people describe what they\'re looking for the way they\'d say it out loud — "photos from the beach trip," "anything that mentions the Q3 roadmap" — and traditional file organization tools don\'t speak that language. Doing it by hand across hundreds of files didn\'t scale, and nobody wanted to write a filter query to tag their own vacation photos.',
        ],
      },
      {
        index: '03',
        title: 'My role',
        body: [
          'I designed Smart Scan end to end, from the first single-rule version through the flexible, multi-criteria builder that shipped.',
        ],
      },
      {
        index: '04',
        title: 'The solution',
        body: [
          'Smart Scan runs three kinds of actions across a selected set of files: Tag labels files by whatever criteria you describe, Extract pulls out text and references that match a prompt, and Summarize condenses files down to what matters. You write the rule the way you\'d explain it to a person — "all photos taken on the beach," tag with "Vacation" — and Smart Scan applies it across every selected file in one pass.',
        ],
        gallery: [
          { src: smartscanHero, alt: 'Smart Scan panel showing Tag, Extract, and Summarize actions configured in plain language' },
        ],
      },
      {
        index: '05',
        title: 'Iterating toward flexibility',
        body: [
          "The first version let you set exactly one rule per action, which worked for simple cases but broke down fast — real organizing usually means several criteria at once. I redesigned each action into its own card that could hold multiple rules: tag by trip and by document type in a single Smart Scan, each with its own \"+ Add\" rather than forcing separate runs.",
        ],
        gallery: [
          { src: smartscanProcess, alt: 'Comparison of the single-rule Smart Scan panel and the redesigned multi-criteria version' },
        ],
      },
      {
        index: '06',
        title: 'Reusable, not disposable',
        body: [
          "A Smart Scan isn't a one-time action — it's saved, named, and re-runnable. \"Organize all of my vacation files\" or \"Categorize my travel pictures as 'wanderlust'\" show up in All Scans with when they last ran and how many files they touched, and can be renamed, duplicated, exported, or deleted like any other saved object.",
        ],
        gallery: [
          { src: smartscanGallery, alt: 'All Scans list showing saved, named Smart Scans with run history and file counts' },
        ],
      },
      {
        index: '07',
        title: 'Impact',
        body: [
          'Smart Scan turned file organization from a recurring chore into something people set up once and let run. Instead of manually sorting new uploads into folders, people described what they wanted and let a saved Scan keep the library organized going forward.',
        ],
      },
    ],
  },
  {
    slug: 'rebuilding-greenlights-ia',
    title: "Rebuilding Greenlight's IA",
    shortTitle: 'GLX',
    summary:
      "Untangled a sprawling parent-dashboard menu into one clear, task-based navigation system shared across Greenlight's parent and child experiences.",
    tagline: "Reimagining Greenlight's core ux",
    tags: ['Fintech', 'Information Architecture', 'Navigation'],
    role: {
      title: 'Director, Product Design',
      scope: 'Design direction  •  Alignment Workshops  •  User testing  •  Hands-on design execution',
    },
    team: ['Lead Product Designer', 'Director of Product, Growth', 'Chief Product Officer'],
    metrics: [
      { label: 'Plan upgrades', value: '+10%' },
      { label: 'Plan downgrades', value: '-10%' },
      { label: 'Safety Hub visits', value: '2x' },
      { label: 'Lesson completions', value: '+5%' },
      { label: 'Support contacts', value: '-5%' },
    ],
    chapters: [
      {
        index: '01',
        title: 'Problem Framing',
        body: [
          'As Greenlight grew, its navigation and information structure had trouble meeting the needs of both our main users and new user groups who would support further growth. I led the design of a new information architecture to better serve current users while we added more features.',
        ],
        gallery: [
          { src: glxHypothesis, alt: 'An extremely broad hypothesis: build a scalable platform that broadens the mission while strengthening core experiences' },
          { src: glxPersonaTina, alt: 'Tina persona: a working mom balancing career, family, and money management' },
          { src: glxFamilyNetwork, alt: "Family network diagram spanning core family, extended family, and care network, with a customer quote" },
          { src: glxParentSegments, alt: 'Parent segments breakdown: six behavioral segments by feature usage, plan tier, and family demographics' },
          { src: glxSegmentSizes, alt: 'Segment sizes chart showing relative population of each parent segment' },
        ],
      },
      {
        index: '02',
        title: 'Design Sprint',
        body: [
          'To start this project, I led a design sprint with my team that involved several workshops and design jams. Our goal was to align on the problem and develop three distinct potential solutions: "The Hub," "The Assistant," and "Heartbeat."',
        ],
        gallery: [
          { src: glxConceptHub, alt: 'The Hub concept: a curated, personalized home, wallet, and money screens' },
          { src: glxConceptHeartbeat, alt: 'Heartbeat concept: an experience focused on immersive content and family activity' },
          { src: glxConceptAssistant, alt: 'The Assistant concept: a daily distilled update surfacing the things users need to act on' },
          { src: glxConceptRecap, alt: 'Concept recap comparing The Hub, The Assistant, and Heartbeat side by side, with The Hub recommended' },
        ],
      },
      {
        index: '03',
        title: 'User Testing',
        body: [
          'We presented the design concepts to stakeholders and aligned around "The Hub". I ran user interviews and a tree test to gather both quantitative and qualitative feedback on the designs to ensure we were meeting user expectations.',
        ],
        stats: [
          { group: 'User Test', chips: ['2 rounds', '8 prototypes', '20+ users'] },
          { group: 'Tree Test', chips: ['2 prototypes', '60+ users'] },
        ],
        validations: [
          {
            title: "Focus on user's top tasks",
            body: 'Core Parents use GL to ensure their kids have money when they need and to help their children learn good money habits.',
          },
          {
            title: 'Surface user activity',
            body: "Prominently showing activities from across a user's GL account provides valuable insights into what their kids are doing and learning.",
          },
          {
            title: 'Bottom nav improves usability & discovery',
            body: 'Establishing a more consistent structure for where features live will help users better understand our app.',
          },
          {
            title: 'Dynamic recommendations',
            body: 'Consolidate the "ads" on the dashboard and make them smarter / more relevant to users.',
          },
        ],
        gallery: [
          { src: glxUserTestResults, alt: 'User test results for the "add money to your parent wallet" task: 78% success rate' },
          { src: glxTreeTestResults, alt: 'Tree test results for locating a family member\'s driving score' },
          { src: glxWireframeUpdates, alt: 'Annotated wireframe updates for the redesigned home feed' },
          { src: glxHifiUpdates, alt: 'Annotated hi-fi updates for the modified home dashboard, child header, money tab, and credit screen' },
        ],
      },
      {
        index: '04',
        title: 'Solution & Impact',
        body: [
          'Launching the redesigned information architecture had a positive effect on the ux and the business, increasing plan upgrades by 10% & improving discoverability of lesser used features like Safety and Level Up.',
        ],
        gallery: [
          { src: glxParentExperience, alt: 'Parent app screens for Home, Accounts, Chores, Safety, and Level Up' },
          { src: glxKidExperience, alt: 'Kid app screens for Home, Accounts, Chores, Safety, and Level Up' },
          { src: glxTabBarDocs, alt: 'Tab bar component documentation: anatomy, layout and spacing, and properties' },
        ],
      },
    ],
  },
]
