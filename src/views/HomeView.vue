<template>
  <div class="home">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <DynamicWidgets />
    <TechStackSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import DynamicWidgets from '@/components/DynamicWidgets.vue'
import TechStackSection from '@/components/TechStackSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<style scoped>
.home {
  width: 100%;
}
</style>