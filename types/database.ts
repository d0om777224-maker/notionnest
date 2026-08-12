export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          created_at?: string;
        };
      };
      templates: {
        Row: {
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
          status: string;
          ai_prompt: string | null;
          ai_schema_json: Json | null;
          features: string[];
          created_at: string;
          published_at: string | null;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          description: string;
          long_description?: string | null;
          price_cents?: number;
          category_id?: string | null;
          preview_images?: string[];
          notion_duplicate_url?: string | null;
          notion_page_id?: string | null;
          status?: string;
          ai_prompt?: string | null;
          ai_schema_json?: Json | null;
          features?: string[];
          created_at?: string;
          published_at?: string | null;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          description?: string;
          long_description?: string | null;
          price_cents?: number;
          category_id?: string | null;
          preview_images?: string[];
          notion_duplicate_url?: string | null;
          notion_page_id?: string | null;
          status?: string;
          ai_prompt?: string | null;
          ai_schema_json?: Json | null;
          features?: string[];
          created_at?: string;
          published_at?: string | null;
        };
      };
      purchases: {
        Row: {
          id: string;
          user_id: string;
          template_id: string;
          stripe_session_id: string;
          stripe_payment_intent: string | null;
          amount_cents: number;
          purchased_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          template_id: string;
          stripe_session_id: string;
          stripe_payment_intent?: string | null;
          amount_cents: number;
          purchased_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          template_id?: string;
          stripe_session_id?: string;
          stripe_payment_intent?: string | null;
          amount_cents?: number;
          purchased_at?: string;
        };
      };
      generation_jobs: {
        Row: {
          id: string;
          template_id: string;
          status: string;
          error: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          template_id: string;
          status?: string;
          error?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          template_id?: string;
          status?: string;
          error?: string | null;
          created_at?: string;
        };
      };
    };
  };
}
