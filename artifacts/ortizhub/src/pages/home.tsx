import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

const FREE_GUIDE_LINK = "https://ortizhub.gumroad.com/l/scskwk";

const featuredBooks = [
  {
    id: "eat-to-heal",
    title: "Eat to Heal",
    image: "/images/book-eat-to-heal.png",
  },
  {
    id: "the-discipline-within",
    title: "The Discipline Within",
    image: "/images/book-discipline.png",
  },
  {
    id: "born-to-build",
    title: "Born to Build",
    image: "/images/book-born-to-build.png",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/80 to-transparent" />

        <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary tracking-[0.3em] text-sm md:text-base font-semibold uppercase mb-6 block">
              Ortiz Imana Jnr
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-8 tracking-tight">
              Create. <br className="md:hidden" />
              Grow. <br className="md:hidden" />
              <span className="text-primary">Rise.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Helping builders break generational cycles through wisdom and wealth.
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-12">
              {["Health", "Discipline", "Legacy"].map((value, i) => (
                <span key={value} className="flex items-center gap-4 sm:gap-8">
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                    {value}
                  </span>
                  {i < 2 && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-12">
              No shortcuts. No pretending.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/books">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base tracking-wider uppercase font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-none">
                  Explore My Books
                </Button>
              </Link>
              <a href={FREE_GUIDE_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base tracking-wider uppercase font-semibold border-border hover:bg-white/5 hover:text-white rounded-none">
                  Get Free Resources
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-primary">Books</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Wisdom for the builder who refuses to stay stuck.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {featuredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-full aspect-[3/4] bg-secondary rounded-lg overflow-hidden border border-border shadow-2xl mb-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">{book.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/books">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base tracking-wider uppercase font-semibold border-border hover:bg-white/5 hover:text-white rounded-none">
                View All Books
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Free Lead Magnet Section */}
      <section className="py-24 lg:py-32 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">
              Free Guide
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Start Your 7-Day Clarity Reset Today
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              A free framework to help you cut through the noise and build clarity.
            </p>
            <a href={FREE_GUIDE_LINK} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button size="lg" className="h-14 px-10 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-bold uppercase tracking-widest rounded-none">
                Download Free Guide
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
