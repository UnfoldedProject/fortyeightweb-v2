import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "creator-practice",
    title: "Creator Practice",
    description: "AI-powered skill assessment for content creators",
    image: "/creatorpractice_1751913364522.png",
    category: "AI Platform",
    link: "https://creatorpractice.com"
  },
  {
    id: "coach-roleplay",
    title: "Coach RolePlay AI",
    description: "Elite sales training with AI scenarios",
    image: "/coachroleplay_1751913128480.png",
    category: "Training Platform"
  },
  {
    id: "automate-fortyeight",
    title: "Automate FortyEight",
    description: "Convert prompts to automation workflows",
    image: "/automatefortyeight_1751912766610.png",
    category: "Automation Tool",
    link: "https://www.fortyeightweb.com/automate-console"
  },
  {
    id: "byondrx",
    title: "ByondRx",
    description: "Healthcare technology solutions",
    image: "/byondrx_1751912824844.png",
    category: "Healthcare",
    link: "https://www.byondrx.com/"
  },
  {
    id: "leadgenie",
    title: "LeadGenie FortyEight",
    description: "Advanced lead scraping and automation",
    image: "/leadgenie_1751912749875.png",
    category: "Lead Generation"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold fw-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real projects built with our sprint methodology. From concept to launch in 48 hours.
          </p>
        </div>

        {/* Horizontal scrolling list */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {featuredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="min-w-[300px] bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer"
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      {project.category}
                    </Badge>
                  </div>
                  {project.link && (
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-[hsl(186,64%,61%)] rounded-full flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-jakarta font-bold fw-text mb-2 group-hover:text-[hsl(186,64%,61%)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center text-[hsl(186,64%,61%)] font-semibold text-sm group-hover:text-[hsl(181,75%,40%)] transition-colors duration-300">
                    <span>Live Project</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio">
            <Button 
              variant="outline" 
              className="border-2 border-[hsl(186,64%,61%)] text-[hsl(186,64%,61%)] hover:bg-[hsl(186,64%,61%)] hover:text-white transition-all duration-300 group"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}