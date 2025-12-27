"use client";

import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Footer = ({ wide = false }: { wide?: boolean }) => {
  // Note: wide parameter is accepted for compatibility but always ignored
  // Footer always uses standard width (max-w-3xl) for consistency
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const formattedLastUpdated = formatLastUpdated(
    process.env.NEXT_PUBLIC_LAST_COMMIT_DATE
  );

  useEffect(() => {
    // Fetch and increment visitor count using Abacus API
    const fetchVisitorCount = async () => {
      try {
        if (!hasIncrementedInThisSession) {
          // First time in this app session - increment counter
          const response = await fetch(
            "https://abacus.jasoncameron.dev/hit/zikorachinedu.com/visitors"
          );
          const data = await response.json();
          setVisitorCount(data.value);

          // Mark as counted for this app session (resets on page reload)
          hasIncrementedInThisSession = true;
        } else {
          // Already counted in this app session - just get current count
          const response = await fetch(
            "https://abacus.jasoncameron.dev/get/zikorachinedu.com/visitors"
          );
          const data = await response.json();
          setVisitorCount(data.value);
        }
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
        // Fallback to just getting the count without incrementing
        try {
          const response = await fetch(
            "https://abacus.jasoncameron.dev/get/zikorachinedu.com/visitors"
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
    <footer className="py-6">
      <div className="mx-auto flex w-full flex-col gap-4 px-4 max-w-3xl">
        <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center sm:flex-1 sm:text-left">
            Updated: {formattedLastUpdated}
          </p>
          <div className="flex items-center gap-2 justify-center sm:flex-1">
            <Link
              href="https://uoftwebring.com/redirect?nav=prev&id=11"
              className="transition-colors hover:text-foreground"
            >
              ←
            </Link>
            <Link href="https://uoftwebring.com" target="_blank">
              <Image
                src="https://uoftwebring.com/ring_logo.svg"
                alt="UofT Webring"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </Link>
            <Link
              href="https://uoftwebring.com/redirect?nav=next&id=11"
              className="transition-colors hover:text-foreground"
            >
              →
            </Link>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-1 sm:flex-row sm:justify-end sm:gap-4">
            <p className="text-sm text-muted-foreground">
              {loading
                ? "Loading visitors..."
                : visitorCount !== null
                ? `${visitorCount.toLocaleString()} visitors`
                : "Visitor count unavailable"}
            </p>
            <div className="flex items-center space-x-4">
              <Link href="https://github.com/zikompo" passHref>
                <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
              <Link href="https://linkedin.com/in/zikorachinedu" passHref>
                <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
              <Link href="mailto:zikora.chinedu@yahoo.com" passHref>
                <Mail className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
