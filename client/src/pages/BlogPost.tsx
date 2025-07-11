import { useRoute } from "wouter";
import { blogPosts } from "@/data/blogPosts";
import SEO from "@/components/SEO";
import FadeInSection from "@/components/FadeInSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = blogPosts.find(p => p.slug === params?.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = `${window.location.origin}/blog/${post.slug}`;
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: shareUrl
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      // Could add toast notification here
    }
  };

  return (
    <>
      <SEO 
        title={`${post.title} - FortyEightWeb Blog`}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
      />
      
      <article className="min-h-screen bg-white">
        {/* Header */}
        <FadeInSection>
          <header className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link href="/blog">
                <Button variant="ghost" className="mb-8">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-jakarta font-bold fw-text mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button onClick={handleShare} variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </header>
        </FadeInSection>

        {/* Content */}
        <FadeInSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="prose prose-lg max-w-none">
              <div className="text-xl text-gray-700 mb-8 font-medium">
                {post.excerpt}
              </div>
              
              <div 
                className="prose-headings:font-jakarta prose-headings:fw-text prose-a:text-[hsl(186,64%,61%)] prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
              />
            </div>
          </div>
        </FadeInSection>

        {/* CTA Section */}
        <FadeInSection>
          <section className="bg-gradient-to-r from-[hsl(186,64%,61%)] to-[hsl(181,75%,45%)] py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-jakarta font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how we can help you implement these strategies and build a high-converting website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-[hsl(186,64%,61%)] hover:bg-gray-100">
                    Get Started Today
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[hsl(186,64%,61%)] transition-all duration-200"
                  onClick={() => window.open("https://calendly.com/unfoldedproject/48-hour-refresh", "_blank")}
                >
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Related Posts */}
        <FadeInSection>
          <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-jakarta font-bold fw-text mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts
                  .filter(p => p.id !== post.id)
                  .slice(0, 3)
                  .map((relatedPost) => (
                    <motion.div
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <div className="p-6">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {relatedPost.tags.slice(0, 2).map(tag => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <h3 className="text-lg font-jakarta font-bold fw-text mb-2 line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            {relatedPost.readTime}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                }
              </div>
            </div>
          </section>
        </FadeInSection>
      </article>
    </>
  );
}