import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { getAllArticles, type ArticleMetadata } from "@/lib/mdx";

const ArticleCard = ({ article }: { article: ArticleMetadata }) => {
  return (
    <article className="border-b border-gray-200 pb-6 mb-6 last:border-b-0">
      <Link href={`/writing/${article.slug}`}>
        <h2 className="text-2xl font-light text-black mb-2 hover:text-gray-700 transition-colors cursor-pointer">
          {article.title}
        </h2>
      </Link>
      <p className="text-gray-600 text-base mb-2">
        {article.date}
      </p>
      <p className="text-black text-base leading-relaxed">
        {article.description}
      </p>
    </article>
  );
};

export default async function Writing() {
  const articles = await getAllArticles();
  
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-crimson-pro">
      <Layout>
        <div className="max-w-4xl mx-auto py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-light text-black mb-3">Writing</h1>
            <p className="text-gray-600 text-base">
              Thoughts, stories, and reflections on technology, entrepreneurship, and life.
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
