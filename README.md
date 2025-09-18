# Keen Agents Website

A modern, professional website for Keen Agents - a company that builds custom AI agents for businesses. Built with React, TypeScript, and Framer Motion for smooth animations.

## Features

- **Modern Design**: Clean, professional design following Keen Agents brand guidelines
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations throughout for a polished feel
- **Interactive Components**: 
  - AI Readiness Questionnaire with scoring system
  - Animated timeline for implementation process
  - Expandable FAQ section
  - Contact form with validation
- **Brand Compliance**: Uses official Keen Agents colors, typography (Montserrat), and design elements
- **Accessibility**: WCAG AA compliant with proper focus states and semantic HTML

## Tech Stack

- **React 18** with TypeScript
- **Styled Components** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Custom Theme System** with brand colors and typography

## Brand Colors

- **Primary Blue**: #04a5fa
- **Gray**: #656565  
- **White**: #ffffff
- **Gradient**: Linear gradient from light blue to primary blue

## Typography

- **Font Family**: Montserrat
- **Weights**: Regular (400), Medium (500), Semi Bold (600), Bold (700)

## Sections

1. **Hero** - Main value proposition with animated elements
2. **What We Do** - Product positioning and core features
3. **How We Do It** - 5-phase implementation process with interactive timeline
4. **Success Stories** - Case studies and testimonials
5. **About Us** - Leadership team and company values
6. **FAQ** - Frequently asked questions with smooth expand/collapse
7. **AI Readiness Questionnaire** - Interactive assessment tool
8. **Contact** - Contact form and company information

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Key Features

### Animations
- Scroll-triggered animations using Framer Motion
- Hover effects and micro-interactions
- Smooth page transitions
- Loading states and form feedback

### Responsive Design
- Mobile-first approach
- Breakpoints: xs (0px), sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Flexible grid layouts
- Optimized typography scaling

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance

### Performance
- Optimized animations
- Lazy loading for images
- Efficient re-renders
- Clean component architecture

## Customization

The website uses a centralized theme system located in `src/theme/`:
- `colors.ts` - Brand colors and semantic color definitions
- `typography.ts` - Font families, sizes, and weights
- `spacing.ts` - Consistent spacing scale
- `breakpoints.ts` - Responsive breakpoints

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to Keen Agents.
