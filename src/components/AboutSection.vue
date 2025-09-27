<template>
  <section id="about" class="about section">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="fade-in-up">About Me</h2>
        <p class="fade-in-up delay-1">Get to know the person behind the code</p>
      </div>
      
      <div class="about-content">
        <!-- About Visual -->
        <div class="about-visual fade-in-up delay-2">
          <img
            src="@/assets/avatars/coffee-Photoroom.png"
            alt="Aryan with coffee"
            class="about-avatar"
          />
        </div>

        <!-- Education Section -->
        <div class="education-section fade-in-up delay-3">
          <div class="education-card">
            <div class="education-header">
              <div class="university-logo">
                <div class="logo-placeholder">IIITM</div>
              </div>
              <div class="education-details">
                <h3>Indian Institute of Information Technology and Management Gwalior</h3>
                <p class="course">Computer Science and Engineering</p>
                <p class="timeline">December 2021 - July 2025</p>
              </div>
            </div>

            <div class="subjects-section">
              <h4>Key Subjects</h4>
              <div class="subjects-grid">
                <span class="subject-tag">Data Structures</span>
                <span class="subject-tag">Algorithms</span>
                <span class="subject-tag">Computer Networking</span>
                <span class="subject-tag">Operating Systems</span>
                <span class="subject-tag">Game Theory</span>
                <span class="subject-tag">Statistics</span>
                <span class="subject-tag">Machine Learning</span>
                <span class="subject-tag">Big Data Analytics</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience Section -->
        <div class="experience-section fade-in-up delay-4">
          <h3>Experience</h3>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <div class="experience-header">
                  <h4>Software Engineering Intern</h4>
                  <h5>Kema</h5>
                  <span class="duration">2024</span>
                </div>
                <ul class="experience-description">
                  <li>Worked on full-stack development projects using modern web technologies</li>
                  <li>Gained hands-on experience with data processing and API development</li>
                  <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
                </ul>
                <div class="technologies">
                  <span class="tech-tag">JavaScript</span>
                  <span class="tech-tag">Python</span>
                  <span class="tech-tag">Vue.js</span>
                  <span class="tech-tag">APIs</span>
                  <span class="tech-tag">Data Processing</span>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <div class="experience-header">
                  <h4>Data Warehouse Developer</h4>
                  <h5>Bluecrest</h5>
                  <span class="duration">2023</span>
                </div>
                <ul class="experience-description">
                  <li>Built and maintained data warehouse solutions for business intelligence</li>
                  <li>Designed ETL pipelines to process large volumes of structured data</li>
                  <li>Optimized database queries and improved data retrieval performance</li>
                </ul>
                <div class="technologies">
                  <span class="tech-tag">SQL</span>
                  <span class="tech-tag">ETL</span>
                  <span class="tech-tag">Data Warehousing</span>
                  <span class="tech-tag">Database Optimization</span>
                </div>
              </div>
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
.about {
  background-color: var(--surface);
}

.section-header {
  margin-bottom: 4rem;
}

.section-header h2 {
  color: var(--primary-blue);
  margin-bottom: 1rem;
}

.about-content {
  display: block;
  margin-bottom: 4rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.about-visual {
  text-align: center;
  margin-bottom: 3rem;
}

.about-avatar {
  max-width: 300px;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;
}

.about-avatar:hover {
  transform: scale(1.05);
}

.education-section {
  margin-bottom: 3rem;
}

.education-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}

.education-header {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.university-logo {
  flex-shrink: 0;
}

.logo-placeholder {
  width: 80px;
  height: 80px;
  background: var(--primary-blue);
  color: white;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.education-details {
  flex: 1;
}

.education-details h3 {
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  line-height: 1.3;
}

.course {
  color: var(--primary-blue);
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
}

.timeline {
  color: var(--text-secondary);
  margin: 0;
  font-size: 1rem;
}

.subjects-section h4 {
  color: var(--text-primary);
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
}

.subjects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.subject-tag {
  background: var(--primary-blue);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
}

/* Experience Section */
.experience-section {
  margin-top: 3rem;
}

.experience-section h3 {
  color: var(--text-primary);
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--primary-blue);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 1.5rem;
  width: 1rem;
  height: 1rem;
  background: var(--primary-blue);
  border-radius: 50%;
  border: 3px solid var(--surface);
  box-shadow: 0 0 0 3px var(--primary-blue);
}

.timeline-content {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem;
  margin-left: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}

.experience-header {
  margin-bottom: 1rem;
}

.experience-header h4 {
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
  font-size: 1.2rem;
}

.experience-header h5 {
  color: var(--primary-blue);
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}

.duration {
  background: var(--primary-blue);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  font-weight: 500;
}

.experience-description {
  margin-bottom: 1.5rem;
  padding-left: 1rem;
}

.experience-description li {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--primary-blue);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  font-weight: 500;
}


/* Responsive design */
@media (max-width: 768px) {
  .about-content {
    max-width: 100%;
    padding: 0 1rem;
  }

  .education-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .education-card {
    padding: 1.5rem;
  }

  .subjects-grid {
    justify-content: center;
  }

  .timeline {
    padding-left: 1rem;
  }

  .timeline::before {
    left: 0.5rem;
  }

  .timeline-marker {
    left: -1.5rem;
  }

  .timeline-content {
    margin-left: 1rem;
    padding: 1rem;
  }
}
</style>