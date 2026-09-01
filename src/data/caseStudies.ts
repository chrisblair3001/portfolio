import omniOverviewHome from '../assets/omni-overview-home.png'
import omniOverviewSuggestions from '../assets/omni-overview-suggestions.png'
import omniOverviewArtifact from '../assets/omni-overview-artifact.png'
import omniOverviewConnectors from '../assets/omni-overview-connectors.png'
import omniOverviewTasks from '../assets/omni-overview-tasks.png'
import omniOverviewScheduled from '../assets/omni-overview-scheduled.png'
import omniOverviewIncognito from '../assets/omni-overview-incognito.png'
import omniResearchPrompt from '../assets/omni-research-prompt.png'
import omniResearchPlan from '../assets/omni-research-plan.png'
import omniResearchSummary from '../assets/omni-research-summary.png'
import omniResearchReport from '../assets/omni-research-report.png'
import omniWorkspacesEmpty from '../assets/omni-workspaces-empty.png'
import omniWorkspacesList from '../assets/omni-workspaces-list.png'
import omniWorkspacesThreads from '../assets/omni-workspaces-threads.png'
import omniWorkspacesMilestones from '../assets/omni-workspaces-milestones.png'
import omniWorkspacesPeople from '../assets/omni-workspaces-people.png'
import omniWorkspacesFiles from '../assets/omni-workspaces-files.png'
import omniWorkspacesChat from '../assets/omni-workspaces-chat.png'
import omniWorkspacesRoutines from '../assets/omni-workspaces-routines.png'
import omniWorkspacesRoutinesAlt from '../assets/omni-workspaces-routines-alt.png'
import omniPresentationsChat from '../assets/omni-presentations-chat.png'
import omniPresentationsEditor from '../assets/omni-presentations-editor.png'
import omniPresentationsInlineEdit from '../assets/omni-presentations-inline-edit.png'
import omniPresentationsInlineEditAlt from '../assets/omni-presentations-inline-edit-alt.png'
import omniPresentationsPresentMode from '../assets/omni-presentations-present-mode.png'
import omniFilesHome from '../assets/omni-files-home.png'
import omniFilesQuickNote from '../assets/omni-files-quick-note.png'
import omniFilesImageGen from '../assets/omni-files-image-gen.png'
import omniMobileChat from '../assets/omni-mobile-chat.png'
import omniMobileMeetings from '../assets/omni-mobile-meetings.png'
import omniMobileHistory from '../assets/omni-mobile-history.png'
import smartscanProblem1 from '../assets/smartscan-problem-1.png'
import smartscanProblem2 from '../assets/smartscan-problem-2.png'
import smartscanProblem3 from '../assets/smartscan-problem-3.png'
import smartscanProblem4 from '../assets/smartscan-problem-4.png'
import smartscanProblem5 from '../assets/smartscan-problem-5.png'
import smartscanGettingStarted from '../assets/smartscan-getting-started.png'
import smartscanScanEmpty from '../assets/smartscan-scan-empty.png'
import smartscanScanPrompts from '../assets/smartscan-scan-prompts.png'
import smartscanScanCompleted from '../assets/smartscan-scan-completed.png'
import smartscanReportsProgress from '../assets/smartscan-reports-progress.png'
import smartscanReportsColumns from '../assets/smartscan-reports-columns.png'
import smartscanReportsViewer from '../assets/smartscan-reports-viewer.png'
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
      "Designed airia's all-in-one AI assistant — a single place to ask a question, go deep on research, collaborate with a team, and turn a conversation into real work.",
    tagline: 'A full featured chat experience for the enterprise',
    tags: ['Enterprise AI', 'Conversational Design', 'Design Leadership'],
    chapters: [
      {
        index: '01',
        title: 'Overview',
        body: [
          "Omni starts from one box: ask anything, or reach for a quick action — slides, a scheduled task, code, a spreadsheet — instead of hunting for the right tool first. Whatever comes back renders as a real, editable artifact inline, not a wall of text to copy out somewhere else.",
          "Connect the tools a team already runs on — Slack, Google Drive, GitHub, Jira — so Omni can act with real context instead of asking someone to paste it in. For recurring asks, Omni turns a request into a scheduled task with a review step before anything runs; for anything off the record, an incognito mode keeps a conversation out of history entirely.",
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
          "Some questions need more than a lookup. Deep Research turns a single ask into a real, transparent investigation: Omni drafts a research plan, works through it step by step with sources it can point back to, and pauses on request rather than running blind.",
          'The result lands two ways — a short, cited summary for a quick read, and a full report artifact with a table of contents for anyone who wants to go deeper into a specific section.',
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
          "Not every conversation belongs to one person. Workspaces give a project a shared home — organized around threads, milestones, the people on it, and its files — so a team stops re-explaining context every time they ask Omni something new.",
          "Chat inside a workspace and it stays scoped to that project: ask Omni to add a milestone and it comes back with real, assigned action items, not a generic list. Routines extend the same idea into automation, turning a recurring workflow — a daily standup summary, a weekly status update — into something that just runs.",
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
          'Ask for a deck in chat and Omni drafts the whole thing — titles, structure, and speaker-note-ready content — as a real slide deck, not a document pretending to be one. From there it opens in a dedicated editor built for fast iteration: adjust tone or template with a floating AI toolbar, or select any line of text and ask for just that change.',
          "Rehearse the result in presenter mode, with speaker notes, a timer, and a preview of what's coming next.",
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
          "Every file Omni touches lives in one hub — generated or uploaded, filterable by type, with a quick note action for capturing a thought straight into an agent's knowledge base instead of losing it in a chat thread.",
          "Files is also where Omni's image generation lives: describe an image in plain language and it shows up as a real file, sitting right alongside the documents and decks a team already has.",
        ],
        gallery: [
          { src: omniFilesHome, alt: 'The Files hub empty state with a promo for AI image generation and file-type filters' },
          { src: omniFilesQuickNote, alt: 'Quick note panel for adding a thought to an agent’s knowledge base' },
          { src: omniFilesImageGen, alt: 'Recent AI-generated images alongside a team’s uploaded files' },
        ],
      },
      {
        index: '06',
        title: 'Mobile',
        body: [
          'The same interaction model had to hold up on a much smaller screen. Chat keeps its quick actions and tool connectors close at hand; Meetings brings scheduling into the same experience with a real calendar and meeting creation flow; and History makes it just as easy to find a past thread or artifact on the go as it is at a desk.',
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
    title: 'Smart Scan: File Organization in Plain Language',
    shortTitle: 'Smartscan',
    summary:
      'Designed a plain-language rule builder that tags, extracts, and summarizes across an entire file library in one pass — no folders required.',
    tagline: 'Intelligent file organization',
    tags: ['Enterprise AI', 'File Management', 'Product Design'],
    chapters: [
      {
        index: '01',
        title: 'Problem Framing',
        body: [
          "The idea started life as a \"Bulk Review Agent\" — a way to point an assistant at a whole batch of files at once instead of one at a time. Before it had a home of its own, we had to work out where that even belonged: was bulk review a standalone part of the nav, or a feature that any assistant could pick up?",
          'Long-running, bulk operations also raised a second question the rest of the product hadn\'t needed to answer yet: how do you show someone a job that\'s still working? We sketched a "Working" section for in-progress jobs, considered folding it into an existing "Recents" list, and roughed out what a finished result — a checklist of what got done, with a place to download the output — should look like.',
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
          "Smart Scan landed as its own place in the product, not a buried setting. The home screen leads with templates for the jobs people run most often — a keyword search, a research summary, a complaint review — so starting from scratch is the exception, not the default.",
          "Every scan you've run stays visible underneath: named, timestamped, and showing how many files it touched, so re-running or checking on last week's job is one click away instead of a rebuild.",
        ],
        gallery: [
          { src: smartscanGettingStarted, alt: 'Smart Scan home screen with starter templates and a list of previous scans' },
        ],
      },
      {
        index: '03',
        title: 'Scan Creation',
        body: [
          'Setting up a scan starts with files, then a single plain-language question: "What would you like to do with your files?" You write the rule the way you\'d say it out loud — tag anything related to a merger, extract every clause about force majeure — and Smart Scan suggests criteria as you type instead of leaving you to guess at the right phrasing.',
          "Tag, Extract, and Summarize can all run in the same pass, each with its own set of criteria, so a single scan can label, pull out key content, and condense a file library in one step rather than three separate ones.",
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
          "Results land in a table shaped by what you asked for — every criterion becomes its own column, filled in per file as the scan works through the library, so the output reads like a report you'd have had to build by hand.",
          'From there, a document explorer sits one click away from the underlying file itself — including non-text files like images — so a result is never a dead end; you can always get back to the source.',
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
