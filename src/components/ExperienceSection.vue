<template>
  <section id="experience" class="experience section">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="fade-in-up">Projects</h2>
        <p class="fade-in-up delay-1">Building the future, one line of code at a time</p>

        <div class="projects-visual fade-in-up delay-2">
          <img
            src="@/assets/avatars/typing.png"
            alt="Aryan typing"
            class="typing-avatar"
          />
        </div>
      </div>

      <div class="projects-content fade-in-up delay-2">
        <div class="projects-grid">
          <div
            v-for="(project, index) in projects"
            :key="project.id"
            class="project-card card fade-in-up"
            :style="{ animationDelay: `${0.1 * index}s` }"
          >
            <div class="project-header">
              <h3>{{ project.title }}</h3>
              <div class="project-links">
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  class="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  class="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m9 15 6-6"/>
                    <path d="m15 9-6 6"/>
                    <path d="M21 3h-6l6 6"/>
                    <path d="M3 21v-6h6"/>
                  </svg>
                </a>
              </div>
            </div>
            <p class="project-description">{{ project.description }}</p>
            <div class="technologies">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
            <div v-if="project.featured" class="featured-badge">Featured</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '@/types'

const projects: Project[] = [
  {
    id: '1',
    title: 'Engineering Specification Extraction Tool',
    description: 'An advanced NLP/ML project that automatically extracts and structures engineering specifications from technical documents, improving efficiency in document processing workflows.',
    technologies: ['Python', 'NLP', 'Machine Learning', 'TensorFlow', 'scikit-learn'],
    featured: true,
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '2',
    title: 'carrt Real-Time Chat Application',
    description: 'A full-stack real-time chat application with modern UI/UX, featuring live messaging, user authentication, and responsive design across all devices.',
    technologies: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js'],
    featured: true,
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '3',
    title: 'Data Pipeline Architecture',
    description: 'Scalable data processing pipeline built during my time at Bluecrest, handling large-scale data transformation and aggregation for business analytics.',
    technologies: ['Python', 'Apache Airflow', 'PostgreSQL', 'Docker', 'AWS'],
    featured: false,
    githubUrl: '#'
  },
  {
    id: '4',
    title: 'Personal Portfolio Website',
    description: 'This very website! Built with Vue.js 3, featuring dynamic widgets, Spotify integration, and a clean, responsive design with smooth animations.',
    technologies: ['Vue.js', 'TypeScript', 'CSS3', 'Spotify API', 'GitHub API'],
    featured: false,
    githubUrl: '#',
    liveUrl: '#'
  }
]
</script>

<style scoped>
.experience {
  background-color: var(--background);
}

.section-header {
  margin-bottom: 0;
}

.section-header h2 {
  color: var(--primary-blue);
  margin-bottom: 1rem;
}

.projects-visual {
  margin-top: 2rem;
  margin-bottom: -2rem;
  position: relative;
  z-index: 2;
}

.typing-avatar {
  max-width: 350px;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;
}

.typing-avatar:hover {
  transform: scale(1.05);
}

.projects-content {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Projects Styles */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  position: relative;
  height: fit-content;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-header h3 {
  color: var(--text-primary);
  flex: 1;
}

.project-links {
  display: flex;
  gap: 0.5rem;
}

.project-link {
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.project-link:hover {
  color: var(--primary-blue);
}

.project-description {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--light-blue);
  color: var(--primary-blue);
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.featured-badge {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: var(--accent-blue);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  transform: rotate(12deg);
}

/* Responsive design */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-header {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>