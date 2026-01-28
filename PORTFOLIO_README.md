# Dario Meštrović - Portfolio Website

A modern, responsive portfolio website built with **Angular 19**, featuring beautiful animations, typing effects, and smooth transitions.

## 🚀 Features

- **Modern Design**: Sleek dark theme with gradient accents
- **Responsive Layout**: Fully mobile-friendly design
- **Typing Animation**: Dynamic text typing effect on the homepage
- **Smooth Animations**: CSS animations and transitions throughout
- **Multiple Pages**: Home and About pages with rich content
- **CMS Specialist Profile**: Showcases expertise in AEM, Webflow, WordPress
- **DevOps Focus**: Highlights team collaboration and code review capabilities
- **Scroll Animations**: AOS (Animate On Scroll) integration for engaging effects

## 📋 Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/         # Navigation component
│   │   │   └── footer/         # Footer component
│   │   ├── pages/
│   │   │   ├── home/          # Home page with hero section
│   │   │   └── about/         # About page with timeline
│   │   ├── app.ts             # Root component
│   │   ├── app.routes.ts      # Route configuration
│   │   └── app.scss           # Global styles
│   ├── styles.scss            # Global stylesheet
│   └── main.ts                # Application entry point
├── angular.json               # Angular configuration
├── package.json               # Dependencies
└── README.md
```

## 🛠️ Technology Stack

- **Framework**: Angular 19
- **Language**: TypeScript
- **Styling**: SCSS
- **Animations**: CSS Animations, GSAP, AOS (Animate On Scroll)
- **Node Version**: 22.12.0

## 📦 Dependencies

### Core Dependencies
- `@angular/core`: Angular framework
- `@angular/common`: Common Angular modules
- `@angular/router`: Client-side routing
- `rxjs`: Reactive programming library

### Animation Libraries
- `aos`: Scroll-triggered animations
- `gsap`: Advanced animation library

## 🚀 Getting Started

### Prerequisites
- Node.js 22.12.0 or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200/`

## 🏗️ Available Commands

### Development
```bash
npm start          # Start dev server
ng serve           # Alternative: Start dev server
```

### Build
```bash
npm run build      # Build for production
ng build           # Alternative: Build for production
```

### Watch Mode
```bash
ng serve --watch   # Watch for changes during development
```

## 📄 Pages

### Home Page (`/`)
- **Hero Section**: Typing animation with role carousel
- **Skills Preview**: Showcase of technical skills
- **Call-to-Action**: Links to portfolio and contact

### About Page (`/about`)
- **Personal Introduction**: Background and location
- **Professional Timeline**: Work experience at CMG Digital and current company
- **Skills Categories**: Organized by Frontend, Tools & Libraries, CMS, and Soft Skills
- **Core Values**: What drives the developer
- **Contact CTA**: Direct email link

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: Red to Pink to Purple (`#ff6b6b` to `#c44569`)
- **Dark Background**: `#0f0f1e`
- **Card Background**: `#1a1a2e`
- **Text**: White with various opacity levels for hierarchy

### Animations
- **Typing Effect**: Character-by-character text reveal
- **Role Rotation**: Auto-rotating job titles (3-second interval)
- **Floating Shapes**: Subtle background animations
- **Scroll Indicators**: Animated mouse wheel indicator
- **Hover Effects**: Interactive card transformations
- **AOS Integration**: Scroll-triggered animations on skills and values

## 🔄 Component Architecture

### Navbar Component
- Responsive navigation menu
- Mobile hamburger menu with animated toggle
- Active link highlighting
- Logo with gradient

### Footer Component
- Social media links
- Copyright information
- Responsive layout

### Home Component
- Managed signal-based text animation
- Dynamic role switching
- Skill cards preview
- TypeScript implementation

### About Component
- Experience timeline with alternating layout
- Skill categories grid
- Values showcase
- Responsive design

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 480px
- Tablet: < 768px
- Desktop: > 768px

Media queries are implemented throughout for:
- Navigation menu collapse
- Grid layout adjustments
- Font size scaling
- Spacing optimization

## 🔮 Future Phases

### Phase 2 (Coming Soon)
- Hidden projects route with authentication
- Detailed project showcases
- Shopping list family app
- Backoffice admin panel
- Project filtering and search

### Phase 3 (Planned)
- Blog section with case studies
- Dynamic content loading
- Performance optimization
- SEO improvements
- Analytics integration

## 📧 Contact

- Email: [Contact form link]
- Location: Zagreb, Croatia 🇭🇷

## 📝 About the Developer

**Dario Meštrović** - Frontend Developer & CMS Specialist
- 26 years old from Zagreb, Croatia
- 3+ years at CMG Digital (AEM, Webflow, WordPress)
- Currently Mid-Level Developer at gambling company
- Specialization: Team operations, CI/CD, deployments, code reviews

## 🚀 Deployment

To deploy to production:

1. Build the application:
```bash
npm run build
```

2. The production-ready files will be in the `dist/` directory

3. Deploy to your hosting provider (Vercel, Netlify, traditional web server, etc.)

## 📄 License

Personal portfolio website - All rights reserved © 2026 Dario Meštrović

## 🤝 Contributing

This is a personal portfolio. For feature requests or improvements, please open an issue.

---

**Last Updated**: January 28, 2026
**Angular Version**: 19.x
**Node Version**: 22.12.0
