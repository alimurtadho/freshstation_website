# Fresh Station - Premium Avocado Hass Website

A modern, responsive website for Fresh Station Indonesia - premium avocado supplier specializing in Avocado Hass varieties.

## Features

- 🥑 **Premium Design**: Modern, clean interface showcasing avocado products
- 📱 **Responsive**: Fully optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance**: Built with Next.js 14 and optimized for speed
- 🎨 **Smooth Animations**: Framer Motion animations for engaging user experience
- 📧 **Contact Forms**: Built-in contact and inquiry forms
- 🖼️ **Gallery**: Interactive gallery with category filtering
- 📈 **SEO Optimized**: Meta tags, structured data, and SEO best practices
- 🌐 **Social Integration**: Instagram and WhatsApp integration

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **TypeScript**: Full type safety
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fresh-station-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
freshstationid/
├── app/                 # Next.js 14 App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Products.tsx    # Products showcase
│   ├── Services.tsx    # Services section
│   ├── Gallery.tsx     # Image gallery
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── public/             # Static assets
└── ...config files
```

## Customization

### Colors
The website uses a green-based color palette. You can customize colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Green color variations
    500: '#22c55e',
    600: '#16a34a',
    // ... etc
  }
}
```

### Content
Update content in the respective component files:
- Company information: `components/About.tsx`
- Products: `components/Products.tsx`
- Contact details: `components/Contact.tsx`

### Images
Replace images in the components with your own:
- Use high-quality avocado and farm images
- Optimize images for web (WebP format recommended)
- Update image URLs in component files

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Environment Variables

Create a `.env.local` file for environment variables:

```env
# Email service (if using EmailJS)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## Features to Add

- [ ] Blog/News section
- [ ] E-commerce functionality
- [ ] Multi-language support (Indonesian/English)
- [ ] Customer testimonials
- [ ] Live chat integration
- [ ] Advanced analytics
- [ ] Newsletter subscription

## SEO Optimization

The website includes:
- Meta tags for social sharing
- Structured data for search engines
- Optimized images with alt text
- Semantic HTML structure
- Fast loading speeds

## Contact Integration

- **WhatsApp**: Direct messaging integration
- **Email**: Contact form with email delivery
- **Instagram**: Social media integration
- **Phone**: Click-to-call functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software for Fresh Station Indonesia.

## Support

For support or questions, contact:
- Email: info@freshstation.id
- WhatsApp: +62 812-3456-7890
- Instagram: @freshstation.id

---

**Fresh Station Indonesia** - Premium Avocado Hass from farm to your table.
