import { useState } from "react";
import SEO from "@/components/SEO";
import BlogCard from "@/components/blog/BlogCard";
import FadeInSection from "@/components/FadeInSection";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);


  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  // Filter posts based on search and tags
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);



  return (
    <>
      <SEO 
        title="Blog - FortyEightWeb | Web Development Insights & Tips"
        description="Discover expert insights on web development, AI automation, and digital marketing. Learn from our experience building hundreds of websites."
        keywords="web development blog, startup advice, automation tips, digital marketing"
      />
      
      {/* Hero Section */}
      <FadeInSection>
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-jakarta font-bold fw-text mb-6">
                Expert Insights & Tips
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Discover proven strategies for web development, business automation, and digital growth 
                from our team of experts who've built hundreds of successful websites.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 text-lg"
                />
              </div>
              
              {/* Tag Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <Badge 
                  variant={selectedTag === null ? "default" : "secondary"}
                  className="cursor-pointer"
                  onClick={() => setSelectedTag(null)}
                >
                  All Topics
                </Badge>
                {allTags.map(tag => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? "default" : "secondary"}
                    className="cursor-pointer"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Featured Post */}
      {featuredPost && !selectedTag && !searchTerm && (
        <FadeInSection>
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-jakarta font-bold fw-text mb-8 text-center">
                Featured Article
              </h2>
              <div className="max-w-4xl mx-auto">
                <BlogCard post={featuredPost} featured={true} />
              </div>
            </div>
          </section>
        </FadeInSection>
      )}

      {/* All Posts */}
      <FadeInSection>
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-jakarta font-bold fw-text mb-8 text-center">
              {selectedTag ? `Articles about ${selectedTag}` : 'Latest Articles'}
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No articles found matching your search criteria.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </FadeInSection>

      {/* Contact CTA */}
      <FadeInSection>
        <section className="py-16 bg-gradient-to-r from-[hsl(186,64%,61%)] to-[hsl(181,75%,45%)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-jakarta font-bold text-white mb-4">
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get your professional website built in 48 hours with our sprint development process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button 
                className="bg-white text-[hsl(186,64%,61%)] px-6 py-3 font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => window.open("https://calendly.com/unfoldedproject/48-hour-refresh", "_blank")}
              >
                Schedule Free Consultation
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[hsl(186,64%,61%)] transition-all duration-200"
                onClick={() => window.location.href = "/contact"}
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}