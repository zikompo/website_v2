"use client";
import Layout from "../components/Layout";
import Heritrace from "@/app/components/icons/Heritrace.png";
import Salary from "@/app/components/icons/salary.png";
import Sokoban from "@/app/components/icons/sokoban.png";
import Paint from "@/app/components/icons/paint.png";
import Loan from "@/app/components/icons/loan.png";
import LocateAble from "@/app/components/icons/locateable.jpg";
import Pothole from "@/app/components/icons/pothole.jpg";

import React, { useState } from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {StaticImageData} from "next/image";
import {ProjectLinkItem} from "@/components/ui/project-card"; // Import from your new component

// Import your new ProjectCard components
import {
    ProjectCardRoot,
    ProjectCardImage,
    ProjectCardContent,
    ProjectCardTitle,
    ProjectCardDescription,
    ProjectCardTechnologies,
    ProjectCardLinks,
} from "@/components/ui/project-card"; // Adjust path if needed

import { FaGithub, FaYoutube } from "react-icons/fa";
import DevpostIcon from "@/app/components/DevpostIcon";

// Sample Project Data (using the Project interface)
const sampleProjectsData: Project[] = [
    {
        id: "proj1",
        title: "Heritrace",
        description:
            "A web application to figure out where you're from based on your name.",
        imageUrl: Heritrace, // Replace with your image URL or static import
        // imageUrl: myProjectImage1, // Example with static import
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
                icon: <FaGithub size="1rem"/>,
            },
            {
                href: "https://youtu.be/OO03esVLhNg",
                label: "Demo",
                icon: <FaYoutube className="h-4 w-4"/>,
            },
            {
                href: "https://devpost.com/software/heritrace",
                label: "Devpost",
                icon: <DevpostIcon className="h-4 w-4"/>,
            }
        ],
    },
    {
        id: "proj2",
        title: "Salary Prediction Model",
        description:
            "A model for predicting salaries. It takes the highest level of educational attainment, \
            the person's gender, their current job and their years of experience and predicts their salary given their information.",
        imageUrl: Salary, // Replace
        technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "NumPy", "Seaborn"],
        links: [
            {
                href: "https://github.com/zikompo/Salary-ML-Model",
                label: "Source Code",
                icon: <FaGithub size="1rem"/>,
            },
        ],
    },
    {
        id: "proj3",
        title: "Loan Prediction Model",
        description:
            "A model created to predict the likelihood that an individual would default\
             on their loans using various numerical and categorical factors. ",
        imageUrl: Loan, // Replace
        technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "NumPy", "Seaborn"],
        links: [
            {
                href: "https://github.com/zikompo/Loan_ML_Model",
                label: "Source Code",
                icon: <FaGithub size="1rem"/>,
            },
        ],
    },
    {
        id: "proj4",
        title: "LocateAble",
        description:
            "LocateAble is a website that fosters inclusivity by allowing users to post reviews, rate, \
            and search for locations on Google Maps based on accessibility, covering a wide range of perspectives.",
        imageUrl: LocateAble, // Replace
        technologies: ["React", "PostgreSQL", "Gemini API", "Google Maps API", "Python", "Supabase", "Flask"],
        links: [
            {
                href: "https://github.com/arsencameron/uofthacks12",
                label: "Source Code",
                icon: <FaGithub size="1rem"/>,
            },
        ],
    },
    {
        id: "proj5",
        title: "Sokoban",
        description:
            "Sokoban, built in Assembly.",
        imageUrl: Sokoban, // Replace
        technologies: ["Assembly", "RISC-V 32"],
        links: [
            {
                href: "https://youtu.be/mxxnWkp0m3U",
                label: "Demo",
                icon: <FaYoutube className="h-4 w-4"/>,
            },
        ],
    },
    {
        id: "proj6",
        title: "Paint Application",
        description:
            "A paint application, built using Java and JavaFX.",
        imageUrl: Paint, // Replace
        technologies: ["Java", "JavaFX"],
        links: [
            {
                href: "https://youtu.be/l3glq9MeplM",
                label: "Demo",
                icon: <FaYoutube className="h-4 w-4"/>,
            },
        ],
    },
    {
        id: "proj7",
        title: "Pot-Hole Risk Assessor (Hackathon Winnner)",
        description:
            "Hardware creation that is meant to be placed underground beneath important roads, and assesses the \
            likelihood of a pothole forming by using sensors to gather data.",
        imageUrl: Pothole, // Replace
        technologies: ["Arduino"],
        links: [
            {
                href: "https://youtu.be/Lw7XOLuH0Jc",
                label: "Demo",
                icon: <FaYoutube className="h-4 w-4"/>,
            },
            {
                href: "https://devpost.com/software/pot-hole-risk-assessor",
                label: "Devpost",
                icon: <DevpostIcon className="h-4 w-4"/>,
            },

        ],
    },


    // Add more projects...
];

