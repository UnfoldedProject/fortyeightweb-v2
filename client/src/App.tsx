import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ThankYou from "@/pages/ThankYou";
import Checkout from "@/pages/Checkout";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import TermsOfService from "@/pages/TermsOfService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CookiePolicy from "@/pages/CookiePolicy";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOAnalytics from "@/components/SEOAnalytics";

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || "");

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEOAnalytics />
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={() => { window.scrollTo(0, 0); return <Services />; }} />
          <Route path="/portfolio" component={() => { window.scrollTo(0, 0); return <Portfolio />; }} />
          <Route path="/about" component={() => { window.scrollTo(0, 0); return <About />; }} />
          <Route path="/contact" component={() => { window.scrollTo(0, 0); return <Contact />; }} />
          <Route path="/thank-you" component={() => { window.scrollTo(0, 0); return <ThankYou />; }} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/blog" component={() => { window.scrollTo(0, 0); return <Blog />; }} />
          <Route path="/blog/:slug" component={() => { window.scrollTo(0, 0); return <BlogPost />; }} />
          <Route path="/terms-of-service" component={() => { window.scrollTo(0, 0); return <TermsOfService />; }} />
          <Route path="/privacy-policy" component={() => { window.scrollTo(0, 0); return <PrivacyPolicy />; }} />
          <Route path="/cookie-policy" component={() => { window.scrollTo(0, 0); return <CookiePolicy />; }} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Elements stripe={stripePromise}>
          <Router />
          <Toaster />
        </Elements>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
