"use client";
import React from "react";
import Layout from "../components/Layout";
import TMG from "@/app/components/icons/tmg.png";
import { StaticImageData } from "next/image";
import * as motion from "motion/react-client";
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
    <div className="flex flex-col min-h-screen font-outfit">
      <Layout>
        <div className="space-y-12 py-12">
          {/* Editorial header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <div>
              <p className="font-outfit text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Services
              </p>
              <h1 className="font-cormorant text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
                Web Development
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-[2px] bg-copper mx-auto"
              />
            </div>

            <div className="max-w-xl mx-auto space-y-4">
              <p className="font-outfit text-base text-muted-foreground leading-relaxed">
                I offer freelance web development services, creating modern,
                responsive, and user-friendly websites and applications. From
                concept to deployment, I help bring your digital vision to life.
              </p>
              <p className="font-outfit text-sm text-muted-foreground/70">
                Interested in working together?{" "}
                <a
                  href="mailto:zikora.chinedu@yahoo.com"
                  className="text-copper hover:underline transition-colors"
                >
                  Reach out to me via email
                </a>{" "}
                and let&apos;s discuss your project.
              </p>
            </div>
          </motion.div>

          {/* Recent Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center">
              <p className="font-outfit text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Portfolio
              </p>
              <h2 className="font-cormorant text-2xl font-light">
                Recent Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {websites.map((website, index) => (
                <motion.div
                  key={website.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <ProjectCardRoot href={website.url}>
                    <div className="aspect-[4/3] p-8 flex items-center justify-center bg-card">
                      <ProjectCardImage
                        src={website.logo}
                        alt={`${website.name} logo`}
                        className="aspect-auto h-full w-full object-contain"
                      />
                    </div>
                    <ProjectCardContent className="p-4 flex-none">
                      <ProjectCardTitle className="text-center text-base font-cormorant">
                        {website.name}
                      </ProjectCardTitle>
                    </ProjectCardContent>
                  </ProjectCardRoot>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Layout>
    </div>
  );
};

export default WebDevPage;
