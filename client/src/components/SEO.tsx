import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export default function SEO({
  title = "FortyEightWeb - Sites Built in 48 Hours. Built to Perform.",
  description = "Professional website development and AI automation services. Sites built in 48 hours with sprint methodology. Based in Cincinnati, Ohio.",
  keywords = "website development, 48 hour websites, AI automation, sprint builds, Cincinnati web development",
  ogTitle,
  ogDescription,
  ogImage,
  canonical
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    
    if (ogImage) {
      updateMetaTag('og:image', ogImage, true);
    }
    
    // Update canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical]);
  
  return null;
}
