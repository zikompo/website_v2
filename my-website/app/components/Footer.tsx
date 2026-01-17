"use client";

import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Global variable that resets on page reload but persists during client-side navigation
let hasIncrementedInThisSession = false;

const formatLastUpdated = (isoDate: string | undefined) => {
  if (!isoDate) {
    return "Unknown";
  }

  const parsed = new Date(isoDate);
  if (Number.isNaN(parsed.getTime())) {
    return isoDate;
  }

  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(parsed);
};

const Footer = ({ wide = false }: { wide?: boolean }) => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const formattedLastUpdated = formatLastUpdated(
    process.env.NEXT_PUBLIC_LAST_COMMIT_DATE,
  );

  useEffect(() => {
    // Fetch and increment visitor count using Abacus API
    const fetchVisitorCount = async () => {
      try {
        if (!hasIncrementedInThisSession) {
          // First time in this app session - increment counter
          const response = await fetch(
            "https://abacus.jasoncameron.dev/hit/zikorachinedu.com/visitors",
          );
          const data = await response.json();
          setVisitorCount(data.value);

          // Mark as counted for this app session (resets on page reload)
          hasIncrementedInThisSession = true;
        } else {
          // Already counted in this app session - just get current count
          const response = await fetch(
            "https://abacus.jasoncameron.dev/get/zikorachinedu.com/visitors",
          );
          const data = await response.json();
          setVisitorCount(data.value);
        }
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
        // Fallback to just getting the count without incrementing
        try {
          const response = await fetch(
            "https://abacus.jasoncameron.dev/get/zikorachinedu.com/visitors",
          );
          const data = await response.json();
          setVisitorCount(data.value);
        } catch (fallbackError) {
          console.error("Failed to get visitor count:", fallbackError);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <footer className="py-8 mt-8 border-t border-border/30 font-outfit">
      <div
        className={cn(
          "mx-auto flex w-full flex-col gap-6 px-6 md:px-8",
          wide ? "max-w-6xl" : "max-w-3xl",
        )}
      >
        {/* Decorative line */}
        <div className="h-[1px] w-16 bg-copper/40 mx-auto sm:mx-0" />

        <div className="flex flex-col items-center gap-6 text-xs tracking-wide text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center sm:flex-1 sm:text-left uppercase tracking-[0.15em]">
            Updated: {formattedLastUpdated}
          </p>
          <div className="flex items-center gap-3 justify-center sm:flex-1">
            <Link
              href="https://uoftwebring.com/redirect?nav=prev&id=11"
              className="transition-colors hover:text-copper text-lg"
            >
              &#8592;
            </Link>
            <Link
              href="https://uoftwebring.com"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="https://uoftwebring.com/ring_logo.svg"
                alt="UofT Webring"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </Link>
            <Link
              href="https://uoftwebring.com/redirect?nav=next&id=11"
              className="transition-colors hover:text-copper text-lg"
            >
              &#8594;
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-1 sm:flex-row sm:justify-end sm:gap-6">
            <p className="text-xs text-muted-foreground/70 uppercase tracking-[0.1em]">
              {loading
                ? "..."
                : visitorCount !== null
                  ? `${visitorCount.toLocaleString()} visitors`
                  : ""}
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com/zikompo"
                passHref
                className="group"
              >
                <Github className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-copper" />
              </Link>
              <Link
                href="https://linkedin.com/in/zikorachinedu"
                passHref
                className="group"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-copper" />
              </Link>
              <Link
                href="mailto:zikora.chinedu@yahoo.com"
                passHref
                className="group"
              >
                <Mail className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-copper" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
