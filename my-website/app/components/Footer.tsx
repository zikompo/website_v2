import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Footer = ({ wide = false }: { wide?: boolean }) => {
    return (
        <footer className="py-6">
            <div className={cn(
                "mx-auto flex flex-col items-center justify-between space-y-4 px-4 sm:flex-row sm:space-y-0",
                wide ? "max-w-7xl" : "max-w-3xl"
            )}>
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Zikora Chinedu. All rights reserved.
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
        </footer>
    );
}

export default Footer;