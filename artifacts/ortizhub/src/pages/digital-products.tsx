import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import clarityResetCover from "@assets/44160B54-A9BC-4F14-A2D1-A4940B5D7DD7_1783382977469.png";
import blessedBoyCover from "@assets/1ED08B71-FE14-4EEC-A05D-7480AB1BCEDD_1783382977469.png";
import eatToHealCover from "@assets/Untitled_design_1783383336903.jpeg";
import disciplineWithinCover from "@assets/Untitled_design_1783383833804.jpeg";
import bornToBuildCover from "@assets/85A4B0E9-4B52-4BD9-BEF2-9B524D235864_1783382977469.png";
import geminiWorkbookCover from "@assets/IMG_6694_1783382977469.jpeg";
import { ShareButtons } from "@/components/share-buttons";
import { GUMROAD_LINKS } from "@/data/gumroad-links";

const bundleImage = "/images/bundle-promo-clean.png";

const freeProduct = {
  id: "clarity-reset",
  title: "The 7-Day Clarity Reset",
  description: "A free 7-day reset to clear the mental clutter, rebuild your daily discipline, and get you moving again.",
  image: clarityResetCover,
  price: "Free",
  link: GUMROAD_LINKS.clarityReset,
};

const coreProducts = [
  {
    id: "blessed-boy",
    title: "Blessed Boy",
    description: "Faith. Gratitude. Grace. A personal journey of waiting, trusting, and growing.",
    image: blessedBoyCover,
    price: "$7.99",
    link: GUMROAD_LINKS.blessedBoy,
  },
  {
    id: "eat-to-heal",
    title: "Eat to Heal",
    description: "A practical guide to reducing inflammation and reclaiming your health naturally.",
    image: eatToHealCover,
    price: "$9.99",
    link: GUMROAD_LINKS.eatToHeal,
  },
  {
    id: "meet-your-shadow",
    title: "Meet Your Shadow",
    description: "Confront the parts of yourself holding you back, and turn them into fuel.",
    image: "/images/prod-guide.png",
    price: "$9.99",
    link: GUMROAD_LINKS.meetYourShadow,
  },
  {
    id: "the-discipline-within",
    title: "The Discipline Within",
    description: "How to build unbreakable self-discipline from the inside out — identity before action.",
    image: disciplineWithinCover,
    price: "$9.99",
    link: GUMROAD_LINKS.disciplineWithin,
  },
  {
    id: "born-to-build",
    title: "Born to Build",
    description: "The power within you to create, grow, and rise — a blueprint for first-gen builders.",
    image: bornToBuildCover,
    price: "$14.99",
    link: GUMROAD_LINKS.bornToBuild,
  },
];

const premiumProducts = [
  {
    id: "gemini-creator-formula-workbook",
    title: "Gemini Creator Formula Workbook",
    category: "Premium Workbook",
    description: "The complete workbook for turning your creative gifts into a repeatable system for income.",
    image: geminiWorkbookCover,
    price: "$22.22",
    link: GUMROAD_LINKS.geminiCreatorFormula,
  },
  {
    id: "complete-library-bundle-vol-1",
    title: "The Ultimate Faith & Mindset Bundle Vol. 1",
    category: "Bundle",
    description: "Every core book bundled together at the best possible value.",
    image: bundleImage,
    price: "$34.99",
    link: GUMROAD_LINKS.bundle,
  },
];

const comingSoonProducts = [
  { id: "gcf-template-kit", title: "GCF Template Kit", price: "$12.99" },
  { id: "prompt-engineering-bible", title: "Prompt Engineering Bible", price: "$12.99" },
  { id: "weekly-sprint-tracker", title: "Weekly Sprint Tracker", price: "$12.99" },
  { id: "gcf-masterclass", title: "GCF Masterclass", price: "$127" },
];

const bundleBooks = ["Eat to Heal", "Blessed Boy", "The Discipline Within", "Born to Build", "The 7-Day Clarity Reset"];

export default function DigitalProducts() {
  return (
    <div className="container mx-auto px-6 py-20 lg:py-32">
      <div className="max-w-3xl mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Digital Products & Workbooks — <span className="text-primary">Available on Gumroad</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Tactical systems, courses, and frameworks designed to accelerate your growth and build leverage.
        </p>
        <div className="mt-8">
          <ShareButtons
            title="Digital Products and Workbooks | OrtizHub"
            contentType="page"
            contentId="digital-products"
          />
        </div>
      </div>

      {/* Featured Bundle Banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mb-24 relative rounded-2xl overflow-hidden border border-primary/40"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 max-h-[420px] overflow-hidden">
            <img
              src={bundleImage}
              alt="The Ultimate Faith & Mindset Bundle"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 p-10 lg:p-14 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-xs text-black bg-primary font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Special Offer
              </span>
              <span className="text-xs text-primary uppercase tracking-widest font-semibold">Gumroad Exclusive</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              The Ultimate Faith & Mindset Bundle
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every core book bundled together at the best possible value. Everything you need to build faith, discipline, clarity, and legacy.
            </p>
            <ul className="space-y-1.5">
              {bundleBooks.map((title) => (
                <li key={title} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {title}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6 pt-2">
              <span className="text-3xl font-bold text-white">$34.99</span>
              <a href={GUMROAD_LINKS.bundle} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="h-12 px-8 bg-primary text-black hover:bg-primary/90 text-sm font-bold uppercase tracking-widest rounded-none"
                >
                  Get the Bundle
                </Button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Free */}
      <section className="mb-24">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">Free</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 bg-secondary/30 border border-primary/30 rounded-xl p-8 lg:p-16"
        >
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[4/5] bg-secondary rounded-lg overflow-hidden border border-border shadow-2xl">
              <img src={freeProduct.image} alt={freeProduct.title} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full lg:w-2/3 space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-white">{freeProduct.title}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{freeProduct.description}</p>
            <div className="pt-4">
              <a href={freeProduct.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button size="lg" className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-bold uppercase tracking-widest rounded-none">
                  Download Free
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Products */}
      <section className="mb-24">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">Core Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex flex-col bg-secondary/30 border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="aspect-[16/9] bg-secondary relative overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1 text-sm">{product.description}</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                  <span className="text-lg font-bold text-white">{product.price}</span>
                  <a href={product.link} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold uppercase tracking-wider rounded-none text-xs">
                      Get it on Gumroad
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Premium Products */}
      <section className="mb-24">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">Premium Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {premiumProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-secondary/30 border border-primary/30 rounded-xl overflow-hidden hover:border-primary/60 transition-colors"
            >
              <div className="aspect-[16/9] bg-secondary relative overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="text-xs text-primary font-bold uppercase tracking-widest mb-3">{product.category}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                <p className="text-muted-foreground mb-8 flex-1">{product.description}</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                  <span className="text-xl font-bold text-white">{product.price}</span>
                  <a href={product.link} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold uppercase tracking-wider rounded-none">
                      Get it on Gumroad
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">Coming Soon</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {comingSoonProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col justify-between bg-secondary/10 border border-dashed border-border rounded-xl p-6 opacity-70"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{product.title}</h3>
                <span className="text-sm text-muted-foreground">{product.price}</span>
              </div>
              <span className="mt-6 inline-block text-xs font-bold uppercase tracking-widest text-primary border border-primary/40 rounded-full px-3 py-1.5 text-center">
                Coming Soon
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
