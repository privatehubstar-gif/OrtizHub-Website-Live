import eatToHealCover from "@assets/Untitled_design_1783383336903.jpeg";
import blessedBoyCover from "@assets/1ED08B71-FE14-4EEC-A05D-7480AB1BCEDD_1783382977469.png";
import disciplineWithinCover from "@assets/Untitled_design_1783383833804.jpeg";
import bornToBuildCover from "@assets/85A4B0E9-4B52-4BD9-BEF2-9B524D235864_1783382977469.png";
import clarityResetCover from "@assets/44160B54-A9BC-4F14-A2D1-A4940B5D7DD7_1783382977469.png";

export interface Book {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  link: string;
  category: string;
  themes: string[];
  whatYouWillLearn: string[];
}

export const books: Book[] = [
  {
    id: "eat-to-heal",
    title: "Eat to Heal",
    tagline: "Reclaim your health through the power of food.",
    category: "Health & Nutrition",
    description:
      "A practical guide to reducing inflammation and reclaiming your health naturally.",
    longDescription:
      "Most people are sick and don't know why. They take pills for symptoms while ignoring the root cause — their diet. Eat to Heal breaks down the science of inflammation, gut health, and the healing power of real food in a way that anyone can understand and apply. This is not a fad diet book. It is a lifestyle framework built on principles that work for any body, at any stage. Whether you are dealing with chronic fatigue, digestive issues, or simply want to perform at a higher level, this book gives you the tools to take full ownership of your health.",
    image: eatToHealCover,
    link: "https://a.co/d/0hBIKX4t",
    themes: ["Nutrition", "Inflammation", "Gut Health", "Natural Healing"],
    whatYouWillLearn: [
      "How chronic inflammation silently destroys your energy and focus",
      "Which foods to eliminate immediately and what to replace them with",
      "A simple daily eating framework that reduces inflammation in weeks",
      "How your gut health controls your mood, clarity, and immunity",
      "The connection between food, discipline, and peak performance",
    ],
  },
  {
    id: "blessed-boy",
    title: "Blessed Boy",
    tagline: "A journey of faith, gratitude, and unshakeable grace.",
    category: "Faith & Spirituality",
    description:
      "Faith. Gratitude. Grace. A personal journey of waiting, trusting, and growing.",
    longDescription:
      "Blessed Boy is a deeply personal account of what it means to hold onto faith when the path is unclear, the wait is long, and the world tells you to give up. Ortiz Imana Jnr shares the lessons God taught him through seasons of uncertainty — about identity, gratitude, surrender, and the quiet power of trusting a plan bigger than your own. This is not a theology textbook. It is a raw, honest conversation about what real faith looks like in the middle of the grind. For anyone who believes they were made for more but cannot yet see how — this book is for you.",
    image: blessedBoyCover,
    link: "https://a.co/d/05uXGvwh",
    themes: ["Faith", "Gratitude", "Patience", "Spiritual Growth"],
    whatYouWillLearn: [
      "How to maintain faith when results are delayed and doubt creeps in",
      "The difference between striving in your own strength and trusting God's timing",
      "Practical gratitude practices that shift your mindset in difficult seasons",
      "How to use your story — mess and all — as a platform for impact",
      "Why being 'blessed' is not about what you have but who you are becoming",
    ],
  },
  {
    id: "the-discipline-within",
    title: "The Discipline Within",
    tagline: "True discipline is built from the inside out.",
    category: "Mindset & Discipline",
    description:
      "How to build unbreakable self-discipline from the inside out — identity before action.",
    longDescription:
      "Most people try to build discipline the wrong way. They rely on motivation, routines, and willpower — all of which eventually fail. The Discipline Within argues that lasting discipline is not about what you do. It is about who you believe you are. Until your identity shifts, every habit system is just a temporary fix. This book walks you through the internal rewiring required to become someone for whom discipline is not a struggle but a natural expression of self. Practical, honest, and uncompromising — written for builders who are tired of starting over.",
    image: disciplineWithinCover,
    link: "https://a.co/d/04EKh3OG",
    themes: ["Self-Discipline", "Identity", "Habits", "Mental Strength"],
    whatYouWillLearn: [
      "Why willpower always fails and what to rely on instead",
      "The identity shift that makes discipline effortless over time",
      "How to design your environment to support your standards",
      "The role of discomfort and how to embrace it as a growth tool",
      "A step-by-step process for building discipline in any area of life",
    ],
  },
  {
    id: "born-to-build",
    title: "Born to Build",
    tagline: "You were not born to survive — you were born to build.",
    category: "Entrepreneurship & Legacy",
    description:
      "The power within you to create, grow, and rise — a blueprint for first-gen builders.",
    longDescription:
      "Born to Build is the rallying cry for every first-generation builder who was told to get a stable job, play it safe, and not dream too big. Ortiz Imana Jnr dismantles the fear, the imposter syndrome, and the cultural conditioning that keeps talented people from building the businesses and legacies they were meant to create. This is not a business how-to book. It is a mindset reset — a declaration that the builder spirit in you is not a character flaw. It is your greatest asset. From laying foundations to scaling impact, this book walks you through what it truly means to build something from nothing.",
    image: bornToBuildCover,
    link: "https://a.co/d/0bN282cf",
    themes: ["Entrepreneurship", "First-Gen Success", "Legacy", "Leadership"],
    whatYouWillLearn: [
      "How to overcome the fear and imposter syndrome holding you back",
      "The foundational mindset shifts every first-gen builder must make",
      "How to build a business and a life that outlasts you",
      "Why community and mentorship are non-negotiable for long-term growth",
      "Practical frameworks for moving from idea to execution without losing yourself",
    ],
  },
  {
    id: "the-7-day-clarity-reset",
    title: "The 7-Day Clarity Reset",
    tagline: "7 days to cut the noise and build the life you were meant for.",
    category: "Focus & Productivity",
    description:
      "Build focus, discipline, and identity in a noisy world — 7 days to clarity.",
    longDescription:
      "The modern world is engineered to keep you distracted, reactive, and unclear about what you actually want. The 7-Day Clarity Reset is a structured, day-by-day guide to detoxing from the noise and reconnecting with your purpose, your priorities, and your power. Each day targets a different dimension of your life — from your digital habits to your morning rituals to your long-term vision. By day seven, you will not just feel clearer. You will have a written blueprint for the life you are building. Simple, actionable, and built for real people with real responsibilities.",
    image: clarityResetCover,
    link: "https://a.co/d/0fEFI0LI",
    themes: ["Focus", "Clarity", "Productivity", "Purpose"],
    whatYouWillLearn: [
      "A day-by-day framework to eliminate distraction and regain deep focus",
      "How to identify what actually matters versus what feels urgent",
      "Digital detox strategies that stick beyond the 7 days",
      "Morning and evening rituals that prime your brain for clarity",
      "How to leave the reset with a clear, written vision for your life",
    ],
  },
];

export const BUNDLE_LINK = "https://ortizhub.gumroad.com/l/bundlevol1";
