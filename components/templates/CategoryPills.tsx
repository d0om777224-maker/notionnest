import Link from "next/link";
import type { Category } from "@/types/template";

interface CategoryPillsProps {
  categories: Category[];
  activeSlug?: string;
}

export function CategoryPills({ categories, activeSlug }: CategoryPillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/templates"
        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          !activeSlug
            ? "bg-stone-900 text-white"
            : "bg-stone-100 text-stone-600 hover:bg-stone-200"
        }`}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/templates?category=${category.slug}`}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeSlug === category.slug
              ? "bg-stone-900 text-white"
              : "bg-stone-100 text-stone-600 hover:bg-stone-200"
          }`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
