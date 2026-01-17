"use client";
import Layout from "../components/Layout";
import * as motion from "motion/react-client";
import Image, { StaticImageData } from "next/image";
import WealthSeedLogo from "@/app/components/icons/WealthseedLogo.jpg";
import SharpeLogo from "@/app/components/icons/SharpeLogo.png";
import EcobankLogo from "@/app/components/icons/EcobankLogo.png";
import RiskLab from "@/app/components/icons/RiskLab.png";
import Ontario from "@/app/components/icons/ontario.png";
import OntarioDark from "@/app/components/icons/ontario-dark.png";

interface Experience {
  company: string;
  title: string;
  logo: StaticImageData;
  logoDark?: StaticImageData;
  date: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: "RiskLab",
    title: "Research Assistant",
    logo: RiskLab,
    date: "May 2025 - Present",
    description: [],
  },
  {
    company: "Ontario Public Service",
    title: "Software Engineer Intern",
    logo: Ontario,
    logoDark: OntarioDark,
    date: "May 2025 - Aug 2025",
    description: [
      "Developed a collaboration platform serving 400+ OPS employees, implementing anonymous posting and AI-powered content enhancement that increased post engagement by 40% in user testing.",
      "Built 15+ responsive React/TypeScript components with Tailwind CSS, optimizing performance through lazy loading and memoization to achieve 93% Lighthouse score and sub-2-second load times.",
      "Streamlined administrative operations by creating a comprehensive super admin interface using Express.js REST APIs with PostgreSQL/Drizzle ORM, reducing manual oversight time by 50%.",
    ],
  },
  {
    company: "Wealthseed",
    title: "Founding Engineer",
    logo: WealthSeedLogo,
    date: "Jan 2025 - Sep 2025",
    description: [
      "Developed frontend of a financial e-learning platform, delivering a comprehensive notification system, multi-role authentication, and a responsive course management interface serving students and teachers.",
      "Implemented an authentication system using NextAuth.js with JWT sessions and bcrypt encryption, supporting role-based access control for students, teachers, and administrators across multiple schools.",
      "Created a real-time notification system with conditional rendering and state management, reducing page load times by 25% and improving user engagement.",
    ],
  },
  {
    company: "Sharpe Financial Research Group",
    title: "Quantitative Finance Analyst",
    logo: SharpeLogo,
    date: "July 2024 - April 2025",
    description: [
      "Developing and backtesting algorithmic trading strategies using statistical and machine learning techniques.",
      "Construct advanced financial models and conduct quantitative research.",
    ],
  },
  {
    company: "Ecobank Transnational Incorporated",
    title: "Machine Learning Intern",
    logo: EcobankLogo,
    date: "May 2024 - July 2024",
    description: [
      "Leveraged machine learning models and conducted extensive EDA to develop predictive analytics solutions, including salary prediction and loan default forecasting, enhancing data-driven decision-making.",
      "Utilized Python and NLP techniques to develop a framework for the company's chatbot, using data preprocessing, intent recognition, and response generation to enhance user interactions.",
    ],
  },
];

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative"
  >
    <div className="flex gap-6">
      {/* Timeline line */}
      <div className="hidden sm:flex flex-col items-center">
        <div className="w-14 h-14 relative flex-shrink-0 rounded-sm overflow-hidden border border-border/50 bg-card p-2">
          {exp.logoDark ? (
            <>
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                fill
                className="object-contain p-1 dark:hidden"
              />
              <Image
                src={exp.logoDark}
                alt={`${exp.company} logo`}
                fill
                className="object-contain p-1 hidden dark:block"
              />
            </>
          ) : (
            <Image
              src={exp.logo}
              alt={`${exp.company} logo`}
              fill
              className="object-contain p-1"
            />
          )}
        </div>
        {index < experiences.length - 1 && (
          <div className="w-[1px] flex-1 bg-border/50 mt-4" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        {/* Mobile logo */}
        <div className="sm:hidden w-12 h-12 relative flex-shrink-0 rounded-sm overflow-hidden border border-border/50 bg-card p-2 mb-4">
          {exp.logoDark ? (
            <>
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                fill
                className="object-contain p-1 dark:hidden"
              />
              <Image
                src={exp.logoDark}
                alt={`${exp.company} logo`}
                fill
                className="object-contain p-1 hidden dark:block"
              />
            </>
          ) : (
            <Image
              src={exp.logo}
              alt={`${exp.company} logo`}
              fill
              className="object-contain p-1"
            />
          )}
        </div>

        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h2 className="font-cormorant text-2xl font-medium group-hover:text-copper transition-colors">
              {exp.company}
            </h2>
            <span className="font-outfit text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {exp.date}
            </span>
          </div>
          <p className="font-outfit text-sm text-copper">{exp.title}</p>

          {exp.description.length > 0 && (
            <ul className="mt-4 space-y-3">
              {exp.description.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-outfit text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="text-copper mt-1 flex-shrink-0">
                    &#9670;
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const ExperiencePage = () => {
  return (
    <div className="font-outfit">
      <Layout>
        <section className="w-full py-12">
          <div className="container mx-auto">
            {/* Editorial header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="font-outfit text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Career
              </p>
              <h1 className="font-cormorant text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
                My Experience
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-[2px] bg-copper mx-auto"
              />
            </motion.div>

            {/* Timeline */}
            <div className="max-w-2xl mx-auto">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default ExperiencePage;
