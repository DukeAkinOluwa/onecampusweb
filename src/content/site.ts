import type { ImageProps } from "next/image";
import {
  CalendarClock,
  ListChecks,
  UsersRound,
  Sparkles,
  BookOpen,
  Trophy,
  ChartNoAxesCombined,
  Landmark,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import leaderAkinduko from "@/assets/leader-akinduko.jpg";
import leaderOwolabi from "@/assets/leader-owolabi.jpg";

export const COMPANY_NAME = "Edvantae Digital Hub Limited";
export const PRODUCT_NAME = "OneCampus";
export const CONTACT_EMAIL = "hello@edvantae.com";
export const COMPANY_ADDRESS =
  "8thGear Hub, 41 CMD Road, Secretariat/Magodo, Lagos, Nigeria.";

/* Store listing URLs — replace with the real App Store / Google Play URLs
   once the mobile apps are published; both currently open web sign-up. */
export const APP_STORE_URL = "/signup";
export const GOOGLE_PLAY_URL = "/signup";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const coreFeatures: FeatureItem[] = [
  {
    icon: CalendarClock,
    title: "Time Management",
    description:
      "Plan your schedule, organise tasks, and keep track of important deadlines.",
  },
  {
    icon: UsersRound,
    title: "Collaboration",
    description:
      "Work with classmates, exchange ideas, and make group study more organised.",
  },
  {
    icon: Trophy,
    title: "Gamification",
    description:
      "Recognise your progress and stay motivated through meaningful milestones.",
  },
  {
    icon: BookOpen,
    title: "Academic Resources",
    description:
      "Keep useful learning materials and study resources easier to find.",
  },
  {
    icon: Sparkles,
    title: "AI Study Support",
    description:
      "Get assistance with study questions, explanations, and learning tasks.",
  },
];

export const trustStrip = [
  { icon: ListChecks, label: "Plan your academic workload." },
  { icon: UsersRound, label: "Collaborate with peers." },
  { icon: Sparkles, label: "Access study support." },
];

export const productDemoBullets = [
  "Keep tasks and deadlines visible.",
  "Organise study activities with peers.",
  "Access relevant study support from one place.",
];

export const howItWorks = [
  {
    icon: ShieldCheck,
    step: "Create Your Account.",
    description:
      "Sign up with your email address and set up your workspace in a few minutes.",
  },
  {
    icon: ListChecks,
    step: "Organise Your Priorities.",
    description:
      "Add your tasks, deadlines, and study plans so everything has a place.",
  },
  {
    icon: UsersRound,
    step: "Study and Collaborate.",
    description:
      "Work with your Study Squad and use study support as you learn.",
  },
  {
    icon: ChartNoAxesCombined,
    step: "Review Your Progress.",
    description:
      "Check what you have completed and keep your goals in view.",
  },
];

export interface Plan {
  id: string;
  name: string;
  description: string;
  priceNote: string;
  features: string[];
  cta: string;
  ctaTo: string;
  highlighted?: boolean;
}

export const studentPlans: Plan[] = [
  {
    id: "free",
    name: "Free",
    description:
      "Get started with the essential tools for organising your academic life.",
    priceNote: "Pricing to be confirmed",
    features: [
      "Task management",
      "Basic collaboration",
      "Access to available resources",
      "Core planning tools",
    ],
    cta: "Get Started",
    ctaTo: "/signup",
  },
  {
    id: "pro",
    name: "Pro",
    description: "For students who need additional tools and support.",
    priceNote: "Pricing to be confirmed",
    features: [
      "Features included in Free",
      "Additional study tools where available",
      "Expanded support where available",
      "Additional capabilities as defined by the product",
    ],
    cta: "Explore Pro",
    ctaTo: "/contact",
  },
];

export const campusPlan: Plan = {
  id: "campus",
  name: "Campus",
  description: "For institutions and student organisations.",
  priceNote: "Custom pricing",
  features: [
    "Institutional or organisational onboarding, where offered",
    "Relevant administration capabilities, where implemented",
    "Appropriate support arrangements",
    "Commercial terms agreed with the organisation",
  ],
  cta: "Contact Sales",
  ctaTo: "/contact",
};

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What is OneCampus?",
    answer:
      "OneCampus is an academic productivity platform designed to help tertiary students organise their work, collaborate with peers, and access study support in one place.",
  },
  {
    question: "Who can use OneCampus?",
    answer:
      "Students can explore the platform for their academic organisation and study needs. Institutions and student bodies can contact the team to discuss suitable arrangements.",
  },
  {
    question: "Is OneCampus free to use?",
    answer:
      "Available features and pricing depend on the current plan. Visit our Pricing page for the latest confirmed details.",
  },
  {
    question: "Can I collaborate with other students?",
    answer:
      "OneCampus is designed to support collaborative study through features such as Study Squads, where available in your account.",
  },
  {
    question: "What does AI Study Support do?",
    answer:
      "It is intended to assist with learning and study tasks. AI-generated responses can be inaccurate and should be checked against reliable academic sources.",
  },
  {
    question: "Can institutions work with OneCampus?",
    answer:
      "Yes. Institutions can contact the team to discuss their requirements and explore potential collaboration.",
  },
  {
    question: "How do I get help?",
    answer:
      "Visit our Contact page to reach the appropriate support or partnership channel.",
  },
];

