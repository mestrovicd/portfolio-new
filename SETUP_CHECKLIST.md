# Portfolio Website - Setup Checklist

## ✅ Initial Setup (One Time)

- [ ] Navigate to project folder
  ```bash
  cd c:\Users\dmestrovic\Desktop\projects\portfolio2026\portfolio-website
  ```

- [ ] Start development server
  ```bash
  npm start
  ```

- [ ] Open browser to http://localhost:4200

- [ ] Verify website loads without errors

---

## 📝 Content Customization

### Personal Information

- [ ] **Home Page Title**
  - File: `src/app/pages/home/home.ts` line 11
  - Current: `Hi, I'm Dario Meštrović`
  - Update: Your name

- [ ] **Job Titles (Role Rotation)**
  - File: `src/app/pages/home/home.ts` line 14
  - Current: Frontend Developer, CMS Specialist, Tech Lead
  - Update: Your job titles (rotates every 3 seconds)

- [ ] **About Page - Personal Info**
  - File: `src/app/pages/about/about.html`
  - Update: Who I Am, Education, Location

- [ ] **Work Experience**
  - File: `src/app/pages/about/about.ts` line 12
  - Update company, position, period, description, skills for each role

### Contact Information

- [ ] **Email in Navbar**
  - File: `src/app/components/navbar/navbar.html` line ~28
  - Replace: `dario@example.com` with your email

- [ ] **Email on Home Page**
  - File: `src/app/pages/home/home.html` line ~23
  - Replace: `dario@example.com` with your email

- [ ] **Email on About Page**
  - File: `src/app/pages/about/about.html` line ~99
  - Replace: `dario@example.com` with your email

- [ ] **Social Media Links (Footer)**
  - File: `src/app/components/footer/footer.html`
  - Update GitHub link
  - Update LinkedIn link
  - Update Twitter link

### Skills & Experience

- [ ] **Frontend Skills**
  - File: `src/app/pages/about/about.ts` line 31
  - Update: Angular, TypeScript, SCSS, etc.

- [ ] **Backend Skills**
  - File: `src/app/pages/about/about.ts` line 32
  - Update: NodeJS, Express, Python, etc.

- [ ] **CMS Skills**
  - File: `src/app/pages/about/about.ts` line 33
  - Update: AEM, Webflow, WordPress, etc.

- [ ] **DevOps Skills**
  - File: `src/app/pages/about/about.ts` line 34
  - Update: CI/CD, Git, Team Leadership, etc.

---

## 🎨 Design Customization (Optional)

- [ ] **Color Scheme**
  - Primary Gradient: Modify in component SCSS files
  - Current: Red → Pink → Purple
  - Look for: `$primary-gradient`

- [ ] **Typography**
  - File: `src/styles.scss`
  - Adjust: Font sizes, weights, colors

- [ ] **Spacing/Layout**
  - Files: Component SCSS files
  - Adjust: Padding, margins, gaps

- [ ] **Animations Speed**
  - Files: Component SCSS files
  - Modify: `duration` values in animations

---

## 🧪 Testing Before Deployment

### Functionality Tests
- [ ] Home page loads
- [ ] About page loads
- [ ] All navigation links work
- [ ] Mobile menu toggles
- [ ] Email links open correctly
- [ ] All buttons are clickable
- [ ] No console errors (Press F12)

### Responsive Design Tests
- [ ] Desktop view (1200px+)
- [ ] Tablet view (768px-1024px)
- [ ] Mobile view (320px-480px)
- [ ] Text readable on all sizes
- [ ] Images scale properly
- [ ] Navigation collapses on mobile

### Cross-Browser Tests
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if possible)
- [ ] Mobile Safari (if possible)
- [ ] Chrome Mobile (if possible)

### Performance Tests
- [ ] Page loads quickly (< 3s)
- [ ] Animations run smoothly
- [ ] No lag on interactions
- [ ] Mobile performance acceptable

---

## 📝 Meta Tags & SEO

- [ ] **Page Title**
  - File: `src/index.html`
  - Update: "Dario Meštrović - Frontend Developer & CMS Specialist"

- [ ] **Meta Description**
  - File: `src/index.html`
  - Update: Brief description of your portfolio

- [ ] **Meta Keywords**
  - File: `src/index.html`
  - Add: Relevant keywords (developer, angular, etc.)

- [ ] **Favicon**
  - File: `public/favicon.ico`
  - Update: Your custom favicon (optional)

---

