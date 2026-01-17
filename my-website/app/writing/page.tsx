import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { getAllArticles, type ArticleMetadata } from "@/lib/mdx";

const ArticleCard = ({ article }: { article: ArticleMetadata }) => {
  return (
    <article className="group border-b border-border/30 pb-8 mb-8 last:border-b-0">
      <Link href={`/writing/${article.slug}`} className="block">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <h2 className="font-cormorant text-2xl font-medium text-foreground group-hover:text-copper transition-colors">
            {article.title}
          </h2>
          <span className="font-outfit text-xs uppercase tracking-[0.15em] text-muted-foreground flex-shrink-0">
            {article.date}
          </span>
        </div>
        <p className="font-outfit text-sm text-muted-foreground leading-relaxed">
          {article.description}
        </p>
      </Link>
    </article>
  );
};

export default async function Writing() {
  const articles = await getAllArticles();

  return (
    <div className="flex flex-col min-h-screen font-outfit">
      <Layout>
        <div className="max-w-2xl mx-auto py-12">
          {/* Editorial header */}
          <div className="text-center mb-12">
            <p className="font-outfit text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Blog
            </p>
            <h1 className="font-cormorant text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
              Writing
            </h1>
            <div className="h-[2px] w-16 bg-copper mx-auto mb-6" />
            <p className="font-outfit text-sm text-muted-foreground max-w-md mx-auto">
              Thoughts, stories, and reflections on various topics.
            </p>
          </div>

          {/* Articles list */}
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
