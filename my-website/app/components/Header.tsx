"use client";
import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="w-full text-base relative font-['--font-crimson-pro']">
      <div className="max-w-3xl mx-auto px-4 flex justify-between items-center py-4">
        <div className="font-medium">
          <Link href="/">Zikora Chinedu</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/projects">projects</Link>
          <Link href="/writing">writing</Link>
          <Link href="/experiences">experience</Link>
          <Link href="/Zikora_Chinedu_resume.pdf">resume</Link>
          <Link href="/reading">reading</Link>
          <Link href="webdev">web dev</Link>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background shadow-lg md:hidden z-50 border border-border">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/projects"
              className="hover:text-muted-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              projects
            </Link>
            <Link
              href="/writing"
              className="hover:text-muted-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              writing
            </Link>
            <Link
              href="/experiences"
              className="hover:text-muted-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              experience
            </Link>
            <Link
              href="/Zikora_Chinedu_resume.pdf"
              className="hover:text-muted-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              resume
            </Link>
            <Link
              href="/reading"
              className="hover:text-muted-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              reading
            </Link>
            <Link
              href="/webdev"
              className="hover:text-muted-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              web dev
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
