import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { getAllArticles, type ArticleMetadata } from "@/lib/mdx";

const ArticleCard = ({ article }: { article: ArticleMetadata }) => {
  return (
    <article className="border-b border-border pb-6 mb-6 last:border-b-0">
      <Link href={`/writing/${article.slug}`}>
        <h2 className="text-2xl font-light text-foreground mb-2 hover:text-muted-foreground transition-colors cursor-pointer">
          {article.title}
        </h2>
      </Link>
      <p className="text-muted-foreground text-base mb-2">
        {article.date}
      </p>
      <p className="text-foreground text-base leading-relaxed">
        {article.description}
      </p>
    </article>
  );
};

export default async function Writing() {
  const articles = await getAllArticles();
  
  return (
    <div className="flex flex-col min-h-screen font-crimson-pro">
      <Layout>
        <div className="max-w-4xl mx-auto py-16">
          <div className="mb-8">
            <h1 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Writing</h1>
            <p className="text-muted-foreground text-base">
              Thoughts, stories, and reflections on various topics.
            </p>
          </div>
          
          <div className="space-y-0">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
