import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Feature {
  name: string;
  included: boolean;
}

interface OfferCardProps {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  isPopular?: boolean;
  buttonText: string;
  buttonAction: () => void;
}

export default function OfferCard({
  title,
  price,
  description,
  features,
  isPopular = false,
  buttonText,
  buttonAction
}: OfferCardProps) {
  return (
    <Card className={`relative h-full ${isPopular ? 'border-[hsl(186,64%,61%)] shadow-lg transform scale-105' : 'border-gray-200 hover:border-[hsl(186,64%,61%)] hover:shadow-lg'} transition-all duration-200`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="fw-primary px-4 py-2 text-sm font-semibold">
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center">
        <h3 className="text-2xl font-jakarta font-bold fw-text">{title}</h3>
        <div className="text-4xl font-bold text-[hsl(186,64%,61%)] mb-4">{price}</div>
        <p className="text-gray-600">{description}</p>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-5 h-5 text-[hsl(186,64%,61%)] mr-3" />
              <span className={feature.included ? "text-gray-900" : "text-gray-400 line-through"}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={buttonAction} 
          className={`w-full ${isPopular ? 'fw-primary hover:bg-[hsl(181,75%,40%)]' : 'fw-secondary hover:bg-[hsl(0,0%,22%)]'} transition-colors`}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
