# Vikram S - Portfolio Website

A modern, professional portfolio website built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. Showcasing frontend development skills, cloud & AI interests, and professional experience.

🌐 **Live Demo:** [https://vikram-portfolio.lindy.site](https://vikram-portfolio.lindy.site)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contact](#contact)

---

## ✨ Features

- **Responsive Design** - Mobile-first approach, works seamlessly on all devices
- **Modern UI** - Clean, minimalist Apple-inspired design using shadcn/ui components
- **Smooth Navigation** - Fixed navbar with smooth scrolling between sections
- **SEO Optimized** - Proper metadata for search engines and social sharing
- **Performance** - Optimized images and fast loading times
- **Dark Mode Ready** - Built with next-themes for easy dark mode implementation
- **Accessible** - WCAG compliant with proper semantic HTML

### Sections Included

1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **About Me** - Professional summary with focus areas
3. **Skills & Expertise** - Top skills, certifications, and tech stack
4. **Education** - Academic background and timeline
5. **Contact** - Multiple ways to get in touch

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Image Optimization:** Next.js Image component
- **Deployment:** Vercel / GitHub Pages

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/markivtech/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
portfolio-vikram/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   └── favicon.ico         # Site favicon
├── components/
│   └── ui/                 # shadcn/ui components
├── public/
│   └── images/
│       └── profile.png     # Profile picture
├── lib/
│   └── utils.ts            # Utility functions
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── README.md               # This file
```

---

## 🎨 Customization

### Update Personal Information

Edit `app/page.tsx` to customize:

- **Name & Title** - Update the hero section heading
- **Bio & Description** - Modify the about section text
- **Skills** - Add/remove skills from the skills array
- **Contact Info** - Update email, phone, and social links
- **Profile Image** - Replace `/public/images/profile.png`

### Modify Styling

- **Colors** - Edit `tailwind.config.ts` for color scheme
- **Fonts** - Customize in `app/layout.tsx`
- **Spacing** - Adjust Tailwind classes in components

### Add New Sections

1. Create a new section component in `app/page.tsx`
2. Add navigation link in the navbar
3. Update the smooth scroll function

---

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Vercel automatically deploys on every push

```bash
# One-click deployment
vercel
```

### Deploy to GitHub Pages

1. Update `next.config.js`:
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/Portfolio',
   }
   ```

2. Build and deploy:
   ```bash
   npm run build
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder

---

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

---

## 🔗 Social Links

- **Email:** [vikramroman056@gmail.com](mailto:vikramroman056@gmail.com)
- **LinkedIn:** [linkedin.com/in/vikram056](https://www.linkedin.com/in/vikram056)
- **Phone:** +91 9443916981
- **Location:** Thoothukudi, Tamil Nadu, India

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

---

## 📞 Contact & Support

For questions or suggestions, reach out via:
- Email: vikramroman056@gmail.com
- LinkedIn: [linkedin.com/in/vikram056](https://www.linkedin.com/in/vikram056)

---

**Made with ❤️ by Vikram S**

Last Updated: November 2025
