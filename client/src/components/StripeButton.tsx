import { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface StripeButtonProps {
  amount: number;
  description: string;
  className?: string;
}

export default function StripeButton({ amount, description, className }: StripeButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();

  const handleOpenPayment = async () => {
    try {
      setLoading(true);
      const response = await apiRequest("POST", "/api/create-payment-intent", { amount });
      const data = await response.json();
      setClientSecret(data.clientSecret);
      setIsOpen(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to initialize payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

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
    } else {
      toast({
        title: "Payment Successful",
        description: "Thank you for your purchase! You will receive a confirmation email shortly.",
      });
      setIsOpen(false);
    }

    setLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          onClick={handleOpenPayment} 
          disabled={loading}
          className={`fw-primary hover:bg-[hsl(181,75%,40%)] transition-colors ${className}`}
        >
          {loading ? "Loading..." : `Get Started - $${amount}`}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Payment</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold">{description}</h4>
            <p className="text-2xl font-bold text-[hsl(186,64%,61%)]">${amount}</p>
          </div>
          
          {clientSecret && (
            <form onSubmit={handleSubmit}>
              <PaymentElement />
              <Button 
                type="submit" 
                disabled={!stripe || loading}
                className="w-full mt-4 fw-primary hover:bg-[hsl(181,75%,40%)]"
              >
                {loading ? "Processing..." : "Complete Payment"}
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
