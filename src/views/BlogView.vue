<template>
  <div class="blog">
    <div class="container">
      <header class="blog-header">
        <h1 class="fade-in-up">Blog</h1>
        <p class="fade-in-up">Thoughts on tech, music, life optimization, and more.</p>
      </header>
      
      <div class="blog-content">
        <div class="blog-posts">
          <div v-if="loading" class="loading">
            Loading posts...
          </div>
          
          <div v-else-if="posts.length === 0" class="no-posts">
            Coming soon! Blog posts will appear here once integrated with Payload CMS.
          </div>
          
          <article v-for="post in posts" :key="post.id" class="blog-post card fade-in-up">
            <h2>{{ post.title }}</h2>
            <div class="post-meta">
              <span class="date">{{ formatDate(post.publishedAt) }}</span>
              <span class="read-time">{{ post.readTime }} min read</span>
            </div>
            <p class="excerpt">{{ post.excerpt }}</p>
            <div class="tags">
              <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
            </div>
            <router-link :to="`/blog/${post.slug}`" class="read-more btn btn-outline">
              Read More
            </router-link>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { BlogPost } from '@/types'

const posts = ref<BlogPost[]>([])
const loading = ref(true)

onMounted(async () => {
  // TODO: Replace with actual Payload CMS integration
  setTimeout(() => {
    loading.value = false
  }, 1000)
})

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.blog {
  min-height: 100vh;
  padding-top: 2rem;
}

.blog-header {
  text-align: center;
  margin-bottom: 4rem;
}

.blog-header h1 {
  color: var(--primary-blue);
  margin-bottom: 1rem;
}

.blog-posts {
  display: grid;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.blog-post {
  position: relative;
}

.blog-post h2 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.post-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.excerpt {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background-color: var(--light-blue);
  color: var(--primary-blue);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.loading,
.no-posts {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-secondary);
}

.read-more {
  margin-top: auto;
}
</style>