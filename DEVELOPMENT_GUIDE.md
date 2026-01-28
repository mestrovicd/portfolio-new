# Portfolio Website - Setup & Development Guide

## 📋 Project Overview

A professional portfolio website showcasing Dario Meštrović's expertise in frontend development, CMS systems, and modern web technologies.

### Key Information
- **Developer**: Dario Meštrović, 26 years old, Zagreb, Croatia
- **Framework**: Angular 19
- **Node Version**: 22.12.0
- **Build Tool**: Angular CLI
- **Styling**: SCSS with responsive design

---

## 🚀 Quick Start

### 1. Navigate to Project
```bash
cd c:\Users\dmestrovic\Desktop\projects\portfolio2026\portfolio-website
```

### 2. Start Development Server
```bash
npm start
```
Access the application at: `http://localhost:4200`

### 3. View in Browser
The development server includes hot-reload, so changes are instantly visible.

---

## 📁 Key Files & Folders

### Component Structure
```
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   │   ├── navbar.ts       # Navigation logic with menu toggle
│   │   │   ├── navbar.html     # Responsive navbar template
│   │   │   └── navbar.scss     # Navbar styles with animations
│   │   │
│   │   └── footer/
│   │       ├── footer.ts       # Footer component logic
│   │       ├── footer.html     # Footer with social links
│   │       └── footer.scss     # Footer responsive styles
│   │
│   ├── pages/
│   │   ├── home/
│   │   │   ├── home.ts         # Typing animation & role carousel logic
│   │   │   ├── home.html       # Hero section & skills preview
│   │   │   └── home.scss       # Hero animations & styling
│   │   │
│   │   └── about/
│   │       ├── about.ts        # Experience & skills data
│   │       ├── about.html      # Timeline & skills showcase
│   │       └── about.scss      # Timeline & card styles
│   │
│   ├── app.ts                  # Root app component
│   ├── app.html                # Main layout template
│   ├── app.scss                # Global component styles
│   ├── app.routes.ts           # Route configuration
│   └── app.config.ts           # App configuration
│
├── styles.scss                 # Global styles & variables
├── main.ts                     # Application entry point
└── index.html                  # HTML entry point
```

---

## 🎯 Component Details

### Navbar Component
**Features:**
- Sticky navigation with gradient background
- Mobile hamburger menu with animation
- Active link highlighting
- Responsive logo with hover effects

**Key Methods:**
- `toggleMenu()`: Toggle mobile menu visibility
- `closeMenu()`: Close menu on navigation

### Footer Component
**Features:**
- Social media links (GitHub, LinkedIn, Twitter)
- Current year dynamic copyright
- Responsive grid layout

**Dynamic Content:**
- Year is automatically updated via TypeScript signal

### Home Component
**Features:**
- Typing animation effect
- Auto-rotating role titles
- Skill cards with AOS animations
- Call-to-action buttons

**TypeScript Implementation:**
- Uses Angular `signal()` for reactive state
- `startTyping()`: Character-by-character text reveal
- `startRoleAnimation()`: 3-second interval role rotation
- `typingSpeed`: Configurable at 100ms per character

**Animations:**
- Blink cursor
- Float shapes
- Bounce scroll indicator
- Slide-in transitions

### About Component
**Features:**
- Personal information cards
- Professional timeline with alternating layout
- Skill categories grid
- Core values showcase
- Email CTA section

**Data Structures:**
- `experiences[]`: Array of job positions with details
- `skills[]`: Categorized technical skills

---

## 🎨 Styling Architecture

### Global Styles (styles.scss)
- CSS Variables for colors
- Typography setup
- Scrollbar customization
- Selection colors
- Layout structure

### Component Styles (SCSS)
Each component has its own SCSS file with:
- Scoped styles
- Mobile-first responsive design
- CSS animations and keyframes
- Gradient definitions
- Hover effects

### Responsive Breakpoints
```scss
// Mobile: < 480px
@media (max-width: 480px) { }

// Tablet: < 768px
@media (max-width: 768px) { }

// Desktop: > 768px
@media (min-width: 769px) { }
```

---

## 🎬 Animations Guide

### CSS Keyframe Animations
Located in component SCSS files:

**Typing Animation**
```scss
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
```
Creates blinking cursor effect

**Float Animation**
```scss
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(30px); }
}
```
Used for background shapes

**Scroll Animation**
```scss
@keyframes scroll {
  0% { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(8px); }
}
```
Mouse wheel indicator animation

### Signal-Based Animations (TypeScript)
```typescript
displayedText = signal('');
roles = signal(0);

// Update signals to trigger re-renders
this.displayedText.update(text => text + character);
this.roles.update(index => (index + 1) % this.rolesList.length);
```

### AOS Library Integration
Scroll-triggered animations with data attributes:
```html
<div data-aos="fade-up">Content fades up on scroll</div>
<div data-aos="zoom-in">Content zooms in on scroll</div>
<div data-aos="fade-right">Content slides in from left</div>
```

---

## 🔧 Development Workflow

### Making Changes