export const pricingFaqs: Faq[] = [
  {
    question: "What is included in the Free plan?",
    answer:
      "The Free plan covers the essential tools for organising your academic life, including task management, basic collaboration, access to available resources, and core planning tools. See the plans above for the current list.",
  },
  {
    question: "How does Pro differ from Free?",
    answer:
      "Pro is intended for students who need additional tools and support. It includes everything in Free, plus additional study capabilities and expanded support where available. Visit the Pricing page or contact us for the latest confirmed details.",
  },
  {
    question: "How is institutional pricing determined?",
    answer:
      "Institutional pricing depends on your institution's needs, size, and the scope of the implementation. Contact our team to discuss suitable commercial options.",
  },
  {
    question: "Can an organisation request a demonstration?",
    answer:
      "Yes. Institutions and student bodies can request a demonstration through the contact form, and the team will respond to arrange a suitable time.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Use the form on our Contact page and choose the enquiry type that best matches your question. Your enquiry will be directed to the appropriate team.",
  },
];

export const multiDeviceFeature: FeatureItem = {
  icon: Smartphone,
  title: "Multi-device experience",
  description: "Access a consistent experience across supported devices.",
};

export const institutionUseCases: FeatureItem[] = [
  {
    icon: ListChecks,
    title: "Student Academic Organisation",
    description:
      "Explore tools that help students organise academic activities and keep track of their work.",
  },
  {
    icon: UsersRound,
    title: "Collaborative Learning",
    description: "Explore ways students can coordinate study activities and work together.",
  },
  {
    icon: Landmark,
    title: "Student Engagement",
    description:
      "Discuss how OneCampus could complement your institution's existing student-support initiatives.",
  },
];

export interface LeaderProfile {
  fullName: string;
  jobTitle: string;
  roleDescription: string;
  photo: ImageProps["src"];
  photoAlt: string;
}

export const leadershipProfiles: LeaderProfile[] = [
  {
    fullName: "Akinduko AkinOluwa",
    jobTitle: "Managing Director",
    roleDescription:
      "Leads Edvantae Digital Hub Limited, the company behind OneCampus.",
    photo: leaderAkinduko,
    photoAlt: "Corporate headshot of Akinduko AkinOluwa",
  },
  {
    fullName: "Owolabi Titilayo",
    jobTitle: "Chief Marketing Officer",
    roleDescription:
      "Leads marketing at Edvantae Digital Hub Limited, the company behind OneCampus.",
    photo: leaderOwolabi,
    photoAlt: "Corporate headshot of Owolabi Titilayo",
  },
];
