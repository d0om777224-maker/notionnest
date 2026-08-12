import Link from "next/link";
import type { Template } from "@/types/template";
import { previewGradients } from "@/lib/data/templates";
import { formatPrice } from "@/lib/utils/format";

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  const gradient = previewGradients[template.id] ?? "from-stone-400 to-stone-600";

  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all hover:border-stone-300 hover:shadow-lg hover:shadow-stone-200/50"
    >
      <div className={`relative aspect-[4/3] bg-gradient-to-br ${gradient} p-6`}>
        <div className="absolute inset-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm" />
        <div className="relative flex h-full flex-col justify-between">
          <div className="space-y-2">
            <div className="h-2 w-16 rounded-full bg-white/40" />
            <div className="h-2 w-24 rounded-full bg-white/30" />
            <div className="h-2 w-20 rounded-full bg-white/20" />
          </div>
          <div className="space-y-1.5">
            <div className="h-8 rounded-md bg-white/20" />
            <div className="flex gap-1.5">
              <div className="h-6 flex-1 rounded bg-white/15" />
              <div className="h-6 flex-1 rounded bg-white/15" />
              <div className="h-6 flex-1 rounded bg-white/15" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        {template.category && (
          <span className="text-xs font-medium uppercase tracking-wider text-stone-400">
            {template.category.name}
          </span>
        )}
        <h3 className="mt-1 text-lg font-semibold text-stone-900 group-hover:text-stone-700">
          {template.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-500">
          {template.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-stone-900">
            {formatPrice(template.price_cents)}
          </span>
          <span className="text-sm font-medium text-stone-500 transition-colors group-hover:text-stone-900">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