#### 1. **Update Components**
Edit TypeScript files (*.ts) to modify component logic:
```typescript
// home.ts - Add new data
newProperty = signal('value');
newMethod() { /* logic */ }
```

#### 2. **Update Templates**
Edit HTML files (*.html) to change UI:
```html
<!-- home.html - Add new elements -->
<div>{{ newProperty() }}</div>
<button (click)="newMethod()">Click</button>
```

#### 3. **Update Styles**
Edit SCSS files (*.scss) for styling:
```scss
// home.scss - Add new styles
.new-element {
  property: value;
}
```

#### 4. **Hot Reload**
Changes automatically reload in the browser thanks to Angular's watch mode.

---

## 📱 Testing Responsive Design

### Browser DevTools
1. Open Developer Tools (F12)
2. Click Device Toolbar (Ctrl+Shift+M)
3. Test different screen sizes:
   - Mobile: 375px - 480px
   - Tablet: 768px - 1024px
   - Desktop: 1200px+

### Manual Testing Checklist
- [ ] Navigation collapses on mobile
- [ ] Images scale properly
- [ ] Text remains readable
- [ ] Buttons are touchable
- [ ] No horizontal scrolling

---

## 🚀 Building for Production

### Build Command
```bash
npm run build
```

### Build Output
- Location: `dist/portfolio-website/`
- Contains all production-ready files
- Optimized and minified code

### Deployment Steps
1. Build the project: `npm run build`
2. Upload `dist/` contents to hosting
3. Configure server to serve index.html for routing

---

## 🔐 Environment Configuration

### Development Environment
- Uses Angular dev server
- Unminified code for debugging
- Watch mode enabled
- Hot reload active

### Production Environment
- Optimized bundle size
- Minified CSS and JavaScript
- Tree-shaking removes unused code
- Ahead-of-Time (AOT) compilation

---

## 📚 Content Management

### Updating Personal Information

#### About Section (About Component)
Edit `src/app/pages/about/about.ts`:
```typescript
experiences = [
  {
    company: 'Company Name',
    position: 'Your Position',
    period: 'Start - End',
    description: 'What you did',
    skills: ['Skill1', 'Skill2']
  }
  // Add more...
];

skills = [
  { category: 'Frontend', items: ['Angular', 'TypeScript'] },
  // More categories...
];
```

#### Home Role Titles (Home Component)
Edit `src/app/pages/home/home.ts`:
```typescript
rolesList = [
  'Frontend Developer',
  'CMS Specialist',
  'Tech Lead',
  'Your New Role'  // Add new role
];
```

#### Contact Information
Update email links in:
- `src/app/components/navbar/navbar.html`
- `src/app/pages/home/home.html`
- `src/app/pages/about/about.html`

---

## 🐛 Troubleshooting

### Dev Server Won't Start
```bash
# Clear Angular cache
rm -r .angular/
# Reinstall dependencies
npm install
# Start again
npm start
```

### Port 4200 Already in Use
```bash
# Use different port
ng serve --port 4300
```

### Changes Not Reflecting
1. Hard refresh browser (Ctrl+Shift+R)
2. Check browser console for errors (F12)
3. Check terminal for build errors

### Build Errors
```bash
# Verify TypeScript
npx tsc --noEmit

# Verify node modules
rm -r node_modules/
npm install
```

---

## 📦 Dependencies Overview

### Core Angular
- `@angular/core` - Core framework
- `@angular/common` - Common directives
- `@angular/router` - Client routing
- `@angular/platform-browser` - Browser services

### Animation Libraries
- `aos` - Scroll animations
- `gsap` - Advanced animations (installed but ready to use)

### Development Tools
- `typescript` - TypeScript compiler
- `@angular/cli` - Angular command-line tools

---

## 🔗 Phase 2 Preparation

For the hidden projects route planned in Phase 2:

### Folder Structure
```
src/app/
├── pages/
│   ├── home/
│   ├── about/
│   └── projects/  ← New folder for Phase 2
│       ├── projects.ts
│       ├── projects.html
│       └── projects.scss
```

### Route Addition
Update `app.routes.ts`:
```typescript
{
  path: 'admin/projects',  // Hidden route
  component: ProjectsComponent,
  canActivate: [AuthGuard]  // Add authentication
}
```

---

## 📞 Support & Resources

### Official Documentation
- [Angular Official Docs](https://angular.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [AOS Library](https://michalsnik.github.io/aos)

### Keyboard Shortcuts (Dev Server)
- `h + Enter` - Show help
- `r + Enter` - Hard refresh
- `s + Enter` - Stop server

---

## ✅ Next Steps

1. **Customize Content**
   - Update personal information
   - Add real project links
   - Configure email contact

2. **Deploy**
   - Choose hosting provider
   - Build project
   - Upload dist files
   - Configure domain

3. **Monitor**
   - Set up analytics
   - Monitor performance
   - Track user engagement

4. **Phase 2**
   - Design projects page
   - Set up authentication
   - Build project showcase

---

**Last Updated**: January 28, 2026
**Angular Version**: 19.x
**Node**: 22.12.0
