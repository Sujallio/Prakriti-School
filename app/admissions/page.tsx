import { CheckCircle2, FileText, Info } from 'lucide-react';
import { PageHeader } from '@/components/site/page-header';
import { SectionHeading } from '@/components/site/section-heading';
import { CTASection } from '@/components/site/cta-section';
import { FadeIn, StaggerGroup, StaggerItem } from '@/components/site/fade-in';
import { EnquiryForm } from '@/components/site/enquiry-form';
import { admissionSteps, eligibility, requiredDocuments, importantInfo } from '@/data/admissions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admissions',
  description:
    'Learn about the admission process, eligibility, required documents and important information for joining Prakriti School in Manmad. Submit your admission enquiry online.',
  alternates: { canonical: '/admissions' },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Home / Admissions"
        title="Admissions"
        subtitle="We welcome you to join our community. Here's everything you need to know about the admission process at Prakriti School."
      />

      {/* Overview */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Admission Overview"
              title="A Simple, Transparent Process"
              description="Our admission process is designed to be straightforward and welcoming. We're here to guide you at every step."
            />
          </FadeIn>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <SectionHeading eyebrow="Admission Process" title="Five Simple Steps" />
          </FadeIn>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5" stagger={0.1}>
            {admissionSteps.map((step) => (
              <StaggerItem key={step.step} variants={itemVariants}>
                <div className="relative h-full rounded-xl border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent">
                    Step {step.step}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading align="left" eyebrow="Eligibility" title={eligibility.heading} />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{eligibility.text}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Grade</th>
                    <th className="px-4 py-3 font-semibold">Age Criteria</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  {eligibility.criteria.map((c) => (
                    <tr key={c.grade}>
                      <td className="px-4 py-3 font-medium text-foreground">{c.grade}</td>
                      <td className="px-4 py-3 text-muted-foreground">{c.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Documents & Important Info */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <div className="flex items-center gap-2 text-accent">
              <FileText className="h-5 w-5" aria-hidden="true" />
              <h2 className="font-serif text-2xl font-bold text-foreground">Required Documents</h2>
            </div>
            <ul className="mt-6 space-y-3">
              {requiredDocuments.map((d) => (
                <li key={d} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-foreground/80">{d}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-2 text-accent">
              <Info className="h-5 w-5" aria-hidden="true" />
              <h2 className="font-serif text-2xl font-bold text-foreground">Important Information</h2>
            </div>
            <ul className="mt-6 space-y-3">
              {importantInfo.map((info) => (
                <li key={info} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-foreground/80">{info}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquiry" className="scroll-mt-24 py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Admission Enquiry"
              title="Online Admission Enquiry Form"
              description="Fill in the form below and our admissions team will get back to you at the earliest."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <EnquiryForm />
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
