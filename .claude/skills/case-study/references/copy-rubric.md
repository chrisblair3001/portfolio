# Case study copy rubric

Use this for the copy pass. The goal is text a busy hiring manager can skim in a minute and still
come away knowing what the problem was, what you did, and what changed. Every rule below exists to
serve that reader, so when a rule and the reader's needs disagree, serve the reader.

Contents: the accuracy rule · structure · sentences and words · voice and tense · the fields in
`caseStudies.ts` · alt text · how to report your edits · worked examples

## 1. Accuracy comes first

Tightening copy is only useful if it stays true. Before changing a sentence, sort every claim in it:

- **Facts you can see in the source**: names, numbers, dates, tools, outcomes the author wrote.
  Keep them exactly. Never round, merge or "improve" a number, and never add a number.
- **Causal claims** ("this led to", "which is why", "so users could"): keep the causality the author
  stated. If a cut would imply something stronger, don't cut.
- **Claims you cannot verify** (an outcome with no evidence, a superlative, "first", "only", "most"):
  leave the wording alone and add it to the **Questions for the author** list instead of guessing.

Build a short claims ledger as you read (claim → where it came from in the draft or the user's notes).
Anything you cannot place goes on the questions list. Ask rather than invent; a wrong number in a
portfolio is worse than a plain sentence.

## 2. Structure

Each chapter answers one question in this order, even when the author doesn't label it:

1. **Situation**: what was true before, and why it mattered (1–2 sentences).
2. **Decision or action**: what the author chose or built, and the reason (the bulk).
3. **Result**: what changed, with a number or an observable outcome if there is one.

Chapter titles are short noun phrases that name the topic ("Problem to solve", "Design direction"),
not sentences. A case study reads best when the first chapter states the problem and the last chapter
states what happened; keep that frame.

Limits that keep chapters scannable:

- A paragraph is at most 4 sentences or about 90 words. Split at the change of idea.
- A chapter body is usually 2–4 paragraphs. If it runs past 5, ask whether a second chapter, a list,
  or a cut is better.
- The page summary is 2–3 sentences: who it was for, what was built, why it mattered.
- Put the point first. If a paragraph opens with background and buries the decision in sentence three,
  reorder.

## 3. Sentences and words

**Sentences**

- One idea per sentence. Aim for an average of 15–20 words. Anything over 30 words gets split or cut.
- Prefer the active voice with a named actor: "I cut setup to a single link", not "setup was reduced".
- Put the subject and verb early. Lead with what happened, then the qualifier.
- Lists of three or more parallel things become a list or a short run of clauses; don't stack them in
  one long sentence.

**Words**

- Plain words. Say "use" not "utilize", "start" not "commence", "to" not "in order to".
- Cut filler: very, really, quite, just, actually, basically, simply, various, a number of, a lot of.
- Be wary of vague brand words: leverage, seamless, robust, delightful, intuitive, holistic,
  innovative, cutting-edge, journey, ecosystem, solution, "end-to-end" (unless it is literally
  end-to-end). Replace each with the specific thing it stands for, or cut it.
- Name the thing. "Improved the experience" says nothing; "cut onboarding from five screens to two"
  says something.
- Keep jargon the audience shares (design system, IA, tree test) and explain the rest in a clause.
- Numbers: digits for anything measured, with units ("22 min", "3 segments"). Spell out one to nine in
  running prose where there is no unit.
- One term per concept across the whole page. If it's a "segment" in chapter 1, it isn't a "topic" or
  "category" in chapter 2.

**Readability check** (rough, for judgment rather than a score to chase): the text should read at about
an 8th–9th grade level. Short words and short sentences get you there; don't dumb down the ideas.

## 4. Voice and tense

- First person singular for the author's own decisions and work ("I wanted", "I made a deliberate
  call"). Use "we" only for things the team did together, and be clear about the author's part.
- Past tense for what was done and decided. Present tense for how the finished product works.
- Confident and plain. Name tradeoffs and misses honestly; a clear "this didn't work, so I changed X"
  is stronger than a polished win.
- No hype about the author or the product. Let the specifics do it.
- Keep the author's voice. Edit for clarity and concision; don't rewrite into a generic house style.
  If a sentence is distinctive and clear, leave it alone.

## 5. Fields in `caseStudies.ts`

| Field | Rule |
| --- | --- |
| `title` | The product or project name only. |
| `tagline` | One short line shown on the home card, under about 60 characters. What it is, not a slogan. |
| `summary` | 2–3 sentences. Who it's for, what was built or changed, why it mattered. |
| `tags` | 3–4 short labels (domain, stage, method). Title case, no sentences. |
| `role.scope` | Skills and responsibilities separated by the existing separator; nouns, parallel form. |
| `chapters[].title` | Short noun phrase. |
| `chapters[].body[]` | One paragraph per array item, per the limits above. |
| `stats`, `validations` | Each item is a label plus one plain sentence. Lead the sentence with the finding. |
| `metrics[]` | `value` is the number with its unit ("42%", "3×", "12 min"); `label` says what was measured in 2–5 words. |

## 6. Alt text for screenshots

Alt text is also caption copy that people see in the carousel, so write it for both readers.

- Say what the screen is and what is worth noticing, in one sentence of about 8–20 words.
- Start with the screen or state, not "Screenshot of" or "Image of".
- Include the state the screenshot demonstrates (empty, error, selected, onboarding step 2).
- Quote visible headlines or labels only when they matter to the point.
- Keep it under about 140 characters. Don't repeat the chapter body.

Good: `The Today screen on a phone, with the player and chapters grouped by saved articles and segments`
Weak: `Screenshot of the app`

## 7. How to report your edits

Edits go back to the author as a reviewable list, and nothing is written to `caseStudies.ts` until they
accept. Group by chapter. For each change show the original, the new text, and a few words of reason
("split into two sentences", "cut filler", "moved the decision first"). Then list:

- **Questions for the author**: claims you couldn't verify, numbers that look inconsistent between
  chapters, anything where a tighter rewrite would change the meaning.
- **Left alone on purpose**: distinctive passages you chose not to touch, so the author knows it was a
  decision and not an oversight.

## 8. Worked examples

These are illustrative edits in the spirit of the Dispatch case study, to show the size of change to
aim for. Match this restraint; don't over-edit.

**Cut filler, name the thing**
- Before: "Right now, AI automations and workflows work best for people who are really into AI."
- After: "Today, AI automations mostly suit people who already love AI."
- Why: dropped "really", "work best for", and the redundant "and workflows".

**Split one long sentence**
- Before: "The shortcut started as a setup you had to paste a key into, and I cut it down to a single link, which made it a lot easier to get started."
- After: "The shortcut started as a setup where you pasted in a key. I cut it to a single link."
- Why: one idea per sentence, and the vague "a lot easier" is dropped because the single link already shows it. Nothing new is claimed.

**Put the decision first**
- Before: "After the first version had been out for a while and I'd noticed that days with no saved articles produced nothing, I decided to widen what Dispatch could do."
- After: "I widened Dispatch after the first version. It only worked with saved articles, so on days you saved nothing, nothing happened."
- Why: decision first, reason second, and the two facts are separate sentences.

**Leave alone**
- "Dispatch started with a simple idea: save an article, and hear it later as a podcast."
- Why: short, specific, and in the author's voice. No change.
