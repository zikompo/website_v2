"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Zikora from "@/app/components/icons/zikora.jpg";
import WealthSeedLogo from "@/app/components/icons/WealthseedLogo.jpg";
import RiskLab from "@/app/components/icons/RiskLab.png";
import Ontario from "@/app/components/icons/ontario.png";
import OntarioDark from "@/app/components/icons/ontario-dark.png";
import Sharpe from "@/app/components/icons/sharpe.webp";
import UofTAILogo from "@/app/components/icons/UofTAI_Logo.png";
import BorderPassLogo from "@/app/components/icons/BorderPass.jpeg";
import GlitchText from "./GlitchText";
import { currentlyReading } from "../reading/data";
import type { ArticleMetadata } from "@/lib/mdx";

interface Experience {
  title: string;
  company: string;
  logo: StaticImageData;
  logoDark?: StaticImageData;
  date: string;
  tagline?: string;
  description?: string[];
  href?: string;
}

const experiences: Experience[] = [
  {
    title: "Incoming SWE",
    company: "BorderPass",
    logo: BorderPassLogo,
    date: "Apr 2026 – Present",
    tagline: "AI-powered immigration platform",
    href: "https://borderpass.ai",
  },
  {
    title: "Web Developer",
    company: "UofT AI",
    logo: UofTAILogo,
    date: "Jan – Mar 2026",
    href: "https://uoft.ai",
  },
  {
    title: "Research Assistant",
    company: "RiskLab",
    logo: RiskLab,
    date: "May 2025 – Jan 2026",
    href: "https://risklab.ca",
  },
  {
    title: "Software Engineer Intern",
    company: "Ontario Public Service",
    logo: Ontario,
    logoDark: OntarioDark,
    date: "May – Aug 2025",
    tagline: "Internal collaboration platform",
    description: [
      "Built a collaboration platform serving 400+ OPS employees, with anonymous posting and AI-powered content enhancement that increased post engagement by 40% in user testing.",
      "Shipped 15+ responsive React/TypeScript components with Tailwind, optimized via lazy loading and memoization to hit a 93 Lighthouse score and sub-2s loads.",
      "Built a super admin interface on Express.js with PostgreSQL/Drizzle, cutting manual oversight time by 50%.",
    ],
    href: "https://www.ontario.ca/page/government-ontario",
  },
  {
    title: "Founding Engineer",
    company: "Wealthseed",
    logo: WealthSeedLogo,
    date: "Jan – Sep 2025",
    tagline: "Financial e-learning platform",
    description: [
      "Built the frontend of a financial e-learning platform: notification system, multi-role auth, and a responsive course management UI for students and teachers.",
      "Implemented auth with NextAuth.js (JWT + bcrypt) supporting role-based access for students, teachers, and admins across multiple schools.",
      "Built a real-time notification system with conditional rendering and state management, cutting page loads by 25%.",
    ],
    href: "https://wealthseed.ca",
  },
  {
    title: "Quantitative Finance Analyst",
    company: "Sharpe Financial Research Group",
    logo: Sharpe,
    date: "Jul 2024 – Apr 2025",
    tagline: "Algorithmic trading research",
    description: [
      "Developed and backtested algorithmic trading strategies using statistical and ML techniques.",
      "Built advanced financial models and conducted quantitative research.",
    ],
    href: "https://www.sharpe-research.com",
  },
];

const INITIAL_VISIBLE = 2;

interface HeroProps {
  articles: ArticleMetadata[];
}

