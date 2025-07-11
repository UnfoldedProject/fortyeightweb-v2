import { useEffect, useState } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { pageMetadata } from "@/utils/metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Mail, Calendar, ArrowRight } from "lucide-react";

export default function ThankYou() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const nextSteps = [
    {
      icon: <Mail className="w-6 h-6 text-[hsl(186,64%,61%)]" />,
      title: "Confirmation Email",
      description: "You'll receive a confirmation email within 15 minutes with project details.",
      timeline: "Within 15 minutes"
    },
    {
      icon: <Calendar className="w-6 h-6 text-[hsl(186,64%,61%)]" />,
      title: "Project Kickoff",
      description: "Our team will contact you within 24 hours to start your project.",
      timeline: "Within 24 hours"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[hsl(186,64%,61%)]" />,
      title: "Project Delivery",
      description: "Your completed project will be delivered according to your package timeline.",
      timeline: "48-96 hours"
    }
  ];

  const quickActions = [
    {
      title: "Schedule a Call",
      description: "Want to discuss your project in detail?",
      action: () => window.open("https://calendly.com/fortyeightweb", "_blank"),
      buttonText: "Book Call"
    },
    {
      title: "Join Our Community",
      description: "Connect with other entrepreneurs",
      action: () => window.location.href = "mailto:ops@fortyeightweb.com?subject=Join Team FortyEight Slack",
      buttonText: "Join Slack"
    },
    {
      title: "Refer a Friend",
      description: "Know someone who needs a website?",
      action: () => window.location.href = "mailto:ops@fortyeightweb.com?subject=Referral from Thank You Page",
      buttonText: "Send Referral"
    }
  ];

  return (
    <>
      <SEO {...pageMetadata.thankYou} />
      
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(186,64%,61%)]/10 to-transparent animate-pulse"></div>
        </div>
      )}
      
      {/* Success Hero */}
      <section className="bg-gradient-to-br from-green-50 to-[hsl(186,64%,91%)] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-jakarta font-bold fw-text mb-6">
            Thank You!
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Your submission has been received successfully. We're excited to help bring your project to life in the next 48 hours!
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(186,64%,61%)]/20">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-5 h-5 text-[hsl(186,64%,61%)] mr-2" />
              <span className="font-semibold fw-text">Expected Response Time</span>
            </div>
            <div className="text-2xl font-jakarta font-bold text-[hsl(186,64%,61%)]">
              Within 24 Hours
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text mb-4">What Happens Next?</h2>
            <p className="text-lg text-gray-600">Here's what you can expect from the FortyEightWeb team</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {nextSteps.map((step, index) => (
              <Card key={index} className="text-center border border-gray-200 hover:border-[hsl(186,64%,61%)] transition-colors">
                <CardHeader>
                  <div className="w-16 h-16 bg-[hsl(186,64%,91%)] rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl font-jakarta font-bold fw-text">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="inline-block bg-[hsl(186,64%,61%)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {step.timeline}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text mb-4">While You Wait</h2>
            <p className="text-lg text-gray-600">Take advantage of these additional resources</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-jakarta font-bold fw-text">{action.title}</CardTitle>
                  <p className="text-gray-600">{action.description}</p>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={action.action}
                    className="fw-primary hover:bg-[hsl(181,75%,40%)] transition-colors"
                  >
                    {action.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-jakarta font-bold fw-text mb-6">
            See What We've Built for Others
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            While you wait, explore our portfolio of successful projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio">
              <Button className="fw-primary hover:bg-[hsl(181,75%,40%)] transition-colors">
                View Portfolio
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-[hsl(186,64%,61%)] text-[hsl(186,64%,61%)] hover:bg-[hsl(186,64%,61%)] hover:text-white">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-[hsl(186,64%,61%)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-jakarta font-bold text-white mb-4">
            Need to Reach Us Immediately?
          </h3>
          <p className="text-white/90 mb-6">
            For urgent questions or changes to your project, contact us directly
          </p>
          <Button 
            className="bg-white text-[hsl(186,64%,61%)] hover:bg-gray-100 transition-colors"
            onClick={() => window.location.href = "mailto:ops@fortyeightweb.com?subject=URGENT: Thank You Page Contact"}
          >
            Send Urgent Message
          </Button>
        </div>
      </section>
    </>
  );
}
