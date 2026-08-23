import { useEffect } from 'react';

export interface PageMetadataConfig {
  title: string;
  description?: string;
  canonical?: string;
  robots?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterImageAlt?: string;
  structuredData?: Record<string, unknown>;
}

function updateMetaTag(attrName: 'name' | 'property', attrValue: string, content: string | undefined) {
  if (!content) return;
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateCanonicalLink(url: string | undefined) {
  if (!url) return;
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

function updateStructuredData(data: Record<string, unknown> | undefined) {
  const SCRIPT_ID = 'app-structured-data';
  let scriptElement = document.getElementById(SCRIPT_ID);
  
  if (!data) {
    if (scriptElement) {
      scriptElement.remove();
    }
    return;
  }

  if (!scriptElement) {
    scriptElement = document.createElement('script');
    scriptElement.id = SCRIPT_ID;
    scriptElement.setAttribute('type', 'application/ld+json');
    document.head.appendChild(scriptElement);
  }

  scriptElement.textContent = JSON.stringify(data, null, 2);
}

export function usePageMetadata(config: PageMetadataConfig) {
  useEffect(() => {
    // 1. Document Title
    if (config.title) {
      document.title = config.title;
    }

    // 2. Standard Meta
    updateMetaTag('name', 'description', config.description);
    updateMetaTag('name', 'robots', config.robots || 'index, follow');
    updateCanonicalLink(config.canonical);

    // 3. Open Graph
    updateMetaTag('property', 'og:title', config.ogTitle || config.title);
    updateMetaTag('property', 'og:description', config.ogDescription || config.description);
    updateMetaTag('property', 'og:type', config.ogType || 'website');
    updateMetaTag('property', 'og:url', config.ogUrl || config.canonical);
    updateMetaTag('property', 'og:image', config.ogImage);
    updateMetaTag('property', 'og:image:alt', config.ogImageAlt);
    updateMetaTag('property', 'og:site_name', 'Kağan Kurubaş Portfolio');

    // 4. Twitter / X
    updateMetaTag('name', 'twitter:card', config.twitterCard || 'summary_large_image');
    updateMetaTag('name', 'twitter:title', config.twitterTitle || config.ogTitle || config.title);
    updateMetaTag('name', 'twitter:description', config.twitterDescription || config.ogDescription || config.description);
    updateMetaTag('name', 'twitter:image', config.twitterImage || config.ogImage);
    updateMetaTag('name', 'twitter:image:alt', config.twitterImageAlt || config.ogImageAlt);

    // 5. JSON-LD Structured Data
    updateStructuredData(config.structuredData);
  }, [config]);
}