const formatDate = (date: string) => {
  if (date === "Living Document") return date;
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <h2 className="text-xl font-bold mb-4">{children}</h2>;

const ExperienceRow: React.FC<{
  exp: Experience;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ exp, isOpen, onToggle }) => {
  const hasDetail = !!exp.description?.length;

  const row = (
    <div className="flex items-center gap-4 py-4">
      <div className="w-10 h-10 relative flex-shrink-0">
        {exp.logoDark ? (
          <>
            <Image
              src={exp.logo}
              alt={exp.company}
              fill
              className="object-contain rounded-md dark:hidden"
            />
            <Image
              src={exp.logoDark}
              alt={exp.company}
              fill
              className="object-contain rounded-md hidden dark:block"
            />
          </>
        ) : (
          <Image
            src={exp.logo}
            alt={exp.company}
            fill
            className="object-contain rounded-md"
          />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="text-foreground font-medium">{exp.title}</span>
          <span className="text-muted-foreground">{exp.company}</span>
        </div>
        {exp.tagline && (
          <p className="text-sm text-muted-foreground mt-0.5 truncate">
            {exp.tagline}
          </p>
        )}
      </div>
      <span className="text-sm text-muted-foreground whitespace-nowrap hidden sm:block">
        {exp.date}
      </span>
      <svg
        className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        } ${hasDetail ? "" : "opacity-30"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );

  return (
    <li>
      {hasDetail ? (
        <button
          onClick={onToggle}
          className="w-full text-left cursor-pointer hover:bg-muted/30 transition-colors rounded-sm"
          aria-expanded={isOpen}
        >
          {row}
        </button>
      ) : (
        <div>{row}</div>
      )}
      <AnimatePresence initial={false}>
        {isOpen && hasDetail && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-14 pr-4 pb-5 space-y-3">
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-4">
                {exp.description!.map((point, pi) => (
                  <li key={pi}>{point}</li>
                ))}
              </ul>
              {exp.href && (
                <Link
                  href={exp.href}
                  target="_blank"
                  className="inline-block text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                >
                  visit →
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

const Hero: React.FC<HeroProps> = ({ articles }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [showAllExperience, setShowAllExperience] = useState(false);

  const visibleExperiences = showAllExperience
    ? experiences
    : experiences.slice(0, INITIAL_VISIBLE);

  const recentArticles = articles.slice(0, 3);

  const underlineLink =
    "underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-foreground";

  return (
    <div>
      <motion.section
        className="pt-8 pb-12 flex items-start justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-sans leading-none">
          <GlitchText text="Zikora Chinedu" />
        </h1>
        <div className="w-12 h-12 md:w-14 md:h-14 relative flex-shrink-0 mt-2">
          <Image
            src={Zikora}
            alt="Zikora"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </motion.section>

      <motion.section
        className="pb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.12 }}
      >
        <SectionLabel>About</SectionLabel>
        <div className="space-y-4 text-[18px] leading-relaxed">
          <p>
            Third-year CS student at{" "}
            <Link href="https://utoronto.ca" className={underlineLink}>
              University of Toronto.
            </Link>{" "}
            Incoming SWE at{" "}
            <Link href="https://borderpass.ai" className={underlineLink}>
              BorderPass
            </Link>
            , where I&apos;ll spend the next year working on legaltech for
            immigration.
          </p>
          <p>
            Outside school and work: reading, writing, gym, soccer. Feel free to{" "}
            <Link
              href="mailto:zikora.chinedu@mail.utoronto.ca"
              className={underlineLink}
            >
              get in touch
            </Link>{" "}
            if you want to chat.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="pb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SectionLabel>Reading</SectionLabel>
        <div className="space-y-2 text-[18px] leading-relaxed">
          <p>
            Currently reading{" "}
            <Link
              href={currentlyReading.url}
              target="_blank"
              className={underlineLink}
            >
              <i>{currentlyReading.title}</i>
            </Link>{" "}
            by {currentlyReading.author}.
          </p>
          <p>
            Check out the rest of my reading{" "}
            <Link href="/reading" className={underlineLink}>
              here
            </Link>
            .
          </p>
        </div>
      </motion.section>

      <motion.section
        className="pb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.28 }}
      >
        <SectionLabel>Experience</SectionLabel>
        <ul className="divide-y divide-border">
          {visibleExperiences.map((exp, i) => (
            <ExperienceRow
              key={exp.company}
              exp={exp}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </ul>
        {experiences.length > INITIAL_VISIBLE && (
          <button
            onClick={() => {
              if (showAllExperience) setOpenIdx(null);
              setShowAllExperience(!showAllExperience);
            }}
            className="mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            {showAllExperience
              ? "Show less"
              : `Show all (${experiences.length})`}
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                showAllExperience ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        )}
      </motion.section>

      {recentArticles.length > 0 && (
        <motion.section
          className="pb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36 }}
        >
          <SectionLabel>Writing</SectionLabel>
          <ul className="divide-y divide-border">
            {recentArticles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/writing/${article.slug}`}
                  className="flex items-baseline justify-between gap-4 py-3 hover:bg-muted/30 transition-colors rounded-sm px-1 -mx-1"
                >
                  <span className="text-foreground">{article.title}</span>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {formatDate(article.date)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {articles.length > 3 && (
            <Link
              href="/writing"
              className="mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
            >
              All writing →
            </Link>
          )}
        </motion.section>
      )}
    </div>
  );
};

export default Hero;
