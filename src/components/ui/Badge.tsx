import { cn } from '@/lib/cn';
import { ReactNode } from 'react';

export function Badge({ children, className, variant = 'default' }: { children: ReactNode; className?: string; variant?: 'default' | 'secondary' | 'destructive' | 'outline' }) {
  return (
    <div className={cn("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", className)}>
      {children}
    </div>
  );
}
