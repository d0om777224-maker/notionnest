import Link from "next/link";
import { TemplateGrid } from "@/components/templates/TemplateGrid";
import { categories, getFeaturedTemplates, getPublishedTemplates } from "@/lib/data/templates";

export default function HomePage() {
  const featured = getFeaturedTemplates(3);
  const totalCount = getPublishedTemplates().length;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-200/40 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-stone-500">
              Notion templates, AI-crafted
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl sm:leading-tight">
              Beautiful Notion templates for every workflow
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Skip the blank page. NotionNest offers premium, ready-to-use templates
              designed with AI and refined for productivity, business, and creative work.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/templates"
                className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
              >
                Browse {totalCount} templates
              </Link>
              <Link
                href="/templates?category=productivity"
                className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400"
              >
                Productivity picks
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-stone-200 bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/templates?category=${category.slug}`}
                className="group rounded-2xl border border-stone-200 p-6 transition-all hover:border-stone-300 hover:shadow-md"
              >
                <h3 className="font-semibold text-stone-900 group-hover:text-stone-700">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-stone-500">
                  Templates for {category.name.toLowerCase()} workflows
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured templates */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-stone-900">
                Featured templates
              </h2>
              <p className="mt-2 text-stone-500">
                Our most popular picks to get you started fast.
              </p>
            </div>
            <Link
              href="/templates"
              className="hidden text-sm font-medium text-stone-600 hover:text-stone-900 sm:block"
            >
              View all →
            </Link>
          </div>
          <div className="mt-10">
            <TemplateGrid templates={featured} />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-stone-200 bg-stone-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-stone-900">
            How it works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Choose a template",
                description: "Browse our catalog and find the perfect fit for your workflow.",
              },
              {
                step: "2",
                title: "Purchase instantly",
                description: "Secure checkout with Stripe. No account required to browse.",
              },
              {
                step: "3",
                title: "Duplicate to Notion",
                description: "Get your Notion duplicate link and start using it in seconds.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-stone-900 px-8 py-16 text-center sm:px-16">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to organize your life in Notion?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-stone-400">
              Join thousands of users who save hours every week with our templates.
            </p>
            <Link
              href="/templates"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-100"
            >
              Explore templates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
