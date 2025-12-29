# Kanak Joshi - Portfolio Website

A modern, animated portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Animated Background**: Interactive particle animation with connecting lines
- **Multi-Page Architecture**:
  - Home: Introduction and overview
  - About: Education, skills, and achievements
  - Experience: Work history at Dvio Digitals and Skitre.ai
  - Projects: Academic research and personal projects
  - Contact: Contact information and social links
- **Responsive Design**: Mobile-first approach with smooth transitions
- **Smooth Animations**: Using Framer Motion for page transitions and interactions
- **Modern UI**: Glassmorphism effects with backdrop blur
- **SEO Optimized**: Proper meta tags and descriptions

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with shadcn/ui base

## Getting Started

1. **Development Mode**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

2. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
├── app/
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout with navigation
│   └── globals.css        # Global styles
├── components/
│   ├── AnimatedBackground.tsx  # Particle animation canvas
│   ├── Navbar.tsx             # Navigation component
│   └── Footer.tsx             # Footer with social links
└── public/                # Static assets
```

## Customization

### Update Personal Information

Edit the following files to update your information:
- `app/page.tsx`: Hero section and overview
- `app/about/page.tsx`: Education, skills, achievements
- `app/experience/page.tsx`: Work experience
- `app/projects/page.tsx`: Projects portfolio
- `app/contact/page.tsx`: Contact details

### Modify Animation

The particle animation can be customized in `components/AnimatedBackground.tsx`:
- `particleCount`: Number of particles (default: 100)
- `connectionDistance`: Distance for connecting lines (default: 150)
- Colors and speeds can be adjusted in the component

### Color Scheme

The website uses a blue accent color scheme. To change:
- Update Tailwind colors in `tailwind.config.ts`
- Modify `text-blue-400`, `bg-blue-500`, etc. throughout components

## Deployment

This site can be deployed to:
- **Netlify**: Already configured with `netlify.toml`
- **Vercel**: Zero-config deployment
- **Any static hosting**: Run `npm run build` and deploy the `.next` folder

## Contact

- **Email**: Kanak31.joshi@gmail.com
- **Phone**: +91 7440898360
- **LinkedIn**: [linkedin.com/in/kanak-joshi-766104212](https://www.linkedin.com/in/kanak-joshi-766104212/)
- **Location**: Pune, India

## License

© 2025 Kanak Joshi. All rights reserved.
# My-Portfolio
