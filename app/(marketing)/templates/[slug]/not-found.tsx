import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-6xl font-bold text-stone-200">404</h1>
      <h2 className="mt-4 text-xl font-semibold text-stone-900">Template not found</h2>
      <p className="mt-2 text-stone-500">
        The template you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <Link
        href="/templates"
        className="mt-8 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
      >
        Browse templates
      </Link>
    </div>
  );
}
