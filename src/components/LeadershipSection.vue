<template>
  <section class="leadership section">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="fade-in-up">Leadership & Impact</h2>
        <p class="fade-in-up delay-1">Making a difference through technology and community service</p>
      </div>
      
      <div class="leadership-content">
        <!-- Rotaract Club Leadership -->
        <div class="leadership-highlight fade-in-up delay-2">
          <div class="highlight-visual">
            <div class="impact-circle">
              <div class="circle-content">
                <div class="impact-number">500+</div>
                <div class="impact-label">People Impacted</div>
              </div>
            </div>
          </div>
          
          <div class="highlight-info">
            <div class="role-badge">President</div>
            <h3>Rotaract Club Leadership</h3>
            <p class="leadership-description">
              Led a dynamic team in organizing community service initiatives, educational workshops, 
              and social impact projects. Through strategic planning and collaborative leadership, 
              we successfully impacted over 500 community members through various programs.
            </p>
            
            <div class="achievements-grid">
              <div class="achievement-item">
                <div class="achievement-icon">🎯</div>
                <h4>Strategic Leadership</h4>
                <p>Developed and executed comprehensive project plans for multiple community initiatives</p>
              </div>
              
              <div class="achievement-item">
                <div class="achievement-icon">👥</div>
                <h4>Team Management</h4>
                <p>Successfully coordinated cross-functional teams of volunteers and stakeholders</p>
              </div>
              
              <div class="achievement-item">
                <div class="achievement-icon">📈</div>
                <h4>Measurable Impact</h4>
                <p>Increased community engagement by 40% and expanded program reach significantly</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Writing & Knowledge Sharing -->
        <div class="content-impact fade-in-up delay-3">
          <div class="impact-stats">
            <div class="stat-card">
              <div class="stat-visual">
                <div class="heart-icon">❤️</div>
                <div class="stat-number">650+</div>
              </div>
              <h4>Medium Article Engagement</h4>
              <p>
                My technical writing on Medium has resonated with developers worldwide, 
                receiving over 650 likes and helping fellow engineers solve complex problems.
              </p>
              <a href="#" class="read-article btn btn-outline" target="_blank" rel="noopener noreferrer">
                Read on Medium
              </a>
            </div>
          </div>
          
          <div class="impact-details">
            <h3>Knowledge Sharing Philosophy</h3>
            <p>
              I believe that knowledge grows when shared. Through my writing and community involvement, 
              I strive to make complex technical concepts accessible and help others on their learning journey.
            </p>
            
            <div class="impact-areas">
              <div class="impact-area">
                <h4>Technical Writing</h4>
                <p>Breaking down complex engineering concepts into digestible, actionable insights</p>
                <div class="impact-tags">
                  <span class="impact-tag">Data Engineering</span>
                  <span class="impact-tag">Software Architecture</span>
                  <span class="impact-tag">Best Practices</span>
                </div>
              </div>
              
              <div class="impact-area">
                <h4>Community Building</h4>
                <p>Fostering connections and collaboration within tech and volunteer communities</p>
                <div class="impact-tags">
                  <span class="impact-tag">Mentorship</span>
                  <span class="impact-tag">Team Leadership</span>
                  <span class="impact-tag">Social Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Core Values -->
        <div class="values-section fade-in-up delay-4">
          <h3 class="values-title">Core Values That Drive My Impact</h3>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">🚀</div>
              <h4>Innovation</h4>
              <p>
                Constantly seeking creative solutions and pushing the boundaries of what's possible 
                through technology and strategic thinking.
              </p>
            </div>
            
            <div class="value-card">
              <div class="value-icon">🤝</div>
              <h4>Collaboration</h4>
              <p>
                Believing that the best outcomes emerge from diverse perspectives and 
                inclusive team environments.
              </p>
            </div>
            
            <div class="value-card">
              <div class="value-icon">📚</div>
              <h4>Continuous Learning</h4>
              <p>
                Embracing a growth mindset and staying curious about new technologies, 
                methodologies, and human insights.
              </p>
            </div>
            
            <div class="value-card">
              <div class="value-icon">🌟</div>
              <h4>Impact-Driven</h4>
              <p>
                Focusing on creating meaningful change that positively affects individuals, 
                communities, and organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.leadership {
  background-color: var(--surface);
}

.section-header {
  margin-bottom: 4rem;
}

.section-header h2 {
  color: var(--primary-blue);
  margin-bottom: 1rem;
}

.leadership-content {
  max-width: 1000px;
  margin: 0 auto;
}

/* Leadership Highlight */
.leadership-highlight {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  align-items: center;
  background: white;
  border-radius: 1.5rem;
  padding: 3rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.impact-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
}

.impact-circle::before {
  content: '';
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  padding: 10px;
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-blue));
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.circle-content {
  text-align: center;
  color: white;
}

.impact-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.impact-label {
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.9;
}

.role-badge {
  display: inline-block;
  background: var(--accent-blue);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.highlight-info h3 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 2rem;
}

.leadership-description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.achievements-grid {
  display: grid;
  gap: 1.5rem;
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: var(--surface);
  border-radius: 0.75rem;
  transition: transform 0.3s ease;
}

.achievement-item:hover {
  transform: translateX(10px);
}

.achievement-icon {
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light-blue);
  border-radius: 0.5rem;
  flex-shrink: 0;
}

.achievement-item h4 {
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.achievement-item p {
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.5;
}

/* Content Impact */
.content-impact {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  height: fit-content;
}

.stat-visual {
  margin-bottom: 1.5rem;
}

.heart-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  display: block;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-blue);
  margin-bottom: 1rem;
}

.stat-card h4 {
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.stat-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.read-article {
  background: #00ab6c;
  border-color: #00ab6c;
  color: white;
}

.read-article:hover {
  background: #008f5a;
  border-color: #008f5a;
}

.impact-details h3 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.impact-details > p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.impact-areas {
  display: grid;
  gap: 2rem;
}

.impact-area h4 {
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.impact-area p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.impact-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.impact-tag {
  background: var(--light-blue);
  color: var(--primary-blue);
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Values Section */
.values-section {
  background: white;
  border-radius: 1.5rem;
  padding: 3rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.values-title {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 2.5rem;
  font-size: 1.8rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.value-card {
  text-align: center;
  padding: 2rem 1.5rem;
  background: var(--surface);
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.value-card h4 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.value-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Responsive design */
@media (max-width: 1024px) {
  .leadership-highlight {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .content-impact {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .impact-circle {
    width: 150px;
    height: 150px;
  }
  
  .impact-number {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .leadership-highlight,
  .values-section {
    padding: 2rem;
  }
  
  .highlight-info h3 {
    font-size: 1.5rem;
  }
  
  .achievement-item {
    flex-direction: column;
    text-align: center;
  }
  
  .achievement-item:hover {
    transform: translateY(-5px);
  }
}

@media (max-width: 480px) {
  .impact-circle {
    width: 120px;
    height: 120px;
  }
  
  .impact-number {
    font-size: 2rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .value-icon {
    font-size: 2rem;
  }
}
</style>