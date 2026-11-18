import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { FadeIn } from '@/components/site/fade-in';
import { siteConfig } from '@/config/site';

export function CTASection() {
  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="container-page">
        <FadeIn className="overflow-hidden rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground shadow-lg sm:px-12 sm:py-16">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
            Begin Your Child&apos;s Journey With Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            Take the first step towards a nurturing and enriching education. Our
            admissions team is here to guide you through every step of the process.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/admissions#enquiry">
                Admission Enquiry
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}>
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Call Us
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
