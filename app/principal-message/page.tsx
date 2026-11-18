import Image from 'next/image';
import { Quote } from 'lucide-react';
import { PageHeader } from '@/components/site/page-header';
import { CTASection } from '@/components/site/cta-section';
import { FadeIn } from '@/components/site/fade-in';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Message from the Principal',
  description:
    'A message from the Principal of Prakriti School sharing our vision, commitment and dedication to every student\'s growth.',
  alternates: { canonical: '/principal-message' },
};

export default function PrincipalMessagePage() {
  const message = `It is my privilege to welcome you to Prakriti School, a place where education goes beyond textbooks and classrooms. We believe that every child is unique, with their own strengths, interests and potential waiting to be discovered.

At Prakriti School, our endeavour is to create an environment where learning is joyful, curiosity is celebrated and every student feels valued and supported. We are committed to nurturing not just academic excellence, but also character, creativity and a deep sense of responsibility towards society and the world around us.

Our dedicated team of educators works tirelessly to ensure that each child receives the attention, guidance and encouragement they need to flourish. Together with the support of parents and the wider community, we strive to shape confident, compassionate and capable individuals ready to embrace the challenges of tomorrow.

I invite you to explore our school and become part of our journey in shaping young minds for a brighter future.`;

  return (
    <>
      <PageHeader
        breadcrumb="Home / Principal Message"
        title="Message from the Principal"
        subtitle="A warm welcome and a shared vision for the future of our students."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[340px_1fr]">
              {/* Principal photo */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <div className="relative mx-auto aspect-[3/4] w-full max-w-[340px] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/5212343/pexels-photo-5212343.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                    alt="Principal of Prakriti School"
                    fill
                    sizes="(max-width: 1024px) 100vw, 340px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-5 text-center">
                  <p className="font-serif text-xl font-bold text-foreground">[Principal Name]</p>
                  <p className="text-sm font-medium text-accent">Principal</p>
                  <p className="mt-1 text-sm text-muted-foreground">Prakriti School</p>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <Quote className="h-10 w-10 text-accent/30" aria-hidden="true" />
                <div className="mt-4 space-y-4">
                  {message.split('\n\n').map((para, i) => (
                    <p key={i} className="text-base leading-relaxed text-foreground/80">
                      {para}
                    </p>
                  ))}
                </div>
                <div className="mt-8 border-t border-border pt-6">
                  <p className="font-serif text-lg font-semibold text-foreground">[Principal Name]</p>
                  <p className="text-sm text-muted-foreground">Principal, Prakriti School</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
