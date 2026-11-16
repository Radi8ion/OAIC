import { cn } from '@/lib/cn';
import { ReactNode } from 'react';

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700', className)}>
      {children}
    </span>
  );
}
