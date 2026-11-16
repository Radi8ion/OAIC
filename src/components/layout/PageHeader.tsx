import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-dots relative overflow-hidden border-b-[3px] border-brand-700 bg-primary-950">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-white/[0.04]" aria-hidden />
      <div className="container-wide relative py-7 md:py-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
            <li>
              <Link href="/" className="text-white/60 hover:text-white">Home</Link>
            </li>
            {breadcrumbs.map((item, index) => {
              const last = index === breadcrumbs.length - 1;
              return (
                <li key={item.label} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-white/40" aria-hidden />
                  {item.href && !last ? (
                    <Link href={item.href} className="text-white/60 hover:text-white">{item.label}</Link>
                  ) : (
                    <span className="text-white/85" aria-current={last ? 'page' : undefined}>{item.label}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        <h1 className="mt-3 text-3xl font-semibold text-white md:text-4xl lg:text-[2.75rem]">{title}</h1>
        {description && <p className="mt-2.5 max-w-3xl text-base text-white/75 md:text-lg">{description}</p>}
      </div>
    </div>
  );
}
