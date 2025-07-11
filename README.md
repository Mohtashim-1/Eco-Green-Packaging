# EcoGreen Packaging Website

A modern, interactive website for EcoGreen Packaging - a leading sustainable packaging manufacturer in Pakistan. Built with Next.js, TypeScript, and TailwindCSS.

## 🌟 Features

### 🎨 **Unique Design & Branding**
- Custom eco-friendly color scheme
- Modern, responsive design
- Smooth animations and transitions
- Mobile-first approach

### 🚀 **Interactive Tools**
- **Smart Q&A Tool**: AI-style recommendation engine for packaging solutions
- **Live Mockup Creator**: Real-time packaging design preview (First in Pakistan!)
- **Packaging Game**: Educational drag-and-drop game with scoring system
- **Blog Section**: SEO-optimized content with social sharing

### 📱 **Mobile Responsive & Fast**
- Lightning-fast performance
- Optimized images and lazy loading
- PWA-ready structure
- CDN-ready configuration

### 🛍️ **Product Showcase**
- Non-woven bags
- Woven bags
- Paper bags
- Zip pouches
- Standard pouches

### 📊 **SEO Optimized**
- Meta tags and structured data
- Fast loading times
- Mobile-friendly design
- Blog with internal linking

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS, Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **File Upload**: React Dropzone
- **Notifications**: React Hot Toast
- **SEO**: Next SEO

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ecogreen-packaging.git
   cd ecogreen-packaging
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
ecogreen-packaging/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features showcase
│   ├── Services.tsx         # Product services
│   ├── QATool.tsx           # Smart Q&A tool
│   ├── PackagingGame.tsx    # Interactive game
│   ├── MockupCreator.tsx    # Live mockup creator
│   ├── BlogSection.tsx      # Blog articles
│   ├── Testimonials.tsx     # Customer reviews
│   ├── ContactCTA.tsx       # Contact section
│   └── Footer.tsx           # Footer
├── public/                  # Static assets
├── tailwind.config.js       # TailwindCSS config
├── next.config.js           # Next.js config
└── package.json             # Dependencies
```

## 🎯 Key Features Breakdown

### 1. **Smart Q&A Tool**
- Multi-step questionnaire
- Personalized recommendations
- Cost estimates
- Lead capture form
- Email integration ready

### 2. **Live Mockup Creator**
- Logo upload and positioning
- Real-time preview
- Custom text and colors
- Download functionality
- Multiple product templates

### 3. **Packaging Game**
- Drag-and-drop gameplay
- Educational content
- Scoring system
- Level progression
- Recycling information

### 4. **Blog Section**
- SEO-optimized articles
- Social sharing
- Internal linking
- Category organization
- Featured posts

### 5. **Mobile Responsive**
- Touch-friendly interactions
- Optimized layouts
- Fast loading
- PWA capabilities

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Green shades */ },
  secondary: { /* Yellow shades */ },
  eco: { /* Blue shades */ }
}
```

### Content
- Update product information in `components/Services.tsx`
- Modify blog posts in `components/BlogSection.tsx`
- Edit testimonials in `components/Testimonials.tsx`

### Contact Information
Update contact details in:
- `components/ContactCTA.tsx`
- `components/Footer.tsx`
- `components/Header.tsx`

## 📱 Performance Features

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Components and images
- **Minification**: Production builds
- **CDN Ready**: Static asset optimization

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://ecogreen-packaging.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
```

### SEO Settings
Update metadata in `app/layout.tsx`:
- Site title and description
- Open Graph tags
- Twitter cards
- Google verification

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Deploy automatically on push
3. Custom domain configuration

### Other Platforms
- **Netlify**: Build command: `npm run build`
- **AWS Amplify**: Compatible with Next.js
- **DigitalOcean App Platform**: Easy deployment

## 📈 Analytics & Monitoring

### Google Analytics
Add your GA4 tracking ID to environment variables.

### Performance Monitoring
- Core Web Vitals tracking
- Lighthouse CI integration
- Real User Monitoring (RUM)

## 🔒 Security

- HTTPS enforcement
- Content Security Policy (CSP)
- XSS protection
- CSRF protection
- Input validation

## 📞 Support

For technical support or customization requests:
- Email: shoaibmohtashim973@gmail.com
- Phone: +92 335 3115542

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 Changelog

### v1.0.0 (2024-01-15)
- Initial release
- Complete website with all features
- Mobile responsive design
- Interactive tools implemented
- SEO optimization

---

**Built with ❤️ for EcoGreen Packaging** # Eco-Green-Packaging
