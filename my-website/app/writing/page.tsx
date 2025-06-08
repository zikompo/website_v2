"use client";
import React from "react";
import Layout from "../components/Layout";

// Dummy articles data
const articles = [
  {
    id: 1,
    title: "Take the Leap of Faith",
    date: "March 24, 2025",
    description: "A story about reflections on projects, and taking the leap of faith to start a startup.",
  },
  {
    id: 2,
    title: "Building in Public",
    date: "March 18, 2025",
    description: "Thoughts on transparency, community building, and the benefits of sharing your journey openly.",
  },
  {
    id: 3,
    title: "The Art of Side Projects",
    date: "March 12, 2025",
    description: "Why side projects are essential for growth, learning, and discovering new opportunities.",
  },
  {
    id: 4,
    title: "Lessons from Failure",
    date: "March 5, 2025",
    description: "What I learned from projects that didn't work out and how failure became my best teacher.",
  },
  {
    id: 5,
    title: "Finding Your Voice",
    date: "February 28, 2025",
    description: "The journey of developing a unique perspective and the courage to share it with the world.",
  },
];

const ArticleCard = ({ article }: { article: typeof articles[0] }) => {
  return (
    <article className="border-b border-gray-200 pb-6 mb-6 last:border-b-0">
      <h2 className="text-2xl font-light text-black mb-2 hover:text-gray-700 transition-colors cursor-pointer">
        {article.title}
      </h2>
      <p className="text-gray-600 text-base mb-2">
        {article.date}
      </p>
      <p className="text-black text-base leading-relaxed">
        {article.description}
      </p>
    </article>
  );
};

export default function Writing() {
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
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
