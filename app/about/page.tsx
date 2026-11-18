import Image from 'next/image';
import { PageHeader } from '@/components/site/page-header';
import { SectionHeading } from '@/components/site/section-heading';
import { CTASection } from '@/components/site/cta-section';
import { FadeIn, StaggerGroup, StaggerItem } from '@/components/site/fade-in';
import { schoolOverview, visionMission, aboutValues, learningPhilosophy } from '@/data/about';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Prakriti School — our vision, mission, values and learning philosophy that shape a nurturing and holistic educational environment.',
  alternates: { canonical: '/about' },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Home / About"
        title="About Prakriti School"
        subtitle="Discover our story, our purpose and the values that guide our community."
      />

      {/* Overview */}
      <section className="py-16 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://images.pexels.com/photos/8617859/pexels-photo-8617859.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Prakriti School campus"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading align="left" eyebrow="School Overview" title={schoolOverview.heading} />
            <div className="mt-4 space-y-3">
              {schoolOverview.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          {[
            { ...visionMission.vision },
            { ...visionMission.mission },
          ].map((vm, i) => (
            <FadeIn key={vm.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <vm.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h2 className="mt-5 font-serif text-2xl font-bold text-foreground">{vm.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{vm.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Values"
              title="What We Stand For"
              description="The principles that guide everything we do at Prakriti School."
            />
          </FadeIn>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {aboutValues.map((v) => (
              <StaggerItem key={v.title} variants={itemVariants}>
                <div className="flex h-full gap-4 rounded-xl border border-border bg-card p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <v.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Learning Philosophy"
              title="How We Approach Learning"
              description="Our philosophy is rooted in the belief that every child learns best when they are engaged, valued and inspired."
              className="[&_h2]:text-primary-foreground [&_p]:text-primary-foreground/70"
            />
          </FadeIn>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {learningPhilosophy.map((p) => (
              <StaggerItem key={p.title} variants={itemVariants}>
                <div className="h-full rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <p.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{p.description}</p>
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
