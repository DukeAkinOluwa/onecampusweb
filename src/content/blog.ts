import type { ImageProps } from "next/image";
import blogCoverDeadlines from "@/assets/blog-cover-deadlines.jpg";
import blogCoverWeeklyPlanning from "@/assets/blog-cover-weekly-planning.jpg";
import blogCoverCollaborativeLearning from "@/assets/blog-cover-collaborative-learning.jpg";
import blogCoverAiResponsibly from "@/assets/blog-cover-ai-responsibly.jpg";
import blogCoverExamPrep from "@/assets/blog-cover-exam-prep.jpg";
import blogCoverGroupProjects from "@/assets/blog-cover-group-projects.jpg";

export const blogCategories = [
  "All",
  "Productivity",
  "Study Tips",
  "AI and Learning",
  "Student Life",
  "Campus News",
] as const;

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export interface Article {
  slug: string;
  title: string;
  category: Exclude<(typeof blogCategories)[number], "All">;
  description: string;
  cover: ImageProps["src"];
  coverAlt: string;
  author: string;
  publishedDate: string; // ISO date
  readingMinutes: number;
  blocks: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: "organise-assignment-deadlines",
    title: "How to Organise Assignment Deadlines Without Feeling Overwhelmed",
    category: "Productivity",
    description:
      "A practical approach to collecting, prioritising, and reviewing your deadlines so nothing catches you by surprise.",
    cover: blogCoverDeadlines,
    coverAlt: "A student planning assignment deadlines in a notebook beside a laptop",
    author: "OneCampus Editorial Team",
    publishedDate: "2026-10-06",
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Most academic stress does not come from the work itself. It comes from deadlines arriving faster than you expected, in three different places, at the same time. The fix is rarely working harder. It is building one reliable system for seeing what is due, when, and what to do first.",
      },
      { type: "h2", text: "Collect every deadline in one place" },
      {
        type: "p",
        text: "Start by listing every assignment, test, and submission you already know about, along with its due date. Include the small ones: discussion posts, lab reports, reading responses. Small tasks are usually the ones that slip, precisely because they seem too minor to write down.",
      },
      {
        type: "p",
        text: "Wherever the deadline currently lives — a course page, a group chat, a lecturer's slide — move the date and the deliverable into your one system. The goal is simple: when you plan your week, you should never need to check more than one place.",
      },
      { type: "h2", text: "Break the deadline into steps" },
      {
        type: "p",
        text: "A deadline is not a task. \"Report due Friday\" tells you nothing about what to do on Tuesday. For every significant assignment, break it into two or three concrete steps with their own dates:",
      },
      {
        type: "ul",
        items: [
          "Gather sources and materials — by Wednesday.",
          "Draft the main sections — by Thursday evening.",
          "Review, format, and submit — Friday morning, not Friday midnight.",
        ],
      },
      {
        type: "p",
        text: "When each step is small enough to start without hesitation, deadlines stop feeling like cliffs and start feeling like slopes.",
      },
      { type: "h2", text: "Prioritise by due date and effort, not by anxiety" },
      {
        type: "p",
        text: "It is natural to work on whatever is causing the most worry, but worry is a poor scheduler. Each planning session, sort your work by two questions: how soon is it due, and how much focused time does it actually need? Long tasks with distant deadlines deserve early, steady attention — not a panic the night before.",
      },
      { type: "h2", text: "Hold a short weekly review" },
      {
        type: "p",
        text: "Once a week, take ten minutes to look at the coming seven days: what is due, what is half-finished, and what needs to move. A weekly review is what turns a task list from a guilt document into a plan. If something slips, reschedule it during the review rather than letting it silently expire.",
      },
      { type: "h2", text: "Let tools carry the remembering for you" },
      {
        type: "p",
        text: "You do not need to hold every date in your head. A planner — paper or digital — should hold the dates, the steps, and the reminders, so your attention is free for the actual studying. OneCampus is designed around exactly this: tasks, deadlines, and study plans in one connected workspace, so your week is visible at a glance.",
      },
      {
        type: "p",
        text: "Start small: capture this week's deadlines, break one assignment into steps, and run one weekly review. The calm that follows is usually enough to make the habit stick.",
      },
    ],
  },
  {
    slug: "better-study-habits-weekly-planning",
    title: "Building Better Study Habits Through Weekly Planning",
    category: "Study Tips",
    description:
      "Why a repeatable weekly planning routine beats daily willpower — and how to build one that survives a busy semester.",
    cover: blogCoverWeeklyPlanning,
    coverAlt: "A weekly planner spread with study sessions blocked out across the days",
    author: "OneCampus Editorial Team",
    publishedDate: "2026-09-22",
    readingMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "Good study habits are not built by motivation. Motivation is weather — useful, welcome, and unreliable. Habits are built by routines that do not depend on how you feel on a Tuesday night. The most dependable of these routines is the weekly plan.",
      },
      { type: "h2", text: "Why weekly beats daily" },
      {
        type: "p",
        text: "Daily to-do lists fail for a predictable reason: they are written in the morning, by a person who cannot yet see the whole week. A weekly plan is different. You make it once, with the full picture — lectures, assignments, tests, personal commitments — and each day inherits a realistic slice of it.",
      },
      {
        type: "ul",
        items: [
          "You stop deciding every day what to study — the decision is already made.",
          "You spot overloaded days early and rebalance before they become crises.",
          "Deadlines stop being surprises because you have already walked the week.",
        ],
      },
      { type: "h2", text: "The 20-minute planning session" },
      {
        type: "p",
        text: "Pick a fixed time — Sunday evening works for most students — and keep it short. A planning session that takes an hour will not survive midterms.",
      },
      { type: "h3", text: "Step 1: Look back (5 minutes)" },
      {
        type: "p",
        text: "What got done, what moved, and what is now urgent? Carry anything unfinished into this week deliberately, not by default.",
      },
      { type: "h3", text: "Step 2: Look at the fixed points (5 minutes)" },
      {
        type: "p",
        text: "Write in lectures, labs, shifts, and every deadline falling within the next two weeks. Fixed points first; study time wraps around them.",
      },
      { type: "h3", text: "Step 3: Assign study blocks (10 minutes)" },
      {
        type: "p",
        text: "Give the important work named blocks: \"Draft lab report, Thursday 4–6 pm\" — not vague intentions like \"study more\". Two or three focused blocks on your hardest subject will outperform a whole day of distracted reading.",
      },
      { type: "h2", text: "Protect the plan, not perfection" },
      {
        type: "p",
        text: "A weekly plan is a map, not a contract with a penalty clause. When life interrupts — and it will — the weekly review is where you reschedule, not a reason to abandon the system. Students who plan consistently and adjust often outperform students who plan beautifully once and quit at the first disruption.",
      },
      { type: "h2", text: "Make the routine easier to keep" },
      {
        type: "ul",
        items: [
          "Plan in the same place and at the same time each week, so the cue is built in.",
          "Keep the session under 30 minutes — a sustainable routine beats an elaborate one.",
          "Track your deadlines and study blocks in one tool, so planning is a review, not a rebuild.",
        ],
      },
      {
        type: "p",
        text: "If you use OneCampus, your weekly plan lives alongside your tasks and study squad, so the Sunday session is mostly confirmation, not data entry. Try it for three weeks — that is usually how long a routine needs before it starts feeling automatic.",
      },
    ],
  },
  {
    slug: "collaborative-learning-academic-progress",
    title: "How Collaborative Learning Can Support Academic Progress",
    category: "Study Tips",
    description:
      "What actually happens when students study together — and how to structure group study so it produces results, not just conversation.",
    cover: blogCoverCollaborativeLearning,
    coverAlt: "A small group of students studying together around a laptop",
    author: "OneCampus Editorial Team",
    publishedDate: "2026-09-08",
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Studying alone has its place, but some of the strongest learning happens between people. Explaining a concept out loud, having your understanding questioned, and seeing how someone else approached the same problem — these are things a quiet library cannot give you.",
      },
      { type: "h2", text: "Why studying together works" },
      {
        type: "p",
        text: "Collaborative learning works because it forces you to do two things that are difficult to do alone: articulate what you know, and notice what you don't. The student who explains a concept clearly has usually consolidated it; the one who stumbles has just found the exact page to re-read.",
      },
      {
        type: "ul",
        items: [
          "Explaining ideas to peers exposes gaps in understanding early.",
          "Different perspectives reveal approaches you would not have tried.",
          "A shared schedule creates gentle accountability on low-motivation days.",
        ],
      },
      { type: "h2", text: "Not all group study is equal" },
      {
        type: "p",
        text: "Anyone who has joined a \"study group\" that became a two-hour social event knows the difference. Effective group study is structured, not accidental. Three habits separate the groups that learn from the groups that chat:",
      },
      { type: "h3", text: "1. Arrive with an agenda" },
      {
        type: "p",
        text: "Agree beforehand what the session covers: two hard topics, one past paper, one set of questions. A session without an agenda drifts; a session with one ends on time with something finished.",
      },
      { type: "h3", text: "2. Teach, don't just share notes" },
      {
        type: "p",
        text: "Rotate who explains each topic. Teaching is the strongest test of understanding — and it distributes the preparation fairly across the group.",
      },
      { type: "h3", text: "3. End with clear next steps" },
      {
        type: "p",
        text: "Close every session by confirming what each person does before the next one, and when the group meets again. Shared tasks belong in a place everyone can see, not in someone's memory.",
      },
      { type: "h2", text: "Keeping coordination friction low" },
      {
        type: "p",
        text: "The biggest killer of study groups is coordination overhead: finding a time, agreeing on materials, chasing people. This is where a shared workspace helps. With OneCampus, your study squad can keep shared tasks, sessions, and resources in one place, so the group spends its energy on learning rather than logistics.",
      },
      {
        type: "p",
        text: "If you already study with friends, try adding structure for one month: an agenda, rotating explanations, and a shared task list. The conversations will still be enjoyable — but you will leave with more than you came with.",
      },
    ],
  },
  {
    slug: "using-ai-study-tools-responsibly",
    title: "Using AI Study Tools Responsibly",
    category: "AI and Learning",
    description:
      "AI study support can be genuinely useful — if you treat it as an assistant, not an authority. Here is how to keep your learning (and integrity) intact.",
    cover: blogCoverAiResponsibly,
    coverAlt: "Illustrative scene of a student reviewing study notes with a laptop nearby",
    author: "OneCampus Editorial Team",
    publishedDate: "2026-08-25",
    readingMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "AI study tools have quietly become part of student life. Used well, they can help you get unstuck, break down a difficult concept, or organise your revision. Used carelessly, they can quietly replace the very thinking your education is meant to build. The difference is not the tool — it is the way you use it.",
      },
      { type: "h2", text: "An assistant, not an authority" },
      {
        type: "p",
        text: "The single most important rule: AI-generated responses can be inaccurate. AI models predict plausible text; they do not verify facts, cite your course's syllabus, or carry your lecturer's emphasis. Treat every AI answer as a starting point that must be checked against your course materials, recommended texts, and reliable sources.",
      },
      {
        type: "ul",
        items: [
          "Verify definitions and formulas against your course materials before you rely on them.",
          "Cross-check anything you plan to write in an assignment or exam.",
          "Be extra careful with numbers, dates, citations, and subject-specific conventions.",
        ],
      },
      { type: "h2", text: "Use AI to support thinking, not to replace it" },
      {
        type: "p",
        text: "There is a meaningful difference between asking AI to explain a concept you are genuinely trying to understand, and asking it to produce the work you were asked to produce. The first strengthens your learning; the second borrows it.",
      },
      { type: "h3", text: "Helpful uses" },
      {
        type: "ul",
        items: [
          "Getting a plain-language explanation of a concept before re-reading the textbook.",
          "Generating practice questions to test yourself on a topic.",
          "Summarising your own notes into a revision outline.",
          "Unsticking yourself when you cannot see the next step of a problem.",
        ],
      },
      { type: "h3", text: "Uses to avoid" },
      {
        type: "ul",
        items: [
          "Submitting AI-generated text as your own work.",
          "Using AI outputs in assessed work where your course prohibits it.",
          "Trusting an AI answer you have not verified, in any context that matters.",
        ],
      },
      { type: "h2", text: "Know your institution's rules" },
      {
        type: "p",
        text: "Policies on AI use vary between institutions and between courses. Some encourage AI-assisted study; others restrict it for assessed work. The responsibility to know and follow your institution's policy is yours — and it is a small effort compared to the cost of an integrity finding.",
      },
      { type: "h2", text: "How OneCampus approaches AI" },
      {
        type: "p",
        text: "OneCampus includes AI study support designed to assist with learning, organisation, and study tasks — explicitly not to guarantee correct answers, higher grades, or academic success. We present AI as one tool among many, alongside your own notes, your peers, and your course materials, and we encourage verification of anything important.",
      },
      {
        type: "p",
        text: "The students who benefit most from AI are the ones who stay in charge of their own learning: curious, sceptical, and willing to check. Let the tool assist the thinking — never do the thinking for you.",
      },
    ],
  },
  {
    slug: "practical-ways-to-prepare-for-examinations",
    title: "Practical Ways to Prepare for Examinations",
    category: "Study Tips",
    description:
      "A calm, structured approach to exam preparation — from building the revision timeline to practising under real conditions.",
    cover: blogCoverExamPrep,
    coverAlt: "A student reviewing revision notes at a desk with books and a laptop",
    author: "OneCampus Editorial Team",
    publishedDate: "2026-08-11",
    readingMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "Exam season rewards preparation systems, not heroic all-nighters. The students who perform closest to their ability are usually not the ones who studied the most hours — they are the ones who spread focused effort over the weeks before, and protected their sleep during the finals.",
      },
      { type: "h2", text: "Start from the exam, not the syllabus" },
      {
        type: "p",
        text: "Before building a revision plan, get specific about what you are preparing for: the format (essay, multiple choice, problem sets), the duration, and the topics in scope. Past papers, where available, are the most honest guide to what the exam actually looks like.",
      },
      { type: "h2", text: "Build a backwards revision timeline" },
      {
        type: "p",
        text: "Take the exam date and work backwards. Reserve the final days for light review and practice under exam conditions — not first-time learning. Everything before that is for covering and consolidating material.",
      },
      {
        type: "ul",
        items: [
          "Weeks out: cover all topics at least once, flagging weak areas.",
          "Halfway: focus revision time on weak areas, not comfortable ones.",
          "Final week: past papers, summaries, and rest — no new material after the last day or two.",
        ],
      },
      { type: "h2", text: "Test yourself — don't just re-read" },
      {
        type: "p",
        text: "Re-reading notes feels productive and often is not. Retrieval practice — answering questions from memory, explaining topics aloud, working problems without the solution open — is one of the most consistently supported study techniques. Build it into every revision session:",
      },
      {
        type: "ul",
        items: [
          "Close the notes and write down everything you remember on a topic, then check.",
          "Use practice questions and past papers as the main activity, not the final polish.",
          "Explain difficult topics to a classmate — teaching is retrieval with feedback.",
        ],
      },
      { type: "h2", text: "Practise under real conditions" },
      {
        type: "p",
        text: "At least once per course, sit a full past paper or timed mock in exam-like conditions: no notes, timed, in one sitting. It builds speed, reveals pacing problems, and removes much of the fear of the unknown on the day itself.",
      },
      { type: "h2", text: "Protect the fundamentals" },
      {
        type: "p",
        text: "Sleep is not lost study time — it is when memory consolidates. In the final week, consistent sleep, regular meals, and short breaks will do more for your performance than squeezing in extra late-night hours. Cramming trades tomorrow's clarity for tonight's anxiety.",
      },
      { type: "h2", text: "Keep the plan visible" },
      {
        type: "p",
        text: "Exam preparation involves many moving parts: topics, papers, weak areas, dates. Keeping your revision plan alongside your deadlines in one place — as OneCampus is designed to do — means your energy goes into revising, not into remembering what you were supposed to revise.",
      },
    ],
  },
  {
    slug: "organising-group-projects-effectively",
    title: "Organising Group Projects More Effectively",
    category: "Productivity",
    description:
      "Most group project pain is coordination pain. Here is how to set up roles, timelines, and communication so the project runs itself.",
    cover: blogCoverGroupProjects,
    coverAlt: "Students collaborating on a group project around a shared laptop",
    author: "OneCampus Editorial Team",
    publishedDate: "2026-07-28",
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Group projects fail rarely because of ability and usually because of coordination: nobody is sure who is doing what, progress is invisible until the deadline, and the last week becomes a scramble. A little structure at the start prevents almost all of it.",
      },
      { type: "h2", text: "Week one: make the invisible explicit" },
      {
        type: "p",
        text: "In your first meeting, before anyone opens a document, answer four questions together and write the answers down where everyone can see them:",
      },
      {
        type: "ul",
        items: [
          "What exactly is the deliverable, and what does \"done\" look like?",
          "What is the deadline, and what internal dates fall before it?",
          "Who is responsible for which part — by name, not by assumption?",
          "How will the group communicate, and how quickly should people reply?",
        ],
      },
      {
        type: "p",
        text: "Ten minutes here saves the group weeks of confusion. A shared task list — visible to all, updated as work progresses — is the single highest-leverage tool for this.",
      },
      { type: "h2", text: "Assign roles and owners" },
      {
        type: "p",
        text: "Every significant piece of work needs one named owner. Shared responsibility is how tasks fall between two people and get done by neither. Owners can still collaborate and ask for help — the point is that there is always one person whose task it is.",
      },
      { type: "h2", text: "Set internal deadlines with buffer" },
      {
        type: "p",
        text: "Split the project into milestones — research done, sections drafted, assembly complete, review and submission — and set each internal deadline a few days ahead of the official one. The buffer absorbs the inevitable delays without touching the real deadline.",
      },
      { type: "h2", text: "Keep communication in the open" },
      {
        type: "p",
        text: "Decisions made in private chats leave the rest of the group guessing. Put task status, decisions, and files where every member can see them, and keep messages about the work with the work. Short, regular check-ins — even fifteen minutes weekly — keep small problems small.",
      },
      { type: "h2", text: "Plan the assembly, not just the parts" },
      {
        type: "p",
        text: "Individual sections do not become a project by magic. Assign the assembly and final review to a named owner (rotating this role across projects is fair and useful), and give them real time before submission for consistency checks: formatting, references, flow, and requirements.",
      },
      {
        type: "p",
        text: "If your group uses OneCampus, shared tasks, deadlines, and discussions live in one workspace, so everyone sees the same version of the project's state. Structure costs an hour at the start — and gives the group its weeks back.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function relatedArticles(current: Article, count = 2): Article[] {
  const same = articles.filter(
    (a) => a.slug !== current.slug && a.category === current.category,
  );
  const rest = articles.filter(
    (a) => a.slug !== current.slug && a.category !== current.category,
  );
  return [...same, ...rest].slice(0, count);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
