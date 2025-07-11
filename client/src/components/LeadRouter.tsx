import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ArrowRight } from "lucide-react";
import { submitToAirtable } from "@/utils/airtable";
import { useToast } from "@/hooks/use-toast";

interface QualificationStep {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
    description: string;
  }[];
}

const qualificationSteps: QualificationStep[] = [
  {
    id: "purpose",
    question: "What's the primary purpose of your site?",
    options: [
      { value: "business", label: "Business Landing", description: "Showcase services" },
      { value: "ecommerce", label: "E-commerce", description: "Sell products" },
      { value: "portfolio", label: "Portfolio", description: "Show work" },
      { value: "other", label: "Other", description: "Custom needs" }
    ]
  },
  {
    id: "pages",
    question: "How many pages do you need?",
    options: [
      { value: "1", label: "1 Page", description: "Landing page" },
      { value: "2-3", label: "2-3 Pages", description: "Small site" },
      { value: "4+", label: "4+ Pages", description: "Full site" }
    ]
  },
  {
    id: "ai",
    question: "Do you need AI integration?",
    options: [
      { value: "yes", label: "Yes", description: "Custom AI features" },
      { value: "no", label: "No", description: "Standard website" }
    ]
  },
  {
    id: "timeline",
    question: "What's your timeline?",
    options: [
      { value: "48h", label: "48 Hours", description: "ASAP delivery" },
      { value: "week", label: "1 Week", description: "Standard timeline" },
      { value: "month", label: "1 Month", description: "Flexible timeline" }
    ]
  },
  {
    id: "budget",
    question: "What's your budget range?",
    options: [
      { value: "250", label: "$250", description: "Starter package" },
      { value: "500", label: "$500", description: "Standard package" },
      { value: "750+", label: "$750+", description: "Advanced package" }
    ]
  }
];

export default function LeadRouter() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleAnswer = (stepId: string, value: string) => {
    const newAnswers = { ...answers, [stepId]: value };
    setAnswers(newAnswers);

    if (currentStep < qualificationSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRecommendation(newAnswers);
    }
  };

  const generateRecommendation = (allAnswers: Record<string, string>) => {
    const pages = allAnswers.pages;
    const ai = allAnswers.ai;
    const budget = allAnswers.budget;

    let recommended = "Standard";
    
    if (pages === "1" && ai === "no" && budget === "250") {
      recommended = "Starter";
    } else if (pages === "4+" || ai === "yes" || budget === "750+") {
      recommended = "Advanced";
    }

    setRecommendation(recommended);
  };

  const handleSubmitLead = async () => {
    try {
      setLoading(true);
      
      const leadData = {
        ...answers,
        recommendation,
        timestamp: new Date().toISOString(),
        source: "lead_router"
      };

      await submitToAirtable(leadData, "leads");
      
      toast({
        title: "Lead Submitted",
        description: "Thank you! We'll contact you shortly with your personalized recommendation.",
      });
      
      // Reset form
      setCurrentStep(0);
      setAnswers({});
      setRecommendation(null);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit lead. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const currentStepData = qualificationSteps[currentStep];

  if (recommendation) {
    return (
      <Card className="bg-gradient-to-br from-[hsl(186,64%,91%)] to-[hsl(181,75%,90%)] border-[hsl(186,64%,61%)]/20">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-[hsl(186,64%,61%)] rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-jakarta font-bold fw-text">Perfect Match Found!</h3>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-white border border-[hsl(186,64%,61%)]/20 rounded-lg p-4">
            <h4 className="font-jakarta font-semibold fw-text mb-2">
              Recommended Package: {recommendation}
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              {recommendation === "Starter" && "Perfect for simple landing pages with 48-hour delivery."}
              {recommendation === "Standard" && "Ideal for multi-page sites with functionality and 48-hour delivery."}
              {recommendation === "Advanced" && "Best for complex sites with custom features and AI integration."}
            </p>
            <div className="text-2xl font-bold text-[hsl(186,64%,61%)]">
              {recommendation === "Starter" && "$250"}
              {recommendation === "Standard" && "$500"}
              {recommendation === "Advanced" && "$750+"}
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button 
              onClick={handleSubmitLead}
              disabled={loading}
              className="flex-1 fw-primary hover:bg-[hsl(181,75%,40%)] transition-colors"
            >
              {loading ? "Submitting..." : `Get ${recommendation} Package`}
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-[hsl(186,64%,61%)] text-[hsl(186,64%,61%)] hover:bg-[hsl(186,64%,61%)] hover:text-white transition-colors"
              onClick={() => window.location.href = "mailto:ops@fortyeightweb.com?subject=Sprint Call Request"}
            >
              Schedule Call
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-[hsl(186,64%,91%)] to-[hsl(181,75%,90%)] border-[hsl(186,64%,61%)]/20">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-[hsl(186,64%,61%)] rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-jakarta font-bold fw-text">Let's Find Your Perfect Package!</h3>
        <p className="text-gray-600">Question {currentStep + 1} of {qualificationSteps.length}</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
          <div 
            className="bg-[hsl(186,64%,61%)] h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / qualificationSteps.length) * 100}%` }}
          />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-lg font-jakarta font-semibold fw-text mb-4">
            {currentStepData.question}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentStepData.options.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                className="p-4 h-auto text-left border-gray-300 hover:border-[hsl(186,64%,61%)] hover:bg-[hsl(186,64%,91%)] transition-colors"
                onClick={() => handleAnswer(currentStepData.id, option.value)}
              >
                <div>
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm text-gray-500">{option.description}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>
        
        {currentStep > 0 && (
          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <Button
              variant="ghost"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="text-gray-600"
            >
              ← Previous
            </Button>
            <span className="text-sm text-gray-500">
              {Object.keys(answers).length} answers collected
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
