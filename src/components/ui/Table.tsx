import { cn } from '@/lib/cn';
import { ReactNode } from 'react';

export function Table({ children, className }: { children: ReactNode; className?: string }) {
  return <div className="w-full overflow-auto"><table className={cn("w-full caption-bottom text-sm", className)}>{children}</table></div>;
}

export function TableHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <thead className={cn("[&_tr]:border-b", className)}>{children}</thead>;
}

export function TableBody({ children, className }: { children: ReactNode; className?: string }) {
  return <tbody className={cn("[&_tr:last-child]:border-0", className)}>{children}</tbody>;
}

export function TableRow({ children, className }: { children: ReactNode; className?: string }) {
  return <tr className={cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)}>{children}</tr>;
}

export function TableHead({ children, className }: { children: ReactNode; className?: string }) {
  return <th className={cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className)}>{children}</th>;
}

export function TableCell({ children, className }: { children: ReactNode; className?: string }) {
  return <td className={cn("p-2 align-middle [&:has([role=checkbox])]:pr-0", className)}>{children}</td>;
}

export function TableCaption({ children, className }: { children: ReactNode; className?: string }) {
  return <caption className={cn("mt-4 text-sm text-muted-foreground", className)}>{children}</caption>;
}
