import { ExternalLink } from 'lucide-react';
import { buttonClasses } from '@/components/ui/Button';

const SUBMIT_URL = 'https://edas.info/login.php?rurl=aHR0cHM6Ly9lZGFzLmluZm8vTjM1MzYxP2M9MzUzNjE%3D';

export default function FloatingSubmitButton() {
  return (
    <a
      href={SUBMIT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses('accent', 'md', 'fixed bottom-4 right-4 z-40 shadow-lg sm:bottom-6 sm:right-6')}
    >
      Submit on EDAS
      <ExternalLink className="h-4 w-4" aria-hidden />
    </a>
  );
}
