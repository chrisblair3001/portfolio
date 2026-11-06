import omniCover from '../assets/covers/omni-presentations-inline-edit-alt.webp'
import omniOverviewHome from '../assets/omni-overview-home.webp'
import omniOverviewSuggestions from '../assets/omni-overview-suggestions.webp'
import omniOverviewArtifact from '../assets/omni-overview-artifact.webp'
import omniOverviewConnectors from '../assets/omni-overview-connectors.webp'
import omniOverviewTasks from '../assets/omni-overview-tasks.webp'
import omniOverviewScheduled from '../assets/omni-overview-scheduled.webp'
import omniOverviewIncognito from '../assets/omni-overview-incognito.webp'
import omniResearchPrompt from '../assets/omni-research-prompt.webp'
import omniResearchPlan from '../assets/omni-research-plan.webp'
import omniResearchSummary from '../assets/omni-research-summary.webp'
import omniResearchReport from '../assets/omni-research-report.webp'
import omniWorkspacesEmpty from '../assets/omni-workspaces-empty.webp'
import omniWorkspacesList from '../assets/omni-workspaces-list.webp'
import omniWorkspacesThreads from '../assets/omni-workspaces-threads.webp'
import omniWorkspacesMilestones from '../assets/omni-workspaces-milestones.webp'
import omniWorkspacesPeople from '../assets/omni-workspaces-people.webp'
import omniWorkspacesFiles from '../assets/omni-workspaces-files.webp'
import omniWorkspacesChat from '../assets/omni-workspaces-chat.webp'
import omniWorkspacesRoutines from '../assets/omni-workspaces-routines.webp'
import omniWorkspacesRoutinesAlt from '../assets/omni-workspaces-routines-alt.webp'
import omniPresentationsChat from '../assets/omni-presentations-chat.webp'
import omniPresentationsEditor from '../assets/omni-presentations-editor.webp'
import omniPresentationsInlineEdit from '../assets/omni-presentations-inline-edit.webp'
import omniPresentationsInlineEditAlt from '../assets/omni-presentations-inline-edit-alt.webp'
import omniPresentationsPresentMode from '../assets/omni-presentations-present-mode.webp'
import omniFilesHome from '../assets/omni-files-home.webp'
import omniFilesImageGen from '../assets/omni-files-image-gen.webp'
import omniMobileChat from '../assets/omni-mobile-chat.webp'
import omniMobileMeetings from '../assets/omni-mobile-meetings.webp'
import omniMobileHistory from '../assets/omni-mobile-history.webp'
import smartscanProblem1 from '../assets/smartscan-problem-1.webp'
import smartscanProblem2 from '../assets/smartscan-problem-2.webp'
import smartscanProblem3 from '../assets/smartscan-problem-3.webp'
import smartscanProblem4 from '../assets/smartscan-problem-4.webp'
import smartscanProblem5 from '../assets/smartscan-problem-5.webp'
import smartscanGettingStarted from '../assets/smartscan-getting-started.webp'
import smartscanScanEmpty from '../assets/smartscan-scan-empty.webp'
import smartscanScanPrompts from '../assets/smartscan-scan-prompts.webp'
import smartscanScanCompleted from '../assets/smartscan-scan-completed.webp'
import smartscanReportsProgress from '../assets/smartscan-reports-progress.webp'
import smartscanReportsColumns from '../assets/smartscan-reports-columns.webp'
import smartscanCover from '../assets/covers/smartscan-reports-columns.webp'
import smartscanReportsViewer from '../assets/smartscan-reports-viewer.webp'
import glxHypothesis from '../assets/glx-hypothesis.webp'
import glxPersonaTina from '../assets/glx-persona-tina.webp'
import glxFamilyNetwork from '../assets/glx-family-network.webp'
import glxParentSegments from '../assets/glx-parent-segments.webp'
import glxSegmentSizes from '../assets/glx-segment-sizes.webp'
import glxConceptHub from '../assets/glx-concept-hub.webp'
import glxConceptHeartbeat from '../assets/glx-concept-heartbeat.webp'
import glxConceptAssistant from '../assets/glx-concept-assistant.webp'
import glxConceptRecap from '../assets/glx-concept-recap.webp'
import glxUserTestResults from '../assets/glx-user-test-results.webp'
import glxTreeTestResults from '../assets/glx-tree-test-results.webp'
import glxWireframeUpdates from '../assets/glx-wireframe-updates.webp'
import glxCover from '../assets/covers/glx-concept-hub.webp'
import glxHifiUpdates from '../assets/glx-hifi-updates.webp'
import glxParentExperience from '../assets/glx-parent-experience.webp'
import glxKidExperience from '../assets/glx-kid-experience.webp'
import glxTabBarDocs from '../assets/glx-tab-bar-docs.webp'
import dispatchWelcome from '../assets/dispatch-welcome.webp'
import dispatchPickSegments from '../assets/dispatch-pick-segments.webp'
import dispatchCover from '../assets/covers/dispatch-pick-segments.webp'
import dispatchToday from '../assets/dispatch-today.webp'
import dispatchTextures from '../assets/dispatch-textures.webp'
import dispatchEpisodes from '../assets/dispatch-episodes.webp'
import dispatchPodcastPlayer from '../assets/dispatch-podcast-player.webp'
import dispatchPhoneShare from '../assets/dispatch-phone-share.webp'
import dispatchDetails from '../assets/dispatch-details.webp'
import dispatchPodcastApp from '../assets/dispatch-podcast-app.webp'
import dispatchPhoneToday from '../assets/dispatch-phone-today.webp'
import dispatchQuietDay from '../assets/dispatch-quiet-day.webp'
import dispatchDesignBoard from '../assets/dispatch-design-board.webp'
import dispatchStorybook from '../assets/dispatch-storybook.webp'

