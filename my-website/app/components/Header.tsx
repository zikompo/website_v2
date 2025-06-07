"use client";
import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <nav className="w-full text-sm relative">
            <div className="max-w-3xl mx-auto px-4 flex justify-between items-center py-4">
                <div className="font-medium"><Link href="/">Home</Link></div>
            
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/projects">projects</Link>
                    <Link href="/writing">writing</Link>
                    <Link href="/Zikora_Chinedu_resume.pdf">resume</Link>
                    <Link href="/reading">reading</Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
                    <div className="flex flex-col p-4 space-y-4">
                        <Link 
                            href="/projects"
                            className="hover:text-gray-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            projects
                        </Link>
                        <Link 
                            href="/writing"
                            className="hover:text-gray-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            writing
                        </Link>
                        <Link 
                            href="/Zikora_Chinedu_resume.pdf"
                            className="hover:text-gray-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            resume
                        </Link>
                        <Link 
                            href="/reading"
                            className="hover:text-gray-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            reading
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
