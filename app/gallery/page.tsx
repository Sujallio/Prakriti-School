import { PageHeader } from '@/components/site/page-header';
import { CTASection } from '@/components/site/cta-section';
import { FadeIn } from '@/components/site/fade-in';
import { GalleryGrid } from '@/components/site/gallery-grid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse photos of the Prakriti School campus, classrooms, events, sports, activities and facilities.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Home / Gallery"
        title="Photo Gallery"
        subtitle="A visual journey through life at Prakriti School — our campus, events and everyday moments."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <GalleryGrid />
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
