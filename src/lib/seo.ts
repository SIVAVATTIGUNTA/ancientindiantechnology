type MetaKV = { key: string; value: string };

function getOrigin(): string {
  if (typeof window !== 'undefined' && window.location?.origin) return window.location.origin;
  return 'https://ancientindiantechnology.com';
}

export function toAbsoluteUrl(pathOrUrl: string): string {
  const raw = pathOrUrl.trim();
  if (!raw) return getOrigin();
  if (/^https?:\/\//i.test(raw)) return raw;
  const origin = getOrigin();
  if (raw.startsWith('/')) return `${origin}${raw}`;
  return `${origin}/${raw}`;
}

function ensureHeadElement<T extends HTMLElement>(selector: string, factory: () => T): T {
  const existing = document.head.querySelector(selector);
  if (existing) return existing as T;
  const el = factory();
  document.head.appendChild(el);
  return el;
}

export function upsertTitle(title: string) {
  if (!title.trim()) return;
  document.title = title;
}

export function upsertMetaName(name: string, content: string | null | undefined) {
  if (!name.trim()) return;
  if (!content?.trim()) return;
  const meta = ensureHeadElement<HTMLMetaElement>(`meta[name="${CSS.escape(name)}"]`, () => {
    const el = document.createElement('meta');
    el.setAttribute('name', name);
    return el;
  });
  meta.setAttribute('content', content);
}

export function upsertMetaProperty(property: string, content: string | null | undefined) {
  if (!property.trim()) return;
  if (!content?.trim()) return;
  const meta = ensureHeadElement<HTMLMetaElement>(`meta[property="${CSS.escape(property)}"]`, () => {
    const el = document.createElement('meta');
    el.setAttribute('property', property);
    return el;
  });
  meta.setAttribute('content', content);
}

export function upsertCanonical(href: string) {
  const abs = toAbsoluteUrl(href);
  const link = ensureHeadElement<HTMLLinkElement>('link[rel="canonical"]', () => {
    const el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    return el;
  });
  link.setAttribute('href', abs);
}

export function upsertTwitterCard() {
  upsertMetaName('twitter:card', 'summary_large_image');
}

export function upsertOgBasics({
  title,
  description,
  url,
  image,
  type = 'website',
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  type?: 'website' | 'article';
}) {
  upsertMetaProperty('og:title', title);
  upsertMetaProperty('og:description', description);
  upsertMetaProperty('og:url', toAbsoluteUrl(url));
  upsertMetaProperty('og:type', type);
  upsertMetaProperty('og:image', toAbsoluteUrl(image));
  upsertMetaProperty('og:site_name', 'Ancient Indian Technology');
}

export function upsertTwitterBasics({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  upsertTwitterCard();
  upsertMetaName('twitter:title', title);
  upsertMetaName('twitter:description', description);
  upsertMetaName('twitter:image', toAbsoluteUrl(image));
}

export function upsertJsonLd(id: string, data: unknown) {
  if (!id.trim()) return;
  const script = ensureHeadElement<HTMLScriptElement>(`script[type="application/ld+json"][data-ait-jsonld="${CSS.escape(id)}"]`, () => {
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-ait-jsonld', id);
    return el;
  });
  script.textContent = JSON.stringify(data);
}

export function removeJsonLd(id: string) {
  const el = document.head.querySelector(`script[type="application/ld+json"][data-ait-jsonld="${CSS.escape(id)}"]`);
  el?.remove();
}

export function setMetaBatch(items: MetaKV[]) {
  items.forEach((item) => {
    if (item.key.startsWith('og:')) {
      upsertMetaProperty(item.key, item.value);
      return;
    }
    upsertMetaName(item.key, item.value);
  });
}

