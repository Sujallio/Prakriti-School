'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const gradeOptions = [
  'Nursery',
  'LKG',
  'UKG',
  'Grade 1',
  'Grade 2',
  'Grade 3',
  'Grade 4',
  'Grade 5',
  'Grade 6',
  'Grade 7',
  'Grade 8',
  'Grade 9',
  'Grade 10',
] as const;

const schema = z.object({
  parentName: z.string().min(2, 'Please enter your full name'),
  studentName: z.string().min(2, 'Please enter the student\'s name'),
  dob: z.string().min(1, 'Please select a date of birth'),
  grade: z.string().min(1, 'Please select a class'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[0-9+\-\s()]+$/, 'Please enter a valid phone number'),
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email address'),
  message: z.string().max(500, 'Message is too long (max 500 characters)').optional().or(z.literal('')),
  website: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function EnquiryForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      parentName: '',
      studentName: '',
      dob: '',
      grade: '',
      phone: '',
      email: '',
      message: '',
      website: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitError(null);

    // Honeypot — if the hidden field is filled, silently pretend success (bot detected)
    if (data.website && data.website.trim() !== '') {
      setSubmitted(true);
      reset();
      return;
    }

    // Simulate submission — email/API integration point for when credentials are configured.
    // To enable email notifications, configure an email service endpoint here.
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="mt-4 font-serif text-xl font-bold text-foreground">
          Thank you for your enquiry
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Our school team will get in touch with you shortly. We look forward to
 welcoming you to the Prakriti School family.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => setSubmitted(false)}
        >
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {submitError && (
        <div className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {submitError}
        </div>
      )}

      {/* Honeypot field — hidden from users, visible to bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website (leave blank)</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('website')}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="parentName">
            Parent / Guardian Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="parentName"
            placeholder="Enter your full name"
            aria-invalid={!!errors.parentName}
            {...register('parentName')}
          />
          {errors.parentName && (
            <p className="text-sm text-destructive">{errors.parentName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="studentName">
            Student Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="studentName"
            placeholder="Enter student's name"
            aria-invalid={!!errors.studentName}
            {...register('studentName')}
          />
          {errors.studentName && (
            <p className="text-sm text-destructive">{errors.studentName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="dob">
            Student Date of Birth <span className="text-destructive">*</span>
          </Label>
          <Input
            id="dob"
            type="date"
            aria-invalid={!!errors.dob}
            {...register('dob')}
          />
          {errors.dob && (
            <p className="text-sm text-destructive">{errors.dob.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="grade">
            Class Applying For <span className="text-destructive">*</span>
          </Label>
          <Select onValueChange={(v) => setValue('grade', v)}>
            <SelectTrigger id="grade" aria-invalid={!!errors.grade}>
              <SelectValue placeholder="Select a class" />
            </SelectTrigger>
            <SelectContent>
              {gradeOptions.map((g) => (
                <SelectItem key={g} value={g}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.grade && (
            <p className="text-sm text-destructive">{errors.grade.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="e.g. +91 98765 43210"
            aria-invalid={!!errors.phone}
            {...register('phone')}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            {...register('email')}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Tell us anything you'd like us to know..."
          {...register('message')}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          'Submit Enquiry'
        )}
      </Button>
    </form>
  );
}
