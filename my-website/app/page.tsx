import Hero from "@/app/components/Hero";
import Layout from "./components/Layout";
import { getAllArticles } from "@/lib/mdx";

export default async function Home() {
  const articles = await getAllArticles();

  return (
    <div className="text-zinc-800 text-[23px]">
      <Layout>
        <Hero articles={articles} />
      </Layout>
    </div>
  );
}
