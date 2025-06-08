import fs from 'fs'
import path from 'path'

export interface ArticleMetadata {
  title: string
  date: string
  description: string
  slug: string
}

export async function getAllArticles(): Promise<ArticleMetadata[]> {
  const articlesDirectory = path.join(process.cwd(), 'app/writing')
  const filenames = fs.readdirSync(articlesDirectory)
  
  const articles: ArticleMetadata[] = []
  
  for (const filename of filenames) {
    if (filename.endsWith('.mdx')) {
      const slug = filename.replace('.mdx', '')
      
      try {
        // Dynamically import the MDX file to get its metadata
        const mdxModule = await import(`@/app/writing/${filename}`)
        
        if (mdxModule.metadata) {
          articles.push({
            ...mdxModule.metadata,
            slug
          })
        }
      } catch (error) {
        console.error(`Error importing ${filename}:`, error)
      }
    }
  }
  
  // Sort articles by date (newest first)
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getArticleBySlug(slug: string) {
  try {
    const mdxModule = await import(`@/app/writing/${slug}.mdx`)
    return {
      metadata: mdxModule.metadata,
      default: mdxModule.default
    }
  } catch (error) {
    console.error(`Error importing article ${slug}:`, error)
    return null
  }
} 