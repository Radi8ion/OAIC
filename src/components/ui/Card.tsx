import { cn } from '@/lib/cn';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <div className={cn('surface overflow-hidden', className)}>{children}</div>;
}

export function CardHeader({ children, className }: CardProps) {
  return <div className={cn('flex flex-col gap-1.5 p-6', className)}>{children}</div>;
}

export function CardTitle({ children, className }: CardProps) {
  return <h3 className={cn('font-semibold leading-snug', className)}>{children}</h3>;
}

export function CardDescription({ children, className }: CardProps) {
  return <p className={cn('text-sm text-gray-600', className)}>{children}</p>;
}

export function CardContent({ children, className }: CardProps) {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>;
}

export function CardFooter({ children, className }: CardProps) {
  return <div className={cn('flex items-center p-6 pt-0', className)}>{children}</div>;
}
