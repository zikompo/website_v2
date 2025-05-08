"use client";
import Hero from "@/app/components/Hero";
import Layout from "../components/Layout";
import WealthSeedLogo from '@/app/components/icons/WealthseedLogo.jpg'

import React from "react";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { StaticImageData } from "next/image";
import { ProjectLinkItem } from "@/components/ui/project-card"; // Import from your new component

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

import { Github, ExternalLink as LinkIcon } from "lucide-react";

// Sample Project Data (using the Project interface)
const sampleProjectsData: Project[] = [
  {
    id: "proj1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with Next.js, Stripe integration, and admin dashboard.",
    imageUrl: WealthSeedLogo, // Replace with your image URL or static import
    // imageUrl: myProjectImage1, // Example with static import
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    links: [
      { href: "https://github.com/yourusername/project1", label: "GitHub", icon: <Github className="h-4 w-4" /> },
      { href: "https://project1.example.com", label: "Live Demo", icon: <LinkIcon className="h-4 w-4" /> },
    ],
  },
  {
    id: "proj2",
    title: "Portfolio Website V2",
    description: "The very website you are looking at, built with Astro and showcasing various projects.",
    imageUrl: WealthSeedLogo, // Replace
    technologies: ["Astro", "React", "Tailwind CSS", "MDX"],
    links: [
      { href: "https://github.com/yourusername/portfolio-v2", label: "Source Code", icon: <Github className="h-4 w-4" /> },
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

export function ProjectsDisplay() { // Renamed from CarouselDemo
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          My Projects
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: sampleProjectsData.length > 2, // Loop if enough items
          }}
          className="w-[50%] max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto" // Responsive max width
        >
          <CarouselContent className="-ml-4">
            {sampleProjectsData.map((project) => (
              <CarouselItem key={project.id} className="pl-4 basis-full"> {/* Added group for hover effects */}
                <div className="p-1 h-full"> {/* Ensure padding doesn't break card layout */}
                  <ProjectCardRoot>
                    <ProjectCardImage src={project.imageUrl} alt={project.title} />
                    <ProjectCardContent>
                      <ProjectCardTitle>{project.title}</ProjectCardTitle>
                      <ProjectCardDescription>{project.description}</ProjectCardDescription>
                      <ProjectCardTechnologies technologies={project.technologies} />
                    </ProjectCardContent>
                    {/* Links are part of the main card flow, pushed down by content or mt-auto */}
                    <ProjectCardLinks links={project.links} />
                  </ProjectCardRoot>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" /> {/* Hide on small screens if crowded */}
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 text-zinc-800 font-mono">
      <Layout>
        <div className = "flex flex-col items-center justify-center">
          <ProjectsDisplay />
        </div>
      </Layout>
    </div>
  );
}
