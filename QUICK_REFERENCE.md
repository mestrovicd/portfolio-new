# Quick Reference Guide

## 🚀 Common Commands

### Development
```bash
# Start dev server
npm start

# Start on custom port
ng serve --port 4300

# Build for production
npm run build

# Run tests
npm run test

# Lint code
ng lint
```

## 📝 Common Tasks

### Edit Home Page Content
**File**: `src/app/pages/home/home.ts`

Change typing text:
```typescript
fullText = 'Hi, I\'m Dario Meštrović';
```

Change role titles:
```typescript
rolesList = ['Frontend Developer', 'CMS Specialist', 'Tech Lead'];
```

Change typing speed (ms per character):
```typescript
typingSpeed = 100; // Lower = faster
```

---

### Edit About Page Content
**File**: `src/app/pages/about/about.ts`

Update experiences:
```typescript
experiences = [
  {
    company: 'Company Name',
    position: 'Your Position',
    period: '2024 - Present',
    description: 'Your description',
    skills: ['Skill1', 'Skill2']
  }
];
```

Update skills:
```typescript
skills = [
  { category: 'Frontend', items: ['Angular', 'TypeScript', 'SCSS'] },
  { category: 'Tools & Libraries', items: ['jQuery', 'Git', 'Webpack', 'REST APIs', 'npm'] }
];
```

---

### Update Contact Information
**Email links in:**
- `src/app/components/navbar/navbar.html` - Line ~28
- `src/app/pages/home/home.html` - Line ~23
- `src/app/pages/about/about.html` - Line ~99

Replace `dario@example.com` with your actual email.

---

### Change Colors/Theme
**File**: `src/app/pages/home/home.scss` & `src/app/pages/about/about.scss`

Update gradient:
```scss
$primary-gradient: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 50%, #YOUR_COLOR3 100%);
```

Current colors:
- Red: `#ff6b6b`
- Pink: `#ee5a6f`
- Purple: `#c44569`
- Dark Background: `#0f0f1e`
- Card Background: `#1a1a2e`

---

## 🎯 File Locations

| Task | File |
|------|------|
| Change home page text | `src/app/pages/home/home.ts` |
| Change home page layout | `src/app/pages/home/home.html` |
| Change home page styles | `src/app/pages/home/home.scss` |
| Update about content | `src/app/pages/about/about.ts` |
| Add navigation links | `src/app/components/navbar/navbar.html` |
| Edit global colors | `src/styles.scss` |
| Update footer | `src/app/components/footer/footer.ts` |

---

## 🎨 CSS Classes Available

### Buttons
```html
<a class="btn btn-primary">Primary Button</a>
<a class="btn btn-secondary">Secondary Button</a>
```

### Card Effects
- Hover: Card lifts up with shadow
- Border: Changes to red gradient on hover
- Transition: Smooth 0.3s animation

### Text Effects
- Typing animation: `.typing-text`
- Gradient text: `background: $primary-gradient`
- Fade animations: `data-aos="fade-up"`

---

## 🔄 Angular Signals Cheat Sheet

### Create Signal
```typescript
count = signal(0);
text = signal('Hello');
```

### Read Signal
```typescript
{{ count() }}
{{ text() }}
```

### Update Signal
```typescript
this.count.update(value => value + 1);
this.text.update(t => t + ' World');
```

---

## 📱 Responsive Design Breakpoints

```scss
// Mobile
@media (max-width: 480px) { }

// Tablet
@media (max-width: 768px) { }

// Large Desktop
@media (min-width: 1200px) { }
```

---

## 🐛 Quick Fixes

### App Won't Load
1. Check console (F12) for errors
2. Verify no TypeScript errors in terminal
3. Hard refresh: Ctrl+Shift+R

### Port Already in Use
```bash
# Kill process on port 4200
netstat -ano | findstr :4200
taskkill /PID <PID> /F
```

### Node Modules Corrupted
```bash
rm -r node_modules package-lock.json
npm install
```

---

## 🎬 Animation Speed Reference

### Modify Animation Duration
**File**: Component `.scss` files

```scss
animation: slideIn 0.5s ease-out;
/* Change 0.5s to your desired duration */

animation-duration: 2s;  /* 2 seconds */
animation-duration: 300ms;  /* 300 milliseconds */
```

Common durations:
- Fast: 200-300ms
- Normal: 500-700ms
- Slow: 1s-2s

---

## 🚀 Deployment Checklist

Before deployment:
- [ ] Update email address in 3 places
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Check all images load
- [ ] Verify animations work smoothly
- [ ] Update meta tags in `index.html`
- [ ] Test on different browsers

Deploy:
1. `npm run build`
2. Upload `dist/` folder contents
3. Configure 404 redirects to index.html
4. Set up SSL certificate
5. Configure domain DNS

---

## 📚 Useful Resources

- Angular CLI Commands: `ng help`
- Dev Server Help: Press `h + Enter` in terminal
- TypeScript Errors: Check IDE and terminal
- Browser DevTools: F12

---

## 💡 Tips & Tricks

### Live Edit Skills
Edit `skills` array in `about.ts` → Changes appear instantly

### Add New Social Link
Edit `footer.html` → Add new `<a>` tag in social links

### Change Font Size
Search `font-size:` in component SCSS and adjust values

### Add New Animation
1. Define keyframes in component SCSS
2. Apply with `animation: name duration timing`

---

**Pro Tip**: Use Ctrl+Shift+F to find and replace across all files
