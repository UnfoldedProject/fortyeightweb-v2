import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function SEOAnalytics() {
  const [location] = useLocation();

  useEffect(() => {
    // Track page views
    const trackPageView = async () => {
      try {
        // Send analytics data to your backend
        await fetch('/api/track-analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'page_view',
            page: location,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            referrer: document.referrer
          })
        });
      } catch (error) {
        console.error('Analytics tracking error:', error);
      }
    };

    // Track page view
    trackPageView();

    // Add structured data for better SEO
    const addStructuredData = () => {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "FortyEightWeb",
        "url": "https://www.fortyeightweb.com",
        "logo": "https://www.fortyeightweb.com/logo.png",
        "description": "Professional website development and AI automation services for founders who need results fast",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cincinnati",
          "addressRegion": "OH",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-513-394-6674",
          "contactType": "Customer Service",
          "email": "ops@fortyeightweb.com"
        },
        "sameAs": [
          "https://www.linkedin.com/company/fortyeight-web",
          "https://github.com/UnfoldedProject",
          "https://x.com/FortyEightWeb"
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    // Add structured data only once
    if (!document.querySelector('script[type="application/ld+json"]')) {
      addStructuredData();
    }

    // Add LinkedIn Insight Tag (only once)
    const addLinkedInInsightTag = () => {
      const linkedInScript = document.createElement('script');
      linkedInScript.innerHTML = `
        _linkedin_partner_id = "8020204";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        
        (function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.js";
          s.parentNode.insertBefore(b, s);
        })(window.lintrk);
      `;
      document.head.appendChild(linkedInScript);

      // Add LinkedIn noscript pixel
      const linkedInNoscript = document.createElement('noscript');
      linkedInNoscript.innerHTML = `
        <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=8020204&fmt=gif" />
      `;
      document.body.appendChild(linkedInNoscript);
    };

    // Add LinkedIn tag only once
    if (!document.querySelector('script[src*="snap.licdn.com"]')) {
      addLinkedInInsightTag();
    }

  }, [location]);

  return null;
}