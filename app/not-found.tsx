import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-secondary py-20">
      <div className="container-page text-center">
        <p className="font-serif text-7xl font-bold text-primary sm:text-8xl">404</p>
        <h1 className="mt-4 font-serif text-2xl font-bold text-foreground sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground">
          The page you are looking for may have been moved or no longer exists.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
