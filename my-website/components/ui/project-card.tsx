// components/ui/project-card.tsx
"use client"; // If these components or parts of them are client-side

import * as React from "react";
import Image, { StaticImageData } from "next/image"; // Using next/image for optimized images
import { cn } from "@/lib/utils";
import { Github, ExternalLink as LinkIcon } from "lucide-react"; // Example icons for links

// --- Main Project Card Container ---
// This is the main wrapper for your project card
function ProjectCardRoot({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="project-card"
      className={cn(
        "bg-card text-card-foreground flex h-full flex-col overflow-hidden rounded-xl border shadow-sm", // Added h-full
        className
      )}
      {...props}
    />
  );
}

// --- Project Image ---
// For displaying the project's visual
interface ProjectCardImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
}
function ProjectCardImage({ src, alt, className }: ProjectCardImageProps) {
  return (
    <div className={cn("relative aspect-video w-full overflow-hidden", className)}>
      <Image src={src} alt={alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" /> {/* Added group-hover for a subtle effect, assumes parent has 'group' class if desired */}
    </div>
  );
}

// --- Project Content Area ---
// This will hold the textual content like title, description, and technologies
function ProjectCardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="project-card-content"
      className={cn("flex flex-1 flex-col p-6", className)} // flex-1 allows this to grow and push footer down
      {...props}
    />
  );
}

// --- Project Title ---
function ProjectCardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="project-card-title"
      className={cn("text-xl font-semibold leading-tight text-card-foreground", className)}
      {...props}
    />
  );
}

// --- Project Description ---
function ProjectCardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="project-card-description"
      className={cn("mt-2 text-sm text-muted-foreground", className)} // Added mt-2 for spacing
      {...props}
    />
  );
}

// --- Project Technologies ---
// To list the technologies used
interface ProjectCardTechnologiesProps {
  technologies: string[];
  className?: string;
}
function ProjectCardTechnologies({ technologies, className }: ProjectCardTechnologiesProps) {
  if (!technologies?.length) return null;
  return (
    <div data-slot="project-card-technologies" className={cn("mt-4 flex flex-wrap gap-2", className)}>
      {technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

// --- Project Links (Footer) ---
// For GitHub, live demo links, etc.
export interface ProjectLinkItem { // Exporting for use in page data
  href: string;
  label: string;
  icon?: React.ReactNode;
}
interface ProjectCardLinksProps {
  links: ProjectLinkItem[];
  className?: string;
}
function ProjectCardLinks({ links, className }: ProjectCardLinksProps) {
  if (!links?.length) return null;
  return (
    <div data-slot="project-card-links" className={cn("mt-auto border-t px-6 py-4", className)}> {/* mt-auto pushes this to the bottom of ProjectCardContent if it's a flex child */}
      <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-primary rounded"
          >
            {link.icon || <LinkIcon className="h-4 w-4" />}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export {
  ProjectCardRoot,
  ProjectCardImage,
  ProjectCardContent,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardTechnologies,
  ProjectCardLinks,
  // No need to export ProjectLinkItem directly from here if imported elsewhere,
  // but it's fine if you prefer to have all related types exported from this module.
};