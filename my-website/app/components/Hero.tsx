"use client";

import React from "react";
import Image from "next/image";
import WealthSeedLogo from "@/app/components/icons/WealthseedLogo.jpg";
import UofTLogo from "@/app/components/icons/UofTLogo.jpg";
import BlackInStemLogo from "@/app/components/icons/blackinstem.jpg";
import Zikora from "@/app/components/icons/zikora.jpg";
import RiskLab from "@/app/components/icons/RiskLab.png";
import Ontario from "@/app/components/icons/ontario.png";
import OntarioDark from "@/app/components/icons/ontario-dark.png";
import Sharpe from "@/app/components/icons/sharpe.webp";
import UofTAILogo from "@/app/components/icons/UofTAI_Logo.png";
import Link from "next/link";
import * as motion from "motion/react-client";

interface RoleCardProps {
  title: string;
  organization: string;
  logo: typeof UofTLogo;
  logoDark?: typeof UofTLogo;
  href: string;
  accentColor?: string;
  delay?: number;
}

const RoleCard: React.FC<RoleCardProps> = ({
  title,
  organization,
  logo,
  logoDark,
  href,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 + delay }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className="group relative"
  >
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div className="relative overflow-hidden rounded-sm border border-border/50 bg-card/50 backdrop-blur-sm p-4 transition-all duration-300 group-hover:border-copper/50 group-hover:shadow-lg group-hover:shadow-copper/5">
        {/* Geometric accent */}
        <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-2 right-2 w-8 h-[1px] bg-copper/40" />
          <div className="absolute top-2 right-2 w-[1px] h-8 bg-copper/40" />
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src={logo}
              alt={`${organization} logo`}
              fill
              className={`object-contain rounded-sm ${logoDark ? "dark:hidden" : ""}`}
            />
            {logoDark && (
              <Image
                src={logoDark}
                alt={`${organization} logo`}
                fill
                className="object-contain rounded-sm hidden dark:block"
              />
            )}
          </div>
          <div className="min-w-0">
            <p className="font-outfit text-xs uppercase tracking-widest text-muted-foreground/70">
              {title}
            </p>
            <p className="font-cormorant text-lg font-medium truncate group-hover:text-copper transition-colors">
              {organization}
            </p>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-200px)] flex flex-col justify-center">
      {/* Decorative elements */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-copper/30 to-transparent origin-left"
      />

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-8">
        {/* Left column - Name and intro */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          {/* Name display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-cormorant text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight leading-[0.9]"
            >
              <span className="block">Zikora</span>
              <span className="block text-copper">Chinedu</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "6rem" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-[2px] bg-copper mt-6"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-outfit text-lg sm:text-xl text-muted-foreground max-w-lg mb-8"
          >
            Computer Science student exploring the intersection of{" "}
            <span className="text-foreground font-medium">
              machine learning
            </span>
            , <span className="text-foreground font-medium">finance</span>, and{" "}
            <span className="text-foreground font-medium">
              software engineering
            </span>
            .
          </motion.p>

          {/* Current roles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-3"
          >
            <p className="font-outfit text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Currently
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <RoleCard
                title="CS Student"
                organization="University of Toronto"
                logo={UofTLogo}
                href="https://utoronto.ca/"
                delay={0}
              />
              <RoleCard
                title="Research Assistant"
                organization="RiskLab"
                logo={RiskLab}
                href="https://risklab.ca/"
                delay={0.1}
              />
              <RoleCard
                title="Web Developer"
                organization="UofT AI"
                logo={UofTAILogo}
                href="https://uoft.ai/"
                delay={0.2}
              />
              <RoleCard
                title="VP Computer Science"
                organization="BlackInStem"
                logo={BlackInStemLogo}
                href="https://www.linkedin.com/company/black-in-stem-utm/"
                delay={0.3}
              />
            </div>
          </motion.div>
        </div>

        {/* Right column - Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Geometric frame */}
            <div className="absolute -inset-4 border border-copper/20 rounded-sm" />
            <div className="absolute -inset-8 border border-border/30 rounded-sm hidden lg:block" />

            {/* Photo */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 overflow-hidden rounded-sm">
              <Image
                src={Zikora}
                alt="Zikora Chinedu"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Corner accents */}
            <div className="absolute -bottom-2 -right-2 w-12 h-12">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-copper" />
              <div className="absolute bottom-0 right-0 w-[2px] h-full bg-copper" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Previous experience section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-12 pt-8 border-t border-border/50"
      >
        <p className="font-outfit text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Previously
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <RoleCard
            title="Founding Engineer"
            organization="Wealthseed"
            logo={WealthSeedLogo}
            href="https://wealthseed.ca"
            delay={0}
          />
          <RoleCard
            title="Software Engineer Intern"
            organization="Ontario Public Service"
            logo={Ontario}
            logoDark={OntarioDark}
            href="https://www.ontario.ca/page/government-ontario"
            delay={0.1}
          />
          <RoleCard
            title="Quantitative Analyst"
            organization="Sharpe Financial"
            logo={Sharpe}
            href="https://www.sharpe-research.com/"
            delay={0.2}
          />
        </div>
      </motion.section>

      {/* About section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mt-12 pt-8 border-t border-border/50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <p className="font-outfit text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              About
            </p>
            <p className="font-cormorant text-2xl font-light leading-relaxed text-foreground/90">
              Third-year student pursuing a Computer Science major with minors
              in Mathematics and Statistics.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Interests */}
              <motion.div
                whileHover={{ y: -2 }}
                className="p-5 rounded-sm bg-muted/30 border border-border/30"
              >
                <p className="font-outfit text-xs uppercase tracking-[0.15em] text-copper mb-3">
                  Interests
                </p>
                <ul className="space-y-2 font-outfit text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">&#9670;</span>
                    <span>Machine learning & financial technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">&#9670;</span>
                    <span>
                      <Link
                        href="/reading"
                        className="underline hover:text-foreground transition-colors"
                      >
                        Reading
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/writing"
                        className="underline hover:text-foreground transition-colors"
                      >
                        writing
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">&#9670;</span>
                    <span>Economics, philosophy & current affairs</span>
                  </li>
                </ul>
              </motion.div>

              {/* Activities */}
              <motion.div
                whileHover={{ y: -2 }}
                className="p-5 rounded-sm bg-muted/30 border border-border/30"
              >
                <p className="font-outfit text-xs uppercase tracking-[0.15em] text-copper mb-3">
                  When Not Coding
                </p>
                <ul className="space-y-2 font-outfit text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">&#9670;</span>
                    <span>Soccer (Arsenal), basketball & gym</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">&#9670;</span>
                    <span>Piano, chess & poker</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">&#9670;</span>
                    <span>
                      <Link
                        href="https://monkeytype.com/profile/zikompo"
                        target="_blank"
                        className="underline hover:text-foreground transition-colors"
                      >
                        Typing tests
                      </Link>{" "}
                      & YouTube docs
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="mt-12 pt-8 border-t border-border/50"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-outfit text-base text-muted-foreground max-w-xl">
            Open to{" "}
            <span className="text-foreground">
              software engineering internships
            </span>{" "}
            and <span className="text-foreground">freelance opportunities</span>
            . Have a project in mind?
          </p>
          <Link
            href="mailto:zikora.chinedu@yahoo.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-foreground text-background font-outfit text-sm font-medium hover:bg-copper transition-colors group"
          >
            Get in touch
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              className="inline-block"
            >
              &#8594;
            </motion.span>
          </Link>
        </div>
      </motion.section>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-copper/30 to-transparent origin-right"
      />
    </div>
  );
};

export default Hero;
