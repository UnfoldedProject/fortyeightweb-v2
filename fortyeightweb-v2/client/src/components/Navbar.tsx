import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import fortyeightLight from "@assets/fortyeightlight_1751912560548.png";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const handleBookCall = () => {
    window.open("https://calendly.com/unfoldedproject/48-hour-refresh", "_blank");
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer" onClick={() => {
                if (window.location.pathname === '/') {
                  const heroSection = document.getElementById('hero');
                  if (heroSection) {
                    heroSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}>
                <img src={fortyeightLight} alt="FortyEightWeb Logo" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-jakarta font-bold fw-text">FortyEightWeb</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <div className={`fw-text hover:text-[hsl(186,64%,61%)] transition-colors cursor-pointer ${
                  location === item.href ? "text-[hsl(186,64%,61%)]" : ""
                }`} onClick={() => {
                  setTimeout(() => window.scrollTo(0, 0), 100);
                }}>
                  {item.name}
                </div>
              </Link>
            ))}
            <Button onClick={handleBookCall} className="fw-primary hover:bg-[hsl(181,75%,40%)] transition-colors">
              Book Sprint Call
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <div 
                        className={`block py-2 fw-text hover:text-[hsl(186,64%,61%)] transition-colors cursor-pointer ${
                          location === item.href ? "text-[hsl(186,64%,61%)]" : ""
                        }`}
                        onClick={() => {
                          setIsOpen(false);
                          setTimeout(() => window.scrollTo(0, 0), 100);
                        }}
                      >
                        {item.name}
                      </div>
                    </Link>
                  ))}
                  <Button onClick={handleBookCall} className="fw-primary hover:bg-[hsl(181,75%,40%)] mt-4">
                    Book Sprint Call
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
