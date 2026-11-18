import { PageHeader } from '@/components/site/page-header';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Read the terms and conditions for using the Prakriti School website.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Home / Terms & Conditions"
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our website."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="font-serif text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
              <p className="mt-3">
                By accessing and using the {siteConfig.name} website, you accept and agree to be bound
                by these Terms &amp; Conditions. If you do not agree with any part of these terms,
                please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground">2. Use of the Website</h2>
              <p className="mt-3">
                You agree to use this website for lawful purposes only. You must not use the site in any
                way that could damage, disable or impair the website, or interfere with any other
                person&apos;s use of the site.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground">3. Intellectual Property</h2>
              <p className="mt-3">
                All content on this website, including text, images, logos and design elements, is the
                property of {siteConfig.name} unless otherwise stated. You may not reproduce, distribute
                or use any content without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground">4. Enquiry Submissions</h2>
              <p className="mt-3">
                When you submit an enquiry or contact form, you confirm that the information provided is
                accurate and complete. You agree that we may use the information you provide to contact
                you regarding your enquiry.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground">5. Disclaimer</h2>
              <p className="mt-3">
                The information provided on this website is for general informational purposes only.
                While we strive to keep information accurate and up to date, we make no warranties
                about the completeness or accuracy of any information on this site. Any reliance you
                place on such information is strictly at your own risk.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground">6. External Links</h2>
              <p className="mt-3">
                This website may contain links to external websites. We are not responsible for the
                content or practices of any external sites and do not endorse them.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground">7. Changes to Terms</h2>
              <p className="mt-3">
                We reserve the right to update or modify these Terms &amp; Conditions at any time.
                Continued use of the website after changes constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground">8. Contact</h2>
              <p className="mt-3">
                For any questions regarding these Terms &amp; Conditions, please contact us at{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-primary hover:underline">
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </div>

            <p className="border-t border-border pt-6 text-xs text-muted-foreground/70">
              Last updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
