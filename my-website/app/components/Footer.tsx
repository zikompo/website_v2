"use client";

import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Footer = ({ wide = false }: { wide?: boolean }) => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch and increment visitor count using Abacus API
    const fetchVisitorCount = async () => {
      try {
        // Check if user has already been counted in this session
        const hasBeenCounted = sessionStorage.getItem('visitor-counted');
        
        if (!hasBeenCounted) {
          // First visit in this session - increment counter
          const response = await fetch(
            "https://abacus.jasoncameron.dev/hit/zikorachinedu.com/visitors"
          );
          const data = await response.json();
          setVisitorCount(data.value);
          
          // Mark as counted for this session
          sessionStorage.setItem('visitor-counted', 'true');
        } else {
          // Already counted in this session - just get current count
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
      <div
        className={cn(
          "mx-auto flex flex-col items-center justify-between space-y-4 px-4 sm:flex-row sm:space-y-0",
          wide ? "max-w-7xl" : "max-w-3xl"
        )}
      >
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Zikora Chinedu. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-muted-foreground">
            {loading
              ? "Loading visitors..."
              : visitorCount !== null
              ? `👁️ ${visitorCount.toLocaleString()} views`
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
