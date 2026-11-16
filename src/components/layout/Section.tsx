import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export default function Section({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={cn('py-12 md:py-20', className)}>{children}</section>;
}
