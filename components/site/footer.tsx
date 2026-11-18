import Link from 'next/link';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { footerLinks } from '@/data/navigation';

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
    { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
    { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
  ];

  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 font-serif text-xl font-bold">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <GraduationCap className="h-6 w-6" aria-hidden="true" />
              </span>
              Prakriti School
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <s.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
                {heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                    >
                      {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="hover:text-accent">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-sm text-primary-foreground/60">
              &copy; {year} {siteConfig.name}. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-sm text-primary-foreground/60">
              <Link href="/privacy-policy" className="hover:text-accent">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
