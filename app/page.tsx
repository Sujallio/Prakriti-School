import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  Building2,
  ShieldCheck,
  Target,
  Eye,
  BookOpen,
  Users,
  FlaskConical,
  Palette,
  Calendar,
  Newspaper,
} from 'lucide-react';
import { Hero } from '@/components/site/hero';
import { SectionHeading } from '@/components/site/section-heading';
import { CTASection } from '@/components/site/cta-section';
import { FadeIn, StaggerGroup, StaggerItem } from '@/components/site/fade-in';
import { homeStats, schoolOverview, visionMission, aboutValues } from '@/data/about';
import { gradeCards, teachingMethodology } from '@/data/academics';
import { facilities } from '@/data/facilities';
import { notices } from '@/data/notices';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prakriti School Manmad | Quality Education & Holistic Development',
  description:
    'Prakriti School in Manmad provides a nurturing, engaging and holistic learning environment where every student is encouraged to learn, grow and achieve their potential. Admissions open.',
  alternates: { canonical: '/' },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Stats / quick info */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeStats.map((s) => (
              <StaggerItem key={s.title} variants={itemVariants}>
                <div className="group h-full rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/8617859/pexels-photo-8617859.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Prakriti School campus"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -right-4 -top-4 hidden rounded-xl bg-accent px-5 py-4 text-accent-foreground shadow-lg sm:block">
                <p className="text-2xl font-bold">Est.</p>
                <p className="text-xs">A Legacy of Learning</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="A School Where Every Child Thrives"
            />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {schoolOverview.paragraphs[0]}
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {schoolOverview.paragraphs[1]}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3">
                <Target className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-foreground">{visionMission.vision.title}</p>
                  <p className="text-sm text-muted-foreground">{visionMission.vision.text}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Eye className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-foreground">{visionMission.mission.title}</p>
                  <p className="text-sm text-muted-foreground">{visionMission.mission.text}</p>
                </div>
              </div>
            </div>
            <Button asChild className="mt-8">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Academics preview */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Academics"
              title="A Curriculum for Every Stage"
              description="Our academic framework supports students from their first steps in school through to secondary, with a focus on understanding, curiosity and growth."
            />
          </FadeIn>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {gradeCards.map((g) => (
              <StaggerItem key={g.stage} variants={itemVariants}>
                <div className="h-full rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <g.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{g.stage}</h3>
                  <p className="text-sm font-medium text-primary">{g.grades}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.focus}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/academics">
                Explore Academics
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Teaching methodology */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Approach"
              title="How We Teach"
              description="Our teaching methodology is built on active, experiential and collaborative learning that keeps students engaged and curious."
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
                  <h3 className="mt-4 text-lg font-semibold">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{m.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Facilities preview */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Facilities"
              title="Spaces That Inspire Learning"
              description="Modern, safe and well-equipped facilities designed to support every aspect of a child's development."
            />
          </FadeIn>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {facilities.slice(0, 4).map((f) => (
              <StaggerItem key={f.title} variants={itemVariants}>
                <div className="group h-full rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <f.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/facilities">
                View All Facilities
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-16 sm:py-20">
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

      {/* Latest notices */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <SectionHeading
                align="left"
                eyebrow="Notice Board"
                title="Latest Notices"
                description="Stay updated with the latest announcements from our school."
              />
              <Button asChild variant="outline" className="shrink-0">
                <Link href="/notice-board">
                  View All Notices
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </FadeIn>
          <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {[...notices]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .slice(0, 3)
              .map((n) => (
                <StaggerItem key={n.id} variants={itemVariants}>
                  <Link href="/notice-board" className="group block h-full rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {n.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        {new Date(n.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="mt-3 font-serif text-base font-bold text-foreground group-hover:text-primary">
                      {n.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {n.shortDescription}
                    </p>
                  </Link>
                </StaggerItem>
              ))}
          </StaggerGroup>
        </div>
      </section>

      <CTASection />
    </>
  );
}
