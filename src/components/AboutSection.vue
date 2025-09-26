<template>
  <section id="about" class="about section">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="fade-in-up">About Me</h2>
        <p class="fade-in-up delay-1">Get to know the person behind the code</p>
      </div>
      
      <div class="about-content">
        <div class="about-story fade-in-up delay-2">
          <div class="story-section">
            <h3>My Journey</h3>
            <p>
              I'm a recent Computer Science graduate from <strong>IIITM Gwalior</strong>. My journey began with a love for problem-solving and has evolved
              into a passion for transforming data into meaningful insights.
            </p>
            <p>
              After working as a Software Engineer, I discovered my true calling in <strong>data engineering</strong> 
              – the art of building robust systems that enable data-driven decisions. I'm currently deepening my 
              expertise in this exciting field while exploring opportunities that blend technology with human behavior.
            </p>
          </div>
          
          <div class="story-section">
            <h3>Beyond the Screen</h3>
            <p>
              When I'm not architecting data pipelines or writing code, you'll find me with a guitar in hand, 
              learning new riffs and working on original songs. Music has always been my creative outlet – 
              a perfect balance to the logical world of programming.
            </p>
            <p>
              I'm fascinated by the intersection of <strong>business, startups, finance, and psychology</strong>. 
              This curiosity drives me to understand not just how to build things, but why we build them and 
              how they impact people's lives.
            </p>
          </div>
          
          <div class="story-section">
            <h3>My Philosophy</h3>
            <p>
              I consider myself a <strong>rational optimist</strong> who believes in continuous learning and 
              life optimization. Whether it's discovering a new technology, mastering a guitar technique, 
              or understanding game theory principles, I'm always eager to try new things and grow.
            </p>
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
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.story-section {
  margin-bottom: 2.5rem;
}

.story-section:last-child {
  margin-bottom: 0;
}

.story-section h3 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.story-section p {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.story-section p:last-child {
  margin-bottom: 0;
}


/* Responsive design */
@media (max-width: 768px) {
  .about-content {
    max-width: 100%;
    padding: 0 1rem;
  }
}
</style>