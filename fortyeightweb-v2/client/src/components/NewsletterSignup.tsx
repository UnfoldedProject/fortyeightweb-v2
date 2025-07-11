import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { submitToAirtable } from "@/utils/airtable";
import { Mail, Send, CheckCircle } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simple data structure that should work with any Airtable setup
      const newsletterData = {
        "Email": email,
        "Source": "Newsletter Signup",
        "Status": "Subscribed",
        "Type": "Newsletter"
      };
      
      console.log('Attempting newsletter signup with data:', newsletterData);
      
      const result = await submitToAirtable(newsletterData, "Newsletter Sign Ups");
      
      console.log('Newsletter signup successful:', result);
      
      setIsSubmitted(true);
      setEmail("");
      
      toast({
        title: "Welcome to FortyEightWeb!",
        description: "You've successfully subscribed to our newsletter",
      });
    } catch (error) {
      console.error('Newsletter signup error:', error);
      
      // More detailed error message
      let errorMessage = "Please try again or contact us directly";
      if (error instanceof Error) {
        console.error('Full error details:', error.message);
        if (error.message.includes('Base ID not configured')) {
          errorMessage = "Newsletter system not configured. Please contact support.";
        } else if (error.message.includes('API Key not configured')) {
          errorMessage = "Newsletter system not configured. Please contact support.";
        } else if (error.message.includes('422')) {
          errorMessage = "Data format issue. Please contact support.";
        } else if (error.message.includes('404')) {
          errorMessage = "Newsletter table not found. Please contact support.";
        } else if (error.message.includes('INVALID_VALUE_FOR_COLUMN')) {
          errorMessage = "Field configuration issue. Please contact support.";
        }
      }
      
      toast({
        title: "Subscription Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="bg-gradient-to-br from-[hsl(186,64%,61%)] to-[hsl(181,75%,40%)] border-none shadow-lg">
        <CardContent className="p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-[hsl(186,64%,61%)]" />
            </div>
          </div>
          <h3 className="text-xl font-jakarta font-bold text-white mb-2">
            You're In!
          </h3>
          <p className="text-white/90 text-sm">
            Welcome to the FortyEightWeb newsletter. Get ready for weekly tips, 
            sprint builds inspiration, and exclusive automation insights.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[hsl(186,64%,61%)] to-[hsl(181,75%,40%)] rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-jakarta font-bold fw-text">
              Sprint Builder Newsletter
            </h3>
            <p className="text-gray-600 text-sm">
              Weekly tips for fast-moving founders
            </p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              disabled={isSubmitting}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[hsl(186,64%,61%)] to-[hsl(181,75%,40%)] hover:from-[hsl(181,75%,40%)] hover:to-[hsl(186,64%,61%)] text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                Subscribing...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Subscribe Free
              </>
            )}
          </Button>
        </form>
        
        <p className="text-xs text-gray-500 mt-3 text-center">
          No spam, unsubscribe anytime. We respect your inbox.
        </p>
      </CardContent>
    </Card>
  );
}