## 🔐 Security Checks

- [ ] No sensitive information in code
- [ ] No API keys exposed
- [ ] Email properly formatted
- [ ] All external links use HTTPS
- [ ] No console warnings
- [ ] No deprecated code

---

## 📦 Build Verification

- [ ] Run build command
  ```bash
  npm run build
  ```

- [ ] Check build completed without errors
- [ ] Verify `dist/` folder created
- [ ] Test production build locally
  ```bash
  http-server dist/portfolio-website/browser -p 8080
  ```

- [ ] Check site works at http://localhost:8080

---

## 🚀 Deployment Preparation

### Choose Hosting Provider
- [ ] Vercel (recommended)
- [ ] Netlify
- [ ] Firebase Hosting
- [ ] Traditional server

### Pre-Deployment
- [ ] All content updated
- [ ] All tests passed
- [ ] Build successful
- [ ] No errors in console
- [ ] Mobile tested

### Configure Domain
- [ ] Domain purchased (if new)
- [ ] Nameservers/DNS configured
- [ ] SSL certificate ready
- [ ] Domain points to hosting

---

## ✅ Deployment Steps

### For Vercel
- [ ] Create Vercel account
- [ ] Install Vercel CLI
- [ ] Run: `vercel`
- [ ] Follow prompts
- [ ] Configure custom domain
- [ ] Verify site is live

### For Netlify
- [ ] Create Netlify account
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Deploy
- [ ] Configure custom domain
- [ ] Verify site is live

### For Firebase
- [ ] Create Firebase project
- [ ] Install Firebase CLI
- [ ] Run: `firebase init hosting`
- [ ] Run: `firebase deploy`
- [ ] Configure custom domain
- [ ] Verify site is live

---

## 📊 Post-Deployment

- [ ] Site loads at custom domain
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] No console errors
- [ ] SSL certificate active
- [ ] Analytics working (if added)

---

## 🔄 Ongoing Maintenance

### Weekly
- [ ] Check for any reported issues
- [ ] Verify all links still work
- [ ] Check analytics (if available)

### Monthly
- [ ] Review error logs
- [ ] Test on different browsers
- [ ] Check mobile rendering
- [ ] Update content if needed

### Quarterly
- [ ] Update dependencies: `npm update`
- [ ] Security audit: `npm audit`
- [ ] Performance check
- [ ] Content review

### Yearly
- [ ] Major dependency updates
- [ ] Security audit
- [ ] Design refresh
- [ ] Feature additions
- [ ] Analytics review

---

## 📚 Documentation Reference

When you need help:
1. **Quick answer?** → [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)
2. **How to develop?** → [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md)
3. **How to deploy?** → [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
4. **Project overview?** → [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)
5. **Sharing with others?** → [PORTFOLIO_README.md](./PORTFOLIO_README.md)

---

## 🎉 Success Indicators

You'll know you're done when:

- ✅ Site runs locally with `npm start`
- ✅ Personal information is updated
- ✅ All tests pass
- ✅ Site builds successfully with `npm run build`
- ✅ Site is deployed to domain
- ✅ Site is live and accessible
- ✅ All functionality works on mobile
- ✅ No console errors
- ✅ Performance is good

---

## 📞 Troubleshooting Quick Links

| Issue | Solution |
|-------|----------|
| App won't start | See DEVELOPMENT_GUIDE.md #Troubleshooting |
| Port in use | Use: `ng serve --port 4300` |
| Changes not showing | Hard refresh: Ctrl+Shift+R |
| Build fails | Run: `rm -r node_modules && npm install` |
| Email not in right place | Search all files for "dario@example.com" |
| Styles look wrong | Check browser cache (Ctrl+Shift+Delete) |

---

## 🚀 Next Steps After Deployment

1. **Share your portfolio**
   - Send to friends and colleagues
   - Add to resume
   - Share on social media

2. **Monitor performance**
   - Set up Google Analytics
   - Monitor error logs
   - Check user feedback

3. **Plan Phase 2**
   - Projects section
   - Hidden admin route
   - Project showcase
   - Blog/case studies

4. **Keep it updated**
   - Update when changing jobs
   - Add new skills
   - Update achievements
   - Keep content fresh

---

**Estimated Time to Complete:**
- Content customization: 30-60 minutes
- Testing: 30 minutes
- Deployment: 30-60 minutes
- **Total: 2-3 hours**

**Good luck with your portfolio! 🎉**

---

Last Updated: January 28, 2026
