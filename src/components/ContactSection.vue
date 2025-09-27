<template>
  <section id="contact" class="contact section">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="fade-in-up">Let's Connect</h2>
        <p class="fade-in-up delay-1">
          Always excited to discuss new opportunities,
          collaborate on interesting projects, or just chat about tech and music!
        </p>
      </div>
      
      <div class="contact-content">
        <!-- Contact Form -->
        <div class="contact-form-container fade-in-up delay-2">
          <div class="form-header">
            <h3>Send Me a Message</h3>
            <p>Have a project in mind or just want to say hello? Drop me a line!</p>
          </div>
          
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                id="name"
                v-model="form.name"
                type="text" 
                class="form-input"
                :class="{ error: errors.name }"
                placeholder="Your name"
                required
              />
              <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                id="email"
                v-model="form.email"
                type="email" 
                class="form-input"
                :class="{ error: errors.email }"
                placeholder="your.email@example.com"
                required
              />
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message"
                v-model="form.message"
                class="form-textarea"
                :class="{ error: errors.message }"
                placeholder="Your message"
                rows="5"
                required
              ></textarea>
              <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
            </div>
            
            <button 
              type="submit" 
              class="btn btn-primary submit-btn"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else>Sending...</span>
            </button>
            
            <div v-if="submitSuccess" class="success-message">
              ✅ Thank you! Your message has been sent successfully.
            </div>
            
            <div v-if="submitError" class="error-message">
              ❌ Sorry, there was an error sending your message. Please try again.
            </div>
          </form>
        </div>
        
        <!-- Contact Info & Social Links -->
        <div class="contact-info fade-in-up delay-3">
          <div class="social-section">
            <h3>Social Links</h3>
            <div class="social-links">
              <a href="https://linkedin.com/in/aryanhs145" class="social-icon linkedin" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <a href="https://github.com/thegoodgamer14" class="social-icon github" target="_blank" rel="noopener noreferrer" title="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              <a href="https://twitter.com/0xh_aryan" class="social-icon twitter" target="_blank" rel="noopener noreferrer" title="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="resume-section">
            <h3>Resume</h3>
            <p>Want to see my full professional background?</p>
            <a href="https://drive.google.com/file/d/1fCzKFmqeTAlfwS40s_IzjKox2dFfI_Pf/view?usp=sharing" class="btn btn-outline download-resume" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { ContactForm } from '@/types'

const form = reactive<ContactForm>({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)

const validateForm = (): boolean => {
  // Reset errors
  errors.name = ''
  errors.email = ''
  errors.message = ''
  
  let isValid = true
  
  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  }
  
  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }
  
  if (!form.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long'
    isValid = false
  }
  
  return isValid
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  submitSuccess.value = false
  submitError.value = false
  
  try {
    // TODO: Replace with actual form submission endpoint
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
    
    // Reset form on success
    form.name = ''
    form.email = ''
    form.message = ''
    submitSuccess.value = true
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      submitSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Error submitting form:', error)
    submitError.value = true
    
    // Hide error message after 5 seconds
    setTimeout(() => {
      submitError.value = false
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact {
  background-color: var(--background);
}

.section-header {
  margin-bottom: 4rem;
}

.section-header h2 {
  color: var(--primary-blue);
  margin-bottom: 1rem;
}

.section-header p {
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
}

.contact-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Contact Form */
.contact-form-container {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1.5rem;
  padding: 3rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.form-header {
  margin-bottom: 2rem;
}

.form-header h3 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.form-header p {
  color: var(--text-secondary);
  margin: 0;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.9rem;
}

.form-input,
.form-textarea {
  padding: 0.75rem 1rem;
  border: 2px solid var(--border);
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

.form-input.error,
.form-textarea.error {
  border-color: #ef4444;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.error-message {
  color: #ef4444;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

.success-message {
  color: #22c55e;
  font-size: 0.95rem;
  padding: 0.75rem;
  background: #dcfce7;
  border-radius: 0.5rem;
  text-align: center;
}

.submit-btn {
  margin-top: 1rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.info-section h3,
.social-section h3,
.resume-section h3 {
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.contact-method:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-method.location {
  pointer-events: none;
}

.method-icon {
  width: 3rem;
  height: 3rem;
  background: var(--light-blue);
  color: var(--primary-blue);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.method-details h4 {
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
}

.method-details p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.9rem;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  text-decoration: none;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  background: transparent;
  border: 2px solid var(--border);
}

.social-icon:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.social-icon.linkedin:hover {
  color: #0077b5;
  border-color: #0077b5;
  box-shadow: 0 4px 12px rgba(0, 119, 181, 0.25);
}

.social-icon.github:hover {
  color: #333;
  border-color: #333;
  box-shadow: 0 4px 12px rgba(51, 51, 51, 0.25);
}

.social-icon.twitter:hover {
  color: #1da1f2;
  border-color: #1da1f2;
  box-shadow: 0 4px 12px rgba(29, 161, 242, 0.25);
}

/* Resume Section */
.resume-section {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.resume-section p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.download-resume {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
}

/* Responsive design */
@media (max-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .contact-form-container {
    padding: 2rem;
  }
  
  .section-header {
    margin-bottom: 2rem;
  }
  
  .contact-content {
    gap: 2rem;
  }
  
  .social-links {
    justify-content: center;
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .contact-form-container {
    padding: 1.5rem;
  }
  
  .form-header h3 {
    font-size: 1.3rem;
  }
  
  .submit-btn {
    font-size: 1rem;
  }
}
</style>