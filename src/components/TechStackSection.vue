<template>
  <section id="tech-stack" class="tech-stack section">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="fade-in-up">Tech Stack</h2>
        <p class="fade-in-up delay-1">Technologies I work with and love</p>
      </div>
      
      <div class="tech-categories">
        <div 
          v-for="(category, index) in techStack" 
          :key="category.category"
          class="tech-category fade-in-up"
          :style="{ animationDelay: `${0.1 * index}s` }"
        >
          <div class="category-header" @click="toggleCategory(index)">
            <h3>{{ category.category }}</h3>
            <div class="expand-icon" :class="{ expanded: expandedCategories[index] }">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </div>
          </div>
          
          <div 
            class="category-content" 
            :class="{ expanded: expandedCategories[index] }"
          >
            <div class="technologies-grid">
              <div 
                v-for="(tech, techIndex) in category.technologies" 
                :key="tech.name"
                class="tech-item"
                :style="{ animationDelay: `${0.05 * techIndex}s` }"
              >
                <div class="tech-info">
                  <div class="tech-icon" v-if="tech.icon">{{ tech.icon }}</div>
                  <div class="tech-details">
                    <h4>{{ tech.name }}</h4>
                    <div class="tech-level">
                      <div class="level-bars">
                        <div
                          v-for="i in 5"
                          :key="i"
                          class="level-bar"
                          :class="{ filled: i <= getLevelNumber(tech.level) }"
                        ></div>
                      </div>
                      <span class="level-text">{{ tech.level }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="tech-summary fade-in-up delay-4">
        <div class="summary-stats">
          <div class="stat-item">
            <div class="stat-number">{{ totalTechnologies }}</div>
            <div class="stat-label">Technologies</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ expertTechnologies }}</div>
            <div class="stat-label">Expert Level</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ techStack.length }}</div>
            <div class="stat-label">Categories</div>
          </div>
        </div>
        
        <div class="learning-note">
          <p>
            <strong>Always Learning:</strong> Technology evolves rapidly, and so do I. 
            This stack represents my current expertise, but I'm constantly exploring 
            new tools and deepening my knowledge in existing ones.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { TechStack } from '@/types'

const expandedCategories = ref<boolean[]>([])

const techStack: TechStack[] = [
  {
    category: 'Languages',
    technologies: [
      { name: 'Python', level: 'expert', icon: 'Py' },
      { name: 'JavaScript', level: 'expert', icon: 'JS' },
      { name: 'TypeScript', level: 'advanced', icon: 'TS' },
      { name: 'SQL', level: 'advanced', icon: 'DB' },
      { name: 'Java', level: 'intermediate', icon: 'JV' },
      { name: 'C++', level: 'intermediate', icon: 'C++' }
    ]
  },
  {
    category: 'Frontend Frameworks',
    technologies: [
      { name: 'Vue.js', level: 'expert', icon: 'Vue' },
      { name: 'React', level: 'advanced', icon: 'Rx' },
      { name: 'HTML5', level: 'expert', icon: 'H5' },
      { name: 'CSS3', level: 'expert', icon: 'CSS' },
      { name: 'SCSS/Sass', level: 'advanced', icon: 'Sass' }
    ]
  },
  {
    category: 'Backend & APIs',
    technologies: [
      { name: 'Django', level: 'advanced', icon: 'Dj' },
      { name: 'FastAPI', level: 'advanced', icon: 'API' },
      { name: 'Node.js', level: 'intermediate', icon: 'Node' },
      { name: 'Express.js', level: 'intermediate', icon: 'Exp' },
      { name: 'REST APIs', level: 'expert', icon: 'REST' },
      { name: 'GraphQL', level: 'beginner', icon: 'GQL' }
    ]
  },
  {
    category: 'Databases',
    technologies: [
      { name: 'PostgreSQL', level: 'advanced', icon: 'PG' },
      { name: 'MongoDB', level: 'intermediate', icon: 'Mongo' },
      { name: 'Redis', level: 'intermediate', icon: 'Redis' },
      { name: 'MySQL', level: 'intermediate', icon: 'MySQL' },
      { name: 'SQLite', level: 'advanced', icon: 'SQLite' }
    ]
  },
  {
    category: 'Data Engineering & ML',
    technologies: [
      { name: 'Apache Airflow', level: 'intermediate', icon: 'Flow' },
      { name: 'Pandas', level: 'advanced', icon: 'Pd' },
      { name: 'NumPy', level: 'advanced', icon: 'Np' },
      { name: 'scikit-learn', level: 'intermediate', icon: 'ML' },
      { name: 'TensorFlow', level: 'beginner', icon: 'TF' },
      { name: 'Apache Kafka', level: 'beginner', icon: 'Kafka' }
    ]
  },
  {
    category: 'Tools & Platforms',
    technologies: [
      { name: 'Git', level: 'expert', icon: 'Git' },
      { name: 'Docker', level: 'intermediate', icon: 'Dock' },
      { name: 'AWS', level: 'intermediate', icon: 'AWS' },
      { name: 'Linux', level: 'advanced', icon: 'Linux' },
      { name: 'VS Code', level: 'expert', icon: 'Code' },
      { name: 'Postman', level: 'advanced', icon: 'Post' }
    ]
  }
]

