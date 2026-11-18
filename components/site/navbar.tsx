'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, GraduationCap, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navItems } from '@/data/navigation';
import { siteConfig } from '@/config/site';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-background/90 shadow-sm backdrop-blur-md border-b border-border/60'
          : 'bg-background/60 backdrop-blur-sm'
      )}
    >
      <nav
        className="container-page flex h-16 items-center justify-between lg:h-20"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-serif text-lg font-bold text-primary lg:text-xl"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground lg:h-10 lg:w-10">
            <GraduationCap className="h-5 w-5 lg:h-6 lg:w-6" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            Prakriti
            <span className="block text-[0.65em] font-medium text-muted-foreground">
              School
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                    active ? 'text-primary' : 'text-foreground/80'
                  )}
                >
                  {item.title}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden xl:inline">{siteConfig.contact.phone}</span>
          </a>
          <Button asChild size="sm">
            <Link href="/admissions#enquiry">Enquire Now</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-accent/10 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <div className="container-page border-t border-border/60 bg-background pb-6 pt-2">
            <ul className="flex flex-col">
              {navItems.map((item) => {
                const active =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 rounded-md px-3 py-3 text-base font-medium transition-colors',
                        active
                          ? 'bg-primary/5 text-primary'
                          : 'text-foreground/80 hover:bg-accent/10 hover:text-primary'
                      )}
                    >
                      <item.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              <Button asChild className="w-full">
                <Link href="/admissions#enquiry">Enquire Now</Link>
              </Button>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
