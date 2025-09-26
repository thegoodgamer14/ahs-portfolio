<template>
  <section id="tech-stack" class="tech-stack section">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="fade-in-up">Tech Stack</h2>
        <p class="fade-in-up delay-1">Technologies I work with and love</p>
      </div>
      
      <div class="tech-categories-grid">
        <div
          v-for="(category, categoryIndex) in techStack"
          :key="category.category"
          class="tech-category-card card fade-in-up"
          :style="{ animationDelay: `${0.1 * categoryIndex}s` }"
        >
          <div class="category-header">
            <h3>{{ category.category }}</h3>
          </div>

          <div class="tech-cards-container">
            <div
              v-for="(tech, techIndex) in category.technologies"
              :key="tech.name"
              class="tech-mini-card"
              :style="{ animationDelay: `${0.05 * techIndex}s` }"
              @mouseenter="showTooltip(tech, $event)"
              @mouseleave="hideTooltip"
            >
              <div class="tech-logo" :class="{ 'tech-logo-hover': hoveredTech === tech.name }">
                <component
                  :is="tech.icon"
                  class="tech-icon-svg"
                  v-if="tech.icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tooltip -->
      <div
        v-if="tooltipVisible"
        class="tooltip"
        :style="{ left: tooltipPosition.x + 'px', top: tooltipPosition.y + 'px' }"
      >
        <div class="tooltip-content">
          <h4>{{ tooltipTech?.name }}</h4>
          <div class="confidence-meter">
            <svg class="confidence-circle" width="60" height="60" viewBox="0 0 42 42">
              <circle
                class="confidence-bg"
                cx="21"
                cy="21"
                r="15.915"
                fill="transparent"
                stroke="var(--border)"
                stroke-width="2"
              />
              <circle
                class="confidence-progress"
                :class="getConfidenceColorClass(getConfidencePercentage(tooltipTech?.level))"
                cx="21"
                cy="21"
                r="15.915"
                fill="transparent"
                stroke-width="2"
                :stroke-dasharray="getStrokeDasharray(getConfidencePercentage(tooltipTech?.level))"
                transform="rotate(-90 21 21)"
              />
            </svg>
            <div class="confidence-text">{{ getConfidencePercentage(tooltipTech?.level) }}%</div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { TechStack, Technology } from '@/types'

// Import all SVG icons
import PythonIcon from './icons/PythonIcon.vue'
import JavaScriptIcon from './icons/JavaScriptIcon.vue'
import TypeScriptIcon from './icons/TypeScriptIcon.vue'
import SQLIcon from './icons/SQLIcon.vue'
import VueIcon from './icons/VueIcon.vue'
import ReactIcon from './icons/ReactIcon.vue'
import HTML5Icon from './icons/HTML5Icon.vue'
import CSS3Icon from './icons/CSS3Icon.vue'
import SassIcon from './icons/SassIcon.vue'
import DjangoIcon from './icons/DjangoIcon.vue'
import NodeIcon from './icons/NodeIcon.vue'
import NextIcon from './icons/NextIcon.vue'
import PostgreSQLIcon from './icons/PostgreSQLIcon.vue'
import MongoDBIcon from './icons/MongoDBIcon.vue'
import RedisIcon from './icons/RedisIcon.vue'
import MySQLIcon from './icons/MySQLIcon.vue'
import SQLiteIcon from './icons/SQLiteIcon.vue'
import AirflowIcon from './icons/AirflowIcon.vue'
import PandasIcon from './icons/PandasIcon.vue'
import NumPyIcon from './icons/NumPyIcon.vue'
import ScikitLearnIcon from './icons/ScikitLearnIcon.vue'
import TensorFlowIcon from './icons/TensorFlowIcon.vue'
import KafkaIcon from './icons/KafkaIcon.vue'
import GitIcon from './icons/GitIcon.vue'
import DockerIcon from './icons/DockerIcon.vue'
import VSCodeIcon from './icons/VSCodeIcon.vue'
import PostmanIcon from './icons/PostmanIcon.vue'
import VercelIcon from './icons/VercelIcon.vue'
import N8nIcon from './icons/N8nIcon.vue'

const tooltipVisible = ref(false)
const tooltipPosition = ref({ x: 0, y: 0 })
const tooltipTech = ref<Technology | null>(null)
const hoveredTech = ref<string | null>(null)

