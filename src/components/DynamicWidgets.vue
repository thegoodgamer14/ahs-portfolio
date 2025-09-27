<template>
  <section class="dynamic-widgets section">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="fade-in-up">Live Updates</h2>
        <p class="fade-in-up delay-1">Real-time insights into my digital world</p>
      </div>

      <!-- Decorative guitars -->
      <div class="guitar-decorations">
        <img
          src="@/assets/avatars/les-paul.png"
          alt="Les Paul guitar"
          class="guitar-decoration les-paul-decoration"
        />
        <img
          src="@/assets/avatars/v-shape.png"
          alt="V-shape guitar"
          class="guitar-decoration v-shape-decoration"
        />
      </div>

      <!-- First row - GitHub Activity (full width) -->
      <div class="github-row">
        <div class="widget github-widget card fade-in-up delay-2">
          <div class="widget-header">
            <div class="widget-title">
              <svg class="widget-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <h3>GitHub Activity</h3>
            </div>
            <span class="last-updated">Last 10 days</span>
          </div>


          <div v-if="loadingGitHub" class="widget-loading">
            <div class="loading-spinner"></div>
            <span>Loading activity...</span>
          </div>

          <div v-else class="github-content">
            <div class="github-layout">
              <!-- Left side - Graph -->
              <div class="activity-graph">
                <h4>Activity Timeline</h4>
                <div class="graph-container">
                  <svg class="activity-chart" viewBox="0 0 400 150" width="100%" height="150">
                    <polyline
                      :points="activityPoints"
                      fill="none"
                      stroke="var(--primary-blue)"
                      stroke-width="2"
                    />
                    <g v-for="(point, index) in activityData" :key="index">
                      <circle
                        :cx="(index / (activityData.length - 1)) * 380 + 10"
                        :cy="140 - (point.commits / Math.max(...activityData.map(d => d.commits)) * 120)"
                        r="3"
                        fill="var(--primary-blue)"
                      />
                    </g>
                  </svg>
                </div>
              </div>

              <!-- Right side - Stats and Repos -->
              <div class="activity-stats">
                <div class="activity-summary">
                  <div class="activity-stat">
                    <span class="stat-number">{{ githubActivity.totalEvents }}</span>
                    <span class="stat-label">Total Events</span>
                  </div>
                  <div class="activity-stat">
                    <span class="stat-number">{{ githubActivity.repositories.length }}</span>
                    <span class="stat-label">Repositories</span>
                  </div>
                </div>

                <div class="activity-details">
                  <div class="recent-repos">
                    <h4>Recent Repositories</h4>
                    <ul>
                      <li v-for="repo in githubActivity.repositories.slice(0, 3)" :key="repo">
                        {{ repo }}
                      </li>
                    </ul>
                  </div>

                  <div class="languages">
                    <h4>Languages Used</h4>
                    <div class="language-tags">
                      <span v-for="lang in githubActivity.languages" :key="lang" class="language-tag">
                        {{ lang }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Second row - Spotify and Blog -->
      <div class="widgets-grid">
        
        <!-- Spotify Widget -->
        <div class="widget spotify-widget card fade-in-up delay-3">
          <div class="widget-header">
            <div class="widget-title">
              <svg class="widget-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <h3>Now Playing</h3>
            </div>
            <span v-if="currentTrack" class="spotify-status" :class="{ playing: currentTrack.isPlaying }">
              {{ currentTrack.isPlaying ? '♪ Playing' : '⏸ Paused' }}
            </span>
          </div>
          
          <div v-if="loadingSpotify" class="widget-loading">
            <div class="loading-spinner"></div>
            <span>Loading track...</span>
          </div>
          
          <div v-else-if="currentTrack" class="spotify-content">
            <div class="track-info">
              <div class="track-image">
                <img :src="currentTrack.imageUrl" :alt="currentTrack.album" />
              </div>
              <div class="track-details">
                <h4 class="track-name">{{ currentTrack.name }}</h4>
                <p class="track-artist">{{ currentTrack.artist }}</p>
                <p class="track-album">{{ currentTrack.album }}</p>
              </div>
            </div>
            
            <div class="track-actions">
              <a 
                :href="currentTrack.externalUrl" 
                class="spotify-link btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Spotify
              </a>
            </div>
          </div>
          
          <div v-else class="no-track">
            <p>No track currently playing</p>
            <p class="last-played">Last played: {{ formatRelativeTime(lastPlayedTime) }}</p>
          </div>
        </div>
        
        <!-- Blog Preview Widget -->
        <div class="widget blog-widget card fade-in-up delay-4">
          <div class="widget-header">
            <div class="widget-title">
              <svg class="widget-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              <h3>Latest Blog Post</h3>
            </div>
            <router-link to="/blog" class="view-all">View All</router-link>
          </div>

          
          <div v-if="loadingBlog" class="widget-loading">
            <div class="loading-spinner"></div>
            <span>Loading posts...</span>
          </div>
          
          <div v-else-if="latestPost" class="blog-content">
            <h4 class="post-title">{{ latestPost.title }}</h4>
            <p class="post-excerpt">{{ latestPost.excerpt }}</p>
            <div class="post-meta">
              <span class="post-date">{{ formatDate(latestPost.publishedAt) }}</span>
              <span class="post-read-time">{{ latestPost.readTime }} min read</span>
            </div>
            <div class="post-tags">
              <span v-for="tag in latestPost.tags.slice(0, 3)" :key="tag" class="tag">
                #{{ tag }}
              </span>
            </div>
          </div>
          
          <div v-else class="no-posts">
            <p><strong>Coming Soon...</strong></p>
            <p>I'll be sharing thoughts on tech, music, and life optimization.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import type { GitHubActivity, SpotifyTrack, BlogPost } from '@/types'

// GitHub Activity
const loadingGitHub = ref(true)
const githubActivity = ref<GitHubActivity>({
  totalEvents: 0,
  repositories: [],
  languages: [],
  lastUpdated: ''
})

const activityData = ref([
  { day: 'Mon', commits: 5 },
  { day: 'Tue', commits: 3 },
  { day: 'Wed', commits: 8 },
  { day: 'Thu', commits: 2 },
  { day: 'Fri', commits: 6 },
  { day: 'Sat', commits: 4 },
  { day: 'Sun', commits: 7 },
  { day: 'Mon', commits: 3 },
  { day: 'Tue', commits: 9 },
  { day: 'Wed', commits: 1 }
])

const activityPoints = computed(() => {
  const maxCommits = Math.max(...activityData.value.map(d => d.commits))
  return activityData.value
    .map((point, index) => {
      const x = (index / (activityData.value.length - 1)) * 380 + 10
      const y = 140 - (point.commits / maxCommits * 120)
      return `${x},${y}`
    })
    .join(' ')
})

// Spotify
const loadingSpotify = ref(true)
const currentTrack = ref<SpotifyTrack | null>(null)
const lastPlayedTime = ref<string>('')

// Blog
const loadingBlog = ref(true)
const latestPost = ref<BlogPost | null>(null)

onMounted(async () => {
  await Promise.all([
    loadGitHubActivity(),
    loadSpotifyTrack(),
    loadLatestBlogPost()
  ])
})

const loadGitHubActivity = async () => {
  try {
    // TODO: Replace with actual GitHub API integration
    setTimeout(() => {
      githubActivity.value = {
        totalEvents: 42,
        repositories: ['portfolio-website', 'data-pipeline-project', 'ml-spec-extractor'],
        languages: ['TypeScript', 'Python', 'JavaScript', 'SQL'],
        lastUpdated: new Date().toISOString()
      }
      loadingGitHub.value = false
    }, 1000)
  } catch (error) {
    console.error('Failed to load GitHub activity:', error)
    loadingGitHub.value = false
  }
}

const loadSpotifyTrack = async () => {
  try {
    // TODO: Replace with actual Spotify API integration
    setTimeout(() => {
      currentTrack.value = {
        name: 'Master of Puppets',
        artist: 'Metallica',
        album: 'Master of Puppets',
        imageUrl: 'https://via.placeholder.com/64x64/1DB954/FFFFFF?text=♪',
        externalUrl: 'https://open.spotify.com',
        isPlaying: true,
        playedAt: new Date().toISOString()
      }
      loadingSpotify.value = false
    }, 1200)
  } catch (error) {
    console.error('Failed to load Spotify track:', error)
    lastPlayedTime.value = new Date(Date.now() - 1800000).toISOString() // 30 minutes ago
    loadingSpotify.value = false
  }
}

const loadLatestBlogPost = async () => {
  try {
    // TODO: Replace with actual Payload CMS integration
    setTimeout(() => {
      latestPost.value = null // No posts available yet
      loadingBlog.value = false
    }, 800)
  } catch (error) {
    console.error('Failed to load blog posts:', error)
    loadingBlog.value = false
  }
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

const formatRelativeTime = (dateString: string) => {
  const now = new Date()
  const date = new Date(dateString)
  const diffMs = now.getTime() - date.getTime()
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  
  if (diffHours < 1) return 'Just now'
  if (diffHours < 24) return `${diffHours}h ago`
  const diffDays = Math.floor(diffHours / 24)
  return `${diffDays}d ago`
}
</script>

<style scoped>
.dynamic-widgets {
  background-color: var(--surface);
  position: relative;
  overflow: hidden;
}

.section-header {
  margin-bottom: 3rem;
}

.section-header h2 {
  color: var(--primary-blue);
  margin-bottom: 1rem;
}

.guitar-decorations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.guitar-decoration {
  position: absolute;
  max-width: 300px;
  width: 25%;
  height: auto;
  filter: drop-shadow(0 8px 25px rgba(0, 0, 0, 0.3));
  opacity: 0.15;
}

.les-paul-decoration {
  left: -10%;
  top: 20%;
  transform: rotate(-15deg);
}

.v-shape-decoration {
  right: -10%;
  top: 30%;
  transform: rotate(25deg);
}

.github-row {
  margin-bottom: 2rem;
}

.widgets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.widget {
  position: relative;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  z-index: 2;
}

.widget-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

.widget-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.widget-icon {
  color: var(--primary-blue);
}

.widget-title h3 {
  color: var(--text-primary);
  margin: 0;
  font-size: 1.2rem;
}

.last-updated,
.view-all {
  color: var(--text-secondary);
  font-size: 0.85rem;
  text-decoration: none;
}

.view-all:hover {
  color: var(--primary-blue);
}

.spotify-status {
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  background: var(--light-blue);
  color: var(--primary-blue);
}

.spotify-status.playing {
  background: #1DB954;
  color: white;
}

.widget-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 1rem;
  color: var(--text-secondary);
}

.loading-spinner {
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--border);
  border-top: 2px solid var(--primary-blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* GitHub Widget */

.github-content {
  flex: 1;
}

.github-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: start;
}

.activity-graph h4 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1rem;
}

