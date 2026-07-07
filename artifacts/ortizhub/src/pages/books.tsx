import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import eatToHealCover from "@assets/Untitled_design_1783383336903.jpeg";
import blessedBoyCover from "@assets/1ED08B71-FE14-4EEC-A05D-7480AB1BCEDD_1783382977469.png";
import disciplineWithinCover from "@assets/Untitled_design_1783383833804.jpeg";
import bornToBuildCover from "@assets/85A4B0E9-4B52-4BD9-BEF2-9B524D235864_1783382977469.png";
import clarityResetCover from "@assets/44160B54-A9BC-4F14-A2D1-A4940B5D7DD7_1783382977469.png";
import bundleImage from "@assets/IMG_6630_1783382977469.png";

const books = [
  {
    id: "eat-to-heal",
    title: "Eat to Heal",
    description: "A practical guide to reducing inflammation and reclaiming your health naturally.",
    image: eatToHealCover,
    link: "https://a.co/d/0hBIKX4t",
  },
  {
    id: "blessed-boy",
    title: "Blessed Boy",
    description: "Faith. Gratitude. Grace. A personal journey of waiting, trusting, and growing.",
    image: blessedBoyCover,
    link: "https://a.co/d/05uXGvwh",
  },
  {
    id: "the-discipline-within",
    title: "The Discipline Within",
    description: "How to build unbreakable self-discipline from the inside out — identity before action.",
    image: disciplineWithinCover,
    link: "https://a.co/d/04EKh3OG",
  },
  {
    id: "born-to-build",
    title: "Born to Build",
    description: "The power within you to create, grow, and rise — a blueprint for first-gen builders.",
    image: bornToBuildCover,
    link: "https://a.co/d/0bN282cf",
  },
  {
    id: "the-7-day-clarity-reset",
    title: "The 7-Day Clarity Reset",
    description: "Build focus, discipline, and identity in a noisy world — 7 days to clarity.",
    image: clarityResetCover,
    link: "https://a.co/d/0fEFI0LI",
  },
];

export default function Books() {
  return (
    <div className="container mx-auto px-6 py-20 lg:py-32">
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          My Books — <span className="text-primary">Available on Amazon</span>
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
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-[3/4] bg-secondary rounded-lg overflow-hidden border border-border shadow-2xl group">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">{book.title}</h2>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">By Ortiz Imana Jnr</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {book.description}
              </p>
              <div className="pt-6">
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button size="lg" className="h-14 px-8 bg-white text-black hover:bg-white/90 text-base font-bold uppercase tracking-widest rounded-none">
                    Buy on Amazon
                  </Button>
                </a>
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
              Five Books for Transformation
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Get all five books in one package — bundled for maximum value. Everything you need to build faith, discipline, clarity, and legacy.
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
                href="https://ortizhub.gumroad.com/l/bundlevol1"
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
