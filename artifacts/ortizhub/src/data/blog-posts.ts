import { GUMROAD_LINKS } from "@/data/gumroad-links";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: string[];
  relatedProductTitle: string;
  relatedProductHref: string;
  ctaLabel: string;
  ctaExternal?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: "faith-and-ambition",
    title: "Reconciling Faith with Immense Ambition",
    excerpt:
      "Many believe that wanting to build wealth conflicts with a faith-driven life. I believe the opposite: poverty limits your ability to serve, and money, rightly handled, is a tool for impact.",
    category: "Faith",
    date: "October 17, 2026",
    readTime: "5 min read",
    featured: true,
    content: [
      "Many people raised in faith quietly believe that wanting more, whether income, influence or reach, is a spiritual compromise. I felt that tension too. Here is what I have learned. Money is not the mission, but it funds the mission. You cannot give generously while drowning in debt. You cannot serve people well when every month is a survival exercise. Poverty is not holiness. It is a limit on how much you can do for others. Scripture never asks you to be small. It asks you to be faithful and to steward what you are given. The widow in 1 Kings 17 met God in her lack, and the lesson is not that lack is good. It is that God shows up inside the real situation, and then we are expected to build with wisdom.",
      "Faith and ambition can walk together when three things are true. First, your ambition is aimed at service, not at proving yourself. Ask who this helps. Second, you price your work honestly. Charging fairly for something that changes lives is stewardship, not greed. Third, you stay grateful in the middle. Counting what you already carry, your breath, your mind, your faith, your people, keeps ambition from turning into anxiety.",
      "I am writing this from the middle of the process, not the finish line. Money is tight, school is heavy and I am still building. But I stopped believing I have to choose between my faith and my vision. They were given by the same God. If you have been apologizing for your ambition, stop. Hold it with open hands, aim it at people, and keep building.",
    ],
    relatedProductTitle: "Blessed Boy",
    relatedProductHref: "/books/blessed-boy",
    ctaLabel: "Read Blessed Boy",
  },
  {
    id: "forget-balance-build-rhythm",
    title: "Forget Balance. Build Rhythm.",
    excerpt:
      "Balance asks whether everything is equal. Rhythm asks whether the next hour is pointed at what matters. A simple daily shape for builders with limited time.",
    category: "Discipline",
    date: "October 17, 2026",
    readTime: "5 min read",
    content: [
      "Early on, everyone tells you to find balance. For a builder with limited hours, that advice rarely works, and chasing it often leaves you feeling like you are failing at everything equally. What works better is rhythm: a repeatable shape to your day that puts your best energy where it matters. You cannot manage time, because there are only 24 hours. You can manage energy.",
      "Here is the rhythm I use. Morning, spirit first: before the phone, a few minutes of stillness, prayer or gratitude, and a look at my vision. Mid-morning, create: your sharpest hours go to your most important work, one task at a time with notifications off. Afternoon, connect and ship: emails, posts, collaborations and publishing. Evening, reflect: write one win, one lesson and one intention for tomorrow. Night, rest: rest is not laziness, it is where tomorrow's work gets built.",
      "Notice what is missing: nonstop hustle. Sleep, real breaks and saying no are part of the system, because burnout ends more dreams than lack of talent does. Some seasons will lean harder toward work, and that is fine when it is chosen, temporary and protected by rest. The one rule that holds it together is never miss twice. Miss a day and it means nothing. Return the next day without drama. Start there.",
    ],
    relatedProductTitle: "The Discipline Within",
    relatedProductHref: "/books/the-discipline-within",
    ctaLabel: "Read The Discipline Within",
  },
  {
    id: "seven-day-clarity-reset",
    title: "The 7-Day Clarity Reset: Cut the Noise, Find Your Direction",
    excerpt:
      "You are not lazy. You may simply be over-stimulated and under-directed. Seven days, one focused action per day, to get your mind back.",
    category: "Mindset",
    date: "October 17, 2026",
    readTime: "6 min read",
    content: [
      "Distraction is not always laziness. Very often it is over-stimulation without direction. Notifications, comparisons and other people's opinions crowd the mind until your own voice is hard to hear. You do not need more information. You need rhythm, structure and truth.",
      "Here is the reset in seven days, one action each. Day one, silence: turn off non-essential notifications, take a two-hour window with no phone, write everything on your mind onto paper, and unsubscribe from three lists you never read. Day two, identity: write three honest statements: I am someone who, I value something above speed or approval, and I am building something. Put them where you will see them daily. Day three, environment: clear your workspace, rearrange your apps and unfollow what drains you. Day four, focus: two forty-five minute blocks, one task each, phone away.",
      "Day five, money: track two weeks of spending, cancel one subscription you do not use, and set up the smallest automatic transfer to savings. Day six, creation: make something small and finish it. Done beats perfect. Day seven, reflection: write what worked, choose three habits to keep, and schedule your next reset. Repeat it monthly. Clarity is not a destination you reach once. It is something you return to, and returning is what winning looks like.",
    ],
    relatedProductTitle: "The 7-Day Clarity Reset",
    relatedProductHref: GUMROAD_LINKS.clarityReset,
    ctaLabel: "Get the Free 7-Day Clarity Reset",
    ctaExternal: true,
  },
  {
    id: "why-your-first-product-should-be-digital",
    title: "Why Your First Product Should Be Digital",
    excerpt:
      "Physical goods need capital and logistics. Digital products need execution. How to start with what you already know and the discipline to finish.",
    category: "Wealth",
    date: "October 17, 2026",
    readTime: "6 min read",
    content: [
      "A physical product needs capital, inventory and shipping. A digital product needs something you already have: what you know, what you have lived, and the discipline to finish. That makes digital the most accessible place to start, especially if you are a student or building on a tight budget. You make it once and it can be sold many times, with no stock to hold and nothing to ship.",
      "Here is how I would start. Pick one problem you have actually solved, not one you have only read about. Build the smallest useful version: a short guide, a workbook or a template. Finish it. Done and published beats perfect and sitting in a folder. Price it with confidence, because your work cost you time, energy and healing, and people trust what has a fair price. Put it where buyers already are: Gumroad for direct sales and a relationship with your buyer. And collect emails from day one, because your list is something you own.",
      "One honest caution: digital is not magic. One product rarely changes everything. What changes things is showing up repeatedly, improving what you make, and treating each product as a step on a ladder rather than a lottery ticket. That is the path I am walking, one finished product at a time.",
    ],
    relatedProductTitle: "Gemini Creator Formula Workbook",
    relatedProductHref: "/digital-products",
    ctaLabel: "See the Gemini Creator Formula Workbook",
  },
  {
    id: "identity-shift-changes-everything",
    title: "The Identity Shift That Changes Everything",
    excerpt:
      "Most people try to change their habits and hope their identity follows. It works the other way around.",
    category: "Mindset",
    date: "October 17, 2026",
    readTime: "6 min read",
    content: [
      "Most people try to change their behavior and hope their identity will follow. They think, I will believe I am disciplined once I have stuck to a routine for a few months. It is backwards. When identity is vague or borrowed, every habit feels like a fight against yourself. When identity is clear, the right actions start to feel aligned. Not effortless, but aligned.",
      "You do not shift identity by declaring it once. You shift it through evidence. Every morning you show up is a vote for someone who keeps their word to themselves. Every nourishing meal is a vote for someone who values their health. Every time you do the work through resistance, you vote for a capable, growing person. You do not need a majority to begin, only to start collecting votes.",
      "A simple tool is the Identity Anchor. Write three present-tense statements: I am someone who, I value something above speed or approval, and I am building something. Be honest, not impressive. Put it on your desk or your phone background, read it each morning, and use it as a filter: does this action match who I said I am becoming? Finally, let go of the old story. The I am not disciplined story has probably protected you for years. Thank it, then put it down. You are not who you were. You are who you are choosing to become, one small vote at a time.",
    ],
    relatedProductTitle: "The Discipline Within",
    relatedProductHref: "/books/the-discipline-within",
    ctaLabel: "Read The Discipline Within",
  },
  {
    id: "eat-to-build-nutrition",
    title: "Eat to Build: Nutrition for High-Performing Builders",
    excerpt:
      "Your body is the machine everything else runs on. Simple, affordable anti-inflammatory habits for steady energy and clear focus.",
    category: "Health",
    date: "October 17, 2026",
    readTime: "6 min read",
    content: [
      "Your body is the machine everything else runs on. If your energy crashes mid-afternoon and your focus fades, food is one of the first places to look. Research links ongoing, low-grade inflammation with fatigue, brain fog and many common health complaints, and daily food choices are one lever we can control. Start by reducing the usual culprits: sugary drinks, refined white flour, ultra-processed snacks and industrial seed oils. Then add, rather than only subtract: colorful vegetables and fruit, healthy fats like olive oil, avocado, fatty fish and walnuts, legumes, whole grains, and spices like turmeric and ginger.",
      "None of it needs to be expensive. Lentils, dried beans, frozen vegetables, eggs, oats and canned sardines are affordable staples. Batch cook once or twice a week so a good meal takes minutes, not an hour. Follow the 80/20 rule: eat this way most of the time and enjoy the rest without guilt, because consistency beats perfection.",
      "Food is not the whole picture, either. Aim for seven to nine hours of sleep, a thirty minute walk most days, and a daily practice that calms your nervous system. I am not a doctor, so talk to yours before making big changes, especially if you have a health condition. But start with your next meal. That is always the place to begin.",
    ],
    relatedProductTitle: "Eat to Heal",
    relatedProductHref: "/books/eat-to-heal",
    ctaLabel: "Read Eat to Heal",
  },
];
