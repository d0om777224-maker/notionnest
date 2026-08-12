export type TemplateStatus = "draft" | "review" | "published" | "archived";

export interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Template {
  id: string;
  slug: string;
  title: string;
  description: string;
  long_description: string | null;
  price_cents: number;
  category_id: string | null;
  preview_images: string[];
  notion_duplicate_url: string | null;
  notion_page_id: string | null;
  status: TemplateStatus;
  ai_prompt: string | null;
  ai_schema_json: Record<string, unknown> | null;
  features: string[];
  created_at: string;
  published_at: string | null;
  category?: Category | null;
}

export interface Purchase {
  id: string;
  user_id: string;
  template_id: string;
  stripe_session_id: string;
  stripe_payment_intent: string | null;
  amount_cents: number;
  purchased_at: string;
  template?: Template;
}

export interface GenerationJob {
  id: string;
  template_id: string;
  status: "pending" | "generating" | "ready" | "failed";
  error: string | null;
  created_at: string;
}

export interface TemplateBrief {
  title: string;
  category: string;
  targetAudience: string;
  features: string[];
  tone: string;
  description: string;
}
