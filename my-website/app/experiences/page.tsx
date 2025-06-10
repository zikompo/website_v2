"use client";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import WealthSeedLogo from "@/app/components/icons/WealthseedLogo.jpg";
import SharpeLogo from "@/app/components/icons/SharpeLogo.png";
import EcobankLogo from "@/app/components/icons/EcobankLogo.png";
import RiskLab from "@/app/components/icons/RiskLab.png";

interface Experience {
  company: string;
  title: string;
  logo: StaticImageData;
  date: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: "Wealthseed",
    title: "Full Stack Developer",
    logo: WealthSeedLogo,
    date: "Jan 2025 - Present",
    description: [
      "Collaborating with a team to build a financial literacy platform that educates users on investing, budgeting, and saving.",
      "Implementing secure API endpoints using Next.js, PostgreSQL, and TypeScript to manage student-teacher access control.",
      "Optimizing database queries and authentication flows to enhance platform performance and security.",
    ],
  },
  {
    company: "Sharpe Financial Research Group",
    title: "Quantitative Finance Analyst",
    logo: SharpeLogo, // Placeholder
    date: "July 2024 - Present",
    description: [
      "Developing and backtesting algorithmic trading strategies using statistical and machine learning techniques.",
      "Construct advanced financial models and conduct quantitative research.",
    ],
  },
  {
    company: "Ecobank Transnational Incorporated",
    title: "Machine Learning Intern",
    logo: EcobankLogo, // Placeholder
    date: "May 2024 - July 2024",
    description: [
      "Leveraged machine learning models and conducted extensive EDA to develop predictive analytics solutions, including salary prediction and loan default forecasting, enhancing data-driven decision-making.",
      "Utilized Python and NLP techniques to develop a framework for the company's chatbot, using data preprocessing, intent recognition, and response generation to enhance user interactions.",
    ],
  },
  {
    company: "RiskLab",
    title: "Research Assistant",
    logo: RiskLab,
    date: "Date Range Placeholder",
    description: [],
  },
];

const ExperiencePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="font-crimson-pro">
      <Layout>
        <section className="w-full py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">My Experience</h1>
            <motion.div
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold">{exp.company}</h2>
                      <h3 className="text-xl font-medium text-gray-700">{exp.title}</h3>
                      <p className="text-sm text-gray-500 mb-4">{exp.date}</p>
                      <ul className="list-disc list-inside space-y-2">
                        {exp.description.map((point, i) => (
                          <li key={i} className="text-gray-800">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default ExperiencePage; 