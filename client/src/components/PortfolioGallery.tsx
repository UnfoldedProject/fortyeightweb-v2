import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock, CheckCircle } from "lucide-react";
import creatorPractice from "@assets/creatorpractice_1751913364522.png";
import leadGenie from "@assets/leadgenie_1751912749875.png";
import coachRolePlay from "@assets/coachroleplay_1751913128480.png";
import automateFortyEight from "@assets/automatefortyeight_1751912766610.png";
import byondRx from "@assets/byondrx_1751912824844.png";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  status: "live" | "in-production" | "coming-soon";
  technologies: string[];
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "creator-practice",
    title: "Creator Practice",
    description: "Skill assessment platform helping content creators improve their craft with AI-powered feedback and guidance.",
    image: creatorPractice,
    status: "live",
    technologies: ["React", "AI", "Analytics"],
    link: "https://creatorpractice.com"
  },
  {
    id: "coach-roleplay",
    title: "Coach RolePlay AI",
    description: "Elite sales training simulator with AI-powered coaching scenarios for sales, marketing, and public speaking.",
    image: coachRolePlay,
    status: "live",
    technologies: ["AI", "Voice", "Training"],
  },
  {
    id: "automate-fortyeight",
    title: "Automate FortyEight",
    description: "Turn prompts into automation workflows for popular platforms like n8n, Zapier, and Make.com.",
    image: automateFortyEight,
    status: "live",
    technologies: ["Automation", "AI", "Workflows"],
    link: "https://www.fortyeightweb.com/automate-console"
  },
  {
    id: "byondrx",
    title: "ByondRx",
    description: "Healthcare technology solutions with pharmaceutical automation and patient management systems.",
    image: byondRx,
    status: "live",
    technologies: ["Healthcare", "Automation", "Database"],
    link: "https://www.byondrx.com/"
  },
  {
    id: "talent-recruitment",
    title: "Talent Recruitment AI",
    description: "AI-powered candidate analysis and job matching system that analyzes resumes and social profiles.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    status: "in-production",
    technologies: ["AI", "Analytics", "Matching"],
  },
  {
    id: "leadgenie",
    title: "LeadGenie FortyEight",
    description: "Advanced lead scraping and automation database for sales teams with intelligent qualification.",
    image: leadGenie,
    status: "coming-soon",
    technologies: ["Lead Gen", "Automation", "CRM"],
  }
];

export default function PortfolioGallery() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "live":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200"><CheckCircle className="w-3 h-3 mr-1" />Live</Badge>;
      case "in-production":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200"><Clock className="w-3 h-3 mr-1" />In Production</Badge>;
      case "coming-soon":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200"><Clock className="w-3 h-3 mr-1" />Coming Soon</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioItems.map((item) => (
        <Card key={item.id} className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full group cursor-pointer"
              onClick={() => item.link && window.open(item.link, '_blank')}>
          <div className="relative">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute top-3 right-3">
              {getStatusBadge(item.status)}
            </div>
          </div>
          
          <CardHeader>
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-jakarta font-bold fw-text">{item.title}</h3>
              {item.link && (
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(186,64%,61%)] hover:text-[hsl(181,75%,40%)] transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </CardHeader>
          
          <CardContent>
            <p className="text-gray-600 mb-4">{item.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center text-[hsl(186,64%,61%)] font-semibold group-hover:text-[hsl(181,75%,40%)] transition-colors duration-300">
                <span>
                  {item.status === "live" && "Live Project"}
                  {item.status === "in-production" && "In Development"}
                  {item.status === "coming-soon" && "Coming Soon"}
                </span>
                {item.link && <ExternalLink className="w-4 h-4 ml-2" />}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
