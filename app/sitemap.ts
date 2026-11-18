import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { navItems, secondaryNav } from '@/data/navigation';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    ...navItems.map((item) => item.href),
    ...secondaryNav.map((item) => item.href),
    '/privacy-policy',
    '/terms',
  ];
  const unique = Array.from(new Set(routes));

  return unique.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
