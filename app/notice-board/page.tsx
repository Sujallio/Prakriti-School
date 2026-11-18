import { PageHeader } from '@/components/site/page-header';
import { CTASection } from '@/components/site/cta-section';
import { FadeIn } from '@/components/site/fade-in';
import { NoticeBoard } from '@/components/site/notice-board';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notice Board',
  description:
    'Stay updated with the latest notices from Prakriti School — admissions, examinations, events, holidays and general announcements.',
  alternates: { canonical: '/notice-board' },
};

export default function NoticeBoardPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Home / Notice Board"
        title="Notice Board"
        subtitle="Stay informed with the latest announcements and updates from our school."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <NoticeBoard />
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
