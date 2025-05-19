"use client";
import React from "react";
import Link from "next/link";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";

import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from "lucide-react";

export function CommandDialogDemo() {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <div className="hidden lg:block">
            <p className="text-sm text-muted-foreground">
                <kbd
                    className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>+ J
                </kbd>
            </p>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..."/>
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>
                            <Calendar/>
                            <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                            <Smile/>
                            <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem>
                            <Calculator/>
                            <span>Calculator</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator/>
                    <CommandGroup heading="Settings">
                        <CommandItem>
                            <User/>
                            <span>Profile</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <CreditCard/>
                            <span>Billing</span>
                            <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <Settings/>
                            <span>Settings</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </div>
    );
}

const Header = () => {
    return (
        <nav className="flex justify-between items-center py-4 text-sm">
            <div className="font-medium"><Link href="/">Home</Link></div>
            <div className="flex items-center space-x-4">
                <Link href="/projects">projects</Link>{" "}
                <Link href="/writing">writing</Link> <Link
                href="/Zikora_Chinedu_resume.pdf">resume</Link>{" "}
                <Link href="/writing">reading</Link>
                <CommandDialogDemo/>
            </div>
        </nav>
    );
};
export default Header;
