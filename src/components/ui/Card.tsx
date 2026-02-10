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
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-800 border border-gray-700 mb-4">
          <NextImage
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {description && (
        <p className="mt-2 text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </>
  );

  const wrapperClass = `rounded-2xl bg-gray-900/80 border border-gray-800 p-6 md:p-8 hover:border-primary/50 transition-all ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${wrapperClass}`}>
        {content}
        <span className="mt-4 inline-flex items-center text-white font-medium text-sm hover:text-gray-300">
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
