import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export default function SectionHeader({ title, description, subtitle, className }: { title: string; description?: ReactNode; subtitle?: ReactNode; className?: string }) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <h3 className="mt-2 text-xl text-primary-600">{subtitle}</h3>}
      {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}
