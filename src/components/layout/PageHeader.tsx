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
    <div className="bg-gray-100 py-8 border-b border-gray-200">
      <div className="container-wide">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-primary-600">Home</Link>
            </li>
            {breadcrumbs.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-primary-600">
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-gray-700">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mt-4">{title}</h1>
        {description && <p className="mt-4 text-lg text-gray-600">{description}</p>}
      </div>
    </div>
  );
}
