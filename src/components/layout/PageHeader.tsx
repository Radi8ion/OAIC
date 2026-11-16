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
    <div className="border-b border-gray-200 bg-gray-50">
      <div className="container-wide py-8 md:py-12">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
            <li>
              <Link href="/" className="text-gray-500 hover:text-primary-950">Home</Link>
            </li>
            {breadcrumbs.map((item, index) => {
              const last = index === breadcrumbs.length - 1;
              return (
                <li key={item.label} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-gray-400" aria-hidden />
                  {item.href && !last ? (
                    <Link href={item.href} className="text-gray-500 hover:text-primary-950">{item.label}</Link>
                  ) : (
                    <span className="text-gray-700" aria-current={last ? 'page' : undefined}>{item.label}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        <h1 className="mt-4 text-3xl font-semibold md:text-4xl lg:text-5xl">{title}</h1>
        {description && <p className="mt-3 max-w-3xl text-base text-gray-600 md:text-lg">{description}</p>}
      </div>
    </div>
  );
}
