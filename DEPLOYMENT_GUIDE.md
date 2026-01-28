# Deployment Guide

## 🚀 Pre-Deployment Checklist

Before deploying your portfolio website, ensure everything is ready:

### Content Updates
- [ ] Email address updated (3 locations)
- [ ] All work experience accurate
- [ ] Skills list complete
- [ ] Contact information correct
- [ ] Social media links added

### Functionality Testing
- [ ] Home page loads without errors
- [ ] About page loads without errors
- [ ] Navigation works on all pages
- [ ] Mobile menu toggles properly
- [ ] All links are functional
- [ ] Animations run smoothly
- [ ] No console errors (F12)

### Performance Checks
- [ ] Page load time acceptable
- [ ] Images optimized
- [ ] Bundle size reasonable
- [ ] Mobile responsive tested
- [ ] Touch targets appropriately sized
- [ ] Text readable on all devices

### Browser Compatibility
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

---

## 📝 Content Checklist

### Update Email Address
Find and replace in 3 files:

**1. Navbar** (`src/app/components/navbar/navbar.html`)
```html
<a href="mailto:dario@example.com">Contact</a>
```

**2. Home Page** (`src/app/pages/home/home.html`)
```html
<a href="mailto:dario@example.com">Get In Touch</a>
```

**3. About Page** (`src/app/pages/about/about.html`)
```html
<a href="mailto:dario@example.com">Send me an email</a>
```

### Update Meta Tags
**File**: `src/index.html`
```html
<title>Dario Meštrović - Frontend Developer & CMS Specialist</title>
<meta name="description" content="Portfolio of Dario Meštrović, a frontend developer from Zagreb, Croatia">
<meta name="author" content="Dario Meštrović">
<meta name="keywords" content="developer, frontend, react, angular, cms, zagreb">
```

---

## 🏗️ Building for Production

### Step 1: Build the Application
```bash
cd c:\Users\dmestrovic\Desktop\projects\portfolio2026\portfolio-website

npm run build
```

Output:
```
✔ Build complete. Output is in the dist/ folder.
```

### Step 2: Verify Build Output
```bash
# Check dist folder exists and has content
Get-ChildItem -Path dist/portfolio-website/browser
```

Expected files:
- `index.html`
- `main.*.js`
- `styles.*.css`
- `favicon.ico`

### Step 3: Test Production Build Locally
```bash
# Install http-server globally (one-time)
npm install -g http-server

# Serve production build
http-server dist/portfolio-website/browser -p 8080

# Visit http://localhost:8080 in browser
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended for Angular)

**Advantages:**
- Zero-config deployment
- Automatic builds on push
- Global CDN
- Free tier available
- SSL included
- Environment variables

**Steps:**

1. Create account at [vercel.com](https://vercel.com)

2. Install Vercel CLI:
```bash
npm install -g vercel
```

3. Deploy:
```bash
cd c:\Users\dmestrovic\Desktop\projects\portfolio2026\portfolio-website
vercel
```

4. Follow prompts and confirm deployment

5. Configure custom domain in Vercel dashboard

---

### Option 2: Netlify

**Advantages:**
- User-friendly interface
- Easy GitHub integration
- Free SSL
- Global CDN
- Good for SPA

**Steps:**

1. Create account at [netlify.com](https://netlify.com)

2. Connect GitHub repository

3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/portfolio-website/browser`

4. Set redirects for SPA routing:
   Create `netlify.toml`:
   ```toml
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

5. Deploy by pushing to GitHub

---

### Option 3: Firebase Hosting

**Advantages:**
- Google infrastructure
- Real-time database ready
- Auth integration available
- Free tier generous
- Analytics included

**Steps:**

1. Create Firebase project at [firebase.google.com](https://firebase.google.com)

2. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

3. Initialize Firebase:
```bash
firebase init hosting
```

4. Build project:
```bash
npm run build
```

5. Deploy:
```bash
firebase deploy
```

---

### Option 4: Traditional Web Server (Apache/Nginx)

**For Apache:**
Create `.htaccess` in `dist/portfolio-website/browser`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**For Nginx:**
Add to server block:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 🔧 Domain Configuration

### Point Domain to Hosting

**1. Get Nameserver Information**
- From your hosting provider
- Example: `ns1.example.com`, `ns2.example.com`

**2. Update Domain Registrar**
- Log in to domain registrar (GoDaddy, Namecheap, etc.)
- Find DNS settings
- Update nameservers to match hosting provider

**3. Wait for Propagation**
- Takes 24-48 hours
- Check status: [whatsmydns.net](https://whatsmydns.net)

**4. Set up SSL**
- Most providers include free SSL
- Enable in hosting dashboard
- Some auto-configure

### Configure A Records (Alternative)
If nameservers don't work, use A records:
1. Get IP address from hosting provider
2. Add A record pointing to IP
3. Add CNAME for www subdomain

---

## 🔒 Security Checklist

- [ ] Use HTTPS (not HTTP)
- [ ] Enable security headers
- [ ] Set up firewall rules
- [ ] Keep dependencies updated
- [ ] Regular backups
- [ ] Monitor error logs
- [ ] Disable directory listing
- [ ] Implement rate limiting

### Security Headers (Nginx example)
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

---

## 📊 Post-Deployment Verification

### Automated Tests
```bash
# Test production build locally first
http-server dist/portfolio-website/browser

