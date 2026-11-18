'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Tag, Newspaper } from 'lucide-react';
import { notices, noticeCategories, type NoticeCategory } from '@/data/notices';
import { cn } from '@/lib/utils';

type Filter = 'All' | NoticeCategory;

const categoryColors: Record<NoticeCategory, string> = {
  Admissions: 'bg-primary/10 text-primary',
  Examinations: 'bg-warning/15 text-warning-foreground',
  Events: 'bg-accent/10 text-accent',
  Holidays: 'bg-destructive/10 text-destructive',
  General: 'bg-muted text-muted-foreground',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function NoticeBoard() {
  const [filter, setFilter] = React.useState<Filter>('All');
  const [active, setActive] = React.useState<typeof notices[number] | null>(null);

  const filtered = React.useMemo(() => {
    const sorted = [...notices].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    if (filter === 'All') return sorted;
    return sorted.filter((n) => n.category === filter);
  }, [filter]);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {noticeCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-colors',
              filter === cat
                ? 'bg-primary text-primary-foreground'
                : 'border border-border bg-card text-foreground/70 hover:bg-accent/10 hover:text-primary'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Notices */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Newspaper className="h-12 w-12 text-muted-foreground/40" aria-hidden="true" />
          <p className="mt-4 text-base font-medium text-muted-foreground">
            No notices in this category at the moment.
          </p>
          <p className="mt-1 text-sm text-muted-foreground/70">
            Please check back later.
          </p>
        </div>
      ) : (
        <div className="mt-10 space-y-4">
          {filtered.map((n) => (
            <article
              key={n.id}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md sm:flex-row sm:items-start sm:gap-5"
            >
              <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-start sm:gap-1">
                <span className={cn('rounded-full px-3 py-1 text-xs font-medium', categoryColors[n.category])}>
                  {n.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {formatDate(n.date)}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-bold text-foreground">{n.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {n.shortDescription}
                </p>
                <button
                  type="button"
                  onClick={() => setActive(n)}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                >
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-card p-6 shadow-2xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-accent/10"
                onClick={() => setActive(null)}
                aria-label="Close notice"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex flex-wrap items-center gap-3">
                <span className={cn('rounded-full px-3 py-1 text-xs font-medium', categoryColors[active.category])}>
                  <Tag className="mr-1 inline h-3 w-3" aria-hidden="true" />
                  {active.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {formatDate(active.date)}
                </span>
              </div>
              <h2 className="mt-4 font-serif text-2xl font-bold text-foreground">{active.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{active.fullContent}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