import type { CaseStudy } from './caseStudyTypes'

export type {
  CaseStudy,
  CaseStudyChapter,
  CaseStudyImage,
  CaseStudyRole,
  StackItem,
  StackSection,
} from './caseStudyTypes'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'dispatch-ai-daily-podcast',
    cover: { src: dispatchCover, alt: 'Dispatch onboarding: choosing up to three daily segments', position: 'center top' },
    title: 'Dispatch',
    shortTitle: 'Dispatch',
    summary:
      'A side project to learn what building a real product with AI takes. Dispatch turns your saved articles and chosen topics into a short daily podcast, hosted by two AI voices and delivered to your podcast app.',
    tagline: 'A personal daily podcast, built with AI',
    tags: ['Consumer AI', '0 to 1', 'Built with Claude Code'],
    role: {
      title: 'Designer & Builder',
      scope: 'Product design  •  Visual identity  •  Full-stack build with AI  •  Design system',
    },
    team: ['Claude Code', 'Claude Design'],
    chapters: [
      {
        index: '01',
        title: 'Problem to solve',
        body: [
          'Dispatch started with a simple idea: save an article, and hear it later as a podcast. I wanted anyone to be able to use it, so there are no prompts and no setup. You pick what you care about, and a podcast shows up.',
          'The first version only worked with articles you saved, so nothing happened on days you saved nothing. Now you pick up to three segments, like Morning Briefing or Close to Home, and Dispatch builds an episode every weekday, saved articles first. It went from a tool you feed to a show that shows up on its own.',
        ],
        gallery: [
          { src: dispatchWelcome, alt: 'Dispatch welcome screen with the headline "Today\'s reading, in one short listen" and sign-in options' },
          { src: dispatchPickSegments, alt: 'Onboarding step where a listener picks up to three daily segments, like Morning Briefing and Close to Home' },
          { src: dispatchToday, alt: 'The Today screen with an episode ready, showing the intro, saved articles first, and then each segment as chapters' },
        ],
      },
      {
        index: '02',
        title: 'Design direction',
        body: [
          "The goal was a product that doesn't look like a template: dark and flat, with square corners and no shadows except on menus and dialogs. Two colors stand in for the hosts, slate for Nora and rose for Theo. Rose also marks new things, and is never an error color.",
          'Licensed photos run through SVG filters give the app its texture, and each episode gets its own cover, so your podcast app looks like Dispatch too.',
          'Getting articles in takes one tap: a Chrome extension, an iPhone share sheet shortcut, or a paste field on Today. The shortcut started as a setup you pasted a key into. I cut it to a single link.',
          "Empty and failed episodes are designed too. On a quiet day, Nora and Theo tell you what they didn't find. When an episode fails, it says what happened and offers a retry.",
        ],
        gallery: [
          { src: dispatchTextures, alt: 'The Dispatch texture library: licensed photographs run through brand filters, with credits' },
          { src: dispatchEpisodes, alt: 'The Episodes screen, a grid of episode covers each rendered from a different texture' },
          { src: dispatchPodcastPlayer, alt: 'Dispatch in Apple Podcasts with the latest episode started: the show cover art, a progress bar with 3:07 left, and the episode in the mini player' },
          { src: dispatchPhoneShare, alt: 'The phone confirmation after sharing an article to Dispatch from the iPhone share sheet' },
          { src: dispatchDetails, alt: 'Onboarding details step with a city field, a write-your-own segment, and topics to skip' },
          { src: dispatchPodcastApp, alt: 'Onboarding step for adding the private feed to Apple Podcasts, Pocket Casts or Overcast, with a connected state' },
          { src: dispatchPhoneToday, alt: 'The Today screen on a phone, with the player and chapters grouped by saved articles and segments' },
          { src: dispatchQuietDay, alt: 'A quiet day state: Nora and Theo found nothing new for two segments, so there is no episode today' },
        ],
      },
      {
        index: '03',
        title: 'Building with AI',
        body: [
          'Dispatch was built in a loop between Claude Code and Claude Design. Because the handoff bundle carries the reasoning as well as the pixels, the code came back accurate instead of approximate.',
          'Storybook and the design-sync skill hold the loop together: design-sync publishes every component and screen to Claude Design, so designs use the real components.',
        ],
        stack: [
          {
            kind: 'steps',
            title: 'The build loop',
            items: [
              { name: 'Prototype', note: 'First version in Claude Code.' },
              { name: 'Refine', note: 'Claude Design for every screen.' },
              { name: 'Bundle', note: 'Designs, files and chat history.' },
              { name: 'Build', note: 'Claude Code builds from the bundle.' },
            ],
          },
          {
            kind: 'items',
            title: 'Skills used',
            items: [
              { name: 'design-sync', note: 'Publishes Storybook to Claude Design.' },
              { name: 'voice-mastering', note: 'Fixes how Nora and Theo sound.' },
              { name: 'claude-api', note: 'Script writer and story discovery.' },
              { name: 'ux-writing', note: 'Copy pass: labels, empty states, errors.' },
              { name: 'design-critique', note: 'Critiques of screens while polishing.' },
            ],
          },
        ],
        gallery: [
          { src: dispatchDesignBoard, alt: 'A Claude Design board for the Dispatch interface components: buttons, tags, navigation and text fields' },
          { src: dispatchStorybook, alt: 'Storybook open on the Today screen, with every screen and component listed in the sidebar' },
        ],
      },
      {
        index: '04',
        title: 'Tech stack',
        body: [
          'Everything Dispatch runs on, including the unglamorous parts like sign-in and email.',
          'The biggest cost decision was the voice. ElevenLabs sounded great but cost roughly $0.70 an episode, about $15 a month for one weekday listener, by my estimates. I slightly preferred Chatterbox, an open-source model on fal.ai, in a blind listening test, and it costs about $0.09 an episode, around $2 a month.',
        ],
        stack: [
          {
            kind: 'steps',
            title: 'How an article becomes an episode',
            items: [
              { name: 'Save', note: 'Extension, share sheet or pasted link.', tools: ['Chrome extension', 'iPhone Shortcut'] },
              { name: 'Discover', note: 'Claude finds fresh stories per segment.', tools: ['Anthropic Claude'] },
              { name: 'Wake up', note: 'A scheduler starts each weekday run.', tools: ['node-cron'] },
              { name: 'Write', note: 'Claude writes a two-host script.', tools: ['Anthropic Claude'] },
              { name: 'Voice', note: 'Chatterbox reads each line.', tools: ['Chatterbox on fal.ai'] },
              { name: 'Stitch', note: 'ffmpeg joins clips and marks chapters.', tools: ['ffmpeg'] },
              { name: 'Store', note: 'Audio and cover go to Cloudflare R2.', tools: ['Cloudflare R2', 'Playwright', 'Wikimedia Commons'] },
              { name: 'Publish', note: 'A private RSS feed delivers it.', tools: ['RSS'] },
            ],
          },
          {
            kind: 'chips',
            title: 'Where it runs',
            items: [{ name: 'Vercel' }, { name: 'Render' }, { name: 'GitHub' }, { name: 'SQLite' }, { name: 'Drizzle' }],
          },
          {
            kind: 'chips',
            title: 'Accounts and email',
            items: [{ name: 'Clerk' }, { name: 'Resend' }, { name: 'ImprovMX' }],
          },
          {
            kind: 'chips',
            title: 'The app',
            items: [{ name: 'React 19' }, { name: 'TypeScript' }, { name: 'Vite' }, { name: 'Tailwind CSS 4' }, { name: 'Storybook' }, { name: 'Express' }, { name: 'Zod' }],
          },
        ],
      },
      {
        index: '05',
        title: "What's next",
        body: [
          'Dispatch is in private beta, open by invitation. The Chrome extension is live on the Chrome Web Store.',
          'Next: more segments and hosts, and an education mode that builds episodes around topics you want to learn. After that: newsletters you can forward in, more browsers, and a native iOS app.',
          'Voice is the biggest cost, so pricing should follow audio minutes. A capped flat plan, usage-based pricing and a free tier are all on the table.',
        ],
      },
    ],
  },
  {
    slug: 'omni-enterprise-chat-experience',
    cover: { src: omniCover, alt: 'Omni: a generated slide open in the presentation editor' },
    title: 'Omni',
    shortTitle: 'Omni',
    summary:
      "Directed design for Airia's enterprise-grade AI assistant: a secure place to find and understand your organization's data, go deep on research, collaborate with the team, and get work done.",
    tagline: 'A full featured chat experience for the enterprise',
    tags: ['Enterprise AI', 'Conversational Design', 'Design Leadership'],
    role: {
      title: 'Design Director',
      scope:
        'Design direction  •  Cross-functional alignment  •  Roadmap planning  •  Hands-on design execution',
      reports: ['Lead Designer', 'Senior Designer'],
    },
    team: ['CTO', 'Director of Product, End Users'],
    chapters: [
      {
        index: '01',
        title: 'Overview',
        body: [
          "Omni had two bars to clear: secure enough for the enterprise, and good enough to compete with ChatGPT and Claude. So it integrates with the tools a team already uses, instead of asking people to change how they work. We also gave people fine-grained control over any document or task in flight, so they could shape what the model handed back.",
        ],
        gallery: [
          { src: omniOverviewHome, alt: 'Omni home screen with quick actions for slides, scheduling, code, spreadsheets, and tasks' },
          { src: omniOverviewSuggestions, alt: 'Create Slides quick action expanded with example prompt suggestions' },
          { src: omniOverviewArtifact, alt: 'A generated spreadsheet rendered as an inline, editable artifact next to the chat' },
          { src: omniOverviewConnectors, alt: 'Connecting company tools like Slack, GitHub, and Google Drive to a conversation' },
          { src: omniOverviewTasks, alt: 'A set of agent-proposed tasks waiting for approval before they run' },
          { src: omniOverviewScheduled, alt: 'A confirmed recurring scheduled task with its cadence and instructions' },
          { src: omniOverviewIncognito, alt: 'Incognito mode for a private conversation that stays out of history' },
        ],
      },
      {
        index: '02',
        title: 'Deep Research',
        body: [
          "Deep Research had to earn trust, not just answer questions. Nobody wants to hand off a task and wait twenty minutes for an answer they can't check. So we made the process visible: Omni turns a question into a plan, works through it step by step, and cites its sources. Design pushed hard for a pause button, so people could step in before the agent went too far off track. And since not everyone wants a full report, we gave two ways in: a quick summary, or the full write-up with a table of contents.",
        ],
        gallery: [
          { src: omniResearchPrompt, alt: 'Deep Research mode enabled with a multi-part research question typed in' },
          { src: omniResearchPlan, alt: 'A research plan executing step by step, with the option to pause' },
          { src: omniResearchSummary, alt: 'A completed research summary with citation and search counts, and a link to the full report' },
          { src: omniResearchReport, alt: 'The full research report artifact with an executive summary and table of contents' },
        ],
      },
      {
        index: '03',
        title: 'Workspaces',
        body: [
          "Workspaces had to solve a context problem. A lot of conversations belong to a project, not just the person who started them, and early testers kept losing their place jumping between a project thread and a random one-off chat. So we gave each project a shared home: threads, milestones, people, and files, all in one place.",
        ],
        gallery: [
          { src: omniWorkspacesEmpty, alt: 'Empty Workspaces state with starter templates for common project types' },
          { src: omniWorkspacesList, alt: 'A list of active Workspaces, each with its own icon, description, and members' },
          { src: omniWorkspacesThreads, alt: 'A Workspace open to its Threads tab, showing every conversation tied to the project' },
          { src: omniWorkspacesMilestones, alt: 'A Workspace Milestones tab with action items, due dates, and assignees, alongside scheduled tasks' },
          { src: omniWorkspacesPeople, alt: 'A Workspace People tab listing everyone on the project with their role' },
          { src: omniWorkspacesFiles, alt: 'A Workspace Files tab with documents and images shared to the project' },
          { src: omniWorkspacesChat, alt: 'Chatting inside a Workspace to create a new milestone with assigned action items' },
          { src: omniWorkspacesRoutines, alt: 'Routines gallery for automating recurring tasks and workflows' },
          { src: omniWorkspacesRoutinesAlt, alt: 'Routines gallery showing another set of automation templates' },
        ],
      },
      {
        index: '04',
        title: 'Presentations',
        body: [
          "Presentations had to feel like an actual slide deck, not a document pretending to be one: structure, titles, speaker notes, all of it. The harder problem came after the first draft. Tweaking the tone or swapping a template meant leaving the deck to start over in chat. So I fought to get a floating AI toolbar into the editor, so people could refine in place instead of switching back and forth. Presenter mode came from the same need: speaker notes, a timer, and a look ahead, all without leaving the deck.",
        ],
        gallery: [
          { src: omniPresentationsChat, alt: 'A slide deck generated in chat, with suggested next steps to refine it' },
          { src: omniPresentationsEditor, alt: 'The presentation editor with a floating AI toolbar for tone, template, and style' },
          { src: omniPresentationsInlineEdit, alt: 'Selecting text on a slide to make a targeted AI edit' },
          { src: omniPresentationsInlineEditAlt, alt: 'The inline text edit tool with formatting options' },
          { src: omniPresentationsPresentMode, alt: 'Presenter mode with speaker notes, a timer, and the next slide in view' },
        ],
      },
      {
        index: '05',
        title: 'Files',
        body: [
          "Every file a person added or created in Omni needed one home, instead of scattering across a dozen chat threads. So we designed Files to aggregate everything a user added or made, filterable by type, so people could always find what they were looking for.",
        ],
        gallery: [
          { src: omniFilesHome, alt: 'The Files hub empty state with a promo for AI image generation and file-type filters' },
          { src: omniFilesImageGen, alt: 'Recent AI-generated images alongside a team’s uploaded files' },
        ],
      },
      {
        index: '06',
        title: 'Mobile',
        body: [
          "Mobile had to prove the same interaction model held up on a much smaller screen, not a stripped-down version of it. Chat keeps its quick actions and tool connectors within reach, not buried in menus. Meetings folds scheduling into a real calendar with its own creation flow, instead of a list bolted onto chat.",
        ],
        gallery: [
          { src: omniMobileChat, alt: 'Mobile chat home with quick actions and a connect-to-chat panel for tools and files' },
          { src: omniMobileMeetings, alt: 'Mobile Meetings with a day view, calendar, and create-meeting flow' },
          { src: omniMobileHistory, alt: 'Mobile History with threads, artifacts, and sort/filter options' },
        ],
      },
    ],
  },
  {
    slug: 'smart-scan-file-organization',
    cover: { src: smartscanCover, alt: 'SmartScan: a report with extracted columns for each document' },
    title: 'SmartScan',
    shortTitle: 'Smartscan',
    summary:
      'Designed a plain-language research tool that tags, extracts, and summarizes across an entire file library in one pass, built for legal and education teams.',
    tagline: 'Intelligent file organization',
    tags: ['Enterprise AI', 'File Management', 'Product Design'],
    role: {
      title: 'Lead Designer',
      scope: 'Concept development  •  Design execution  •  User testing',
    },
    team: ['CTO', 'Senior Product Manager'],
    chapters: [
      {
        index: '01',
        title: 'Problem Framing',
        body: [
          "Even in the age of AI, I still like to start ideation in my sketchbook. I was mostly trying to figure out the basic shape of the feature: where it lived in the product, how people would find and understand what Smart Scan actually did, and how they'd pick back up with something they were already working on.",
        ],
        gallery: [
          { src: smartscanProblem1, alt: 'Early whiteboard sketch of the "Bulk Review Agent" concept, applied as a feature of any assistant' },
          { src: smartscanProblem2, alt: 'Nav sketch questioning whether Bulk Review should be a standalone part of the sidebar' },
          { src: smartscanProblem3, alt: 'Sketch exploring using an existing agent surface as the entry point for bulk review' },
          { src: smartscanProblem4, alt: 'Sketch proposing a new "Working" section in the nav for long-running bulk reviews' },
          { src: smartscanProblem5, alt: 'Sketch of a finished-job results panel with a task checklist and a download action' },
        ],
      },
      {
        index: '02',
        title: 'Getting Started',
        body: [
          "Getting started meant solving the blank-page problem. Someone opening Smart Scan for the first time needed to understand what it could actually do, without reading a manual. So the home screen leads with a few common starting points instead of an empty prompt. It also had to make picking back up easy, so returning to a job from last week never took more than a glance.",
        ],
        gallery: [
          { src: smartscanGettingStarted, alt: 'Smart Scan home screen with starter templates and a list of previous scans' },
        ],
      },
      {
        index: '03',
        title: 'Scan Creation',
        body: [
          "Setting up a scan needed to feel simple: add your files, then just say what you want done with them, in plain language. Type things like tag anything about a merger, or extract every force majeure clause, and Smart Scan suggests criteria as you go instead of making you guess at the phrasing.",
        ],
        gallery: [
          { src: smartscanScanEmpty, alt: 'Add Files step of a new Smart Scan, before any files are added' },
          { src: smartscanScanPrompts, alt: 'Set Criteria step showing AI-suggested prompts as you describe what to do with your files' },
          { src: smartscanScanCompleted, alt: '35 files added with three scan criteria configured, ready to create the Smart Scan' },
        ],
      },
      {
        index: '04',
        title: 'Reports',
        body: [
          "Results land in a table shaped by whatever you asked for, one column per criterion, filled in as the scan works through your library. You can edit or add columns right from that same view, so tweaking a criterion doesn't mean rerunning the whole scan. I didn't want a result to ever be a dead end, so a document explorer sits one click away from the actual file, even images. You can always trace it back to the source.",
        ],
        gallery: [
          { src: smartscanReportsProgress, alt: 'A Smart Scan in progress, with files still processing' },
          { src: smartscanReportsColumns, alt: 'Completed results table with an Authorship Verification and Syllabus Consistency Check column, and Add Column open' },
          { src: smartscanReportsViewer, alt: 'Document explorer previewing an image file directly from the results table' },
        ],
      },
    ],
  },
  {
    slug: 'rebuilding-greenlights-ia',
    cover: { src: glxCover, alt: "Greenlight: the Hub concept shown in three parent screens", frame: 'none' },
    title: 'Greenlight IA',
    shortTitle: 'Greenlight IA',
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
          "As Greenlight grew, the nav and information structure started to buckle. It wasn't built for the new user groups we needed to support future growth. I led the redesign of the information architecture, so it could keep serving current users while we kept adding features.",
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
          'To kick things off, I led a design sprint with my team: a handful of workshops and design jams. The goal was simple. Align on the problem, then come up with real solutions. We landed on three: "The Hub," "The Assistant," and "Heartbeat."',
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
          "We presented the concepts to stakeholders and landed on \"The Hub.\" From there, I ran user interviews and a tree test. I wanted both the numbers and the why behind them, so we'd actually know if we were meeting user expectations.",
        ],
        stats: [
          { group: 'User Test', chips: ['2 rounds', '8 prototypes', '20+ users'] },
          { group: 'Tree Test', chips: ['2 prototypes', '60+ users'] },
        ],
        validations: [
          {
            title: "Focus on user's top tasks",
            body: 'Parents use Greenlight to make sure their kids have money when they need it, and to help them build good money habits.',
          },
          {
            title: 'Surface user activity',
            body: "Show account activity up front. Parents get real insight into what their kids are doing and learning.",
          },
          {
            title: 'Bottom nav improves usability & discovery',
            body: "A more consistent structure for where features live helps people actually find their way around the app.",
          },
          {
            title: 'Dynamic recommendations',
            body: "Consolidate the dashboard \"ads\" and make them smarter, more relevant to each user.",
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
          "Launching the redesigned IA was a win for both the product and the business. Plan upgrades went up 10%, and people actually started finding features like Safety and Level Up that used to go unnoticed.",
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
