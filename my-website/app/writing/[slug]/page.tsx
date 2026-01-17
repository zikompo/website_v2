import { notFound } from "next/navigation";
import Layout from "../../components/Layout";
import { getArticleBySlug, getAllArticles } from "@/lib/mdx";
import { FontSizeControl } from "./FontSizeControl";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { default: MDXContent } = article;

  return (
    <div className="flex flex-col min-h-screen font-outfit">
      <Layout>
        <div className="max-w-2xl mx-auto pt-8 pb-12">
          <FontSizeControl>
            <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-cormorant prose-headings:font-medium prose-p:font-outfit prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-copper prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:font-outfit prose-li:text-muted-foreground">
              <MDXContent />
            </article>
          </FontSizeControl>
        </div>
      </Layout>
    </div>
  );
}

// Generate static parameters for all articles
export async function generateStaticParams() {
  const articles = await getAllArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}