const totalTechnologies = computed(() => 
  techStack.reduce((total, category) => total + category.technologies.length, 0)
)

const expertTechnologies = computed(() =>
  techStack.reduce((total, category) => 
    total + category.technologies.filter(tech => tech.level === 'expert').length, 0
  )
)

const toggleCategory = (index: number) => {
  expandedCategories.value[index] = !expandedCategories.value[index]
}

const getLevelNumber = (level: string): number => {
  const levels: { [key: string]: number } = {
    'beginner': 2,
    'intermediate': 3,
    'advanced': 4,
    'expert': 5
  }
  return levels[level] || 2
}

onMounted(() => {
  // Initialize all categories as collapsed except the first one
  expandedCategories.value = techStack.map((_, index) => index === 0)
})
</script>

<style scoped>
.tech-stack {
  background-color: var(--background);
}

.section-header {
  margin-bottom: 3rem;
}

.section-header h2 {
  color: var(--primary-blue);
  margin-bottom: 1rem;
}

.tech-categories {
  margin-bottom: 4rem;
}

.tech-category {
  background: white;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.tech-category:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.category-header {
  padding: 1.5rem 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--surface);
  transition: background-color 0.3s ease;
}

.category-header:hover {
  background: var(--light-blue);
}

.category-header h3 {
  color: var(--text-primary);
  margin: 0;
  font-size: 1.3rem;
}

.expand-icon {
  color: var(--text-secondary);
  transition: transform 0.3s ease, color 0.3s ease;
}

.expand-icon.expanded {
  transform: rotate(180deg);
  color: var(--primary-blue);
}

.category-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.category-content.expanded {
  max-height: 1000px;
  padding: 0 2rem 2rem 2rem;
}

.technologies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.tech-item {
  background: var(--surface);
  border-radius: 0.75rem;
  padding: 1rem;
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: var(--light-blue);
  transform: translateY(-2px);
}

.tech-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.tech-icon {
  font-size: 0.7rem;
  font-weight: 700;
  width: 2.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-blue);
  color: white;
  border-radius: 0.25rem;
  flex-shrink: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tech-details {
  flex: 1;
  min-width: 0;
}

.tech-details h4 {
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}

.tech-level {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.level-bars {
  display: flex;
  gap: 2px;
}

.level-bar {
  width: 6px;
  height: 16px;
  border-radius: 1px;
  background: var(--border);
  transition: background-color 0.3s ease;
}

.level-bar.filled {
  background: var(--primary-blue);
}

.level-text {
  color: var(--text-secondary);
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: capitalize;
}

.tech-summary {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.summary-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.stat-item {
  padding: 1rem;
  background: var(--surface);
  border-radius: 0.75rem;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-blue);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-weight: 500;
}

.learning-note {
  background: var(--light-blue);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border-left: 4px solid var(--primary-blue);
}

.learning-note p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.6;
}

.learning-note strong {
  color: var(--primary-blue);
}

/* Responsive design */
@media (max-width: 768px) {
  .category-header {
    padding: 1rem 1.5rem;
  }
  
  .category-content.expanded {
    padding: 0 1.5rem 1.5rem 1.5rem;
  }
  
  .technologies-grid {
    grid-template-columns: 1fr;
  }
  
  .tech-info {
    gap: 0.75rem;
  }
  
  .summary-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .tech-summary {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .category-header h3 {
    font-size: 1.1rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}
</style>