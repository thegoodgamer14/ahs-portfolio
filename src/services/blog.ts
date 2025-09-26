import type { BlogPost } from '@/types'

// Note: This service is structured for Payload CMS integration
// Replace the API_BASE with your actual Payload CMS endpoint
const API_BASE = import.meta.env.VITE_PAYLOAD_API_BASE || 'http://localhost:3000/api'

export class BlogService {
  private async fetchPayload(endpoint: string) {
    const response = await fetch(`${API_BASE}${endpoint}`)
    if (!response.ok) {
      throw new Error(`Blog API error: ${response.statusText}`)
    }
    return response.json()
  }

  async getPosts(limit: number = 10): Promise<BlogPost[]> {
    try {
      const data = await this.fetchPayload(`/posts?limit=${limit}&sort=-publishedAt`)
      return data.docs.map((post: any) => this.formatPost(post))
    } catch (error) {
      console.error('Error fetching blog posts:', error)
      // Return mock data as fallback
      return this.getMockPosts().slice(0, limit)
    }
  }

  async getLatestPost(): Promise<BlogPost | null> {
    try {
      const posts = await this.getPosts(1)
      return posts.length > 0 ? posts[0] : null
    } catch (error) {
      console.error('Error fetching latest post:', error)
      return this.getMockPosts()[0] || null
    }
  }

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const data = await this.fetchPayload(`/posts?where[slug][equals]=${slug}&limit=1`)
      if (data.docs.length === 0) return null
      return this.formatPost(data.docs[0])
    } catch (error) {
      console.error('Error fetching post by slug:', error)
      return null
    }
  }

  async getPostsByTag(tag: string, limit: number = 5): Promise<BlogPost[]> {
    try {
      const data = await this.fetchPayload(`/posts?where[tags][contains]=${tag}&limit=${limit}&sort=-publishedAt`)
      return data.docs.map((post: any) => this.formatPost(post))
    } catch (error) {
      console.error('Error fetching posts by tag:', error)
      return []
    }
  }

  private formatPost(post: any): BlogPost {
    return {
      id: post.id,
      title: post.title,
      excerpt: post.excerpt || this.generateExcerpt(post.content),
      publishedAt: post.publishedAt,
      slug: post.slug,
      tags: post.tags || [],
      readTime: this.calculateReadTime(post.content)
    }
  }

  private generateExcerpt(content: string, maxLength: number = 160): string {
    const plainText = content.replace(/<[^>]*>/g, '')
    return plainText.length > maxLength 
      ? plainText.substring(0, maxLength).trim() + '...'
      : plainText
  }

  private calculateReadTime(content: string): number {
    const wordsPerMinute = 200
    const words = content.split(/\s+/).length
    return Math.ceil(words / wordsPerMinute)
  }

  private getMockPosts(): BlogPost[] {
    return [
      {
        id: '1',
        title: 'The Journey from Software Engineering to Data Engineering',
        excerpt: 'Exploring my transition from traditional software development to the exciting world of data engineering, and what I\'ve learned along the way.',
        publishedAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        slug: 'software-to-data-engineering',
        tags: ['career', 'data-engineering', 'learning'],
        readTime: 8
      },
      {
        id: '2',
        title: 'Building Scalable Data Pipelines with Apache Airflow',
        excerpt: 'A deep dive into orchestrating complex data workflows using Apache Airflow, with practical examples and best practices.',
        publishedAt: new Date(Date.now() - 604800000).toISOString(), // 1 week ago
        slug: 'airflow-data-pipelines',
        tags: ['data-engineering', 'airflow', 'python'],
        readTime: 12
      },
      {
        id: '3',
        title: 'Music and Code: Finding Harmony in Creativity',
        excerpt: 'How learning guitar and songwriting has influenced my approach to software development and problem-solving.',
        publishedAt: new Date(Date.now() - 1209600000).toISOString(), // 2 weeks ago
        slug: 'music-and-code-harmony',
        tags: ['music', 'creativity', 'personal'],
        readTime: 6
      },
      {
        id: '4',
        title: 'NLP for Document Processing: Lessons from Building an ML Tool',
        excerpt: 'Key insights and challenges from developing an engineering specification extraction tool using natural language processing.',
        publishedAt: new Date(Date.now() - 1814400000).toISOString(), // 3 weeks ago
        slug: 'nlp-document-processing',
        tags: ['machine-learning', 'nlp', 'python'],
        readTime: 10
      }
    ]
  }
}

export const blogService = new BlogService()