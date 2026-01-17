"use client";
import Layout from "../components/Layout";
import Heritrace from "@/app/components/icons/Heritrace.png";
import Salary from "@/app/components/icons/salary.png";
import Sokoban from "@/app/components/icons/sokoban.png";
import Paint from "@/app/components/icons/paint.png";
import Loan from "@/app/components/icons/loan.png";
import LocateAble from "@/app/components/icons/locateable.jpg";
import Pothole from "@/app/components/icons/pothole.jpg";
import Lumen from "@/app/components/icons/lumen.png";
import Trading from "@/app/components/icons/trading.jpeg";

import React, { useState } from "react";
import * as motion from "motion/react-client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { StaticImageData } from "next/image";
import { ProjectLinkItem } from "@/components/ui/project-card";

import {
  ProjectCardRoot,
  ProjectCardImage,
  ProjectCardContent,
  ProjectCardTitle,
  ProjectCardHackathonBadge,
  ProjectCardDescription,
  ProjectCardTechnologies,
  ProjectCardLinks,
} from "@/components/ui/project-card";

import { FaGithub, FaYoutube } from "react-icons/fa";
import DevpostIcon from "@/app/components/DevpostIcon";

const sampleProjectsData: Project[] = [
  {
    id: "proj8",
    title: "Lumen",
    description:
      "Lumen is a mental wellness companion app that analyzes user emotions and provides therapeutic mini-games for personalized emotional support and trend tracking.",
    imageUrl: Lumen,
    technologies: [
      "React",
      "Vite",
      "Gemini API",
      "Typescript",
      "MongoDB",
      "Unity",
      "Framer Motion",
    ],
    isHackathonWinner: true,
    links: [
      {
        href: "https://devpost.com/software/lumen-qsgcn4",
        label: "Devpost",
        icon: <DevpostIcon className="h-4 w-4" />,
      },
    ],
  },
  {
    id: "proj7",
    title: "Pot-Hole Risk Assessor",
    description:
      "Hardware creation that is meant to be placed underground beneath important roads, and assesses the likelihood of a pothole forming by using sensors to gather data.",
    imageUrl: Pothole,
    technologies: ["Arduino"],
    isHackathonWinner: true,
    links: [
      {
        href: "https://youtu.be/Lw7XOLuH0Jc",
        label: "Demo",
        icon: <FaYoutube className="h-4 w-4" />,
      },
      {
        href: "https://devpost.com/software/pot-hole-risk-assessor",
        label: "Devpost",
        icon: <DevpostIcon className="h-4 w-4" />,
      },
    ],
  },
  {
    id: "proj1",
    title: "Heritrace",
    description:
      "A web application to figure out where you're from based on your name.",
    imageUrl: Heritrace,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "Prisma",
    ],
    links: [
      {
        href: "https://github.com/arsencameron/deerhacks25",
        label: "GitHub",
        icon: <FaGithub size="1rem" />,
      },
      {
        href: "https://youtu.be/OO03esVLhNg",
        label: "Demo",
        icon: <FaYoutube className="h-4 w-4" />,
      },
      {
        href: "https://devpost.com/software/heritrace",
        label: "Devpost",
        icon: <DevpostIcon className="h-4 w-4" />,
      },
    ],
  },
  {
    id: "proj2",
    title: "Salary Prediction Model",
    description:
      "A model for predicting salaries. It takes the highest level of educational attainment, the person's gender, their current job and their years of experience and predicts their salary given their information.",
    imageUrl: Salary,
    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "NumPy",
      "Seaborn",
    ],
    links: [
      {
        href: "https://github.com/zikompo/Salary-ML-Model",
        label: "Source Code",
        icon: <FaGithub size="1rem" />,
      },
    ],
  },
  {
    id: "proj3",
    title: "Loan Prediction Model",
    description:
      "A model created to predict the likelihood that an individual would default on their loans using various numerical and categorical factors.",
    imageUrl: Loan,
    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "NumPy",
      "Seaborn",
    ],
    links: [
      {
        href: "https://github.com/zikompo/Loan_ML_Model",
        label: "Source Code",
        icon: <FaGithub size="1rem" />,
      },
    ],
  },
  {
    id: "proj4",
    title: "LocateAble",
    description:
      "LocateAble is a website that fosters inclusivity by allowing users to post reviews, rate, and search for locations on Google Maps based on accessibility, covering a wide range of perspectives.",
    imageUrl: LocateAble,
    technologies: [
      "React",
      "PostgreSQL",
      "Gemini API",
      "Google Maps API",
      "Python",
      "Supabase",
      "Flask",
    ],
    links: [
      {
        href: "https://github.com/arsencameron/uofthacks12",
        label: "Source Code",
        icon: <FaGithub size="1rem" />,
      },
    ],
  },
  {
    id: "proj5",
    title: "Sokoban",
    description: "Sokoban, built in Assembly.",
    imageUrl: Sokoban,
    technologies: ["Assembly", "RISC-V 32"],
    links: [
      {
        href: "https://youtu.be/mxxnWkp0m3U",
        label: "Demo",
        icon: <FaYoutube className="h-4 w-4" />,
      },
    ],
  },
  {
    id: "proj6",
    title: "Paint Application",
    description: "A paint application, built using Java and JavaFX.",
    imageUrl: Paint,
    technologies: ["Java", "JavaFX"],
    links: [
      {
        href: "https://youtu.be/l3glq9MeplM",
        label: "Demo",
        icon: <FaYoutube className="h-4 w-4" />,
      },
    ],
  },
  {
    id: "proj9",
    title: "Trading Simulator",
    description:
      "A stock trading simulator with ML prediction engine enabling users to test custom models against real-time market data.",
    imageUrl: Trading,
    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "NumPy",
      "React",
      "Node.js",
      "MongoDB",
    ],
    links: [
      {
        href: "https://github.com/zikompo/Trading_Simulator",
        label: "Source Code",
        icon: <FaGithub className="h-4 w-4" />,
      },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  technologies: string[];
  links: ProjectLinkItem[];
  isHackathonWinner?: boolean;
}

