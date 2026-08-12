import type { Template } from "@/types/template";
import { TemplateCard } from "./TemplateCard";

interface TemplateGridProps {
  templates: Template[];
  emptyMessage?: string;
}

export function TemplateGrid({ templates, emptyMessage = "No templates found." }: TemplateGridProps) {
  if (templates.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 px-6 py-16 text-center">
        <p className="text-stone-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {templates.map((template) => (
        <TemplateCard key={template.id} template={template} />
      ))}
    </div>
  );
}
