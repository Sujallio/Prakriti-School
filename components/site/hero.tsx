'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary via-background to-background">
      <div className="absolute inset-0 bg-grid opacity-[0.04]" aria-hidden="true" />
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

      <div className="container-page relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        {/* Text */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Nurturing. Learning. Growing.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-serif text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl"
          >
            Shaping Young Minds for a{' '}
            <span className="text-accent">Brighter Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Prakriti School is committed to providing a nurturing, engaging and
            holistic learning environment where every student is encouraged to
            learn, grow and achieve their potential.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href="/about">
                Explore Our School
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/admissions#enquiry">Admission Enquiry</Link>
            </Button>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop"
              alt="Students learning together at Prakriti School"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-background p-4 shadow-lg ring-1 ring-border sm:block">
            <p className="text-2xl font-bold text-primary">100%</p>
            <p className="text-xs text-muted-foreground">Caring Environment</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
