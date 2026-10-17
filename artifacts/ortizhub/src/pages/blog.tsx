import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "wouter";
import { blogPosts } from "@/data/blog-posts";

const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

const categoryColors: Record<string, string> = {
  Faith: "text-amber-400 bg-amber-400/10 border-amber-400/30",
  Discipline: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  Health: "text-green-400 bg-green-400/10 border-green-400/30",
  Wealth: "text-primary bg-primary/10 border-primary/30",
  Mindset: "text-purple-400 bg-purple-400/10 border-purple-400/30",
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredPost = blogPosts.find((post) => post.featured);
  const showFeatured =
    featuredPost && (activeCategory === "All" || featuredPost.category === activeCategory);
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.id !== featuredPost?.id &&
      (activeCategory === "All" || post.category === activeCategory),
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="border-b border-border py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
              The Journal
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8">
              Words That <br />
              <span className="text-primary">Build.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Raw, honest perspectives on faith, discipline, health, and building
              a life worth passing down. No fluff. No pretending.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {showFeatured && featuredPost && (
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-6 max-w-5xl">
            <p className="text-xs text-primary font-bold uppercase tracking-widest mb-8">
              Featured Article
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Link
                href={`/blog/${featuredPost.id}`}
                className="group block relative rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden bg-secondary/30 p-10 lg:p-16"
              >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:items-center">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span
                      className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                        categoryColors[featuredPost.category] ??
                        "text-primary bg-primary/10 border-primary/30"
                      }`}
                    >
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest">
                      <Calendar size={12} />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest">
                      <Clock size={12} />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
                    {featuredPost.title}
                  </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                    {featuredPost.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-3 text-primary text-sm font-bold uppercase tracking-widest group-hover:gap-5 transition-all duration-300">
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter + Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-bold uppercase tracking-widest px-5 py-2.5 border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-black border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Link
                    href={`/blog/${post.id}`}
                    className="group block h-full border border-border hover:border-primary/50 transition-all duration-300 p-8 bg-secondary/20 hover:bg-secondary/40"
                  >
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span
                      className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                        categoryColors[post.category] ??
                        "text-primary bg-primary/10 border-primary/30"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                      Read <ArrowRight size={13} />
                    </span>
                  </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="text-muted-foreground text-lg">
                No articles in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 border-t border-border bg-secondary/20">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">
              Never Miss a Post
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Get New Articles <span className="text-primary">First</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Join the OrtizHub community and get every new article, insight,
              and resource delivered straight to your inbox.
            </p>
            <a href="/">
              <Button
                size="lg"
                className="h-14 px-10 bg-primary text-black hover:bg-primary/90 text-sm font-bold uppercase tracking-widest rounded-none"
              >
                Subscribe on the Homepage
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
