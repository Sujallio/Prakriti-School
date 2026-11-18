'use client';

import * as React from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function WhatsAppButton() {
  const [showLabel, setShowLabel] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setShowLabel(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const number = siteConfig.whatsapp.number;
  const message = encodeURIComponent(siteConfig.whatsapp.prefillMessage);
  const href = `https://wa.me/${number}?text=${message}`;

  if (dismissed) {
    return (
      <button
        type="button"
        onClick={() => setDismissed(false)}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
        aria-label="Open WhatsApp chat"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      {showLabel && (
        <div className="relative hidden items-center sm:flex">
          <span className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md">
            Chat With Us
          </span>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-background"
            aria-label="Dismiss chat label"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105',
          'focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2'
        )}
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>
    </div>
  );
}