export default function ProjectsPage() {
  const [, setView] = useState("carousel");

  return (
    <div className="flex flex-col min-h-screen font-outfit">
      <Layout wide={true}>
        <section className="w-full py-12">
          <div className="container mx-auto px-4">
            {/* Editorial header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="font-outfit text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Portfolio
              </p>
              <h1 className="font-cormorant text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
                My Projects
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-[2px] bg-copper mx-auto"
              />
            </motion.div>

            <Tabs
              defaultValue="carousel"
              className="w-full"
              onValueChange={(value) => setView(value)}
            >
              <TabsList className="grid w-full grid-cols-2 max-w-xs mx-auto mb-8 bg-muted/50">
                <TabsTrigger
                  value="carousel"
                  className="hover:cursor-pointer font-outfit text-sm data-[state=active]:bg-foreground data-[state=active]:text-background"
                >
                  Carousel
                </TabsTrigger>
                <TabsTrigger
                  value="grid"
                  className="hover:cursor-pointer font-outfit text-sm data-[state=active]:bg-foreground data-[state=active]:text-background"
                >
                  Grid
                </TabsTrigger>
              </TabsList>
              <TabsContent value="carousel">
                <Carousel
                  opts={{
                    align: "start",
                    loop: sampleProjectsData.length > 2,
                  }}
                  className="w-full lg:w-[50%] sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
                >
                  <CarouselContent className="-ml-4">
                    {sampleProjectsData.map((project, index) => (
                      <CarouselItem
                        key={project.id}
                        className="pl-4 basis-full"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="h-full"
                        >
                          <ProjectCardRoot href={project.links[0]?.href}>
                            <ProjectCardImage
                              src={project.imageUrl}
                              alt={project.title}
                            />
                            <ProjectCardContent>
                              <div className="flex items-start justify-between gap-2">
                                <ProjectCardTitle className="flex-1 min-w-0 font-cormorant">
                                  {project.title}
                                </ProjectCardTitle>
                                {project.isHackathonWinner && (
                                  <ProjectCardHackathonBadge className="flex-shrink-0" />
                                )}
                              </div>
                              <ProjectCardDescription className="font-outfit">
                                {project.description}
                              </ProjectCardDescription>
                              <ProjectCardTechnologies
                                technologies={project.technologies}
                              />
                            </ProjectCardContent>
                            <ProjectCardLinks links={project.links} />
                          </ProjectCardRoot>
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden sm:flex hover:cursor-pointer" />
                  <CarouselNext className="hidden sm:flex hover:cursor-pointer" />
                </Carousel>
              </TabsContent>
              <TabsContent value="grid">
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {sampleProjectsData.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <ProjectCardRoot href={project.links[0]?.href}>
                          <ProjectCardImage
                            src={project.imageUrl}
                            alt={project.title}
                          />
                          <ProjectCardContent>
                            <div className="flex items-start justify-between gap-2">
                              <ProjectCardTitle className="flex-1 min-w-0 font-cormorant">
                                {project.title}
                              </ProjectCardTitle>
                              {project.isHackathonWinner && (
                                <ProjectCardHackathonBadge className="flex-shrink-0" />
                              )}
                            </div>
                            <ProjectCardDescription className="font-outfit">
                              {project.description}
                            </ProjectCardDescription>
                            <ProjectCardTechnologies
                              technologies={project.technologies}
                            />
                          </ProjectCardContent>
                          <ProjectCardLinks links={project.links} />
                        </ProjectCardRoot>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </Layout>
    </div>
  );
}
