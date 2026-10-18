import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { books, BUNDLE_LINK } from "@/data/books";
const bundleImage = "/images/bundle-promo-clean.png";

export default function Books() {
  return (
    <div className="container mx-auto px-6 py-20 lg:py-32">
      <div className="max-w-3xl mx-auto text-center mb-24">
        <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
          The Collection
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          My Books — <span className="text-primary">Available exclusively on Gumroad</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Foundational knowledge for the modern builder. Read to execute.
        </p>
      </div>

      <div className="space-y-32">
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col gap-12 lg:gap-20 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center`}
          >
            {/* Cover — clickable */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link href={`/books/${book.id}`}>
                <div className="relative w-full max-w-[400px] aspect-[3/4] bg-secondary rounded-lg overflow-hidden border border-border shadow-2xl group cursor-pointer">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                      View Details <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">
                {book.category}
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">{book.title}</h2>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">By Ortiz Imana Jnr</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {book.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-8 bg-white text-black hover:bg-white/90 text-base font-bold uppercase tracking-widest rounded-none"
                  >
                    Get it on Gumroad
                  </Button>
                </a>
                <Link href={`/books/${book.id}`}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-14 px-8 border-border text-white hover:border-primary hover:text-primary text-base font-bold uppercase tracking-widest rounded-none transition-all gap-2"
                  >
                    View Details <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bundle Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mt-40 relative rounded-2xl overflow-hidden border border-primary/30"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center gap-0">
          <div className="w-full lg:w-1/2">
            <img
              src={bundleImage}
              alt="The Ultimate Faith & Mindset Bundle"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 p-10 lg:p-16 space-y-6">
            <p className="text-xs text-primary uppercase tracking-[0.3em] font-bold">Special Gumroad Offer</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              The Ultimate Faith &amp; Mindset Bundle
            </h2>
            <p className="text-primary font-semibold uppercase tracking-widest text-sm">
              Complete Collection
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every core book bundled together at the best possible value. Everything you need to build faith, discipline, clarity, and legacy.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              {books.map((b) => (
                <li key={b.id} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {b.title}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <a
                href={BUNDLE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="h-14 px-10 bg-primary text-black hover:bg-primary/90 text-base font-bold uppercase tracking-widest rounded-none"
                >
                  Get the Bundle on Gumroad
                </Button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
