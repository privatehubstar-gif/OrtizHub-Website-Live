export type SystemStatus = "In Development" | "Coming Soon" | "Live";

export type SystemProject = {
  title: string;
  description: string;
  status: SystemStatus;
  workers?: string[];
};

export const systemsAndAi: SystemProject[] = [
  {
    title: "Ortiz Capital Bot",
    description:
      "An automated financial manager designed to help users track, allocate, and grow their wealth.",
    status: "In Development",
  },
  {
    title: "Mira-Bot & Poly-Bot",
    description:
      "Automated trading and prediction market monitoring systems.",
    status: "In Development",
  },
  {
    title: "AI Automation Stack",
    description:
      "The 5 AI workers (Brand Guardian, Research Director, Content Producer, Marketing Strategist, Automator) powering the OrtizHub media ecosystem.",
    status: "In Development",
    workers: [
      "Brand Guardian",
      "Research Director",
      "Content Producer",
      "Marketing Strategist",
      "Automator",
    ],
  },
];
