import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BreadcrumbListJsonLd } from "@/components/seo/JsonLd";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog para emprendedores de ropa en México | RS Textiles",
  description:
    "Notas y guías para marcas de ropa, emprendedores y empresas que buscan playeras, sudaderas y gorras personalizadas en México.",
  alternates: { canonical: SITE_URL + "/blog" },
  openGraph: {
    title: "Blog para emprendedores de ropa en México | RS Textiles",
    description:
      "Artículos prácticos sobre proveedores textiles, serigrafía, DTF, bordado y cómo escalar tu marca de ropa en México.",
    url: SITE_URL + "/blog",
    locale: "es_MX",
  },
  twitter: { card: "summary_large_image" },
};

export default function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <section className="py-16 md:py-24">
        <Container>
          <Breadcrumbs items={[{ label: "Blog", path: "/blog" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Blog para marcas de ropa y empresas
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-10">
            Artículos escritos para quienes quieren lanzar, hacer crecer o profesionalizar su marca de ropa y sus
            pedidos de playeras personalizadas en México.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-gray-800 bg-surface/60 p-6 hover:border-primary/70 transition-colors"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary mb-2">
                  {post.category}
                </p>
                <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-400 mb-4">{post.description}</p>
                <p className="text-xs text-gray-500 mb-4">
                  {new Date(post.date).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                >
                  Leer artículo completo
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

