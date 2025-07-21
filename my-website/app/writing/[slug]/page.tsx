import { notFound } from 'next/navigation'
import Layout from '../../components/Layout'
import { getArticleBySlug, getAllArticles } from '@/lib/mdx'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  
  if (!article) {
    notFound()
  }
  
  const { default: MDXContent } = article
  
  return (
    <div className="flex flex-col min-h-screen font-crimson-pro">
      <Layout>
        <div className="max-w-4xl mx-auto pt-4 pb-8">
          <div className="prose dark:prose-invert max-w-none">
            <MDXContent />
          </div>
        </div>
      </Layout>
    </div>
  )
}

// Generate static parameters for all articles
export async function generateStaticParams() {
  const articles = await getAllArticles()
  
  return articles.map((article) => ({
    slug: article.slug,
  }))
} 