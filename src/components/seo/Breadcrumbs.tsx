import Link from "next/link";

export type BreadcrumbItem = { label: string; path: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
        <li>
          <Link href="/" className="hover:text-white transition-colors">
            Inicio
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            <span aria-hidden className="text-gray-600">
              /
            </span>
            {i === items.length - 1 ? (
              <span className="text-white font-medium">{item.label}</span>
            ) : (
              <Link href={item.path} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
