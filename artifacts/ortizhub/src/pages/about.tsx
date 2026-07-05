import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-20 lg:py-32 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary tracking-widest text-sm uppercase font-semibold mb-4 block">
          The Origin
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-12 leading-tight">
          Built from the <span className="text-primary">Ground Up.</span>
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Ortiz Imana Jnr didn't start with a playbook. As a first-generation builder, every lesson was learned through trial, error, and uncompromising discipline. OrtizHub was created to be the playbook he never had.
          </p>
          
          <div className="my-16 h-px w-full bg-border" />
          
          <h2 className="text-3xl font-serif text-white mb-6">The Mission</h2>
          <p className="text-muted-foreground mb-8">
            The mission is simple: to help faith-driven entrepreneurs and young creators break generational cycles. We do this by focusing on three core pillars: Health, Discipline, and Legacy. 
          </p>
          <p className="text-muted-foreground mb-8">
            There are no shortcuts. There is no pretending. True wealth is built on a foundation of physical vitality and mental fortitude. We provide the digital products, literature, and insights required to build an undeniable life.
          </p>

          <blockquote className="border-l-2 border-primary pl-6 my-12 py-2">
            <p className="text-2xl font-serif text-white italic m-0">
              "You cannot build a lasting legacy on a weak foundation. Your health is your first business. Your discipline is your greatest asset."
            </p>
          </blockquote>

          <h2 className="text-3xl font-serif text-white mb-6">Why We Build</h2>
          <p className="text-muted-foreground mb-8">
            We build to prove what's possible. To show the next generation that where you start does not dictate where you finish. Through our books and courses, we are transferring the wisdom of wealth creation and spiritual grounding to those hungry enough to execute.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
