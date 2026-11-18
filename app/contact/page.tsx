import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { PageHeader } from '@/components/site/page-header';
import { CTASection } from '@/components/site/cta-section';
import { FadeIn } from '@/components/site/fade-in';
import { ContactForm } from '@/components/site/contact-form';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Prakriti School in Manmad, Maharashtra. Find our address, phone, email, office hours and send us an enquiry.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  const contactItems = [
    { icon: MapPin, label: 'Address', value: siteConfig.contact.address },
    { icon: Phone, label: 'Phone', value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: 'Email', value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    { icon: Clock, label: 'Office Hours', value: siteConfig.contact.officeHours },
  ];

  return (
    <>
      <PageHeader
        breadcrumb="Home / Contact"
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with any questions about admissions, academics or anything else."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          {/* Contact info */}
          <FadeIn>
            <h2 className="font-serif text-2xl font-bold text-foreground">Get in Touch</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Visit us, call us or send a message — our team is here to help with any
              questions you may have about Prakriti School.
            </p>
            <ul className="mt-8 space-y-5">
              {contactItems.map((c) => (
                <li key={c.label} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <c.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm text-muted-foreground hover:text-accent">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{c.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Map placeholder */}
            <div className="mt-8 overflow-hidden rounded-xl border border-border">
              <iframe
                title="Prakriti School location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=74.44%2C20.08%2C74.50%2C20.12&layer=mapnik"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

          {/* Contact form */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="font-serif text-2xl font-bold text-foreground">Send an Enquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
