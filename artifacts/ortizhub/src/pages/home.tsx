import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import ortizPhoto from "@assets/DE2B6B70-8672-486C-9E66-E59B7F031EFD_1783385337182.png";
import eatToHealCover from "@assets/Untitled_design_1783383336903.jpeg";
import disciplineWithinCover from "@assets/Untitled_design_1783383833804.jpeg";
import bornToBuildCover from "@assets/85A4B0E9-4B52-4BD9-BEF2-9B524D235864_1783382977469.png";
import blessedBoyCover from "@assets/1ED08B71-FE14-4EEC-A05D-7480AB1BCEDD_1783382977469.png";
import clarityResetCover from "@assets/44160B54-A9BC-4F14-A2D1-A4940B5D7DD7_1783382977469.png";
import bundleImage from "@assets/IMG_6630_1783382977469.png";

const FREE_GUIDE_LINK = "https://ortizhub.gumroad.com/l/scskwk";
const BUNDLE_LINK = "https://ortizhub.gumroad.com/l/bundlevol1";

const featuredBooks = [
  { id: "eat-to-heal", title: "Eat to Heal", image: eatToHealCover },
  { id: "the-discipline-within", title: "The Discipline Within", image: disciplineWithinCover },
  { id: "born-to-build", title: "Born to Build", image: bornToBuildCover },
];

const bundleBooks = [
  { title: "Eat to Heal", image: eatToHealCover },
  { title: "Blessed Boy", image: blessedBoyCover },
  { title: "The Discipline Within", image: disciplineWithinCover },
  { title: "Born to Build", image: bornToBuildCover },
  { title: "The 7-Day Clarity Reset", image: clarityResetCover },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ortizPhoto}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-top opacity-40"
          />
        </div>
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
                className="flex flex-col items-center text-center group"
              >
                <div className="w-full aspect-[3/4] bg-secondary rounded-lg overflow-hidden border border-border shadow-2xl mb-4 transition-transform duration-500 group-hover:scale-[1.03]">
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

      {/* Featured Bundle Section */}
      <section className="py-24 lg:py-32 border-t border-border bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden border border-primary/40"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black/60 to-primary/5 pointer-events-none z-10" />

            {/* Bundle promo image as background */}
            <div className="absolute inset-0">
              <img
                src={bundleImage}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover opacity-20"
              />
            </div>

            <div className="relative z-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 p-10 lg:p-0">
              {/* Left — book stack preview */}
              <div className="w-full lg:w-1/2 lg:p-14">
                <div className="flex items-end justify-center gap-3">
                  {bundleBooks.map((book, i) => (
                    <motion.div
                      key={book.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="flex-1 max-w-[100px]"
                      style={{ marginBottom: i === 2 ? "24px" : "0px" }}
                    >
                      <div className="aspect-[3/4] rounded-md overflow-hidden border border-primary/30 shadow-xl">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right — copy + CTA */}
              <div className="w-full lg:w-1/2 lg:p-14 space-y-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="text-xs bg-primary text-black font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Special Offer
                  </span>
                  <span className="text-xs text-primary font-semibold uppercase tracking-widest">
                    Gumroad Exclusive
                  </span>
                </div>

                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                  The Ultimate<br />
                  <span className="text-primary">Faith & Mindset</span><br />
                  Bundle
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  Five transformational books in one package — faith, discipline, health, clarity, and legacy. Everything you need to build the life you were meant for.
                </p>

                <ul className="space-y-2">
                  {bundleBooks.map((book) => (
                    <li key={book.title} className="flex items-center justify-center lg:justify-start gap-3 text-sm text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {book.title}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                  <span className="text-4xl font-bold text-white">$34.99</span>
                  <a href={BUNDLE_LINK} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="h-14 px-10 bg-primary text-black hover:bg-primary/90 text-base font-bold uppercase tracking-widest rounded-none"
                    >
                      Get the Bundle
                    </Button>
                  </a>
                </div>

                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  Bundled for max value · Available on Gumroad
                </p>
              </div>
            </div>
          </motion.div>
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
