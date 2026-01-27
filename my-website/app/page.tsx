// app/page.tsx
"use client";
import Hero from "@/app/components/Hero";
import Layout from "./components/Layout";

import React from "react";

export default function Home() {
  return (
    <div className="text-zinc-800 text-[23px]">
      <Layout>
        <Hero />
      </Layout>
    </div>
  );
}
