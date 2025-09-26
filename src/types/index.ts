export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured: boolean
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string[]
  technologies: string[]
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  publishedAt: string
  slug: string
  tags: string[]
  readTime: number
}

export interface GitHubActivity {
  totalEvents: number
  repositories: string[]
  languages: string[]
  lastUpdated: string
}

export interface SpotifyTrack {
  name: string
  artist: string
  album: string
  imageUrl: string
  previewUrl?: string
  externalUrl: string
  isPlaying: boolean
  playedAt: string
}

export interface TechStack {
  category: string
  technologies: {
    name: string
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
    icon?: string
  }[]
}

export interface ContactForm {
  name: string
  email: string
  message: string
}