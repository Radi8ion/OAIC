import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export const fieldClasses =
  'w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:border-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-800/15 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-red-600';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => <input ref={ref} className={cn(fieldClasses, 'h-11', className)} {...props} />,
);
Input.displayName = 'Input';
