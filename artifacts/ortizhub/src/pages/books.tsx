import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AMAZON_AUTHOR_PAGE_URL = "https://www.amazon.com/author/ortiz_imanajnr9";

const books = [
  {
    id: "eat-to-heal",
    title: "Eat to Heal",
    description: "A practical guide to reducing inflammation and reclaiming your health naturally.",
    image: "/images/book-eat-to-heal.png",
    link: AMAZON_AUTHOR_PAGE_URL,
  },
  {
    id: "blessed-boy",
    title: "Blessed Boy",
    description: "Faith. Gratitude. Grace. A personal journey of waiting, trusting, and growing.",
    image: "/images/book-discipline.png",
    link: AMAZON_AUTHOR_PAGE_URL,
  },
  {
    id: "the-discipline-within",
    title: "The Discipline Within",
    description: "How to build unbreakable self-discipline from the inside out — identity before action.",
    image: "/images/book-discipline.png",
    link: AMAZON_AUTHOR_PAGE_URL,
  },
  {
    id: "born-to-build",
    title: "Born to Build",
    description: "The power within you to create, grow, and rise — a blueprint for first-gen builders.",
    image: "/images/book-born-to-build.png",
    link: AMAZON_AUTHOR_PAGE_URL,
  },
  {
    id: "the-7-day-clarity-reset",
    title: "The 7-Day Clarity Reset",
    description: "Build focus, discipline, and identity in a noisy world — 7 days to clarity.",
    image: "/images/prod-guide.png",
    link: AMAZON_AUTHOR_PAGE_URL,
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
    </div>
  );
}
