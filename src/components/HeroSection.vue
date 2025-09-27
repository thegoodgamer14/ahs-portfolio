<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title fade-in-up">
            Hi, I'm <span class="highlight">Aryan</span>
          </h1>
          <p class="hero-subtitle fade-in-up delay-1">
            <span class="typing-text">{{ currentText }}</span>
            <span class="cursor" :class="{ blink: showCursor }">|</span>
          </p>
          <p class="hero-description fade-in-up delay-2">
            Recent Computer Science graduate with a passion for data, music, and creative problem solving.
            Currently exploring the intersection of technology and human behavior while jamming on the guitar.
          </p>

          <div class="hero-cta fade-in-up delay-3">
            <a href="#about" class="btn btn-primary">
              Learn More About Me
            </a>
            <a href="#contact" class="btn btn-outline">
              Get In Touch
            </a>
          </div>

          <div class="hero-quick-links fade-in-up delay-4">
            <a href="#experience" class="quick-link">Experience</a>
            <a href="#projects" class="quick-link">Projects</a>
            <a href="/blog" class="quick-link">Blog</a>
            <a href="#tech-stack" class="quick-link">Tech Stack</a>
          </div>
        </div>

        <div class="hero-visual fade-in delay-2">
          <img
            src="@/assets/avatars/avatar-Photoroom.png"
            alt="Aryan waving hi"
            class="avatar-image"
          />
        </div>
      </div>
    </div>
    
    <div class="hero-scroll-indicator">
      <div class="scroll-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6,9 12,15 18,9"></polyline>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showCursor = ref(true)
const currentText = ref('')
const roles = ['backend engineer', 'data engineer', 'ai engineer', 'data analyst', 'content writer', 'metalhead']
let currentRoleIndex = 0
let currentCharIndex = 0
let isTyping = true
let typingInterval: number
let cursorInterval: number

const typeText = () => {
  const currentRole = roles[currentRoleIndex]

  if (isTyping) {
    if (currentCharIndex < currentRole.length) {
      currentText.value = currentRole.substring(0, currentCharIndex + 1)
      currentCharIndex++
    } else {
      // Finished typing, wait then start deleting
      setTimeout(() => {
        isTyping = false
      }, 2000)
    }
  } else {
    if (currentCharIndex > 0) {
      currentText.value = currentRole.substring(0, currentCharIndex - 1)
      currentCharIndex--
    } else {
      // Finished deleting, move to next role
      isTyping = true
      currentRoleIndex = (currentRoleIndex + 1) % roles.length
    }
  }
}

onMounted(() => {
  // Start typing immediately
  typeText()

  typingInterval = setInterval(() => {
    typeText()
  }, isTyping ? 150 : 75)

  cursorInterval = setInterval(() => {
    showCursor.value = !showCursor.value
  }, 530)
})

onUnmounted(() => {
  if (typingInterval) {
    clearInterval(typingInterval)
  }
  if (cursorInterval) {
    clearInterval(cursorInterval)
  }
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: transparent;
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
}

.hero-text {
  z-index: 2;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.highlight {
  color: var(--primary-blue);
  position: relative;
}

.cursor {
  color: var(--primary-blue);
  opacity: 1;
  transition: opacity 0.1s ease;
}

.cursor.blink {
  opacity: 0;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.7;
  max-width: 600px;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.hero-quick-links {
  display: flex;
  gap: 2rem;
}

.quick-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  position: relative;
  transition: color 0.3s ease;
}

.quick-link:hover {
  color: var(--primary-blue);
}

.quick-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-blue);
  transition: width 0.3s ease;
}

.quick-link:hover::after {
  width: 100%;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 500px;
}

.avatar-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;
}

.avatar-image:hover {
  transform: scale(1.05);
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-arrow {
  color: var(--text-secondary);
  cursor: pointer;
  transition: color 0.3s ease;
}

.scroll-arrow:hover {
  color: var(--primary-blue);
}

/* Animations */
.delay-1 {
  animation-delay: 0.2s;
}

.delay-2 {
  animation-delay: 0.4s;
}

.delay-3 {
  animation-delay: 0.6s;
}

.delay-4 {
  animation-delay: 0.8s;
}


@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-10px) translateX(-50%);
  }
  60% {
    transform: translateY(-5px) translateX(-50%);
  }
}

/* Responsive design */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-visual {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-cta {
    flex-direction: column;
    align-items: center;
  }

  .hero-quick-links {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>