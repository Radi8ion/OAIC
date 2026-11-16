import { HTMLAttributes, LabelHTMLAttributes } from 'react';
import { FormProvider } from 'react-hook-form';
import { cn } from '@/lib/cn';

export const Form = FormProvider;

export const FormItem = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('space-y-1.5', className)} {...props} />
);
export const FormLabel = ({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={cn('block text-sm font-medium text-gray-800', className)} {...props} />
);
export const FormControl = (props: HTMLAttributes<HTMLDivElement>) => <div {...props} />;
export const FormMessage = ({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) =>
  children ? <p className={cn('text-sm text-red-700', className)} role="alert" {...props}>{children}</p> : null;