export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string | StaticImageData; // Supports both external URLs and static imports
    technologies: string[];
    links: ProjectLinkItem[];
}

export function ProjectsDisplay() {
    const [, setView] = useState("carousel");
    // Renamed from CarouselDemo
    return (
        <section className="w-full py-16">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    My Projects
                </h2>
                <Tabs defaultValue="carousel" className="w-full" onValueChange={(value) => setView(value)}>
                    <TabsList className="grid w-full grid-cols-2 max-w-xs mx-auto mb-8">
                        <TabsTrigger value="carousel" className="hover:cursor-pointer">Carousel</TabsTrigger>
                        <TabsTrigger value="grid" className="hover:cursor-pointer">Grid</TabsTrigger>
                    </TabsList>
                    <TabsContent value="carousel">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: sampleProjectsData.length > 2, // Loop if enough items
                            }}
                            className="w-full lg:w-[50%] sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto" // Responsive max width
                        >
                            <CarouselContent className="-ml-4">
                                {sampleProjectsData.map((project) => (
                                    <CarouselItem key={project.id}
                                        className="pl-4 basis-full">
                                        {" "}
                                        {/* Added group for hover effects */}
                                        <div className="h-full">
                                            {" "}
                                            {/* Ensure padding doesn't break card layout */}
                                            <ProjectCardRoot href={project.links[0]?.href}>
                                                <ProjectCardImage
                                                    src={project.imageUrl}
                                                    alt={project.title}
                                                />
                                                <ProjectCardContent>
                                                    <ProjectCardTitle>{project.title}</ProjectCardTitle>
                                                    <ProjectCardDescription>
                                                        {project.description}
                                                    </ProjectCardDescription>
                                                    <ProjectCardTechnologies
                                                        technologies={project.technologies}
                                                    />
                                                </ProjectCardContent>
                                                {/* Links are part of the main card flow, pushed down by content or mt-auto */}
                                                <ProjectCardLinks
                                                    links={project.links} />
                                            </ProjectCardRoot>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden sm:flex hover:cursor-pointer" />{" "}
                            {/* Hide on small screens if crowded */}
                            <CarouselNext className="hidden sm:flex hover:cursor-pointer" />
                        </Carousel>
                    </TabsContent>
                    <TabsContent value="grid">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sampleProjectsData.map((project) => (
                                <ProjectCardRoot key={project.id} href={project.links[0]?.href}>
                                    <ProjectCardImage
                                        src={project.imageUrl}
                                        alt={project.title}
                                    />
                                    <ProjectCardContent>
                                        <ProjectCardTitle>{project.title}</ProjectCardTitle>
                                        <ProjectCardDescription>
                                            {project.description}
                                        </ProjectCardDescription>
                                        <ProjectCardTechnologies
                                            technologies={project.technologies}
                                        />
                                    </ProjectCardContent>
                                    <ProjectCardLinks
                                        links={project.links} />
                                </ProjectCardRoot>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <div className="font-crimson-pro">
            <Layout wide={true}>
                <ProjectsDisplay/>
            </Layout>
        </div>
    );
}
