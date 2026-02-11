import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BreadcrumbListJsonLd, ArticleJsonLd } from "@/components/seo/JsonLd";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: SITE_URL + `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: SITE_URL + `/blog/${post.slug}`,
      locale: "es_MX",
      type: "article",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;

  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ]}
      />
      <ArticleJsonLd
        urlPath={path}
        title={post.title}
        description={post.description}
        datePublished={post.date}
      />
      <section className="py-16 md:py-24">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Blog", path: "/blog" },
              { label: post.title, path },
            ]}
          />
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary mb-3">
            {post.category}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-8">
            {new Date(post.date).toLocaleDateString("es-MX", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })}
          </p>
          <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-2xl">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

