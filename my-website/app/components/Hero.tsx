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
import BorderPassLogo from "@/app/components/icons/BorderPass.jpeg";
import Link from "next/link";
import * as motion from "motion/react-client";
import AnimatedBulletPoint from "./AnimatedBulletPoint";

const Hero = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    hover: { x: 4, transition: { duration: 0.2 } },
  };

  return (
    <div>
      <motion.section
        className="flex flex-col md:flex-row items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div
          className="w-full md:w-[40%] p-5 md:pl-0 flex justify-center"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.5 },
            },
          }}
        >
          <Image
            src={Zikora}
            alt="Picture of Zikora"
            width={300}
            height={300}
            className="object-contain rounded-lg"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-[60%] flex items-center justify-start md:pl-5 mt-4 md:mt-0"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.5 },
            },
          }}
        >
          <div className="font-sans text-4xl sm:text-5xl md:text-8xl text-center md:text-left w-full">
            <motion.span
              className="inline-block mr-4"
              variants={listItemVariants}
              whileHover="hover"
            >
              Zikora
            </motion.span>
            <motion.span
              className="inline-block"
              variants={listItemVariants}
              whileHover="hover"
            >
              Chinedu
            </motion.span>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="space-y-2 leading-relaxed mt-8 text-left"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="mx-4 md:mx-0">
          <AnimatedBulletPoint>
            Incoming SWE @{" "}
            <span className="font-semibold text-[#5ac3aa] dark:text-[#e5ef6f] inline-flex items-baseline">
              <Image
                src={BorderPassLogo}
                alt="BorderPass Logo"
                width={23}
                height={23}
                className="object-contain relative top-[3px] rounded-xs ml-0 mr-2"
              />
              <Link href="https://borderpass.ai">BorderPass</Link>
            </span>
          </AnimatedBulletPoint>
          <AnimatedBulletPoint>
            cs @{" "}
            <span className="font-semibold text-[#002b65] dark:text-white inline-flex items-baseline">
              <Image
                src={UofTLogo}
                alt="UofT Logo"
                width={20}
                height={20}
                className="object-contain relative top-[3px] rounded-xs ml-0"
              />
              <Link href="https://utoronto.ca/">University of Toronto</Link>
            </span>
          </AnimatedBulletPoint>
        </div>

        <div className="group hover:translate-x-1 transition-transform duration-200">
          <motion.p variants={itemVariants} className="italic text-[18px] pt-4">
            Currently:
          </motion.p>
          <motion.ul
            className="list-disc pl-5 md:pl-8 space-y-1 text-[18px] text-left"
            variants={listVariants}
          >
            <motion.li variants={listItemVariants} whileHover="hover">
              Web Developer @{" "}
              <span className="font-semibold text-[#6275dd] dark:text-[#c171e9] inline-flex items-baseline">
                <Image
                  src={UofTAILogo}
                  alt="UofTAI Logo"
                  width={20}
                  height={20}
                  className="object-contain relative top-[3px] rounded-xs ml-0 mr-2"
                />
                <Link href="https://utoronto.ca/">UofT AI</Link>
              </span>
            </motion.li>
            <motion.li variants={listItemVariants} whileHover="hover">
              Research Assistant @{" "}
              <span className="font-semibold text-[#ad1d36] dark:text-[#f4c122] inline-flex items-baseline">
                <Image
                  src={RiskLab}
                  alt="RiskLab Logo"
                  width={20}
                  height={20}
                  className="object-contain relative top-[3px] rounded-xs ml-0 mr-2"
                />
                <Link href="https://risklab.ca/">RiskLab</Link>
              </span>
            </motion.li>
            <motion.li variants={listItemVariants} whileHover="hover">
              VP Computer Science @ {""}
              <span className="inline-flex items-baseline gap-1">
                <Image
                  src={BlackInStemLogo}
                  alt="BlackInStem Logo"
                  width={20}
                  height={20}
                  className="object-contain relative top-[3px] rounded-xs ml-0"
                />
                <Link href="https://www.linkedin.com/company/black-in-stem-utm/">
                  BlackInStem.
                </Link>
              </span>
            </motion.li>
            <motion.li variants={listItemVariants} whileHover="hover">
              In my 3rd year at UofT, studying a Computer Science Major, with
              minors in Mathematics and Statistics.
            </motion.li>
            <motion.li variants={listItemVariants} whileHover="hover">
              Writing on occasion. Check my blogs out{" "}
              <Link href="/writing" className="underline">
                here.
              </Link>
            </motion.li>
          </motion.ul>
        </div>
        <div className="group hover:translate-x-1 transition-transform duration-200">
          <motion.p variants={itemVariants} className="italic text-[18px] pt-4">
            Previously:
          </motion.p>
          <motion.ul
            className="list-disc pl-5 md:pl-8 space-y-1 text-[18px] text-left"
            variants={listVariants}
          >
            <motion.li variants={listItemVariants} whileHover="hover">
              Founding Engineer @ {""}
              <span className="inline-flex items-baseline gap-1">
                <Image
                  src={WealthSeedLogo}
                  alt="Wealthseed Logo"
                  width={20}
                  height={20}
                  className="object-contain relative top-[3px] rounded-xs ml-1 mr-1"
                />
                <Link href="https://wealthseed.ca">Wealthseed.</Link>
              </span>
            </motion.li>
            <motion.li variants={listItemVariants} whileHover="hover">
              Software Engineer Intern @ {""}
              <span className="inline-flex items-baseline gap-1">
                <Image
                  src={Ontario}
                  alt="Ontario Logo"
                  width={20}
                  height={20}
                  className="object-contain relative top-[3px] rounded-xs ml-1 mr-1 dark:hidden"
                />
                <Image
                  src={OntarioDark}
                  alt="Ontario Logo"
                  width={20}
                  height={20}
                  className="object-contain relative top-[3px] rounded-xs ml-1 mr-1 hidden dark:block"
                />
                <Link href="https://www.ontario.ca/page/government-ontario">
                  Ontario Public Service.
                </Link>
              </span>
            </motion.li>
            <motion.li variants={listItemVariants} whileHover="hover">
              Quantitative Finance Analyst @ {""}
              <span className="inline-flex items-baseline gap-1">
                <Image
                  src={Sharpe}
                  alt="Sharpe Logo"
                  width={20}
                  height={20}
                  className="object-contain relative top-[3px] rounded-xs ml-1 mr-1 dark:bg-neutral-50"
                />
                <Link href="https://www.sharpe-research.com/">
                  Sharpe Financial Research Group.
                </Link>
              </span>
            </motion.li>
          </motion.ul>
        </div>

        <div className="group hover:translate-x-1 transition-transform duration-200">
          <motion.p variants={itemVariants} className="italic text-[18px] pt-4">
            Some things about me:
          </motion.p>
          <motion.ul
            className="list-disc pl-5 md:pl-8 space-y-1 text-[18px] text-left"
            variants={listVariants}
          >
            <motion.li variants={listItemVariants} whileHover="hover">
              I&apos;m interested in machine learning and software engineering,
              and in particular its intersection with the financial space.{" "}
            </motion.li>
            <motion.li variants={listItemVariants} whileHover="hover">
              I am an avid reader. You can check out my reading list/reviews{" "}
              <Link href="/reading" className="underline">
                here
              </Link>
              .{" "}
            </motion.li>
            <motion.li variants={listItemVariants} whileHover="hover">
              I love getting active. I play soccer (Arsenal fan), basketball,
              and I hit the gym.{" "}
            </motion.li>
            <motion.li variants={listItemVariants} whileHover="hover">
              I enjoy playing the piano, playing chess, doing{" "}
              <Link
                href="https://monkeytype.com/profile/zikompo"
                className="underline"
              >
                typing tests
              </Link>{" "}
              and watching YouTube mini-documentaries.
            </motion.li>
            <motion.li variants={listItemVariants} whileHover="hover">
              I love talking about economics, current affairs, and philosophical
              questions. You can get in{" "}
              <Link
                href="mailto:zikora.chinedu@yahoo.com"
                className="underline"
              >
                contact
              </Link>{" "}
              with me if you want to have a discussion!
            </motion.li>
          </motion.ul>
        </div>
      </motion.section>
    </div>
  );
};
export default Hero;
