import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedTemplates, getTemplateBySlug, previewGradients } from "@/lib/data/templates";
import { formatPrice } from "@/lib/utils/format";

interface TemplateDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPublishedTemplates().map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({ params }: TemplateDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) return { title: "Template not found" };

  return {
    title: `${template.title} — NotionNest`,
    description: template.description,
  };
}

export default async function TemplateDetailPage({ params }: TemplateDetailPageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  const gradient = previewGradients[template.id] ?? "from-stone-400 to-stone-600";

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <Link
        href="/templates"
        className="inline-flex items-center text-sm text-stone-500 transition-colors hover:text-stone-900"
      >
        ← Back to templates
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        {/* Preview */}
        <div className={`aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-8 shadow-lg`}>
          <div className="flex h-full flex-col rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <div className="space-y-3">
              <div className="h-3 w-32 rounded-full bg-white/40" />
              <div className="h-3 w-48 rounded-full bg-white/30" />
            </div>
            <div className="mt-6 flex-1 space-y-4">
              <div className="h-10 rounded-lg bg-white/20" />
              <div className="grid grid-cols-3 gap-3">
                <div className="h-20 rounded-lg bg-white/15" />
                <div className="h-20 rounded-lg bg-white/15" />
                <div className="h-20 rounded-lg bg-white/15" />
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full rounded-full bg-white/20" />
                <div className="h-3 w-4/5 rounded-full bg-white/15" />
                <div className="h-3 w-3/5 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div>
          {template.category && (
            <span className="text-xs font-medium uppercase tracking-wider text-stone-400">
              {template.category.name}
            </span>
          )}
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {template.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            {template.description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-3xl font-bold text-stone-900">
              {formatPrice(template.price_cents)}
            </span>
            <span className="text-sm text-stone-400">one-time purchase</span>
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-full bg-stone-900 px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-stone-700 sm:w-auto sm:px-10"
          >
            Buy template
          </button>
          <p className="mt-3 text-xs text-stone-400">
            Secure checkout via Stripe. Instant access after purchase.
          </p>

          {template.long_description && (
            <div className="mt-10 border-t border-stone-200 pt-8">
              <h2 className="font-semibold text-stone-900">About this template</h2>
              <p className="mt-3 leading-relaxed text-stone-600">
                {template.long_description}
              </p>
            </div>
          )}

          {template.features.length > 0 && (
            <div className="mt-8">
              <h2 className="font-semibold text-stone-900">What&apos;s included</h2>
              <ul className="mt-4 space-y-3">
                {template.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-stone-600">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-100 text-xs text-stone-600">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
