import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold text-stone-900">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-stone-900 text-xs text-white">
                N
              </span>
              NotionNest
            </div>
            <p className="mt-3 text-sm leading-relaxed text-stone-500">
              Premium Notion templates crafted with AI and refined for real workflows.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-stone-900">Shop</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/templates" className="text-sm text-stone-500 hover:text-stone-900">
                  All templates
                </Link>
              </li>
              <li>
                <Link href="/templates?category=productivity" className="text-sm text-stone-500 hover:text-stone-900">
                  Productivity
                </Link>
              </li>
              <li>
                <Link href="/templates?category=business" className="text-sm text-stone-500 hover:text-stone-900">
                  Business
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-stone-900">Legal</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-stone-500 hover:text-stone-900">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-stone-500 hover:text-stone-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/refunds" className="text-sm text-stone-500 hover:text-stone-900">
                  Refunds
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-stone-200 pt-6 text-center text-sm text-stone-400">
          © {new Date().getFullYear()} NotionNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
