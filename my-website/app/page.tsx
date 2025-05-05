// app/page.tsx
import Hero from "@/app/components/Hero";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <div className = "flex flex-col items-center justify-center min-h-screen bg-neutral-100 text-zinc-800 font-sans">
    <Layout>
      <Hero />
      <div className="my-12">
        Nothing yet
      </div>
    </Layout>
    </div>
  );
}