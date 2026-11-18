import { PageHeader } from '@/components/site/page-header';
import { SectionHeading } from '@/components/site/section-heading';
import { CTASection } from '@/components/site/cta-section';
import { FadeIn, StaggerGroup, StaggerItem } from '@/components/site/fade-in';
import { facilities } from '@/data/facilities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facilities',
  description:
    'Explore the modern, safe and well-equipped facilities at Prakriti School — classrooms, library, laboratories, sports, transport and more.',
  alternates: { canonical: '/facilities' },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Home / Facilities"
        title="Facilities"
        subtitle="Modern, safe and thoughtfully designed spaces that support every aspect of a child's learning and growth."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {facilities.map((f) => (
              <StaggerItem key={f.title} variants={itemVariants}>
                <div className="group h-full rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <f.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
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
