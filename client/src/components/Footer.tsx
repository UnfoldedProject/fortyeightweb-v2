import { Link } from "wouter";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-jakarta font-bold">FortyEightWeb</h3>
            <p className="text-gray-300 text-sm">
              Professional website development and AI automation services for founders who need results fast.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/fortyeight-web" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/UnfoldedProject" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/FortyEightWeb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-jakarta font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}>Home</div>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}>Services</div>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}>Portfolio</div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}>About</div>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}>Blog</div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}>Contact</div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-jakarta font-bold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={() => {
                    setTimeout(() => {
                      const sprintSection = document.getElementById('sprint-builds');
                      if (sprintSection) {
                        sprintSection.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.scrollTo(0, 0);
                      }
                    }, 100);
                  }}>
                    Sprint Website Builds
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={() => {
                    setTimeout(() => {
                      const aiSection = document.getElementById('ai-integration');
                      if (aiSection) {
                        aiSection.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.scrollTo(0, 0);
                      }
                    }, 100);
                  }}>
                    AI Integration
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={() => {
                    setTimeout(() => {
                      const automationSection = document.getElementById('automation-setup');
                      if (automationSection) {
                        automationSection.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.scrollTo(0, 0);
                      }
                    }, 100);
                  }}>
                    Automation Setup
                  </div>
                </Link>
              </li>
              <li>
                <a 
                  href="https://buy.stripe.com/5kQ28qb7i3o41kycB900003" 
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website Hosting ($30/month)
                </a>
              </li>
              <li>
                <a 
                  href="https://join.slack.com/t/fortyeightweb/shared_invite/zt-2wvxz1234-example" 
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Our Slack Community
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-jakarta font-bold">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <a 
                  href="mailto:ops@fortyeightweb.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  ops@fortyeightweb.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <a 
                  href="tel:+1-513-394-6674" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +1 (513) 394-6674
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">Cincinnati, OH</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} FortyEightWeb. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy">
              <div className="inline hover:text-white transition-colors cursor-pointer">Privacy Policy</div>
            </Link>
            <Link href="/terms-of-service">
              <div className="inline hover:text-white transition-colors cursor-pointer">Terms of Service</div>
            </Link>
            <Link href="/cookie-policy">
              <div className="inline hover:text-white transition-colors cursor-pointer">Cookie Policy</div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}