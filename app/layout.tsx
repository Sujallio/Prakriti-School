import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { WhatsAppButton } from '@/components/site/whatsapp-button';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Quality Education & Holistic Development`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Prakriti School',
    'Prakriti School Manmad',
    'best school in Manmad',
    'school in Manmad',
    'Manmad school',
    'schools in Manmad Maharashtra',
    'CBSE school Manmad',
    'admission Manmad',
    'school admission Manmad',
    'education Manmad',
    'primary school Manmad',
    'secondary school Manmad',
    'best CBSE school in Manmad',
  ],
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: `${siteConfig.name} | Quality Education & Holistic Development`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Quality Education & Holistic Development`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteConfig.name,
    alternateName: 'Prakriti School Manmad',
    url: siteConfig.url,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: 'Manmad',
      addressRegion: 'Maharashtra',
      postalCode: '423104',
      addressCountry: 'IN',
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    areaServed: 'Manmad, Maharashtra',
  };

  return (
    <html lang="en">
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
