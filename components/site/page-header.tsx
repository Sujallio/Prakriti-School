import { cn } from '@/lib/utils';

export function PageHeader({
  title,
  subtitle,
  breadcrumb,
  className,
}: {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-border/60 bg-primary text-primary-foreground',
        className
      )}
    >
      <div className="absolute inset-0 bg-grid opacity-[0.07]" aria-hidden="true" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        {breadcrumb && (
          <p className="mb-3 text-sm font-medium text-primary-foreground/60">
            {breadcrumb}
          </p>
        )}
        <h1 className="max-w-3xl font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
