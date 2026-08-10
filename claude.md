# AdsLogic Project Guidelines

## Project Overview
AdsLogic is a premium digital marketing agency website built with modern web technologies, featuring a luxury dark theme with orange accents.

---

## Tech Stack (Strict - Never Break)

### Required Technologies
- **Next.js 15** - App Router only
- **Tailwind CSS** - For all styling
- **Framer Motion** - For all animations

### Forbidden Libraries
❌ **NO** GSAP
❌ **NO** Three.js
❌ **NO** Lenis
❌ **NO** Heavy animation libraries

---

## Design System

### Colors
- **Dark Backgrounds:**
  - Primary: `#111111`
  - Secondary: `#1A1A1A`

- **Orange Accents:**
  - Primary Orange: `#FF6B00`
  - Light Orange: `#FF8A1F`

### Design Philosophy
- **Premium, modern, luxury feel**
- High-end aesthetic
- Professional and polished
- Dark theme with strategic orange accents

### Visual Elements
- **Glassmorphism** - Frosted glass effects with backdrop blur
- **Soft orange glows** - Subtle shadow effects using orange colors
- **Premium micro-interactions** - Smooth, delightful hover effects
- **Inset shadows** - For depth and dimension
- **Gradient overlays** - Subtle gradients on hover

---

## Animation Philosophy

### Core Principles
- **Continuous and premium feel** - Everything should flow smoothly
- **Spring-based animations** - Use Framer Motion's spring physics
- **Subtle but high-quality** - Not over-the-top, but clearly premium
- **Performance-first** - Keep animations smooth and optimized

### Animation Types
1. **Entrance Animations:**
   - Fade + slide combinations
   - Staggered timing for multiple elements
   - Use `whileInView` for scroll-triggered animations
   - `viewport={{ once: true }}` for single-fire animations

2. **Hover Effects:**
   - Soft scale up (typically `1.03` to `1.05`)
   - Vertical lift (`y: -4` to `-8`)
   - Spring transitions: `{ type: "spring", stiffness: 400, damping: 25 }`
   - Stronger glows and border effects

3. **Timing:**
   - Use easing: `[0.22, 1, 0.36, 1]` for smooth curves
   - Stagger delays: typically `index * 0.08` to `0.12`
   - Duration: `0.5s` to `0.7s` for entrance animations

---

## Code Quality Standards

### Structure
- **Component-based architecture** - Small, reusable components
- **Clean and readable** - Easy to understand and modify later
- **Well-organized** - Logical file structure

### Responsiveness
- **Mobile-first approach** - Design for mobile, scale up
- **Responsive breakpoints:**
  - `sm:` - 640px
  - `md:` - 768px
  - `lg:` - 1024px
  - `xl:` - 1280px

### Code Style
- Use TypeScript for type safety
- Use "use client" directive for client components
- Descriptive variable and function names
- Comments for complex logic only

---

## Component Patterns

### Card Components
```tsx
// Typical premium card structure
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.03, y: -4 }}
  className="group relative rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl hover:border-[#FF6B00]/50 hover:shadow-[0_0_40px_rgba(255,107,0,0.25)]"
>
  {/* Gradient overlay */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FF6B00]/0 group-hover:from-[#FF6B00]/8 opacity-0 group-hover:opacity-100 transition-opacity" />
  
  {/* Content */}
</motion.div>
```

### Glassmorphism Pattern
- Use `backdrop-blur-xl` or `backdrop-blur-md`
- Combine with semi-transparent backgrounds: `bg-white/[0.04]` to `bg-white/[0.08]`
- Add subtle borders: `border-white/[0.06]` to `border-white/[0.10]`
- Use inset shadows: `shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]`

### Orange Glow Pattern
```css
/* Hover glow effect */
hover:shadow-[0_0_40px_rgba(255,107,0,0.25),0_0_60px_rgba(255,107,0,0.15)]

/* Border glow */
hover:border-[#FF6B00]/50

/* Background glow */
group-hover:from-[#FF6B00]/8 group-hover:to-transparent
```

---

## Section Structure

### Current Sections
1. Hero
2. About
3. Statistics
4. Services ✓ (Recently improved)
5. Portfolio
6. Testimonials
7. Contact
8. Footer

### Section Guidelines
- Each section should be in its own component folder
- Use consistent padding: `px-4 py-20 sm:px-6 lg:py-28`
- Add divider lines: `bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent`
- Center content with `mx-auto max-w-7xl`

---

## Performance Considerations

### Optimization Rules
- Use `viewport={{ once: true }}` to prevent re-triggering animations
- Avoid heavy computations in render
- Optimize images with Next.js Image component
- Keep animation durations under 1 second
- Use CSS transforms (scale, translate) over other properties

### What to Avoid
- Don't animate `width`, `height`, or `top/left/right/bottom`
- Avoid excessive DOM nesting
- Don't create too many simultaneous animations
- Keep bundle size minimal - no unnecessary libraries

---

## Maintenance Notes

### When Updating Components
1. Always maintain the premium feel
2. Keep animations smooth and spring-based
3. Test on mobile first
4. Ensure glassmorphism and glows are consistent
5. Don't break other sections

### Testing Checklist
- [ ] Mobile responsive (320px+)
- [ ] Tablet layout (768px+)
- [ ] Desktop layout (1024px+)
- [ ] Hover states work smoothly
- [ ] Entrance animations trigger correctly
- [ ] No performance issues (60fps)
- [ ] Orange glows are visible but not overpowering

---

## Recent Updates

### Services Section (Latest)
- Enhanced glassmorphism with multi-layer gradients
- Larger icons (h-16 w-16, text-3xl)
- Alternating entrance animations (left/right stagger)
- Premium spring hover animations
- Stronger orange glows on hover
- Better spacing and typography

---

## Future Considerations

- Maintain consistency across all sections
- Keep the continuous puzzle background animation theme
- Ensure all sections feel cohesive
- Regular performance audits
- Accessibility improvements where needed

---

**Last Updated:** 2026-08-09
**Project Status:** Active Development
