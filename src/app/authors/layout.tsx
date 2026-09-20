import type { ReactNode } from 'react';
import FloatingSubmitButton from '@/components/ui/FloatingSubmitButton';

export default function AuthorsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <FloatingSubmitButton />
    </>
  );
}