# Check in browser:
# 1. http://localhost:8080
# 2. http://localhost:8080/about
# 3. Click all links
# 4. Test mobile view
```

### Manual Testing Checklist
- [ ] Home page loads
- [ ] About page loads
- [ ] Navigation works
- [ ] Mobile menu works
- [ ] Animations run
- [ ] All links functional
- [ ] Images load
- [ ] No console errors
- [ ] Performance acceptable
- [ ] Mobile responsive

### Analytics Setup
Add Google Analytics to `src/index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🔄 Updating After Deployment

### Making Changes
1. Edit files in `src/`
2. Test locally: `npm start`
3. Commit changes to GitHub
4. Hosting provider automatically rebuilds
5. Changes live within minutes

### Updating Content
For **content-only updates** (no code changes):
1. Edit `src/app/pages/*/[page].ts`
2. Commit to GitHub
3. Wait for auto-rebuild
4. Content updated live

### Rolling Back
If needed:
1. Revert commit on GitHub
2. Hosting auto-redeploys previous version
3. Takes 1-5 minutes

---

## 📈 Monitoring & Maintenance

### Monthly Tasks
- [ ] Check error logs
- [ ] Verify all links work
- [ ] Review analytics
- [ ] Check mobile rendering
- [ ] Test different browsers

### Quarterly Tasks
- [ ] Update dependencies: `npm update`
- [ ] Audit security: `npm audit`
- [ ] Performance check
- [ ] SEO optimization review

### Yearly Tasks
- [ ] Major dependency updates
- [ ] Security audit
- [ ] Design refresh consideration
- [ ] Feature additions

---

## 🐛 Troubleshooting Deployment

### Site Shows 404
**Solution**: Ensure hosting is configured for SPA routing
- Redirect all routes to index.html
- Check hosting docs for SPA config

### Styles Not Loading
**Solution**: Check build output path
- Verify CSS files in dist/
- Check path references in HTML

### Images Not Showing
**Solution**: Verify image paths
- Use relative paths: `./assets/image.png`
- Check dist folder structure

### Slow Performance
**Solution**: Optimize bundle
1. Run: `npm run build -- --stats-json`
2. Analyze with: `npm install -g webpack-bundle-analyzer`
3. Identify large packages

### CORS Errors
**Solution**: Check API calls
- If calling external APIs, ensure they support CORS
- Or use backend proxy

---

## 📞 Support Resources

### Official Documentation
- [Angular Deployment Guide](https://angular.dev/guide/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Firebase Hosting Guide](https://firebase.google.com/docs/hosting)

### Community Help
- [Stack Overflow](https://stackoverflow.com/questions/tagged/angular)
- [Angular Discord](https://discord.gg/angular)
- [GitHub Issues](https://github.com/angular/angular/issues)

---

## ✅ Deployment Completed

Once deployed:

1. **Share URL**: Send to friends, colleagues, employers
2. **Monitor**: Check analytics and user feedback
3. **Maintain**: Keep dependencies updated
4. **Iterate**: Make improvements based on feedback
5. **Plan Phase 2**: Begin projects section development

---

## 📋 Quick Reference Commands

```bash
# Build for production
npm run build

# Test production build locally
http-server dist/portfolio-website/browser -p 8080

# Deploy to Vercel
vercel

# Deploy to Firebase
firebase deploy

# Update dependencies
npm update

# Check for security issues
npm audit

# Clear build cache
rm -r dist/ .angular/

# Reinstall dependencies
rm -r node_modules
npm install
```

---

**Last Updated**: January 28, 2026
**Status**: Ready for Deployment ✅
