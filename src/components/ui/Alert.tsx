import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Alert({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11", className)} role="alert">{children}</div>;
}

export function AlertTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h5 className={cn("mb-1 font-medium leading-none tracking-tight", className)}>{children}</h5>;
}

export function AlertDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("text-sm [&_p]:leading-relaxed", className)}>{children}</div>;
}
