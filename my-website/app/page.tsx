// app/page.tsx
"use client";
import Hero from "@/app/components/Hero";
import Layout from "./components/Layout";

import React from "react";


export default function Home() {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 text-zinc-800 font-monospace">
            <Layout>
                <Hero/>
                <div className="my-12 font-monospace">
                    I'm looking for Software Engineering roles, internships, and
                    freelance opportunities. If you have a project in mind or
                    want to collaborate, feel free to reach out!
                </div>
            </Layout>
        </div>
    );
}
