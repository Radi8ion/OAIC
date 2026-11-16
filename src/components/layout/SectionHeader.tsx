import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionHeaderProps {
  title: string;
  eyebrow?: string;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeader({ title, eyebrow, subtitle, align = 'center', className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-8 md:mb-10', align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl', className)}>
      {eyebrow && <span className="eyebrow mb-2">{eyebrow}</span>}
      <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-gray-600">{subtitle}</p>}
    </div>
  );
}
