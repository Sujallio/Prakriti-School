import { CheckCircle2 } from 'lucide-react';
import { PageHeader } from '@/components/site/page-header';
import { SectionHeading } from '@/components/site/section-heading';
import { CTASection } from '@/components/site/cta-section';
import { FadeIn, StaggerGroup, StaggerItem } from '@/components/site/fade-in';
import {
  academicOverview,
  gradeCards,
  curriculum,
  teachingMethodology,
  coCurricular,
  assessmentApproach,
} from '@/data/academics';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academics',
  description:
    'Explore the academic framework at Prakriti School, Manmad — our curriculum, teaching methodology, learning approach, co-curricular activities and assessment system.',
  alternates: { canonical: '/academics' },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Home / Academics"
        title="Academics"
        subtitle="A structured, engaging and holistic academic framework designed to nurture every learner."
      />

      {/* Overview */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <SectionHeading align="left" eyebrow="Overview" title={academicOverview.heading} />
            <div className="mt-4 max-w-3xl space-y-3">
              {academicOverview.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Grades */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Classes & Grades"
              title="A Stage for Every Learner"
              description="Our academic journey supports students from their earliest years through to secondary education."
            />
          </FadeIn>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {gradeCards.map((g) => (
              <StaggerItem key={g.stage} variants={itemVariants}>
                <div className="h-full rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <g.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{g.stage}</h3>
                  <p className="text-sm font-medium text-accent">{g.grades}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.focus}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading align="left" eyebrow="Curriculum" title={curriculum.heading} />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{curriculum.text}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {curriculum.subjects.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {s}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Teaching methodology */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Teaching Methodology"
              title="Our Learning Approach"
              description="We combine proven pedagogical methods with a warm, supportive environment to make learning meaningful."
              className="[&_h2]:text-primary-foreground [&_p]:text-primary-foreground/70"
            />
          </FadeIn>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {teachingMethodology.map((m) => (
              <StaggerItem key={m.title} variants={itemVariants}>
                <div className="h-full rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <m.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{m.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Co-curricular */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Co-Curricular Activities"
              title="Learning Beyond the Classroom"
              description="Activities that complement academics and support the all-round development of every student."
            />
          </FadeIn>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {coCurricular.map((c) => (
              <StaggerItem key={c.title} variants={itemVariants}>
                <div className="flex h-full gap-4 rounded-xl border border-border bg-card p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <c.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Assessment */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading align="left" eyebrow="Assessment" title={assessmentApproach.heading} />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{assessmentApproach.text}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ul className="space-y-3">
              {assessmentApproach.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