const techStack: TechStack[] = [
  {
    category: 'Languages',
    technologies: [
      { name: 'Python', level: 'expert', icon: PythonIcon },
      { name: 'JavaScript', level: 'expert', icon: JavaScriptIcon },
      { name: 'TypeScript', level: 'advanced', icon: TypeScriptIcon },
      { name: 'SQL', level: 'advanced', icon: SQLIcon },
    ]
  },
  {
    category: 'Frameworks',
    technologies: [
      { name: 'Vue.js', level: 'expert', icon: VueIcon },
      { name: 'React', level: 'advanced', icon: ReactIcon },
      { name: 'HTML5', level: 'expert', icon: HTML5Icon },
      { name: 'CSS3', level: 'intermediate', icon: CSS3Icon },
      { name: 'Sass', level: 'advanced', icon: SassIcon },
      { name: 'Django', level: 'advanced', icon: DjangoIcon },
      { name: 'Node.js', level: 'intermediate', icon: NodeIcon },
      { name: 'Next.js', level: 'intermediate', icon: NextIcon },
    ]
  },
  {
    category: 'Databases',
    technologies: [
      { name: 'PostgreSQL', level: 'advanced', icon: PostgreSQLIcon },
      { name: 'MongoDB', level: 'intermediate', icon: MongoDBIcon },
      { name: 'Redis', level: 'intermediate', icon: RedisIcon },
      { name: 'MySQL', level: 'intermediate', icon: MySQLIcon },
      { name: 'SQLite', level: 'advanced', icon: SQLiteIcon }
    ]
  },
  {
    category: 'Data Engineering & ML',
    technologies: [
      { name: 'Apache Airflow', level: 'intermediate', icon: AirflowIcon },
      { name: 'Pandas', level: 'advanced', icon: PandasIcon },
      { name: 'NumPy', level: 'advanced', icon: NumPyIcon },
      { name: 'scikit-learn', level: 'intermediate', icon: ScikitLearnIcon },
      { name: 'TensorFlow', level: 'beginner', icon: TensorFlowIcon },
      { name: 'Apache Kafka', level: 'beginner', icon: KafkaIcon }
    ]
  },
  {
    category: 'Tools & Platforms',
    technologies: [
      { name: 'Git', level: 'expert', icon: GitIcon },
      { name: 'Docker', level: 'intermediate', icon: DockerIcon },
      { name: 'VS Code', level: 'expert', icon: VSCodeIcon },
      { name: 'Postman', level: 'advanced', icon: PostmanIcon },
      { name: 'Vercel', level: 'advanced', icon: VercelIcon },
      { name: 'n8n', level: 'advanced', icon: N8nIcon },
    ]
  }
]

const showTooltip = (tech: Technology, event: MouseEvent) => {
  tooltipTech.value = tech
  hoveredTech.value = tech.name
  tooltipVisible.value = true

  // Position tooltip relative to mouse with better positioning
  const rect = (event.target as HTMLElement).getBoundingClientRect()
  tooltipPosition.value = {
    x: rect.left + rect.width / 2,
    y: rect.top - 10
  }
}

const hideTooltip = () => {
  tooltipVisible.value = false
  tooltipTech.value = null
  hoveredTech.value = null
}

const getConfidencePercentage = (level: string): number => {
  const levels: { [key: string]: number } = {
    'beginner': 35,
    'intermediate': 60,
    'advanced': 80,
    'expert': 95
  }
  return levels[level] || 35
}

const getConfidenceColorClass = (percentage: number): string => {
  if (percentage <= 25) return 'confidence-red'
  if (percentage <= 50) return 'confidence-orange'
  if (percentage <= 75) return 'confidence-yellow'
  return 'confidence-green'
}

const getStrokeDasharray = (percentage: number): string => {
  const circumference = 2 * Math.PI * 15.915
  const progress = (percentage / 100) * circumference
  return `${progress} ${circumference}`
}
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

.tech-categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.tech-category-card {
  position: relative;
  min-height: 200px;
  display: flex;
  flex-direction: column;
}

.category-header {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

.category-header h3 {
  color: var(--text-primary);
  margin: 0;
  font-size: 1.2rem;
}

.tech-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 1rem;
  flex: 1;
  align-content: start;
}

.tech-mini-card {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.tech-mini-card:hover {
  transform: translateY(-2px);
}

.tech-logo {
  width: 60px;
  height: 60px;
  background: var(--surface-hover);
  border: 2px solid var(--border);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.tech-logo:hover,
.tech-logo-hover {
  background: var(--primary-blue);
  border-color: var(--primary-blue);
  box-shadow: 0 4px 8px rgba(100, 181, 246, 0.3);
}

.tech-icon {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

.tech-icon-svg {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.tech-logo:hover .tech-icon,
.tech-logo-hover .tech-icon {
  color: white;
}

.tech-logo:hover .tech-icon-svg,
.tech-logo-hover .tech-icon-svg {
  transform: scale(1.1);
}

/* Tooltip Styles */
.tooltip {
  position: fixed;
  z-index: 1000;
  pointer-events: none;
  transition: opacity 0.2s ease;
  transform: translateX(-50%);
}

.tooltip-content {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 200px;
}

.tooltip-content h4 {
  color: var(--text-primary);
  margin: 0;
  font-size: 1rem;
  flex: 1;
}

.confidence-meter {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.confidence-circle {
  transform: rotate(-90deg);
}

.confidence-bg {
  stroke: var(--border);
}

.confidence-progress {
  stroke-linecap: round;
  transition: stroke-dasharray 0.3s ease;
}

.confidence-red {
  stroke: #ef4444;
}

.confidence-orange {
  stroke: #f97316;
}

.confidence-yellow {
  stroke: #eab308;
}

.confidence-green {
  stroke: #22c55e;
}

.confidence-text {
  position: absolute;
  color: var(--text-primary);
  font-size: 0.9rem;
  font-weight: 600;
}


/* Responsive design */
@media (max-width: 768px) {
  .tech-categories-grid {
    grid-template-columns: 1fr;
  }

  .tech-cards-container {
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    gap: 0.75rem;
  }

  .tech-logo {
    width: 50px;
    height: 50px;
  }

  .tech-icon {
    font-size: 0.8rem;
  }

  .tooltip-content {
    min-width: 180px;
    padding: 0.75rem;
  }
}

@media (max-width: 480px) {
  .tech-categories-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .tech-cards-container {
    grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
    gap: 0.5rem;
  }

  .tech-logo {
    width: 45px;
    height: 45px;
  }

  .tech-icon {
    font-size: 0.7rem;
  }
}
</style>