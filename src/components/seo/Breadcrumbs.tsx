import Link from "next/link";

export type BreadcrumbItem = { label: string; path: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">
            Inicio
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            <span aria-hidden className="text-border-light">
              /
            </span>
            {i === items.length - 1 ? (
              <span className="text-navy font-medium">{item.label}</span>
            ) : (
              <Link href={item.path} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
