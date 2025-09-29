"use client";

import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

// Global variable that resets on page reload but persists during client-side navigation
let hasIncrementedInThisSession = false;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Footer = ({ wide = false }: { wide?: boolean }) => {
  // Note: wide parameter is accepted for compatibility but always ignored
  // Footer always uses standard width (max-w-3xl) for consistency
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

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
      <div className="mx-auto flex flex-col items-center justify-between space-y-4 px-4 sm:flex-row sm:space-y-0 max-w-3xl">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Zikora Chinedu. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-muted-foreground">
            {loading
              ? "Loading visitors..."
              : visitorCount !== null
              ? `${visitorCount.toLocaleString()} visitors`
              : "Visitor count unavailable"}
          </p>
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
    </footer>
  );
};

export default Footer;
