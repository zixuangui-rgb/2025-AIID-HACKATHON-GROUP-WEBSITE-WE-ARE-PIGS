# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the "We Are Pigs 2" team showcase website - a static HTML/CSS/JavaScript project created for the AIID Hackathon 2025. The website presents four team members, their individual projects, and provides educational resources about AI-assisted development through tutorials and communication pages.

## Project Structure

```
we are pigs 2/
├── index.html              # Main landing page with team member showcases
├── styles.css              # Main stylesheet for homepage
├── script.js               # JavaScript for interactive behaviors
├── Tutorial.html           # Educational tutorial on "Build Like a Human" philosophy
├── Communication.html      # Project promotion and communication page
├── Music Life.html         # Zixuan Gui's Music Life project showcase
├── BUTDA.html             # Grace Duong's BUTDA project showcase
├── pig_logo.png           # Team logo image
└── 背景图片.png            # Background image for homepage
```

## Technology Stack

- **Pure HTML5**: Semantic markup with no framework dependencies
- **CSS3**: Modern styling with flexbox, grid, gradients, and animations
- **Vanilla JavaScript**: DOM manipulation and event handling
- **Tailwind CSS (CDN)**: Used in Tutorial.html for utility-first styling
- **Font Awesome**: Icon library for Tutorial page

## Page Descriptions

### index.html - Team Showcase
The main landing page featuring:
- **Team Introduction**: "We Are Pigs" header with tagline
- **Four Member Cards**: Interactive information boxes with hover effects
  - Zixuan Gui - Music Life (AR glasses music application)
  - Chileen Zhao - SK-Ibos (Figure skating fan community)
  - Yongqi Yan - WrongOS (AI learning tools)
  - Grace Duong - BUTDA (Daily news summary assistant)
- **Navigation Buttons**: Tutorial and Communication buttons

### Tutorial.html - Development Philosophy Guide
A comprehensive tutorial page covering:
- "Build Like a Human" philosophy
- 9 core principles for AI-assisted development
- Interactive modal system for detailed content
- Responsive design with Tailwind CSS
- Custom styling for code examples and highlights

### Communication.html - Project Promotion
Simple, elegant page displaying:
- Purple gradient background
- White card container with project status
- "We are promoting the project and attracting users" message
- Back to home navigation

### Music Life.html & BUTDA.html
Individual project showcase pages (Next.js static exports)

## Key Features

### Interactive Hover System
- **Info boxes** display "View the Project" overlay on hover
- Smooth transitions with backdrop blur effects
- Click-to-navigate functionality

### Responsive Design
Breakpoints:
- Desktop: Full-featured layout
- Tablet (≤1200px): Adjusted sizing and spacing
- Mobile (≤768px): Optimized for touch
- Small Mobile (≤480px): Vertical button layout

### Navigation System
Configured in `script.js`:
- Zixuan Gui → Music Life.html (new tab)
- Grace Duong → BUTDA.html (new tab)
- Chileen Zhao → External URL (SK-Ibos)
- Yongqi Yan → External URL (WrongOS)
- Tutorial button → Tutorial.html (same window)
- Communication button → Communication.html (same window)

## Development Guidelines

### Adding New Team Members

1. **HTML Structure** (in index.html):
```html
<div class="info-box [position-class]" id="[member-id]">
    <h2>[Name] <span class="project-name">[Project Name]</span></h2>
    <p>[Description line 1]</p>
    <p>[Description line 2]</p>
    <p>[Description line 3]</p>
</div>
```

2. **Position Classes**:
- `top-left`, `top-right`, `bottom-left`, `bottom-right`

3. **JavaScript Event** (in script.js):
```javascript
const memberBox = document.getElementById('[member-id]');
if (memberBox) {
    memberBox.addEventListener('click', function() {
        window.open('[url]', '_blank');
    });
}
```

### Modifying Styles

#### Color Scheme
- Primary background: `rgba(255, 255, 255, 0.85)` with backdrop blur
- Accent color: `#e91e63` for project name badges
- Hover overlay: `rgba(0, 0, 0, 0.8)` with blur
- Button color: `#4CAF50` (green)

