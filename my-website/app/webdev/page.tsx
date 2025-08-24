"use client";
import React from "react";
import Layout from "../components/Layout";
import TMG from "@/app/components/icons/tmg.png";
import { StaticImageData } from "next/image";
import {
  ProjectCardRoot,
  ProjectCardImage,
  ProjectCardContent,
  ProjectCardTitle,
} from "@/components/ui/project-card";

// Website data structure
interface Website {
  id: string;
  name: string;
  url: string;
  logo: string | StaticImageData;
}

const websites: Website[] = [
  {
    id: "tmg",
    name: "TMG Concrete",
    url: "https://tmgconcreteinc.com",
    logo: TMG,
  },
];

const WebDevPage = () => {
  return (
    <div className="flex flex-col min-h-screen font-crimson-pro text-[23px]">
      <Layout>
        <div className="space-y-12 py-16">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold font-grotesk">Web Development</h1>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-lg leading-relaxed">
                I offer freelance web development services, creating modern,
                responsive, and user-friendly websites and applications. From
                concept to deployment, I help bring your digital vision to life.
              </p>
              <p className="text-base text-muted-foreground">
                Interested in working together?{" "}
                <a href="mailto:zikora.chinedu@yahoo.com" className="underline">
                  Reach out to me via email
                </a>{" "}
                and let&apos;s discuss your project.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-center">
              Recent Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {websites.map((website) => (
                <ProjectCardRoot key={website.id} href={website.url}>
                  <div className="aspect-[4/3] p-8 flex items-center justify-center bg-card">
                    <ProjectCardImage
                      src={website.logo}
                      alt={`${website.name} logo`}
                      className="aspect-auto h-full w-full object-contain"
                    />
                  </div>
                  <ProjectCardContent className="p-4 flex-none">
                    <ProjectCardTitle className="text-center text-base">
                      {website.name}
                    </ProjectCardTitle>
                  </ProjectCardContent>
                </ProjectCardRoot>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default WebDevPage;
