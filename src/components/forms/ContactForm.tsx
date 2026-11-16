'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { useEffect, useState } from 'react';
import { Input, fieldClasses } from '@/components/ui/Input';
import { cn } from '@/lib/cn';
import { Textarea } from '@/components/ui/Textarea';
import { contactInfo } from '@/data/contact';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});


export default function ContactForm() {
  const [mailtoLink, setMailtoLink] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const mailSubject = encodeURIComponent(values.subject || `Contact from ${values.name}`);
    const mailBody = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`,
    );
    setMailtoLink(`mailto:${contactInfo.generalEmail}?subject=${mailSubject}&body=${mailBody}`);
  }

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (mailtoLink) {
      window.location.href = mailtoLink;
      // Clear mailtoLink after navigation in a defer, to avoid cascading renders
      timer = setTimeout(() => setMailtoLink(null), 0);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  },
    [mailtoLink]);

  const subjects = [
    'Hackathon',
    'Participation',
    'Sponsor',
    'Call for Paper',
    'Call for Workshop',
    'Call for Poster Presentation',
    'General Query',
    'Registration',
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <Controller
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel htmlFor="contact-name">Full name</FormLabel>
              <FormControl>
                <Input id="contact-name" autoComplete="name" placeholder="Your full name" aria-invalid={!!fieldState.error} {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel htmlFor="contact-email">Email address</FormLabel>
              <FormControl>
                <Input id="contact-email" type="email" autoComplete="email" placeholder="you@example.com" aria-invalid={!!fieldState.error} {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Controller
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="contact-subject">Subject</FormLabel>
              <FormControl>
                <select id="contact-subject" {...field} className={cn(fieldClasses, 'h-11 cursor-pointer')}>
                  <option value="" disabled>Select a subject</option>
                  {subjects.map((s) => (
                    <option key={s} value={s.toLowerCase()}>{s}</option>
                  ))}
                </select>
              </FormControl>
            </FormItem>
          )}
        />
        <Controller
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel htmlFor="contact-message">Message</FormLabel>
              <FormControl>
                <Textarea id="contact-message" placeholder="How can we help?" className="resize-y" aria-invalid={!!fieldState.error} {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit" variant="primary" className="w-full">
          Send message
        </Button>
        <p className="text-xs text-gray-500">This opens your email app with the message ready to send.</p>
      </form>
    </Form>
  );
}
