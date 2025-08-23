# Fresh Station Website Deployment Guide

## Quick Deployment to Vercel

### Step 1: Prepare Your Project

1. **Install Dependencies**
   ```bash
   cd freshstationid
   npm install
   ```

2. **Test Locally**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to ensure everything works.

### Step 2: Push to GitHub

1. **Initialize Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Fresh Station website"
   ```

2. **Create GitHub Repository**
   - Go to GitHub.com
   - Create a new repository named `fresh-station-website`
   - Don't initialize with README (we already have one)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/fresh-station-website.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Deploy to Vercel

#### Option A: Via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Import Project"
4. Select your GitHub repository
5. Configure:
   - **Framework**: Next.js
   - **Root Directory**: `./` 
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. Click "Deploy"

#### Option B: Via Vercel CLI
1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name: `fresh-station-website`
   - Directory: `./`

### Step 4: Configure Domain (Optional)

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Domains"
   - Add custom domain: `freshstation.id` or `www.freshstation.id`

2. **DNS Configuration**
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.19.61`

### Step 5: Environment Variables

If you plan to add email functionality later:

1. **In Vercel Dashboard**
   - Go to Settings → Environment Variables
   - Add:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

### Step 6: Update Content

Before going live, update:

1. **Contact Information** (`components/Contact.tsx`)
   - Replace placeholder phone numbers
   - Update email addresses
   - Update WhatsApp links

2. **Company Details** (`components/About.tsx`)
   - Add real company information
   - Update statistics and achievements

3. **Images** (All components)
   - Replace with actual farm and product photos
   - Ensure images are optimized (WebP format)

4. **Instagram Integration** (`components/Gallery.tsx`, `components/Footer.tsx`)
   - Verify Instagram link is correct
   - Consider Instagram API integration for real posts

## Performance Optimization

### Image Optimization
```bash
# Install sharp for better image optimization
npm install sharp
```

### SEO Enhancements
1. **Add sitemap.xml**
2. **Configure robots.txt**
3. **Add structured data for local business**
4. **Optimize meta descriptions**

## Monitoring and Analytics

### Google Analytics
1. Get Google Analytics ID
2. Add to environment variables
3. Update layout.tsx to include tracking

### Performance Monitoring
- Use Vercel Analytics (built-in)
- Monitor Core Web Vitals
- Check Lighthouse scores regularly

## Post-Deployment Checklist

- [ ] Test all contact forms
- [ ] Verify mobile responsiveness
- [ ] Check loading speeds
- [ ] Test WhatsApp integration
- [ ] Verify Instagram links
- [ ] Test email functionality
- [ ] Check SEO meta tags
- [ ] Test on different browsers
- [ ] Set up Google Analytics
- [ ] Submit sitemap to Google Search Console

## Maintenance

### Regular Updates
- Update product information
- Add new farm photos
- Update testimonials
- Monitor and fix broken links
- Update contact information

### Content Updates
- Blog posts about avocado benefits
- Farm updates and news
- Seasonal availability information
- New product announcements

## Troubleshooting

### Common Issues

1. **Build Errors**
   - Check TypeScript errors
   - Verify all imports
   - Ensure all required files exist

2. **Image Loading Issues**
   - Verify image URLs are accessible
   - Check image formats (prefer WebP)
   - Ensure proper alt text

3. **Form Submission Issues**
   - Check API route configuration
   - Verify email service setup
   - Test error handling

### Support
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Fresh Station Contact: info@freshstation.id

## Cost Estimate

### Vercel Hosting
- **Hobby Plan**: Free (perfect for starting)
  - 100GB bandwidth
  - 1,000 build hours
  - Basic support

- **Pro Plan**: $20/month (if you need more)
  - 1TB bandwidth
  - Unlimited build hours
  - Priority support

### Domain
- `.id` domain: ~$30-50/year
- `.com` domain: ~$12-15/year

### Total Monthly Cost
- **Basic Setup**: $0-5/month
- **Professional Setup**: $20-30/month

---

**Your website will be live at**: `https://your-project-name.vercel.app`

After deployment, you can share this link with customers and start promoting your avocado business online!
