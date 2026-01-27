"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 w-full text-base">
      <div className="md:mt-4 md:mx-4 lg:mx-auto max-w-3xl md:rounded-full bg-background/40 backdrop-blur-md md:border md:border-border/50 md:shadow-lg">
        <div className="px-4 flex justify-between items-center py-3 md:py-2 md:px-6">
          <div className="font-medium">{buildBreadcrumb()}</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/projects">projects</Link>
            <Link href="/writing">writing</Link>
            <Link href="/experiences">experience</Link>
            <Link href="/Zikora_Chinedu_resume.pdf">resume</Link>
            <Link href="/reading">reading</Link>
            <Link href="/webdev">web dev</Link>
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
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg md:hidden border-b border-border">
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
