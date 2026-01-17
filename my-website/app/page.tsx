// app/page.tsx
"use client";
import Hero from "@/app/components/Hero";
import Layout from "./components/Layout";

import React from "react";

export default function Home() {
  return (
    <div className="font-outfit">
      <Layout wide>
        <Hero />
      </Layout>
    </div>
  );
}
