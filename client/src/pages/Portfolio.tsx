import SEO from "@/components/SEO";
import PortfolioGallery from "@/components/PortfolioGallery";
import TestimonialBlock from "@/components/TestimonialBlock";
import { pageMetadata } from "@/utils/metadata";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Portfolio() {
  const caseStudies = [
    {
      name: "Sarah M.",
      role: "SaaS Founder",
      content: "FortyEightWeb delivered our landing page in exactly 48 hours. The conversion rate increased by 40% within the first week. The attention to detail and speed was incredible.",
      rating: 5,
    },
    {
      name: "Michael R.",
      role: "E-commerce CEO",
      content: "The AI automation system they built for our inventory management saved us 30 hours per week. ROI was immediate and the integration was seamless with our existing systems.",
      rating: 5,
    },
    {
      name: "Jessica L.",
      role: "Marketing Director",
      content: "We needed a complete website overhaul in 3 days for a product launch. FortyEightWeb delivered a stunning site that drove 200% more conversions than our previous version.",
      rating: 5,
    },
  ];

  const metrics = [
    { value: "50+", label: "Projects Completed" },
    { value: "48hrs", label: "Average Delivery" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "3x", label: "Average ROI Increase" },
  ];

  return (
    <>
      <SEO {...pageMetadata.portfolio} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-jakarta font-bold fw-text mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore our collection of websites, AI systems, and automation projects that showcase speed, precision, and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-3xl md:text-4xl font-jakarta font-bold text-[hsl(186,64%,61%)] mb-2 group-hover:text-[hsl(181,75%,40%)] transition-all duration-300 transform group-hover:scale-110">
                  {metric.value}
                </div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">Projects that demonstrate our expertise across different industries and technologies</p>
          </div>
          
          <PortfolioGallery />
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-600">Real results from real projects</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((testimonial, index) => (
              <TestimonialBlock key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text mb-4">Our Sprint Process</h2>
            <p className="text-lg text-gray-600">How we deliver results in 48 hours</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-[hsl(186,64%,61%)] rounded-full flex items-center justify-center mx-auto mb-4 hover:shadow-lg hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-jakarta font-bold fw-text mb-2 group-hover:text-[hsl(186,64%,61%)] transition-colors duration-300">Discovery</h3>
              <p className="text-gray-600">We understand your goals, audience, and requirements in detail</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-[hsl(181,75%,40%)] rounded-full flex items-center justify-center mx-auto mb-4 hover:shadow-lg hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-jakarta font-bold fw-text mb-2 group-hover:text-[hsl(181,75%,40%)] transition-colors duration-300">Design</h3>
              <p className="text-gray-600">Rapid prototyping and design approval within 6 hours</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-[hsl(220,91%,56%)] rounded-full flex items-center justify-center mx-auto mb-4 hover:shadow-lg hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-jakarta font-bold fw-text mb-2 group-hover:text-[hsl(220,91%,56%)] transition-colors duration-300">Development</h3>
              <p className="text-gray-600">Sprint development with real-time progress updates</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-[hsl(210,47%,21%)] rounded-full flex items-center justify-center mx-auto mb-4 hover:shadow-lg hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-jakarta font-bold fw-text mb-2 group-hover:text-[hsl(210,47%,21%)] transition-colors duration-300">Launch</h3>
              <p className="text-gray-600">Testing, optimization, and deployment within 48 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(186,64%,61%)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our portfolio of successful projects and accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-[hsl(186,64%,61%)] hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              onClick={() => {
                window.location.href = "/contact#start-project";
              }}
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-gray-800 bg-white hover:bg-gray-100 hover:text-[hsl(186,64%,61%)] transition-all duration-200"
              onClick={() => window.open("https://calendly.com/unfoldedproject/seanwilliams-services-auryon", "_blank")}
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
