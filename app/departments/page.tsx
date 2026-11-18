import { Users } from 'lucide-react';
import { PageHeader } from '@/components/site/page-header';
import { SectionHeading } from '@/components/site/section-heading';
import { CTASection } from '@/components/site/cta-section';
import { FadeIn, StaggerGroup, StaggerItem } from '@/components/site/fade-in';
import { departments } from '@/data/faculty';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Departments',
  description:
    'Explore the academic departments at Prakriti School — each dedicated to excellence in its field of study.',
  alternates: { canonical: '/departments' },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function DepartmentsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Home / Departments"
        title="Departments"
        subtitle="Each department brings together passionate educators and a focused curriculum to inspire deep learning."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {departments.map((d) => (
              <StaggerItem key={d.name} variants={itemVariants}>
                <div className="h-full rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                  <h3 className="font-serif text-xl font-bold text-foreground">{d.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {d.subjects.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" aria-hidden="true" />
                    {d.facultyCount} Faculty Members
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTASection />
    </>
  );
}
