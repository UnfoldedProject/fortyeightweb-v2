import { Link } from "wouter";
import { ArrowRight, Zap, Target, Clock, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import OfferCard from "@/components/OfferCard";
import TestimonialBlock from "@/components/TestimonialBlock";
import LeadRouter from "@/components/LeadRouter";
import SprintProcess from "@/components/SprintProcess";
import FeaturedProjects from "@/components/FeaturedProjects";
import AnimatedButton from "@/components/AnimatedButton";
import AnimatedCard from "@/components/AnimatedCard";
import FadeInSection from "@/components/FadeInSection";
import { pageMetadata } from "@/utils/metadata";

export default function Home() {
  const offerData = [
    {
      title: "Starter",
      price: "$250",
      description: "Perfect for simple landing pages",
      features: [
        { name: "1 Page Website", included: true },
        { name: "48 Hour Delivery", included: true },
        { name: "Mobile Responsive", included: true },
        { name: "SEO Optimized", included: true },
        { name: "Contact Forms", included: false },
      ],
      buttonText: "Get Started - $250",
      buttonAction: () => window.open("https://buy.stripe.com/eVq9AS5MYbUAe7kcB900001", "_blank"),
    },
    {
      title: "Standard",
      price: "$500",
      description: "Multi-page sites with functionality",
      features: [
        { name: "Up to 3 Pages", included: true },
        { name: "48 Hour Delivery", included: true },
        { name: "Contact Forms", included: true },
        { name: "CMS Integration", included: true },
        { name: "Custom Features", included: false },
      ],
      isPopular: true,
      buttonText: "Get Started - $500",
      buttonAction: () => window.open("https://buy.stripe.com/7sY9AScbm8Io4wK30z00002", "_blank"),
    },
    {
      title: "Advanced",
      price: "$750+",
      description: "Complex sites with custom features",
      features: [
        { name: "Unlimited Pages", included: true },
        { name: "96+ Hour Delivery", included: true },
        { name: "Custom Features", included: true },
        { name: "API Integrations", included: true },
        { name: "AI Integration", included: true },
      ],
      buttonText: "Get Quote",
      buttonAction: () => window.open("https://calendly.com/unfoldedproject/seanwilliams-services-auryon", "_blank"),
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "SaaS Founder",
      content: "FortyEightWeb delivered our landing page in exactly 48 hours. The conversion rate increased by 40% within the first week. Incredible speed and quality.",
      rating: 5,
    },
    {
      name: "David J.",
      role: "E-commerce Owner",
      content: "The AI automation they built for our customer service saved us 20 hours per week. ROI was immediate and the integration was seamless.",
      rating: 5,
    },
    {
      name: "Rachel K.",
      role: "Tech Startup",
      content: "Professional quality, lightning fast delivery. The team understood our vision immediately and executed flawlessly. Highly recommend for any founder who values speed.",
      rating: 5,
    },
  ];

  return (
    <>
      <SEO {...pageMetadata.home} />
      
      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32 relative overflow-hidden">
        {/* Background geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[hsl(186,64%,61%)] rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-[hsl(181,75%,40%)] rotate-45 opacity-10 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[hsl(220,91%,56%)] rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-[hsl(210,47%,21%)] rotate-12 opacity-10 animate-bounce"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-jakarta font-bold fw-text mb-6">
              Sites built in <span className="text-[hsl(186,64%,61%)] animate-pulse">48 hours</span>.<br />
              Built to <span className="text-[hsl(181,75%,40%)] animate-pulse">perform</span>.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional website development and AI automation for builders, creators, and businesses who need results fast. 
              Sprint methodology meets conversion-driven design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="fw-primary hover:bg-[hsl(181,75%,40%)] transform hover:scale-105 transition-all duration-200 shadow-lg"
                onClick={() => window.open("https://calendly.com/unfoldedproject/48-hour-refresh", "_blank")}
              >
                Book Sprint Call
              </Button>
              <Link href="/portfolio">
                <Button variant="outline" className="border-2 border-[hsl(186,64%,61%)] text-[hsl(186,64%,61%)] hover:bg-[hsl(186,64%,61%)] hover:text-white transition-all duration-200">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Summary Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text mb-4">Sprint Build Packages</h2>
            <p className="text-lg text-gray-600">Choose your speed. Choose your scale.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offerData.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>
          
          {/* Managed Hosting Card */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="text-center mb-4">
                <h3 className="text-xl font-jakarta font-bold fw-text mb-2">Managed Hosting Packages</h3>
                <p className="text-gray-600 text-sm">Premium hosting with uptime monitoring, performance optimization, and dashboard support through the FortyEightWeb infrastructure.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border text-center">
                  <h4 className="font-semibold text-gray-900 mb-1">Monthly Hosting</h4>
                  <p className="text-sm text-gray-600 mb-2">Free 7 days</p>
                  <div className="text-2xl font-bold text-[hsl(186,64%,61%)] mb-3">$30<span className="text-sm text-gray-500">/month</span></div>
                  <button 
                    onClick={() => window.open("https://buy.stripe.com/5kQ28qb7i3o41kycB900003", "_blank")}
                    className="w-full bg-[hsl(186,64%,61%)] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[hsl(181,75%,40%)] transition-colors"
                  >
                    Get Started
                  </button>
                </div>
                <div className="bg-white rounded-lg p-4 border text-center">
                  <h4 className="font-semibold text-gray-900 mb-1">Annual Hosting</h4>
                  <p className="text-sm text-gray-600 mb-2">Free 10 days</p>
                  <div className="text-2xl font-bold text-[hsl(186,64%,61%)] mb-3">$300<span className="text-sm text-gray-500">/year</span></div>
                  <button 
                    onClick={() => window.open("https://buy.stripe.com/bJeeVc3EQ2k05AOfNl00004", "_blank")}
                    className="w-full bg-[hsl(186,64%,61%)] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[hsl(181,75%,40%)] transition-colors"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Qualification Bot */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text mb-4">Find Your Perfect Package</h2>
            <p className="text-lg text-gray-600">Answer a few questions to get a personalized recommendation</p>
          </div>
          
          <LeadRouter />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text mb-4">Why Choose FortyEightWeb?</h2>
            <p className="text-lg text-gray-600">Speed, precision, and results that matter</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-[hsl(186,64%,61%)] rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-jakarta font-bold fw-text mb-2 group-hover:text-[hsl(186,64%,61%)] transition-colors duration-300">Lightning Fast</h3>
              <p className="text-gray-600">48-hour delivery standard for all sprint packages</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-[hsl(181,75%,40%)] rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-jakarta font-bold fw-text mb-2 group-hover:text-[hsl(181,75%,40%)] transition-colors duration-300">Conversion Focused</h3>
              <p className="text-gray-600">Every element designed to drive results and ROI</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-[hsl(220,91%,56%)] rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-jakarta font-bold fw-text mb-2 group-hover:text-[hsl(220,91%,56%)] transition-colors duration-300">Sprint Methodology</h3>
              <p className="text-gray-600">Agile development process with clear milestones</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-[hsl(210,47%,21%)] rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-jakarta font-bold fw-text mb-2 group-hover:text-[hsl(210,47%,21%)] transition-colors duration-300">Proven Results</h3>
              <p className="text-gray-600">Track record of increasing conversions and performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Sprint Process */}
      <SprintProcess />

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-600">Real results from real founders</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialBlock key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(186,64%,61%)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-white mb-6">
            Ready to Build Your Website in 48 Hours?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of founders who've accelerated their business with FortyEightWeb
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-[hsl(186,64%,61%)] hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-2 border-white text-gray-800 bg-white hover:bg-gray-100 hover:text-[hsl(186,64%,61%)] transition-all duration-200"
              onClick={() => window.location.href = "mailto:ops@fortyeightweb.com?subject=Sprint Call Request"}
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join hundreds of founders who've transformed their ideas into live websites in just 48 hours.
            </p>
          </div>
          
          <div className="text-center">
            <Link href="/contact">
              <AnimatedButton size="lg" className="bg-gradient-to-r from-[hsl(186,64%,61%)] to-[hsl(181,75%,40%)] hover:from-[hsl(181,75%,40%)] hover:to-[hsl(186,64%,61%)] text-white px-8 py-4 text-lg">
                Start Your Project Today
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
