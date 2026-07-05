import { motion } from "framer-motion";

const posts = [
  {
    id: "the-myth-of-balance",
    title: "The Myth of Balance in the Early Days",
    excerpt: "When you are trying to break generational curses, 'balance' is a luxury you cannot afford. Here is why obsession is a requirement for early-stage builders.",
    date: "October 12, 2023",
    readTime: "5 min read",
    link: "#"
  },
  {
    id: "faith-and-ambition",
    title: "Reconciling Faith with Immense Ambition",
    excerpt: "Many believe that wanting to build wealth conflicts with a faith-driven life. I argue that poverty restricts your ability to serve. Wealth is a tool for impact.",
    date: "September 28, 2023",
    readTime: "7 min read",
    link: "#"
  },
  {
    id: "dopamine-detox",
    title: "The Ultimate 7-Day Protocol to Reset Your Brain",
    excerpt: "You aren't lazy, your baseline dopamine is just fried. A practical guide to cutting out cheap inputs and regaining your focus for deep work.",
    date: "August 15, 2023",
    readTime: "10 min read",
    link: "#"
  },
  {
    id: "digital-leverage",
    title: "Why Your First Product Should Be Digital",
    excerpt: "Physical goods require capital, logistics, and supply chains. Digital products require only execution. How to start your empire with zero marginal cost.",
    date: "July 22, 2023",
    readTime: "6 min read",
    link: "#"
  }
];

export default function Blog() {
  return (
    <div className="container mx-auto px-6 py-20 lg:py-32 max-w-4xl">
      <div className="mb-20">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
          The <span className="text-primary">Journal</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Raw thoughts on building wealth, mastering discipline, and leading a life of impact.
        </p>
      </div>

      <div className="space-y-12">
        {posts.map((post, index) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group block"
          >
            <a href={post.link} className="block border-b border-border pb-12 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 uppercase tracking-widest">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-primary/50" />
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-3xl font-serif text-white mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
