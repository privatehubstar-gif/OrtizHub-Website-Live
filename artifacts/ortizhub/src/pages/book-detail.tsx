import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "wouter";
import { ArrowLeft, ShoppingCart, CheckCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { books, BUNDLE_LINK } from "@/data/books";
import { useState, useEffect, useRef } from "react";
import { ShareButtons } from "@/components/share-buttons";
import { AUTHOR_BIO } from "@/data/site";

export default function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const book = books.find((b) => b.id === id);
  const otherBooks = books.filter((b) => b.id !== id);
  const heroRef = useRef<HTMLDivElement>(null);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowFloating(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [book]);

  if (!book) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
        <h1 className="text-4xl font-bold text-white mb-4">Book not found</h1>
        <p className="text-muted-foreground mb-8">
          This book doesn't exist or the link may be broken.
        </p>
        <Link href="/books">
          <Button className="bg-primary text-black hover:bg-primary/90 rounded-none uppercase tracking-widest font-bold">
            Back to All Books
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Floating Buy Bar */}
      <AnimatePresence>
        {showFloating && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-2xl"
          >
            <div className="container mx-auto px-6 max-w-6xl py-4 flex items-center justify-between gap-4">
              {/* Book info */}
              <div className="flex items-center gap-4 min-w-0">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-10 h-14 object-cover rounded flex-shrink-0 border border-border"
                />
                <div className="min-w-0">
                  <p className="text-white font-bold text-sm truncate">{book.title}</p>
                  <p className="text-primary text-xs uppercase tracking-widest font-semibold">
                    By Ortiz Imana Jnr
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <a href={BUNDLE_LINK} target="_blank" rel="noopener noreferrer" className="hidden sm:block">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-10 px-5 border-primary text-primary hover:bg-primary hover:text-black text-xs font-bold uppercase tracking-widest rounded-none transition-all gap-2"
                  >
                    <BookOpen size={14} />
                    Bundle — $34.99
                  </Button>
                </a>
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="h-10 px-6 bg-white text-black hover:bg-white/90 text-xs font-bold uppercase tracking-widest rounded-none gap-2"
                  >
                    <ShoppingCart size={14} />
                    Get it on Gumroad
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back Link */}
      <div className="container mx-auto px-6 pt-10 max-w-6xl">
        <Link href="/books">
          <button className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-widest font-semibold group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            All Books
          </button>
        </Link>
      </div>

      {/* Hero — Cover + Core Info */}
      <section ref={heroRef} className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            {/* Cover */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-[360px] flex-shrink-0"
            >
              <div className="w-full aspect-[3/4] rounded-xl overflow-hidden border border-border shadow-2xl">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex-1 space-y-8"
            >
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                  {book.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
                  {book.title}
                </h1>
                <p className="text-xl text-muted-foreground italic leading-relaxed">
                  "{book.tagline}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground uppercase tracking-widest">
                  By
                </span>
                <span className="text-sm font-semibold text-white uppercase tracking-widest">
                  Ortiz Imana Jnr
                </span>
              </div>

              {/* Category tags */}
              <div className="flex flex-wrap gap-2">
                {book.themes.map((theme) => (
                  <span
                    key={theme}
                    className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 border border-border text-muted-foreground"
                  >
                    {theme}
                  </span>
                ))}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {book.longDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-10 bg-white text-black hover:bg-white/90 text-sm font-bold uppercase tracking-widest rounded-none gap-3"
                  >
                    <ShoppingCart size={18} />
                    Get it on Gumroad
                  </Button>
                </a>
                <a
                  href={BUNDLE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-14 px-10 border-primary text-primary hover:bg-primary hover:text-black text-sm font-bold uppercase tracking-widest rounded-none gap-3 transition-all"
                  >
                    <BookOpen size={18} />
                    Get the Bundle — $34.99
                  </Button>
                </a>
              </div>

              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                Available exclusively on Gumroad
              </p>
              <ShareButtons title={`${book.title} | OrtizHub`} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 border-t border-border bg-secondary/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              What You'll <span className="text-primary">Learn</span>
            </h2>
            <ul className="space-y-5">
              {book.whatYouWillLearn.map((lesson, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 group"
                >
                  <CheckCircle
                    size={20}
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  <span className="text-lg text-muted-foreground leading-relaxed group-hover:text-white transition-colors duration-200">
                    {lesson}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 items-start"
          >
            <div className="flex-1 space-y-4">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block">
                About the Author
              </span>
              <h3 className="text-2xl font-bold text-white">Ortiz Imana Jnr</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {AUTHOR_BIO}
              </p>
              <Link href="/about">
                <button className="text-sm text-primary font-bold uppercase tracking-widest hover:underline underline-offset-4 mt-2">
                  Read Full Bio →
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* You Might Also Like */}
      <section className="py-20 border-t border-border bg-secondary/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-12">
              Also in the <span className="text-primary">Collection</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {otherBooks.map((other, i) => (
                <motion.div
                  key={other.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link href={`/books/${other.id}`}>
                    <div className="group cursor-pointer">
                      <div className="aspect-[3/4] rounded-lg overflow-hidden border border-border shadow-lg mb-3 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-primary/10 group-hover:shadow-xl">
                        <img
                          src={other.image}
                          alt={other.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors leading-snug">
                        {other.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                        {other.category}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block">
              Best Value
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Get the Complete{" "}
              <span className="text-primary">Bundle</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
              Every core book bundled together at the best possible value. Available exclusively on Gumroad.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <span className="text-4xl font-bold text-white">$34.99</span>
              <a href={BUNDLE_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="h-14 px-10 bg-primary text-black hover:bg-primary/90 text-sm font-bold uppercase tracking-widest rounded-none"
                >
                  Get the Bundle on Gumroad
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
