# Aryan Hemant Sharma - Portfolio Website

A playfully minimalist portfolio website built with Vue.js 3, featuring dynamic widgets, real-time integrations, and a clean, modern design.

## 🌟 Features

### Core Sections
- **Hero Section**: Clean introduction with animated elements and quick navigation
- **About Me**: Personal and professional story with highlights and statistics
- **Experience & Projects**: Interactive timeline and project showcase with filtering
- **Dynamic Widgets**: Real-time GitHub activity, Spotify integration, and blog preview
- **Tech Stack**: Expandable categories with skill level visualization
- **Leadership & Impact**: Community service achievements and core values
- **Contact**: Functional contact form with social links and resume download

### Interactive Elements
- **GitHub Integration**: Live activity feed showing recent commits and repositories
- **Spotify Integration**: Now playing widget with track details and external links
- **Blog System**: Ready for Payload CMS integration with mock data fallback
- **Smooth Animations**: Subtle fade-ins, hover effects, and scroll animations
- **Responsive Design**: Mobile-first approach with seamless cross-device experience

### Technical Highlights
- Vue.js 3 with Composition API and TypeScript
- Modern CSS with CSS Grid and Flexbox
- Progressive enhancement and graceful degradation
- SEO-optimized structure with meta tags
- Performance-focused with lazy loading

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.19.0 or higher)
- npm (v10.8.2 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ahs-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your API credentials:
   - Spotify API credentials for music integration
   - GitHub token for enhanced API access (optional)
   - Payload CMS endpoint for blog functionality
   - Contact form submission endpoint

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test:unit` - Run unit tests with Vitest

## 🔧 Configuration

### API Integrations

#### Spotify Web API
1. Create an app at [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)
2. Add your client ID, client secret, and refresh token to `.env`
3. The widget will show currently playing or recently played tracks

#### GitHub API
1. (Optional) Generate a personal access token at [GitHub Settings](https://github.com/settings/tokens)
2. Add the token to `.env` for higher rate limits
3. Update the username in `src/services/github.ts`

#### Blog Integration
1. Set up Payload CMS or your preferred headless CMS
2. Update the API endpoint in `.env`
3. Modify `src/services/blog.ts` to match your CMS schema

### Customization

#### Personal Information
Update the following files with your details:
- `src/components/HeroSection.vue` - Name and tagline
- `src/components/AboutSection.vue` - Personal story and highlights
- `src/components/ExperienceSection.vue` - Work experience and projects
- `src/components/LeadershipSection.vue` - Achievements and values
- `src/components/ContactSection.vue` - Contact information and social links

#### Styling
- Main color palette in `src/assets/main.css` (CSS custom properties)
- Component-specific styles in individual `.vue` files
- Global typography and layout utilities in base CSS files

#### Content
- Update project data in `ExperienceSection.vue`
- Modify tech stack in `TechStackSection.vue`
- Replace placeholder links with actual URLs
- Add your resume PDF to the `public` folder

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Fluid typography that scales with viewport size
- Flexible grid layouts that stack on smaller screens
- Touch-friendly interactive elements
- Optimized images and performance for all devices

## 🔍 SEO Optimization

- Semantic HTML structure with proper heading hierarchy
- Meta tags for social media sharing (Open Graph, Twitter Cards)
- Structured data for better search engine understanding
- Fast loading times and Core Web Vitals optimization
- Accessible design following WCAG guidelines

## 🛠️ Technology Stack

### Frontend
- **Vue.js 3** - Progressive JavaScript framework with Composition API
- **TypeScript** - Type-safe JavaScript development
- **Vue Router** - Client-side routing for single-page application
- **Pinia** - State management (ready for complex state if needed)

### Styling
- **CSS3** - Modern CSS with Grid, Flexbox, and custom properties
- **SCSS/Sass** - CSS preprocessing for enhanced styling capabilities
- **Responsive Design** - Mobile-first approach with fluid layouts

### Development Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting for consistent code style
- **Prettier** - Code formatting for consistent formatting
- **Vitest** - Unit testing framework
- **TypeScript** - Static type checking

### APIs & Integrations
- **Spotify Web API** - Music integration for now playing widget
- **GitHub API** - Repository and activity data
- **Payload CMS** - Headless CMS for blog functionality (integration ready)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment to any static hosting service.

### Deployment Options
- **Vercel** - Automatic deployments from Git repository
- **Netlify** - Continuous deployment with form handling
- **GitHub Pages** - Free hosting for personal projects
- **AWS S3 + CloudFront** - Scalable cloud hosting
- **Firebase Hosting** - Google's hosting platform

### Environment Variables
Make sure to set up environment variables on your hosting platform:
- `VITE_SPOTIFY_CLIENT_ID`
- `VITE_SPOTIFY_CLIENT_SECRET`  
- `VITE_SPOTIFY_REFRESH_TOKEN`
- `VITE_PAYLOAD_API_BASE`
- `VITE_CONTACT_FORM_ENDPOINT`

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Aryan Hemant Sharma**
- Email: [aryan@example.com](mailto:aryan@example.com)
- LinkedIn: [linkedin.com/in/aryanhemant](https://linkedin.com/in/aryanhemant)
- GitHub: [github.com/aryanhemant](https://github.com/aryanhemant)
- Location: Dubai, UAE

---

Built with ❤️ using Vue.js 3 and modern web technologies.