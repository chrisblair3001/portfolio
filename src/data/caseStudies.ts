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
import dispatchWelcome from '../assets/dispatch-welcome.jpg'
import dispatchPickSegments from '../assets/dispatch-pick-segments.jpg'
import dispatchToday from '../assets/dispatch-today.jpg'
import dispatchTextures from '../assets/dispatch-textures.jpg'
import dispatchEpisodes from '../assets/dispatch-episodes.jpg'
import dispatchPhoneShare from '../assets/dispatch-phone-share.jpg'
import dispatchDetails from '../assets/dispatch-details.jpg'
import dispatchPodcastApp from '../assets/dispatch-podcast-app.jpg'
import dispatchPhoneToday from '../assets/dispatch-phone-today.jpg'
import dispatchQuietDay from '../assets/dispatch-quiet-day.jpg'
import dispatchDesignBoard from '../assets/dispatch-design-board.jpg'
import dispatchStorybook from '../assets/dispatch-storybook.jpg'

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
    cover: { src: dispatchToday, alt: "Dispatch: the Today screen, with this morning's episode and its segments", position: 'center top' },
    title: 'Dispatch',
    shortTitle: 'Dispatch',
    summary:
      'A side project to learn what it takes to build a real product with AI. Dispatch turns the articles you save, and the topics you pick, into a short daily podcast hosted by two AI voices, delivered to the podcast app you already use.',
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
          "Dispatch started with a simple idea: save an article, and hear it later as a podcast. I wanted it to be something anyone could use, not just people who like tinkering with AI. Right now, AI automations and workflows work best for people who are really into AI. Dispatch hides all of that. There are no prompts and no setup. You pick what you care about, and a podcast shows up.",
          "The biggest product decision came after the first version. Dispatch only worked with articles you saved, which meant nothing happened on days you saved nothing. I made a deliberate call to widen it. You can now pick up to three segments, like Morning Briefing, Signal or Close to Home, or write your own, and Dispatch builds your episode every weekday. Your saved articles always play first. It went from a tool you have to feed to a show that shows up on its own.",
          "This was also a learning project. I wanted to find out what building a full product with AI really takes, and to design something with AI that felt unique and not like slop.",
        ],
        gallery: [
          { src: dispatchWelcome, alt: 'Dispatch welcome screen with the headline "Today\'s reading, in one short listen" and sign-in options' },
          { src: dispatchPickSegments, alt: 'Onboarding step where a listener picks up to three daily segments, like Morning Briefing and Close to Home' },
          { src: dispatchToday, alt: 'The Today screen with an episode ready, showing the intro, saved articles first, and then each segment as chapters' },
        ],
      },
      {
        index: '02',
        title: 'Design direction and details',
        body: [
          "Dispatch needed a point of view. The goal was a product that doesn't look like it came out of a template, so the UI is dark and flat, with square corners and no shadows except on menus and dialogs. Two colors stand in for the two hosts: slate for Nora and rose for Theo. Rose is used for new things and highlights, and is never an error color.",
          "Texture does the rest. Licensed photos run through SVG filters give the app its look, and every episode gets its own cover, rendered on the server from the same textures, so your podcast app looks like Dispatch too.",
          "Getting articles in had to take one tap. There's a Chrome extension, an iPhone share sheet shortcut, and a paste field on Today. The shortcut started as a setup you had to paste a key into, and I cut it down to a single link.",
          "Setup is a few choices instead of a form. Pick your segments, add a city if you want local news, write your own segment, skip topics you never want to hear about, then add your private feed to a podcast app. Dispatch notices when the app picks it up and confirms it for you.",
          "Episodes can come up empty or fail, so those states are designed too. On a quiet day, Nora and Theo tell you what they didn't find. When an episode fails, it says what happened and offers a retry.",
        ],
        gallery: [
          { src: dispatchTextures, alt: 'The Dispatch texture library: licensed photographs run through brand filters, with credits' },
          { src: dispatchEpisodes, alt: 'The Episodes screen, a grid of episode covers each rendered from a different texture' },
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
          "Dispatch was built in a loop between two tools. I started with a working prototype in Claude Code, then took it to Claude Design to refine the look and feel. When a design was ready, Claude Design bundled the files and the full chat history, and I sent that back to Claude Code to build it exactly as designed. Because the bundle carries the reasoning as well as the pixels, the code came back accurate instead of approximate.",
          "Storybook and the design-sync skill hold that loop together. Every component and screen lives in Storybook in every state, and design-sync publishes that library to Claude Design along with a conventions file. So when Claude Design draws a button or an episode cover, it's using the real one.",
        ],
        stack: [
          {
            kind: 'steps',
            title: 'The build loop',
            items: [
              { name: 'Prototype', note: 'A working first version in Claude Code.' },
              { name: 'Refine', note: 'Claude Design for type, color, textures and every screen.' },
              { name: 'Bundle', note: 'Designs, files and the chat history packaged as one handoff.' },
              { name: 'Build', note: 'Back to Claude Code, which builds from the bundle instead of guessing.' },
            ],
          },
          {
            kind: 'items',
            title: 'Skills used',
            items: [
              { name: 'design-sync', note: 'Publishes the Storybook library to Claude Design with a conventions file, so designs use the real components.' },
              { name: 'voice-mastering', note: 'A custom skill for diagnosing and fixing how Nora and Theo sound.' },
              { name: 'claude-api', note: 'For building the script writer and story discovery on the Anthropic API.' },
              { name: 'ux-writing', note: 'A pass over the copy on every screen: labels, empty states and errors.' },
              { name: 'design-critique', note: 'Structured critiques of screens during the polish pass.' },
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
          "Here is everything Dispatch runs on, and the job each piece does. This is a real product, so it covers the unglamorous parts too: sign-in, email, domains, backups and store review.",
          "The biggest cost decision was the voice. Dispatch started on ElevenLabs, which sounded great but ran about $0.20 per 1,000 characters. By my estimates that's roughly $0.70 for a short episode, or about $15 a month for one weekday listener, in voice alone. I moved to Chatterbox, an open-source model hosted on fal.ai. In a blind listening test I slightly preferred it, and it brings an episode down to about $0.09, or around $2 a month.",
        ],
        stack: [
          {
            kind: 'steps',
            title: 'How an article becomes an episode',
            items: [
              { name: 'Save', note: 'Chrome extension, iPhone share sheet or a pasted link. Stored as pending.' },
              { name: 'Discover', note: "Claude searches the web for fresh stories for each picked segment." },
              { name: 'Wake up', note: "A scheduler starts each listener's run before their chosen time, on weekdays." },
              { name: 'Write', note: 'Claude turns the stories into a two-host script, saved articles first.' },
              { name: 'Voice', note: 'Chatterbox reads each line as Nora or Theo.' },
              { name: 'Stitch', note: 'ffmpeg joins the clips, evens out the volume and marks chapters.' },
              { name: 'Store', note: 'Audio and a rendered cover go to Cloudflare R2.' },
              { name: 'Publish', note: "A private RSS feed delivers it to the listener's podcast app." },
            ],
          },
          {
            kind: 'items',
            title: 'Making the episode',
            items: [
              { name: 'Anthropic Claude', note: 'Writes the scripts and searches the web for segment stories.' },
              { name: 'Chatterbox on fal.ai', note: 'The open-source voice model that reads every line.' },
              { name: 'ffmpeg', note: 'Joins clips, levels the audio and finds chapter times.' },
              { name: 'Playwright', note: "Renders each episode's cover in a real browser." },
              { name: 'Wikimedia Commons', note: 'Licensed photos behind the textures.' },
            ],
          },
          {
            kind: 'items',
            title: 'Where it runs',
            items: [
              { name: 'Vercel', note: "Hosts the web app and holds the domain's DNS." },
              { name: 'Render', note: 'Runs the API, scheduler and episode generation. Redeploys on every push.' },
              { name: 'GitHub', note: 'Stores the code for the web app and the backend.' },
              { name: 'SQLite and Drizzle', note: 'One database file for users, articles, episodes and runs.' },
              { name: 'Cloudflare R2', note: 'Stores episode audio and covers, plus nightly private backups.' },
            ],
          },
          {
            kind: 'items',
            title: 'Accounts and email',
            items: [
              { name: 'Clerk', note: 'Invite-only sign-in with Google or an emailed link.' },
              { name: 'Resend', note: 'Sends the phone install link and failure alerts.' },
              { name: 'ImprovMX', note: 'Forwards the support address.' },
            ],
          },
          {
            kind: 'items',
            title: 'Saving and listening',
            items: [
              { name: 'Chrome extension', note: 'Manifest V3 in TypeScript, live on the Chrome Web Store. Reads the page with Readability.' },
              { name: 'iPhone Shortcut', note: 'Adds Save to Dispatch to the share sheet.' },
              { name: 'RSS', note: 'A private feed per listener for Apple Podcasts, Overcast or Pocket Casts.' },
            ],
          },
          {
            kind: 'items',
            title: 'Code',
            items: [
              { name: 'React 19 and TypeScript', note: 'The app, with strict typing.' },
              { name: 'Vite', note: 'Builds the app and the extension.' },
              { name: 'Tailwind CSS 4', note: "Styling, with the defaults switched off so it doesn't look stock." },
              { name: 'Storybook', note: 'Every component and screen, in every state.' },
              { name: 'Express, Zod and node-cron', note: 'The API, request checking and the scheduler.' },
            ],
          },
        ],
      },
      {
        index: '05',
        title: "What's next",
        body: [
          "Dispatch is in private beta, open by invitation. The Chrome extension is live on the Chrome Web Store, and new features are in progress.",
          "Next up: more segments, more hosts to choose from, and an education mode, where you tell Dispatch topics you want to learn about and it builds episodes around them over time. After that, newsletters you can forward in, more browsers, and eventually a native iOS app.",
          "I'm also working out how it can pay for itself. Voice is the biggest cost, which is why the move to Chatterbox mattered, and it means pricing should follow audio minutes. A flat plan with caps, usage-based pricing, and a free tier with paid volume features are all on the table.",
        ],
      },
    ],
  },
  {
    slug: 'omni-enterprise-chat-experience',
    cover: { src: omniOverviewHome, alt: "Omni: the home screen with the prompt box and quick actions", position: 'center' },
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
          { src: omniFilesQuickNote, alt: 'Quick note panel for adding a thought to an agent’s knowledge base' },
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
    cover: { src: smartscanReportsViewer, alt: "SmartScan: the report viewer with a document list and a preview", position: 'center' },
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
    cover: { src: glxHifiUpdates, alt: "Greenlight: hi-fi updates to the parent app across four screens", position: 'center' },
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
