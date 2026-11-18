import Image from 'next/image';
import { PageHeader } from '@/components/site/page-header';
import { SectionHeading } from '@/components/site/section-heading';
import { CTASection } from '@/components/site/cta-section';
import { FadeIn, StaggerGroup, StaggerItem } from '@/components/site/fade-in';
import { activities, events } from '@/data/activities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Activities & Events',
  description:
    'Discover the cultural activities, sports, competitions, celebrations, workshops and field trips at Prakriti School.',
  alternates: { canonical: '/activities' },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Home / Activities"
        title="Activities & Events"
        subtitle="A vibrant calendar of activities and events that enrich learning and build lasting memories."
      />

      {/* Activities grid */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="What We Offer"
              title="Activities That Enrich"
              description="From sports and arts to science and community service, there's something for every interest."
            />
          </FadeIn>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {activities.map((a) => (
              <StaggerItem key={a.title} variants={itemVariants}>
                <div className="flex h-full gap-4 rounded-xl border border-border bg-card p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <a.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{a.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Events gallery */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Events"
              title="Recent Events"
              description="A glimpse of the celebrations, competitions and activities that bring our school to life."
            />
          </FadeIn>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {events.map((e) => (
              <StaggerItem key={e.title} variants={itemVariants}>
                <div className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={e.image}
                      alt={e.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                      {e.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-accent">{e.date}</p>
                    <h3 className="mt-1 font-serif text-lg font-bold text-foreground">{e.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
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
