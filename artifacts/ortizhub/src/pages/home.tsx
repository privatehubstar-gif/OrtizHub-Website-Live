import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

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
            <span className="text-primary tracking-[0.3em] text-sm md:text-base font-medium uppercase mb-6 block">
              Ortiz Imana Jnr
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white font-bold leading-tight mb-8 tracking-tight">
              Create. <br className="md:hidden" />
              Grow. <br className="md:hidden" />
              <span className="text-primary">Rise.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Helping builders break generational cycles through wisdom and wealth. 
              Health. Discipline. Legacy. No shortcuts. No pretending.
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/digital-products">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base tracking-wider uppercase font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
                  Explore Products
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base tracking-wider uppercase font-semibold border-border hover:bg-white/5 hover:text-white">
                  The Mission
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-background border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-10 leading-tight">
              "We build for the generation that comes after us."
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              OrtizHub is more than a personal brand. It is a philosophy for the first-gen builders, 
              the faith-driven entrepreneurs, and the young creators who refuse to settle for average. 
              We focus on the pillars that actually matter: absolute physical health, unshakeable discipline, 
              and creating undeniable wealth.
            </p>
            <Link href="/books">
              <span className="text-primary font-medium tracking-widest uppercase hover:underline underline-offset-8 transition-all">
                Read the Books
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
