import NextImage from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  description?: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  className?: string;
};

export function Card({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  children,
  className = "",
}: CardProps) {
  const content = (
    <>
      {imageSrc && (
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-bg-subtle border border-border-light mb-5">
          <NextImage
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold text-navy">{title}</h3>
      {description && (
        <p className="mt-2 text-muted text-sm leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </>
  );

  const wrapperClass = `rounded-xl bg-white border border-border-light p-6 md:p-8 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-200 ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${wrapperClass}`}>
        {content}
        <span className="mt-4 inline-flex items-center text-primary font-semibold text-sm">
          Ver más
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </Link>
    );
  }

  return <div className={wrapperClass}>{content}</div>;
}
