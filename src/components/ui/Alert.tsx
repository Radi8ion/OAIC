import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Alert({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'callout relative w-full [&>svg]:absolute [&>svg]:left-5 [&>svg]:top-[1.1rem] [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-brand-700 [&:has(>svg)]:pl-12',
        className,
      )}
      role="note"
    >
      {children}
    </div>
  );
}

export function AlertTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('font-semibold text-primary-950', className)}>{children}</p>;
}

export function AlertDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mt-1 text-sm leading-relaxed text-gray-700 md:text-base', className)}>{children}</div>;
}
