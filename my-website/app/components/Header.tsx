"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const Header = ({ wide = false }: { wide?: boolean }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  // Build breadcrumb segments from pathname
  const buildBreadcrumb = () => {
    if (!pathname || pathname === "/") {
      return (
        <Link
          href="/"
          className="hover:text-muted-foreground transition-colors"
        >
          ~
        </Link>
      );
    }

    const segments = pathname.split("/").filter(Boolean);
    const breadcrumbItems: React.ReactNode[] = [
      <Link
        key="home"
        href="/"
        className="hover:text-muted-foreground transition-colors"
      >
        ~
      </Link>,
    ];

    segments.forEach((segment, index) => {
      const path = "/" + segments.slice(0, index + 1).join("/");
      breadcrumbItems.push(
        <span key={`sep-${index}`}>/</span>,
        <Link
          key={path}
          href={path}
          className="hover:text-muted-foreground transition-colors"
        >
          {segment}
        </Link>,
      );
    });

    return <>{breadcrumbItems}</>;
  };

  return (
    <nav className="w-full text-base relative font-outfit">
      <div
        className={cn(
          "mx-auto px-6 md:px-8 flex justify-between items-center py-6",
          wide ? "max-w-6xl" : "max-w-3xl",
        )}
      >
        <div className="font-medium">{buildBreadcrumb()}</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-sm tracking-wide">
          <Link
            href="/projects"
            className="hover:text-copper transition-colors"
          >
            projects
          </Link>
          <Link href="/writing" className="hover:text-copper transition-colors">
            writing
          </Link>
          <Link
            href="/experiences"
            className="hover:text-copper transition-colors"
          >
            experience
          </Link>
          <Link
            href="/Zikora_Chinedu_resume.pdf"
            className="hover:text-copper transition-colors"
          >
            resume
          </Link>
          <Link href="/reading" className="hover:text-copper transition-colors">
            reading
          </Link>
          <Link href="/webdev" className="hover:text-copper transition-colors">
            web dev
          </Link>
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
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm shadow-lg md:hidden z-50 border-b border-border/50">
          <div className="flex flex-col p-6 space-y-4 text-sm tracking-wide">
            <Link
              href="/projects"
              className="hover:text-copper transition-colors py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              projects
            </Link>
            <Link
              href="/writing"
              className="hover:text-copper transition-colors py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              writing
            </Link>
            <Link
              href="/experiences"
              className="hover:text-copper transition-colors py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              experience
            </Link>
            <Link
              href="/Zikora_Chinedu_resume.pdf"
              className="hover:text-copper transition-colors py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              resume
            </Link>
            <Link
              href="/reading"
              className="hover:text-copper transition-colors py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              reading
            </Link>
            <Link
              href="/webdev"
              className="hover:text-copper transition-colors py-1"
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
