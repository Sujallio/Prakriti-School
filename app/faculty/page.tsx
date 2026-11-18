import { PageHeader } from '@/components/site/page-header';
import { CTASection } from '@/components/site/cta-section';
import { FadeIn } from '@/components/site/fade-in';
import { FacultyGrid } from '@/components/site/faculty-grid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Faculty',
  description:
    'Meet the dedicated and experienced faculty of Prakriti School — educators committed to nurturing every student\'s potential.',
  alternates: { canonical: '/faculty' },
};

export default function FacultyPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Home / Faculty"
        title="Our Faculty"
        subtitle="A team of dedicated, qualified and caring educators at the heart of our school."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <FacultyGrid />
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
