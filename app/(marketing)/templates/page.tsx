import type { Metadata } from "next";
import { CategoryPills } from "@/components/templates/CategoryPills";
import { TemplateGrid } from "@/components/templates/TemplateGrid";
import {
  categories,
  getCategoryBySlug,
  getPublishedTemplates,
  getTemplatesByCategory,
} from "@/lib/data/templates";

export const metadata: Metadata = {
  title: "Templates — NotionNest",
  description: "Browse premium Notion templates for productivity, business, content, and personal use.",
};

interface TemplatesPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function TemplatesPage({ searchParams }: TemplatesPageProps) {
  const { category: categorySlug } = await searchParams;
  const activeCategory = categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  const templates = categorySlug
    ? getTemplatesByCategory(categorySlug)
    : getPublishedTemplates();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          {activeCategory ? `${activeCategory.name} templates` : "All templates"}
        </h1>
        <p className="mt-3 text-lg text-stone-500">
          {activeCategory
            ? `Notion templates designed for ${activeCategory.name.toLowerCase()} workflows.`
            : "Premium Notion templates crafted with AI — pick one and duplicate it to your workspace."}
        </p>
      </div>

      <div className="mt-8">
        <CategoryPills categories={categories} activeSlug={categorySlug} />
      </div>

      <div className="mt-10">
        <TemplateGrid
          templates={templates}
          emptyMessage={
            activeCategory
              ? `No templates in ${activeCategory.name} yet. Check back soon!`
              : "No templates available yet."
          }
        />
      </div>
    </div>
  );
}
