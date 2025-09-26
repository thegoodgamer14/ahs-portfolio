import type { GitHubActivity } from '@/types'

const GITHUB_API_BASE = 'https://api.github.com'
const USERNAME = 'aryanhemant' // Replace with actual GitHub username

export class GitHubService {
  private async fetchGitHub(endpoint: string) {
    const response = await fetch(`${GITHUB_API_BASE}${endpoint}`)
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }
    return response.json()
  }

  async getUserActivity(): Promise<GitHubActivity> {
    try {
      // Get user events for the last 10 days
      const events = await this.fetchGitHub(`/users/${USERNAME}/events?per_page=100`)
      
      // Filter events from the last 10 days
      const tenDaysAgo = new Date()
      tenDaysAgo.setDate(tenDaysAgo.getDate() - 10)
      
      const recentEvents = events.filter((event: any) => 
        new Date(event.created_at) > tenDaysAgo
      )
      
      // Extract unique repositories
      const repositories = [...new Set(
        recentEvents.map((event: any) => event.repo.name.split('/')[1])
      )]
      
      // Get user repositories to extract languages
      const repos = await this.fetchGitHub(`/users/${USERNAME}/repos?sort=updated&per_page=10`)
      const languages = [...new Set(
        repos.flatMap((repo: any) => repo.language).filter(Boolean)
      )]
      
      return {
        totalEvents: recentEvents.length,
        repositories: repositories.slice(0, 5),
        languages: languages.slice(0, 6),
        lastUpdated: new Date().toISOString()
      }
    } catch (error) {
      console.error('Error fetching GitHub activity:', error)
      // Return mock data as fallback
      return {
        totalEvents: 42,
        repositories: ['portfolio-website', 'data-pipeline-project', 'ml-spec-extractor'],
        languages: ['TypeScript', 'Python', 'JavaScript', 'SQL'],
        lastUpdated: new Date().toISOString()
      }
    }
  }

  async getUserRepos() {
    try {
      return await this.fetchGitHub(`/users/${USERNAME}/repos?sort=updated&per_page=6`)
    } catch (error) {
      console.error('Error fetching repositories:', error)
      return []
    }
  }
}

export const githubService = new GitHubService()