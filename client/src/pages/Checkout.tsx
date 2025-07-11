import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import SEO from "@/components/SEO";

// Load Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || '');

interface CheckoutFormProps {
  packageName: string;
  amount: number;
}

const CheckoutForm = ({ packageName, amount }: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/thank-you`,
        },
      });

      if (error) {
        toast({
          title: "Payment Failed",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Payment Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-jakarta font-bold fw-text text-center">
          {packageName} Package
        </CardTitle>
        <div className="text-center">
          <span className="text-3xl font-bold text-[hsl(186,64%,61%)]">
            ${amount}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <PaymentElement />
          <Button
            type="submit"
            disabled={!stripe || isProcessing}
            className="w-full fw-primary hover:bg-[hsl(181,75%,40%)]"
          >
            {isProcessing ? 'Processing...' : `Pay $${amount}`}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default function Checkout() {
  const [, setLocation] = useLocation();
  const [clientSecret, setClientSecret] = useState("");
  const [packageName, setPackageName] = useState("");
  const [amount, setAmount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const urlParams = new URLSearchParams(window.location.search);
    const pkg = urlParams.get('package');
    const amt = urlParams.get('amount');

    if (!pkg || !amt) {
      toast({
        title: "Invalid Request",
        description: "Missing package or amount information.",
        variant: "destructive",
      });
      setLocation('/services');
      return;
    }

    const packageAmount = parseInt(amt);
    setPackageName(pkg.charAt(0).toUpperCase() + pkg.slice(1));
    setAmount(packageAmount);

    // Create payment intent
    apiRequest("POST", "/api/create-payment-intent", { 
      amount: packageAmount,
      package: pkg 
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          throw new Error('No client secret returned');
        }
      })
      .catch((error) => {
        console.error('Payment intent creation failed:', error);
        toast({
          title: "Payment Setup Failed",
          description: "Unable to initialize payment. Please try again.",
          variant: "destructive",
        });
        setLocation('/services');
      });
  }, [toast, setLocation]);

  if (!clientSecret) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-4 border-[hsl(186,64%,61%)] border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Setting up your payment...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Checkout - FortyEightWeb"
        description="Complete your FortyEightWeb sprint build package purchase"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-jakarta font-bold fw-text mb-4">
              Complete Your Purchase
            </h1>
            <p className="text-lg text-gray-600">
              Secure checkout powered by Stripe
            </p>
          </div>

          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm packageName={packageName} amount={amount} />
          </Elements>
        </div>
      </div>
    </>
  );
}