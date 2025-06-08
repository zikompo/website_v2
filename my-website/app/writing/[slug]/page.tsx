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
  
  const { metadata, default: MDXContent } = article
  
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Layout>
        <div className="max-w-4xl mx-auto py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-light text-black mb-3 font-crimson-pro">
              {metadata.title}
            </h1>
            <p className="text-gray-600 text-base">
              {metadata.date}
            </p>
          </div>
          
          <div className="max-w-none">
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