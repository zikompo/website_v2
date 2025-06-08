"use client";
import Hero from "@/app/components/Hero";
import Layout from "../components/Layout";
import WealthSeedLogo from "@/app/components/icons/WealthseedLogo.jpg";
import Heritrace from "@/app/components/icons/Heritrace.png";

import React, { useState } from "react";

import {Card, CardContent} from "@/components/ui/card";
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

import {Github, ExternalLink as LinkIcon} from "lucide-react";

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
                href: "https://github.com/yourusername/project1",
                label: "GitHub",
                icon: <Github className="h-4 w-4"/>,
            },
            {
                href: "https://project1.example.com",
                label: "Live Demo",
                icon: <LinkIcon className="h-4 w-4"/>,
            },
        ],
    },
    {
        id: "proj2",
        title: "Portfolio Website V2",
        description:
            "The very website you are looking at, built with Astro and showcasing various projects.",
        imageUrl: WealthSeedLogo, // Replace
        technologies: ["Astro", "React", "Tailwind CSS", "MDX"],
        links: [
            {
                href: "https://github.com/yourusername/portfolio-v2",
                label: "Source Code",
                icon: <Github className="h-4 w-4"/>,
            },
        ],
    },
    {
        id: "proj3",
        title: "Portfolio Website V2",
        description:
            "The very website you are looking at, built with Astro and showcasing various projects.",
        imageUrl: WealthSeedLogo, // Replace
        technologies: ["Astro", "React", "Tailwind CSS", "MDX"],
        links: [
            {
                href: "https://github.com/yourusername/portfolio-v2",
                label: "Source Code",
                icon: <Github className="h-4 w-4"/>,
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
    const [view, setView] = useState("carousel");
    // Renamed from CarouselDemo
    return (
        <section className="w-full py-16">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    My Projects
                </h2>
                <Tabs defaultValue="carousel" className="w-full" onValueChange={(value) => setView(value)}>
                    <TabsList className="grid w-full grid-cols-2 max-w-xs mx-auto mb-8">
                        <TabsTrigger value="carousel">Carousel</TabsTrigger>
                        <TabsTrigger value="grid">Grid</TabsTrigger>
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
                                        <div className="p-1 h-full">
                                            {" "}
                                            {/* Ensure padding doesn't break card layout */}
                                            <ProjectCardRoot>
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
                            <CarouselPrevious className="hidden sm:flex" />{" "}
                            {/* Hide on small screens if crowded */}
                            <CarouselNext className="hidden sm:flex" />
                        </Carousel>
                    </TabsContent>
                    <TabsContent value="grid">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sampleProjectsData.map((project) => (
                                <ProjectCardRoot key={project.id}>
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
