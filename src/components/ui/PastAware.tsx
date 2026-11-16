'use client';

import { createElement, useSyncExternalStore, type HTMLAttributes, type ReactNode } from 'react';

const subscribe = () => () => {};

/** True once the given date (YYYY-MM-DD) has ended Anywhere on Earth (UTC-12). */
export function useIsPast(iso?: string) {
  return useSyncExternalStore(
    subscribe,
    () => !!iso && Date.now() > new Date(`${iso}T23:59:59-12:00`).getTime(),
    () => false,
  );
}

interface PastAwareProps extends HTMLAttributes<HTMLElement> {
  iso?: string;
  as?: 'li' | 'div' | 'span' | 'p';
  children: ReactNode;
}

/**
 * Wraps content and sets data-past="true" once the date has passed, so children
 * can style themselves with `group-data-[past=true]:` variants.
 */
export default function PastAware({ iso, as = 'div', className, children, ...rest }: PastAwareProps) {
  const past = useIsPast(iso);
  return createElement(as, { ...rest, className: `group ${className ?? ''}`, 'data-past': past || undefined }, children);
}
