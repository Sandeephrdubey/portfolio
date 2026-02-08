# Sandeep Dubey - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Senior Software Developer specializing in Mobile & Backend Development.

## Features

- 🎨 Modern and attractive UI/UX design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🚀 Fast performance with optimized assets
- 📄 Resume download functionality
- 🔗 Direct links to published apps

## Sections

1. **Hero** - Introduction and quick links
2. **About** - Professional summary and key features
3. **Skills** - Technical skills with proficiency levels
4. **Experience** - Work history timeline
5. **Projects** - Featured projects with app store links
6. **Contact** - Contact form and social links

## Technologies Used

- React 18
- Framer Motion (animations)
- AOS (scroll animations)
- React Icons
- React Typed (typing effect)
- CSS3 (custom styling)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000/portfolio](http://localhost:3000/portfolio) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Serving Production Build

```bash
npm run serve
```

This serves the production build using Express server.

## Project Structure

```
portfolio/
├── public/          # Static files
├── src/
│   ├── components/  # React components
│   ├── styles/      # CSS files
│   ├── App.js       # Main app component
│   └── index.js    # Entry point
├── package.json
└── README.md
```

## Customization

- Update personal information in component files
- Modify colors in `src/styles/index.css` (CSS variables)
- Add/remove projects in `src/components/Projects.js`
- Update skills in `src/components/Skills.js`
- Modify experience in `src/components/Experience.js`

## Deployment

The portfolio is configured to be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any Node.js hosting

Make sure to set the `homepage` field in `package.json` to match your deployment URL.

## License

This project is private and personal.

## Contact

- Email: dubeyhr2000@gmail.com
- Phone: +91 9115056091
- LinkedIn: [linkedin.com/in/sandeep-dubey-9808a2186](https://linkedin.com/in/sandeep-dubey-9808a2186)