#### Typography
- Team title: `font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- Font weights: 600-800 for emphasis

### Adding Tutorial Content

Tutorial.html uses:
- **Modal system**: Click cards to open detailed content
- **Card structure**: Icon + Title + Description
- **Custom styling**: Inline styles for content boxes

To add new tutorial cards:
1. Add card in main grid section
2. Create corresponding modal
3. Link via `data-modal="modal[N]"` attribute
4. Implement modal content with consistent styling

### Logo Management

The pig logo appears in Tutorial.html:
- Header: `<img src="pig_logo.png" class="h-10 rounded-full border-2 border-gray-300">`
- Footer: Same structure with `mb-2` class
- Style: Circular with gray border

## CSS Architecture

### Component-based Styling

- `.container`: Main wrapper with position context
- `.background-image`: Full-screen background with cover sizing
- `.team-intro`: Centered header section
- `.info-box`: Reusable card component with variants
- `.button-container`: Flex container for action buttons

### Responsive Patterns

```css
/* Mobile-first approach */
@media (max-width: 1200px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 480px)  { /* Small Mobile - Vertical buttons */ }
```

### Interactive Effects

- **Hover transforms**: `translateY(-3px) scale(1.02)`
- **Shadow elevation**: Increased on hover
- **Backdrop blur**: `blur(3px)` for glassmorphism
- **Transitions**: `all 0.3s ease` for smooth animations

## JavaScript Patterns

### Event Delegation
All event listeners use `DOMContentLoaded` wrapper:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Event handlers here
});
```

### Click Handlers
- Use `getElementById()` for specific elements
- Check element exists before attaching listeners
- Use `window.open()` for external/new tab navigation

## Static Assets

### Images
- **pig_logo.png**: Team logo, used in Tutorial.html
- **背景图片.png**: Full-screen background for homepage

### Asset Loading
All images use relative paths from project root:
```css
background-image: url('背景图片.png');
```

```html
<img src="pig_logo.png" alt="Logo">
```

## Build and Deployment

This is a static website requiring no build process:

1. **Development**: Open index.html directly in browser
2. **Testing**: Test all links and responsive breakpoints
3. **Deployment**: Upload all files to static hosting (GitHub Pages, Netlify, Vercel, etc.)

### Deployment Checklist
- ✅ All HTML files present
- ✅ CSS and JavaScript files linked correctly
- ✅ Images in root directory with correct file names
- ✅ External links (SK-Ibos, WrongOS) tested
- ✅ Responsive design verified on multiple devices

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- ES6 JavaScript features used
- No polyfills needed for target browsers

## Content Guidelines

### Homepage Copy
- Keep team member descriptions concise (3 lines max)
- Project names should be short and memorable
- Use consistent tone: friendly, professional, enthusiastic

### Tutorial Content
- Follow "Build Like a Human" philosophy principles
- Use emoji icons for visual interest
- Include practical examples and code snippets
- Maintain conversational but informative tone

### Accessibility
- Use semantic HTML elements
- Provide alt text for images
- Ensure sufficient color contrast
- Support keyboard navigation

## Maintenance Notes

### Regular Updates
- Team member information as projects evolve
- External project URLs if they change
- Tutorial content to reflect current best practices

### Performance Optimization
- Images already optimized for web
- Minimal CSS/JS - no optimization needed
- Consider lazy loading for future image additions

## Version Control

### Git Workflow
- Main branch: `main`
- Commit messages: Descriptive and concise
- Track all HTML, CSS, JS, and image files

### Important Files
- index.html, styles.css, script.js (core functionality)
- Tutorial.html (educational content)
- Communication.html (project status)
- CLAUDE.md, README.md (documentation)

## External Dependencies

### CDN Resources (Tutorial.html)
- Tailwind CSS: `https://cdn.tailwindcss.com`
- Google Fonts: Pacifico font family
- Font Awesome: `6.4.0/css/all.min.css`

No package manager or build tools required.

## Design Philosophy

This website embodies the "Build Like a Human" philosophy:
- ✅ Start simple, iterate based on feedback
- ✅ Use what works (CDNs, vanilla JS)
- ✅ Prioritize clarity over complexity
- ✅ Make it responsive from day one
- ✅ Let content shine through clean design

---

**Last Updated**: 2025
**Team**: We Are Pigs - AIID Hackathon 2025
