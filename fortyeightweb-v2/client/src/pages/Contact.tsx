import SEO from "@/components/SEO";
import AirtableForm from "@/components/AirtableForm";
import { pageMetadata } from "@/utils/metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Calendar, Phone, Clock } from "lucide-react";

export default function Contact() {
  const handleScheduleCall = () => {
    window.open("https://calendly.com/unfoldedproject/48-hour-refresh", "_blank");
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-[hsl(186,64%,61%)]" />,
      label: "Email",
      value: "ops@fortyeightweb.com",
      action: () => window.location.href = "mailto:ops@fortyeightweb.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-[hsl(186,64%,61%)]" />,
      label: "Location",
      value: "Cincinnati, Ohio 45150",
      action: null
    },
    {
      icon: <Clock className="w-6 h-6 text-[hsl(186,64%,61%)]" />,
      label: "Response Time",
      value: "Within 24 hours",
      action: null
    },
    {
      icon: <Phone className="w-6 h-6 text-[hsl(186,64%,61%)]" />,
      label: "Consultation",
      value: "Free 15-min call",
      action: handleScheduleCall
    }
  ];

  return (
    <>
      <SEO {...pageMetadata.contact} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-jakarta font-bold fw-text mb-6">
              Ready to Build?
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get your project started in the next 48 hours. Let's discuss your goals and create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="start-project" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <AirtableForm />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center p-4 rounded-lg border border-gray-200 ${info.action ? 'cursor-pointer hover:border-[hsl(186,64%,61%)] hover:bg-[hsl(186,64%,91%)] transition-colors' : ''}`}
                      onClick={info.action || undefined}
                    >
                      {info.icon}
                      <div className="ml-4">
                        <div className="font-medium fw-text">{info.label}</div>
                        <div className="text-gray-600">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Schedule Call Card */}
              <Card className="border-[hsl(186,64%,61%)] bg-gradient-to-br from-[hsl(186,64%,91%)] to-[hsl(181,75%,90%)]">
                <CardHeader>
                  <CardTitle className="flex items-center fw-text">
                    <Calendar className="w-5 h-5 mr-2 text-[hsl(186,64%,61%)]" />
                    Schedule a Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Book a free 15-minute consultation to discuss your project requirements and get a personalized quote.
                  </p>
                  <Button 
                    onClick={handleScheduleCall}
                    className="w-full fw-secondary hover:bg-[hsl(0,0%,22%)] transition-colors"
                  >
                    Schedule Calendly Call
                  </Button>
                </CardContent>
              </Card>
              
              {/* FAQ Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="fw-text">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold fw-text mb-1">How fast can you really deliver?</h4>
                      <p className="text-sm text-gray-600">Most projects are completed within 48 hours. Complex projects may take 96 hours depending on scope.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold fw-text mb-1">What if I need revisions?</h4>
                      <p className="text-sm text-gray-600">We include reasonable revisions in all packages. Major scope changes may require additional time.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold fw-text mb-1">Do you work with specific industries?</h4>
                      <p className="text-sm text-gray-600">We work with all industries, specializing in startups, SaaS, e-commerce, and professional services.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-4">
                  <h4 className="font-jakarta font-bold fw-text mb-2">Need it faster than 48 hours?</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    For urgent requests, contact us directly. Rush delivery may be available for an additional fee.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-orange-300 text-orange-700 hover:bg-orange-100"
                    onClick={() => window.location.href = "mailto:ops@fortyeightweb.com?subject=URGENT: Rush Project Request"}
                  >
                    Send Urgent Request
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-jakarta font-bold fw-text mb-4">Join Our Community</h3>
          <p className="text-gray-600 mb-6">
            Connect with other founders and entrepreneurs who've accelerated their growth with FortyEightWeb
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              variant="outline"
              onClick={() => window.location.href = "mailto:ops@fortyeightweb.com?subject=Join Team FortyEight Slack"}
            >
              Join Slack Community
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open("https://linkedin.com/company/fortyeightweb", "_blank")}
            >
              Follow on LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
