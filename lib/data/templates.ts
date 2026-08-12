import type { Category, Template } from "@/types/template";

export const categories: Category[] = [
  { id: "cat-1", name: "Productivity", slug: "productivity", created_at: "2026-01-01T00:00:00Z" },
  { id: "cat-2", name: "Business", slug: "business", created_at: "2026-01-01T00:00:00Z" },
  { id: "cat-3", name: "Content", slug: "content", created_at: "2026-01-01T00:00:00Z" },
  { id: "cat-4", name: "Personal", slug: "personal", created_at: "2026-01-01T00:00:00Z" },
];

const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]));

export const templates: Template[] = [
  {
    id: "tpl-1",
    slug: "productivity-hub",
    title: "Productivity Hub",
    description: "All-in-one workspace for tasks, goals, and daily planning.",
    long_description:
      "Organize your entire life in one Notion workspace. Track tasks with priority views, set quarterly goals, plan your week, and capture quick notes — all connected and searchable.",
    price_cents: 1900,
    category_id: "cat-1",
    preview_images: [],
    notion_duplicate_url: null,
    notion_page_id: null,
    status: "published",
    ai_prompt: null,
    ai_schema_json: null,
    features: ["Task manager with Kanban & calendar views", "Weekly planner", "Goal tracker", "Quick capture inbox"],
    created_at: "2026-01-15T00:00:00Z",
    published_at: "2026-01-20T00:00:00Z",
    category: categoryById["cat-1"],
  },
  {
    id: "tpl-2",
    slug: "startup-crm",
    title: "Startup CRM",
    description: "Lightweight CRM for founders managing leads and deals.",
    long_description:
      "Built for early-stage founders who need a simple CRM without the bloat. Track leads through your pipeline, log interactions, and never lose a follow-up again.",
    price_cents: 2900,
    category_id: "cat-2",
    preview_images: [],
    notion_duplicate_url: null,
    notion_page_id: null,
    status: "published",
    ai_prompt: null,
    ai_schema_json: null,
    features: ["Lead pipeline board", "Contact database", "Follow-up reminders", "Deal value tracking"],
    created_at: "2026-01-16T00:00:00Z",
    published_at: "2026-01-21T00:00:00Z",
    category: categoryById["cat-2"],
  },
  {
    id: "tpl-3",
    slug: "content-creator-os",
    title: "Content Creator OS",
    description: "Plan, create, and publish content across every platform.",
    long_description:
      "From idea to published post — manage your entire content workflow. Brainstorm ideas, write drafts, schedule posts, and track performance in one connected system.",
    price_cents: 2400,
    category_id: "cat-3",
    preview_images: [],
    notion_duplicate_url: null,
    notion_page_id: null,
    status: "published",
    ai_prompt: null,
    ai_schema_json: null,
    features: ["Content calendar", "Idea bank", "Platform tracker", "Analytics dashboard"],
    created_at: "2026-01-17T00:00:00Z",
    published_at: "2026-01-22T00:00:00Z",
    category: categoryById["cat-3"],
  },
  {
    id: "tpl-4",
    slug: "student-planner",
    title: "Student Planner",
    description: "Semester planning, assignments, and exam prep in one place.",
    long_description:
      "Stay on top of every class, assignment, and exam. Track deadlines, manage study sessions, and keep all your course notes organized by semester.",
    price_cents: 1200,
    category_id: "cat-4",
    preview_images: [],
    notion_duplicate_url: null,
    notion_page_id: null,
    status: "published",
    ai_prompt: null,
    ai_schema_json: null,
    features: ["Course tracker", "Assignment deadlines", "Exam countdown", "Study session log"],
    created_at: "2026-01-18T00:00:00Z",
    published_at: "2026-01-23T00:00:00Z",
    category: categoryById["cat-4"],
  },
  {
    id: "tpl-5",
    slug: "freelancer-dashboard",
    title: "Freelancer Dashboard",
    description: "Manage clients, projects, invoices, and time in one workspace.",
    long_description:
      "Everything a freelancer needs to run their business. Track active projects, log billable hours, manage client contacts, and keep invoices organized.",
    price_cents: 3400,
    category_id: "cat-2",
    preview_images: [],
    notion_duplicate_url: null,
    notion_page_id: null,
    status: "published",
    ai_prompt: null,
    ai_schema_json: null,
    features: ["Client database", "Project tracker", "Time logging", "Invoice tracker"],
    created_at: "2026-01-19T00:00:00Z",
    published_at: "2026-01-24T00:00:00Z",
    category: categoryById["cat-2"],
  },
  {
    id: "tpl-6",
    slug: "habit-tracker",
    title: "Habit Tracker",
    description: "Build better routines with a visual habit and mood tracker.",
    long_description:
      "Create lasting habits with daily check-ins, streak tracking, and mood logging. See your progress over time and stay motivated with visual dashboards.",
    price_cents: 900,
    category_id: "cat-4",
    preview_images: [],
    notion_duplicate_url: null,
    notion_page_id: null,
    status: "published",
    ai_prompt: null,
    ai_schema_json: null,
    features: ["Daily habit check-in", "Streak counter", "Mood journal", "Monthly review"],
    created_at: "2026-01-20T00:00:00Z",
    published_at: "2026-01-25T00:00:00Z",
    category: categoryById["cat-4"],
  },
];

export const previewGradients: Record<string, string> = {
  "tpl-1": "from-violet-500 to-purple-600",
  "tpl-2": "from-blue-500 to-cyan-500",
  "tpl-3": "from-orange-400 to-pink-500",
  "tpl-4": "from-emerald-400 to-teal-500",
  "tpl-5": "from-indigo-500 to-blue-600",
  "tpl-6": "from-rose-400 to-amber-400",
};

export function getPublishedTemplates(): Template[] {
  return templates.filter((t) => t.status === "published");
}

export function getFeaturedTemplates(limit = 3): Template[] {
  return getPublishedTemplates().slice(0, limit);
}

export function getTemplateBySlug(slug: string): Template | undefined {
  return getPublishedTemplates().find((t) => t.slug === slug);
}

export function getTemplatesByCategory(categorySlug: string): Template[] {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return getPublishedTemplates().filter((t) => t.category_id === category.id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
