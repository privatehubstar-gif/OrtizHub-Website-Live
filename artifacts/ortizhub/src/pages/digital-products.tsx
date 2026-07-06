import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const products = [
  {
    id: "legacy-course",
    title: "The Legacy Builder Course",
    category: "Video Course",
    description: "A comprehensive 6-week program teaching you how to structure, launch, and scale a profitable digital product business from scratch.",
    image: "/images/prod-course.png",
    price: "$197",
    link: "#"
  },
  {
    id: "clarity-guide",
    title: "Clarity & Execution Guide",
    category: "Digital Playbook",
    description: "Stop procrastinating. This step-by-step PDF guide gives you the exact daily routines to maximize deep work and output.",
    image: "/images/prod-guide.png",
    price: "$47",
    link: "#"
  },
  {
    id: "life-os",
    title: "Life OS Notion Template",
    category: "System / Template",
    description: "The complete dashboard for managing your health, wealth, and spiritual growth. Everything you need to track your daily progress in one place.",
    image: "/images/prod-template.png",
    price: "$29",
    link: "#"
  }
];

const freeResource = {
  id: "clarity-reset",
  title: "The 7-Day Clarity Reset",
  category: "Free Guide",
  description: "A free 7-day reset to clear the mental clutter, rebuild your daily discipline, and get you moving again. No fluff, just a day-by-day plan to help you reset your health, mindset, and habits before you build anything else.",
  image: "/images/prod-guide.png",
  gumroadLink: "#"
};

export default function DigitalProducts() {
  return (
    <div className="container mx-auto px-6 py-20 lg:py-32">
      <div className="max-w-3xl mb-20">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
          Digital <span className="text-primary">Arsenal</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Tactical systems, courses, and frameworks designed to accelerate your growth and build leverage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col bg-secondary/30 border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
          >
            <div className="aspect-[16/9] bg-secondary relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <span className="text-xs text-primary font-bold uppercase tracking-widest mb-3">
                {product.category}
              </span>
              <h2 className="text-2xl font-serif text-white mb-4">{product.title}</h2>
              <p className="text-muted-foreground mb-8 flex-1">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                <span className="text-xl font-bold text-white">{product.price}</span>
                <a href={product.link}>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold uppercase tracking-wider rounded-none">
                    Buy on Gumroad
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mt-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 bg-secondary/30 border border-primary/30 rounded-xl p-8 lg:p-16"
      >
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="relative w-full max-w-[320px] aspect-[4/5] bg-secondary rounded-lg overflow-hidden border border-border shadow-2xl">
            <img
              src={freeResource.image}
              alt={freeResource.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3 space-y-6">
          <span className="text-xs text-primary font-bold uppercase tracking-widest">
            {freeResource.category}
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-white">{freeResource.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {freeResource.description}
          </p>
          <div className="pt-4">
            <a href={freeResource.gumroadLink} className="inline-block">
              <Button size="lg" className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-bold uppercase tracking-widest rounded-none">
                Download Free on Gumroad
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
