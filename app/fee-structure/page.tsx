import { Info } from 'lucide-react';
import { PageHeader } from '@/components/site/page-header';
import { CTASection } from '@/components/site/cta-section';
import { FadeIn } from '@/components/site/fade-in';
import { feeRows, feeNotes } from '@/data/fees';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fee Structure',
  description:
    'View the fee structure at Prakriti School. Fee details are provided by the school and are subject to change as per school policy.',
  alternates: { canonical: '/fee-structure' },
};

export default function FeeStructurePage() {
  return (
    <>
      <PageHeader
        breadcrumb="Home / Fee Structure"
        title="Fee Structure"
        subtitle="The fee structure below is provided by the school and is subject to change as per school policy."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            {/* Desktop: table layout */}
            <div className="hidden overflow-hidden rounded-xl border border-border sm:block">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left text-sm">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-4 py-4 font-semibold">Class</th>
                      <th className="px-4 py-4 font-semibold">Tuition Fee</th>
                      <th className="px-4 py-4 font-semibold">Admission Fee</th>
                      <th className="px-4 py-4 font-semibold">Annual Fee</th>
                      <th className="px-4 py-4 font-semibold">Other Charges</th>
                      <th className="px-4 py-4 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-card">
                    {feeRows.map((row) => (
                      <tr key={row.class} className="hover:bg-secondary/50">
                        <td className="px-4 py-4 font-medium text-foreground">{row.class}</td>
                        <td className="px-4 py-4 text-muted-foreground">{row.tuitionFee}</td>
                        <td className="px-4 py-4 text-muted-foreground">{row.admissionFee}</td>
                        <td className="px-4 py-4 text-muted-foreground">{row.annualFee}</td>
                        <td className="px-4 py-4 text-muted-foreground">{row.otherCharges}</td>
                        <td className="px-4 py-4 text-muted-foreground">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile: card layout */}
            <div className="space-y-4 sm:hidden">
              {feeRows.map((row) => (
                <div key={row.class} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-serif text-lg font-bold text-primary">{row.class}</h3>
                  <dl className="mt-4 space-y-3">
                    <div className="flex justify-between gap-4">
                      <dt className="text-sm text-muted-foreground">Tuition Fee</dt>
                      <dd className="text-sm font-medium text-foreground">{row.tuitionFee}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-sm text-muted-foreground">Admission Fee</dt>
                      <dd className="text-sm font-medium text-foreground">{row.admissionFee}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-sm text-muted-foreground">Annual Fee</dt>
                      <dd className="text-sm font-medium text-foreground">{row.annualFee}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-sm text-muted-foreground">Other Charges</dt>
                      <dd className="text-sm font-medium text-foreground">{row.otherCharges}</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-t border-border pt-3">
                      <dt className="text-sm text-muted-foreground">Notes</dt>
                      <dd className="text-right text-sm text-muted-foreground">{row.notes}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-6">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h2 className="font-serif text-lg font-bold text-foreground">Important Notes</h2>
                  <ul className="mt-3 space-y-2">
                    {feeNotes.map((note) => (
                      <li key={note} className="text-sm leading-relaxed text-muted-foreground">
                        — {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
