import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'accent' | 'outline' | 'inverse' | 'outline-inverse' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary: 'bg-primary-900 text-white hover:bg-primary-950 hover:text-white focus-visible:ring-primary-600',
  accent: 'bg-brand-700 text-white hover:bg-brand-800 hover:text-white focus-visible:ring-brand-500',
  outline: 'border border-primary-900 text-primary-900 hover:bg-primary-50 hover:text-primary-950 focus-visible:ring-primary-600',
  inverse: 'bg-white text-primary-950 hover:bg-gray-100 hover:text-primary-950 focus-visible:ring-white',
  'outline-inverse': 'border border-white/60 text-white hover:bg-white/10 hover:text-white focus-visible:ring-white',
  ghost: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-400',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

export function buttonClasses(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

export const Button = React.forwardRef<HTMLElement, IButtonProps>(
  ({ as: Component = 'button', variant = 'primary', size = 'md', className, href, ...props }, ref) => {
    const classes = buttonClasses(variant, size, className);

    if (Component === Link && href) {
      return (
        <Link href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {props.children}
        </Link>
      );
    }

    if (Component === 'a' && href) {
      return (
        <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {props.children}
        </a>
      );
    }

    return <button className={classes} ref={ref as React.Ref<HTMLButtonElement>} {...props} />;
  },
);

Button.displayName = 'Button';
