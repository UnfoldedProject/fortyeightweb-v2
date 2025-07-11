import SEO from "@/components/SEO";
import { pageMetadata } from "@/utils/metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Bot, BarChart, Users, MapPin, Linkedin } from "lucide-react";
import seanProfilePicture from "@assets/sean-profile-picture_1752199490805.png";

export default function About() {
  const values = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Speed",
      description: "48-hour delivery standard",
      color: "bg-[hsl(186,64%,61%)]"
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Precision",
      description: "Pixel-perfect execution",
      color: "bg-[hsl(181,75%,40%)]"
    },
    {
      icon: <Bot className="w-6 h-6 text-white" />,
      title: "Automation",
      description: "AI-powered efficiency",
      color: "bg-[hsl(220,91%,56%)]"
    },
    {
      icon: <BarChart className="w-6 h-6 text-white" />,
      title: "Results",
      description: "Conversion-driven design",
      color: "bg-[hsl(210,47%,21%)]"
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Founded",
      description: "FortyEightWeb was born from a simple frustration with slow website delivery times"
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Launched our first AI-powered automation tools and coaching systems"
    },
    {
      year: "2025",
      title: "Scale Success",
      description: "Delivered 50+ projects with 95% client satisfaction rate"
    },
    {
      year: "2025",
      title: "National Reach",
      description: "Expanded to serve clients nationwide while maintaining Cincinnati roots"
    }
  ];

  return (
    <>
      <SEO {...pageMetadata.about} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-jakarta font-bold fw-text mb-6">
              Built for Founders, By a Founder
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Learn about FortyEightWeb's mission to deliver high-quality websites in 48 hours and why we're passionate about helping entrepreneurs succeed.
            </p>
            
            {/* Interactive Logo Element */}
            <div className="flex justify-center items-center mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(186,64%,61%)] to-[hsl(181,75%,40%)] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-full p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(186,64%,61%)] to-[hsl(181,75%,40%)] rounded-full flex items-center justify-center">
                    <span className="text-white font-jakarta font-bold text-2xl">48</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              FortyEightWeb was born from a simple frustration: why does getting a professional website take weeks when you need it in days? As a founder myself, I understand the urgency of bringing ideas to market quickly.
            </p>
            <p>
              Our sprint methodology combines the speed of modern development with the precision of conversion-focused design. We don't just build websites—we create digital engines that drive your business forward.
            </p>
            <p>
              Based in Cincinnati, Ohio, we serve founders and businesses nationwide who value speed, precision, and results. Our AI-powered tools and automation systems aren't just projects—they're solutions we use daily to deliver impossibly fast results.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide every project we deliver</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4 hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-jakarta font-bold fw-text mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text mb-4">Meet the Team</h2>
            <p className="text-lg text-gray-600">Entrepreneurs building for entrepreneurs</p>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-8">
              Our distributed team of developers, designers, and AI specialists share a common mission: 
              to accelerate business growth through speed, precision, and innovation. Every team member 
              understands the entrepreneur's journey because we've walked it ourselves.
            </p>
            
            {/* Centered Profile Picture */}
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl ring-4 ring-[hsl(186,64%,61%)] hover:ring-[hsl(181,75%,40%)] transition-all duration-300">
                <img 
                  src={seanProfilePicture} 
                  alt="Sean Williams - Founder of FortyEightWeb"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-jakarta font-bold fw-text mb-4">Meet the Founder</h3>
            
            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <div className="text-center">
                <h4 className="text-lg font-jakarta font-bold fw-text mb-3">Sean Williams</h4>
                <p className="text-gray-600 mb-4">
                  Sean Williams, founder of FortyEightWeb, brings years of experience in web development, 
                  AI automation, and business growth. As an entrepreneur himself, Sean understands the 
                  challenges of launching and scaling a business in today's digital landscape.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                    <a 
                      href="https://www.linkedin.com/in/sean-williams-912702185"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[hsl(186,64%,61%)] hover:text-[hsl(181,75%,40%)] transition-colors"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                    <a 
                      href="https://calendly.com/unfoldedproject/seanwilliams-services-auryon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[hsl(186,64%,61%)] hover:text-[hsl(181,75%,40%)] transition-colors"
                    >
                      Schedule 30-Min Consultation
                    </a>
                    <a 
                      href="https://calendly.com/unfoldedproject/48-hour-refresh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[hsl(186,64%,61%)] hover:text-[hsl(181,75%,40%)] transition-colors"
                    >
                      Quick 15-Min Sprint Call
                    </a>
                  </div>
                </div>
              </div>
            <div className="flex items-center justify-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Based in Cincinnati, Ohio • Serving Nationwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in our growth story</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[hsl(186,64%,61%)] rounded-full"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <Card className={`w-full max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'} hover:shadow-lg hover:bg-[hsl(186,64%,95%)] transition-all duration-300 transform hover:scale-105 group`}>
                    <CardContent className="p-6">
                      <div className="text-2xl font-jakarta font-bold text-[hsl(186,64%,61%)] mb-2 group-hover:text-[hsl(181,75%,40%)] transition-colors duration-300">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-jakarta font-bold fw-text mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[hsl(186,64%,61%)] rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-[hsl(186,64%,61%)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8">
            To empower entrepreneurs and businesses with lightning-fast web development and AI automation solutions that accelerate growth and maximize ROI.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-jakarta font-bold text-white mb-4">Join Team FortyEight</h3>
            <p className="text-white/90 mb-6">
              Connect with like-minded founders and entrepreneurs in our Slack community. Share insights, get advice, and collaborate on projects.
            </p>
            <Button 
              className="bg-white text-[hsl(186,64%,61%)] hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              onClick={() => window.location.href = "mailto:ops@fortyeightweb.com?subject=Join Team FortyEight Slack"}
            >
              Join Our Slack Community
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
