import SEO from "@/components/SEO";
import { pageMetadata } from "@/utils/metadata";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, ExternalLink, Zap, Bot, Settings } from "lucide-react";
import { Link } from "wouter";
import creatorPractice from "@assets/creatorpractice_1751913364522.png";
import leadGenie from "@assets/leadgenie_1751912749875.png";

export default function Services() {
  const sprintBuilds = [
    {
      name: "Starter",
      price: "$250",
      timeline: "48 hours",
      description: "Perfect for simple landing pages and MVP validation",
      features: [
        "1 Page Website",
        "Mobile Responsive Design",
        "SEO Optimization",
        "Contact Form Integration",
        "48 Hour Delivery"
      ]
    },
    {
      name: "Standard",
      price: "$500",
      timeline: "48 hours",
      description: "Multi-page sites with enhanced functionality",
      features: [
        "Up to 3 Pages",
        "Contact Forms & CMS",
        "Analytics Integration",
        "Social Media Integration",
        "48 Hour Delivery"
      ],
      popular: true
    },
    {
      name: "Advanced",
      price: "$750+",
      timeline: "96+ hours",
      description: "Complex sites with custom features and integrations",
      features: [
        "Unlimited Pages",
        "Custom Features",
        "API Integrations",
        "Database Integration",
        "Advanced Analytics"
      ]
    }
  ];

  const aiServices = [
    {
      name: "Coach RolePlay AI",
      description: "Elite sales training simulator for sales, marketing, interview, and public speaking coaching.",
      technologies: ["Natural Language Processing", "Voice Recognition", "Performance Analytics"],
      status: "live",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Creator Practice AI",
      description: "Skill assessment and guidance platform for content creators and influencers.",
      technologies: ["AI Assessment", "Content Analysis", "Skill Tracking"],
      status: "live",
      link: "https://creatorpractice.com",
      image: creatorPractice
    },
    {
      name: "Automate FortyEight AI",
      description: "Turn any prompt request into automation sequences for n8n, Zapier, or Make.com.",
      technologies: ["Workflow Automation", "AI Processing", "Integration APIs"],
      status: "live",
      link: "https://www.fortyeightweb.com/automate-console",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Operations FortyEight",
      description: "Personal operations logic that runs business automations for the business. Can be wired into client workflows to improve organization and flow.",
      technologies: ["Business Logic", "Workflow Automation", "Process Optimization"],
      status: "live",
      image: "/operations-fortyeight.png"
    },
    {
      name: "Talent & Recruitment AI",
      description: "Analyzes candidates based on resume, application, and social links for job fit assessment.",
      technologies: ["Resume Analysis", "Social Profiling", "Job Matching"],
      status: "in-production",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "LeadGenie FortyEight AI",
      description: "Lead scraper and automation database for comprehensive lead management.",
      technologies: ["Lead Scraping", "CRM Integration", "Automation Workflows"],
      status: "coming-soon",
      image: leadGenie
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "live":
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />Live</Badge>;
      case "in-production":
        return <Badge className="bg-orange-100 text-orange-800"><Clock className="w-3 h-3 mr-1" />In Production</Badge>;
      case "coming-soon":
        return <Badge className="bg-gray-100 text-gray-800"><Clock className="w-3 h-3 mr-1" />Coming Soon</Badge>;
      default:
        return null;
    }
  };

  return (
    <>
      <SEO {...pageMetadata.services} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-jakarta font-bold fw-text mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From sprint website builds to AI automation systems, we deliver results that accelerate your business.
            </p>
          </div>
        </div>
      </section>

      {/* Sprint Site Builds */}
      <section id="sprint-builds" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-[hsl(186,64%,61%)] mr-3" />
              <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text">Sprint Site Builds</h2>
            </div>
            <p className="text-lg text-gray-600">Professional websites delivered in 48-96 hours</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {sprintBuilds.map((service, index) => (
              <Card key={index} className={`h-full ${service.popular ? 'border-[hsl(186,64%,61%)] shadow-lg transform scale-105' : 'border-gray-200'} transition-all duration-200`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="fw-primary px-4 py-2">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-jakarta font-bold fw-text">{service.name}</CardTitle>
                  <div className="text-3xl font-bold text-[hsl(186,64%,61%)] mb-2">{service.price}</div>
                  <div className="text-sm text-gray-600 mb-4">{service.timeline}</div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-[hsl(186,64%,61%)] mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full fw-primary hover:bg-[hsl(181,75%,40%)]"
                    onClick={() => {
                      if (service.name === "Starter") {
                        // Navigate to Stripe for Starter package ($250)
                        window.open(`https://buy.stripe.com/eVq9AS5MYbUAe7kcB900001`, '_blank');
                      } else if (service.name === "Standard") {
                        // Navigate to Stripe for Standard package ($500)
                        window.open(`https://buy.stripe.com/7sY9AScbm8Io4wK30z00002`, '_blank');
                      } else if (service.name === "Advanced") {
                        // Navigate to 30-minute Calendly for Advanced package
                        window.open("https://calendly.com/unfoldedproject/seanwilliams-services-auryon", "_blank");
                      }
                    }}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
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

      {/* AI Logic Builds */}
      <section id="ai-integration" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Bot className="w-8 h-8 text-[hsl(186,64%,61%)] mr-3" />
              <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text">AI Logic Builds</h2>
            </div>
            <p className="text-lg text-gray-600">Intelligent automation solutions for modern businesses</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full group">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    {getStatusBadge(service.status)}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-jakarta font-bold fw-text">{service.name}</CardTitle>
                    {service.link && (
                      <a 
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[hsl(186,64%,61%)] hover:text-[hsl(181,75%,40%)]"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm fw-text">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Systems */}
      <section id="automation-setup" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Settings className="w-8 h-8 text-[hsl(186,64%,61%)] mr-3" />
              <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text">Automation Systems</h2>
            </div>
            <p className="text-lg text-gray-600">Streamline your operations with custom automation workflows</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-jakarta font-bold fw-text mb-4">Workflow Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[hsl(186,64%,61%)] mr-3" />
                    <span>Zapier Integration & Setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[hsl(186,64%,61%)] mr-3" />
                    <span>Make.com Automation Workflows</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[hsl(186,64%,61%)] mr-3" />
                    <span>n8n Custom Automation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[hsl(186,64%,61%)] mr-3" />
                    <span>CRM Integration & Routing</span>
                  </li>
                </ul>
                <Button 
                  className="w-full fw-primary hover:bg-[hsl(181,75%,40%)]"
                  onClick={() => window.open("https://calendly.com/unfoldedproject/seanwilliams-services-auryon", "_blank")}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-jakarta font-bold fw-text mb-4">Custom Dashboards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[hsl(186,64%,61%)] mr-3" />
                    <span>Real-time Analytics Dashboards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[hsl(186,64%,61%)] mr-3" />
                    <span>KPI Monitoring & Alerts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[hsl(186,64%,61%)] mr-3" />
                    <span>Custom Reporting Tools</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[hsl(186,64%,61%)] mr-3" />
                    <span>Data Visualization</span>
                  </li>
                </ul>
                <Button 
                  className="w-full fw-primary hover:bg-[hsl(181,75%,40%)]"
                  onClick={() => window.open("https://calendly.com/unfoldedproject/seanwilliams-services-auryon", "_blank")}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(186,64%,61%)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss which services align with your goals and timeline.
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
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
