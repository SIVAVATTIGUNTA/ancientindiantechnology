import { useEffect } from 'react';
import { removeJsonLd, toAbsoluteUrl, upsertCanonical, upsertMetaName, upsertMetaProperty, upsertOgBasics, upsertTitle, upsertTwitterBasics, upsertJsonLd } from '@/lib/seo';

type Breadcrumb = { name: string; url: string };

type PageSeoOptions = {
  title: string;
  description: string;
  canonicalPath: string;
  image: string;
  ogType?: 'website' | 'article';
  breadcrumbs?: Breadcrumb[];
  article?: {
    authorName: string;
    publishedAt: string;
    modifiedAt?: string;
    section?: string;
    keywords?: string[];
  };
};

function buildBreadcrumbJsonLd(items: Breadcrumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': toAbsoluteUrl(item.url),
        name: item.name,
      },
    })),
  };
}

function buildBlogPostingJsonLd({
  title,
  description,
  canonicalPath,
  image,
  authorName,
  publishedAt,
  modifiedAt,
  section,
  keywords,
}: Required<Pick<PageSeoOptions, 'title' | 'description' | 'canonicalPath' | 'image'>> &
  Required<PageSeoOptions>['article']) {
  const canonical = toAbsoluteUrl(canonicalPath);

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${canonical}#blogposting`,
    mainEntityOfPage: canonical,
    headline: title,
    name: title,
    description,
    image: [toAbsoluteUrl(image)],
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ancient Indian Technology',
      logo: {
        '@type': 'ImageObject',
        url: toAbsoluteUrl('/logo_ait.jpeg'),
      },
    },
    articleSection: section,
    keywords: keywords?.join(', '),
  };
}

export function usePageSeo(options: PageSeoOptions) {
  useEffect(() => {
    upsertTitle(options.title);
    upsertMetaName('description', options.description);
    upsertCanonical(options.canonicalPath);

    upsertOgBasics({
      title: options.title,
      description: options.description,
      url: options.canonicalPath,
      image: options.image,
      type: options.ogType ?? 'website',
    });

    upsertTwitterBasics({
      title: options.title,
      description: options.description,
      image: options.image,
    });

    if (options.ogType === 'article' && options.article) {
      upsertMetaProperty('article:published_time', options.article.publishedAt);
      if (options.article.modifiedAt) upsertMetaProperty('article:modified_time', options.article.modifiedAt);
      upsertMetaProperty('article:author', options.article.authorName);
      if (options.article.section) upsertMetaProperty('article:section', options.article.section);
      if (options.article.keywords?.length) upsertMetaProperty('article:tag', options.article.keywords.join(', '));

      upsertJsonLd(
        'blogposting',
        buildBlogPostingJsonLd({
          title: options.title,
          description: options.description,
          canonicalPath: options.canonicalPath,
          image: options.image,
          ...options.article,
        })
      );
    } else {
      removeJsonLd('blogposting');
    }

    if (options.breadcrumbs?.length) {
      upsertJsonLd('breadcrumbs', buildBreadcrumbJsonLd(options.breadcrumbs));
    } else {
      removeJsonLd('breadcrumbs');
    }

    // Cleanup is intentionally not removing meta tags because other routes re-use them.
  }, [options]);
}

