// app/page.tsx
"use client";
import Hero from "@/app/components/Hero";
import Layout from "./components/Layout";

import React from "react";


export default function Home() {
    return (
        <div
            className="flex flex-col min-h-screen bg-neutral-100 text-zinc-800 font-crimson-pro text-[23px]">
            <Layout>
                <Hero/>
            </Layout>
        </div>
    );
}
