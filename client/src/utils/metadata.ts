export interface PageMetadata {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: "FortyEightWeb - Sites Built in 48 Hours. Built to Perform.",
    description: "Professional website development and AI automation services. Sites built in 48 hours with sprint methodology. Based in Cincinnati, Ohio.",
    keywords: "website development, 48 hour websites, AI automation, sprint builds, Cincinnati web development",
    canonical: "https://www.fortyeightweb.com"
  },
  services: {
    title: "Website Development Services - FortyEightWeb",
    description: "Sprint site builds, AI logic systems, and automation services. From $250 starter packages to advanced custom solutions.",
    keywords: "website development services, sprint builds, AI automation, custom websites, Cincinnati web development",
    canonical: "https://www.fortyeightweb.com/services"
  },
  portfolio: {
    title: "Portfolio - FortyEightWeb Projects",
    description: "Explore our portfolio of websites, AI systems, and automation projects. See how we deliver results in 48 hours.",
    keywords: "web development portfolio, AI projects, automation systems, website examples",
    canonical: "https://www.fortyeightweb.com/portfolio"
  },
  about: {
    title: "About FortyEightWeb - Cincinnati Web Development",
    description: "Learn about FortyEightWeb's mission to deliver high-quality websites in 48 hours. Founded by entrepreneurs, for entrepreneurs.",
    keywords: "about FortyEightWeb, Cincinnati web development, founder story, sprint methodology",
    canonical: "https://www.fortyeightweb.com/about"
  },
  contact: {
    title: "Contact FortyEightWeb - Get Started Today",
    description: "Ready to build your website in 48 hours? Contact FortyEightWeb for a free consultation and project quote.",
    keywords: "contact FortyEightWeb, website quote, Cincinnati web development, project consultation",
    canonical: "https://www.fortyeightweb.com/contact"
  },
  thankYou: {
    title: "Thank You - FortyEightWeb",
    description: "Thank you for your submission. We'll contact you within 24 hours to discuss your project.",
    keywords: "thank you, project submission, FortyEightWeb",
    canonical: "https://www.fortyeightweb.com/thank-you"
  }
};
