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
  // Some Figma exports already render their own card frame/border. For
  // those, skip the gallery's own border so it doesn't double up.
  bare?: boolean
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

export const caseStudies: CaseStudy[] = [
  {
    slug: 'omni-enterprise-chat-experience',
    title: 'Omni',
    shortTitle: 'Omni',
    summary:
      "Directed design for airia's all-in-one AI assistant: a single place to ask a question, go deep on research, collaborate with a team, and turn a conversation into real work.",
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
          "Omni starts from one box. Type a question, or grab a quick action: a deck, a scheduled task, some code, a spreadsheet. Whatever comes back, you can edit it right there. Early versions just described what they'd made in plain text, and that fell flat every time. People wanted the actual thing, not a summary of it. So we wired in the tools teams already run on: Slack, Drive, GitHub, Jira. That gave Omni real context to work with, instead of someone pasting it in by hand.",
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
          "Some questions need more than a quick lookup. So Deep Research turns your question into an actual plan. Omni works through it step by step and cites its sources as it goes. I pushed hard for a pause button early on. Nobody trusts an agent that just runs off and comes back twenty minutes later with an answer they can't check. You get the result two ways: a short summary you can skim, or the full report with a table of contents if you want to go deeper.",
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
          "Not every conversation belongs to just one person. So Workspaces gives a project a shared home: threads, milestones, people, files, all in one place. I pushed to keep chat scoped inside the workspace instead of global. Early testers kept losing context jumping between a project thread and some random one-off chat. Routines came out of that same idea. Take something you ask for every week, like a standup summary, and just let it run on its own.",
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
          "Ask for a deck in chat, and Omni drafts the whole thing. Structure, titles, speaker notes, the works, as an actual slide deck, not a document pretending to be one. I fought to get a floating AI toolbar right into the editor. That way, tweaking the tone or swapping a template didn't mean leaving the deck to start a new chat. Presenter mode rounds it out: speaker notes, a timer, a look at what's coming next.",
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
          "Every file Omni touches needed one home. Generated or uploaded, it shouldn't scatter across a dozen chat threads. So Files became one hub you can filter by type. I added the quick note action after watching people paste a stray thought into a doc just so they wouldn't lose it. Now that thought drops straight into an agent's knowledge base instead. Image generation lives here too. Generate an image, and it just sits next to the decks and docs a team already has.",
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
          "The same interaction model had to hold up on a much smaller screen. Chat still keeps its quick actions and tool connectors within reach. Meetings folds scheduling into a real calendar with its own meeting-creation flow. And History makes it just as easy to find a past thread or artifact on the go as it is at a desk.",
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
    title: 'SmartScan',
    shortTitle: 'Smartscan',
    summary:
      'Designed a plain-language rule builder that tags, extracts, and summarizes across an entire file library in one pass, built for legal and education teams.',
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
          "The idea started as a \"Bulk Review Agent.\" Basically, point an assistant at a whole batch of files at once instead of one at a time. It didn't have a home of its own yet, so we had to figure that out first. Should bulk review get its own spot in the nav, or should any assistant just be able to do it? Long-running jobs raised another question we hadn't had to answer before: how do you show someone a job that's still working? I sketched a dedicated \"Working\" section for that. \"Recents\" stayed the list for anything already finished.",
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
          "Smart Scan got its own home screen. Templates up top, for the jobs people run most often: a keyword search, a research summary, a complaint review. Every scan you've run sits right underneath, named and timestamped. Need to check on last week's job? One click and you're there.",
        ],
        gallery: [
          { src: smartscanGettingStarted, alt: 'Smart Scan home screen with starter templates and a list of previous scans' },
        ],
      },
      {
        index: '03',
        title: 'Scan Creation',
        body: [
          "Setting up a scan starts with your files. Then one plain-language question: what do you want to do with them? I wanted people to write the rule the way they'd actually say it out loud. Tag anything related to a merger. Extract every clause about force majeure. Stuff like that. So Smart Scan suggests criteria as you type, instead of making you guess at the right phrasing. Tag, Extract, and Summarize can all run in the same pass, each with its own criteria. One scan does what used to take three.",
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
          "Results land in a table shaped by whatever you asked for. Every criterion becomes its own column, filled in per file as the scan works through your library. I didn't want a result to ever be a dead end. So a document explorer sits one click away from the actual file, even non-text ones like images. You can always trace it back to the source.",
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
