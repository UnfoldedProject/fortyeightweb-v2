import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialBlockProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export default function TestimonialBlock({ 
  name, 
  role, 
  content, 
  rating, 
  avatar 
}: TestimonialBlockProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className="bg-slate-50 border border-gray-200 h-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 group">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-[hsl(186,64%,61%)] rounded-full flex items-center justify-center mr-4">
            {avatar ? (
              <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
            ) : (
              <span className="text-white font-bold">{getInitials(name)}</span>
            )}
          </div>
          <div>
            <h4 className="font-jakarta font-semibold fw-text">{name}</h4>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">{content}</p>
        
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < rating ? 'fill-current' : ''}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
