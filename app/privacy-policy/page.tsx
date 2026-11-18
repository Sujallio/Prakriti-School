import { PageHeader } from '@/components/site/page-header';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the privacy policy of Prakriti School to understand how we handle your information.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Home / Privacy Policy"
        title="Privacy Policy"
        subtitle="Your privacy is important to us. This policy explains how we handle your information."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="font-serif text-xl font-bold text-foreground">1. Introduction</h2>
              <p className="mt-3">
                {siteConfig.name} (&quot;the School&quot;, &quot;we&quot;, &quot;us&quot;) respects your
                privacy and is committed to protecting your personal information. This Privacy Policy
                explains how we collect, use and safeguard information you provide through this website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground">2. Information We Collect</h2>
              <p className="mt-3">
                We may collect the following types of information when you interact with our website:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Contact details such as your name, email address and phone number, provided through enquiry or contact forms.</li>
                <li>Student information such as name, date of birth and class applying for, provided during admission enquiries.</li>
                <li>Messages or enquiries you submit through our forms.</li>
                <li>Basic technical information such as browser type and pages visited, collected automatically for site improvement.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground">3. How We Use Your Information</h2>
              <p className="mt-3">We use the information you provide to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Respond to your admission enquiries and contact form submissions.</li>
                <li>Communicate with you regarding school admissions, events and updates.</li>
                <li>Improve our website and the services we offer.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground">4. Information Sharing</h2>
              <p className="mt-3">
                We do not sell, rent or share your personal information with third parties for marketing
                purposes. Your information is used solely for the purposes described in this policy and
                may be shared with authorised school staff who need it to respond to your enquiry.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground">5. Data Security</h2>
              <p className="mt-3">
                We take reasonable measures to protect your personal information from unauthorised
                access, alteration or disclosure. However, no method of transmission over the internet
                is completely secure.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground">6. Your Rights</h2>
              <p className="mt-3">
                You may request access to, correction of, or deletion of your personal information by
                contacting us using the details provided on our Contact page.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground">7. Changes to This Policy</h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Any changes will be posted on this
                page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-foreground">8. Contact Us</h2>
              <p className="mt-3">
                If you have any questions about this Privacy Policy, please contact us at{' '}
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