.graph-container {
  background: var(--surface-hover);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
}

.activity-chart {
  width: 100%;
  height: 150px;
}

.activity-stats .activity-summary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.activity-stat {
  text-align: center;
  padding: 1rem;
  background: var(--primary-blue);
  border-radius: 0.5rem;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.25rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.stat-label {
  color: var(--text-primary);
  font-size: 0.85rem;
  font-weight: 500;
}

.activity-details {
  display: grid;
  gap: 1rem;
}

.recent-repos h4,
.languages h4 {
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.recent-repos ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.recent-repos li {
  color: var(--text-secondary);
  padding: 0.25rem 0;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.9rem;
}

.language-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.language-tag {
  background: var(--primary-blue);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Spotify Widget */
.spotify-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.track-info {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.track-image {
  flex-shrink: 0;
}

.track-image img {
  width: 64px;
  height: 64px;
  border-radius: 0.5rem;
  object-fit: cover;
}

.track-details {
  flex: 1;
  min-width: 0;
}

.track-name {
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.track-artist,
.track-album {
  color: var(--text-secondary);
  margin: 0.25rem 0;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.track-actions {
  margin-top: auto;
}

.spotify-link {
  background: #1DB954;
  color: white;
  border-color: #1DB954;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
}

.spotify-link:hover {
  background: #1ed760;
}

.no-track {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--text-secondary);
}

.last-played {
  margin-top: 0.5rem;
  font-size: 0.85rem;
}

/* Blog Widget */

.blog-content {
  flex: 1;
}

.post-title {
  color: var(--text-primary);
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  line-height: 1.4;
}

.post-excerpt {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.post-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: var(--light-blue);
  color: var(--primary-blue);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.no-posts {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--text-secondary);
}

.no-posts p:first-child {
  font-weight: 500;
  margin-bottom: 0.5rem;
}

/* Responsive design */
@media (max-width: 1024px) {
  .github-layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .widgets-grid {
    grid-template-columns: 1fr;
  }

  .github-avatars {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .guitar-avatar {
    max-width: 120px;
  }

  .activity-stats .activity-summary {
    grid-template-columns: 1fr;
  }

  .track-info {
    flex-direction: column;
    text-align: center;
  }

  .track-details {
    text-align: center;
  }
}
</style>