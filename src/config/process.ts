import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Call or Request a Quote",
    description:
      "Reach us by phone or the quote form — you'll talk to a real electrician, not a call center. Emergencies get dispatched immediately, day or night.",
    icon: "PhoneCall",
  },
  {
    step: 2,
    title: "Up-Front Price, In Writing",
    description:
      "We assess the work, explain your options in plain English, and give you a firm written price before anything starts. No hourly meter, no surprises.",
    icon: "FileText",
  },
  {
    step: 3,
    title: "The Work, Done Right",
    description:
      "Licensed, code-compliant work with permits handled for you. Every circuit is tested and labeled, and your home is left as clean as we found it.",
    icon: "Zap",
  },
  {
    step: 4,
    title: "Walkthrough & Follow-Up",
    description:
      "We walk you through everything we did, answer every question, and stay reachable afterward. The job isn't finished until you'd give it five stars.",
    icon: "CheckCircle",
  },
];
