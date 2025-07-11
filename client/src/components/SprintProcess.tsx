import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Zap, Target } from "lucide-react";

const processSteps = [
  {
    number: 1,
    title: "Discovery & Planning",
    description: "Quick consultation to understand your needs and goals",
    icon: <Target className="w-8 h-8 text-white" />,
    color: "bg-[hsl(186,64%,61%)]",
    duration: "0-4 hours"
  },
  {
    number: 2,
    title: "Design & Development",
    description: "Sprint-based development with real-time progress updates",
    icon: <Zap className="w-8 h-8 text-white" />,
    color: "bg-[hsl(181,75%,40%)]",
    duration: "24-48 hours"
  },
  {
    number: 3,
    title: "Testing & Optimization",
    description: "Quality assurance and performance optimization",
    icon: <Clock className="w-8 h-8 text-white" />,
    color: "bg-[hsl(220,91%,56%)]",
    duration: "8-12 hours"
  },
  {
    number: 4,
    title: "Launch & Delivery",
    description: "Final deployment and handoff with documentation",
    icon: <CheckCircle className="w-8 h-8 text-white" />,
    color: "bg-[hsl(210,47%,21%)]",
    duration: "2-4 hours"
  }
];

export default function SprintProcess() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[hsl(186,64%,61%)] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-[hsl(181,75%,40%)] rotate-45 opacity-10 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[hsl(220,91%,56%)] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-[hsl(210,47%,21%)] rotate-12 opacity-10 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text mb-4">
            Our Sprint Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From idea to launch in 48 hours. Here's how we make it happen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card 
              key={step.number}
              className="h-full transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              onMouseEnter={() => setHoveredStep(step.number)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <CardContent className="p-6 text-center">
                {/* Animated number */}
                <div className="relative mb-6">
                  <div 
                    className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                      hoveredStep === step.number ? 'shadow-2xl scale-110' : 'shadow-lg'
                    }`}
                  >
                    <span className="text-2xl font-jakarta font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Glowing effect on hover */}
                  {hoveredStep === step.number && (
                    <div className={`absolute inset-0 w-16 h-16 ${step.color} rounded-full mx-auto opacity-30 animate-ping`}></div>
                  )}
                </div>

                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center transition-all duration-300 ${
                    hoveredStep === step.number ? 'scale-110' : ''
                  }`}>
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-jakarta font-bold fw-text mb-2 group-hover:text-[hsl(186,64%,61%)] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {step.description}
                </p>
                <div className="text-xs text-gray-500 font-medium">
                  {step.duration}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg">
            <Clock className="w-5 h-5 text-[hsl(186,64%,61%)] mr-2" />
            <span className="text-sm font-semibold text-gray-800">
              Total Timeline: 48-72 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}