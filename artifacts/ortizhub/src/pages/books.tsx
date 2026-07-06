import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const books = [
  {
    id: "eat-to-heal",
    title: "Eat to Heal",
    author: "Ortiz Imana Jnr",
    subtitle: "The ultimate guide to physical vitality.",
    description: "Your health is your first business. This book breaks down the foundational nutrition principles required to optimize energy, clear brain fog, and build a body capable of enduring the entrepreneurial journey. A practical, no-fluff manual for builders who know their body is the engine behind everything else they want to create.",
    image: "/images/book-eat-to-heal.png",
    link: "#"
  },
  {
    id: "the-discipline-within",
    title: "The Discipline Within",
    author: "Ortiz Imana Jnr",
    subtitle: "Master your mind, master your reality.",
    description: "Motivation is fleeting; discipline is permanent. Learn the exact mental frameworks and daily protocols used by elite builders to stay consistent when the inspiration fades. This is the internal operating system behind every external win.",
    image: "/images/book-discipline.png",
    link: "#"
  },
  {
    id: "born-to-build",
    title: "Born to Build",
    author: "Ortiz Imana Jnr",
    subtitle: "The wealth and legacy playbook.",
    description: "A tactical guide for first-generation wealth builders. Uncover the strategies for creating scalable digital income, protecting your assets, and establishing a legacy that outlasts you. Written for the builder who refuses to be the last generation starting from zero.",
    image: "/images/book-born-to-build.png",
    link: "#"
  }
];

const AMAZON_AUTHOR_PAGE_URL = "#";

export default function Books() {
  return (
    <div className="container mx-auto px-6 py-20 lg:py-32">
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
          The <span className="text-primary">Library</span>
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
              <h2 className="text-4xl lg:text-5xl font-serif text-white">{book.title}</h2>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">By {book.author}</p>
              <p className="text-xl text-primary font-medium">{book.subtitle}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {book.description}
              </p>
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <a href={book.link} className="inline-block">
                  <Button size="lg" className="h-14 px-8 bg-white text-black hover:bg-white/90 text-base font-bold uppercase tracking-widest rounded-none">
                    Buy on Amazon
                  </Button>
                </a>
                <a href={AMAZON_AUTHOR_PAGE_URL} className="inline-block">
                  <Button size="lg" variant="outline" className="h-14 px-8 border-border hover:bg-white/5 hover:text-white text-base font-bold uppercase tracking-widest rounded-none">
                    View Author Page
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
