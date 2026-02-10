# Shivalaiya Dragon Farm Website

A premium, modern website for Shivalaiya Dragon Farm—an organic dragon fruit farm built with React.js and Tailwind CSS.

## Features

- **Multi-page Navigation**: Home, About, Products, Gallery, Process, Contact
- **Premium UI**: Green + pink organic farm theme
- **Responsive Design**: Mobile-first, works on all devices
- **Reusable Components**: Navbar, Footer, ProductCard, GalleryCard
- **Smooth Animations**: Fade-in effects and hover transitions
- **React Router**: Client-side routing for seamless navigation

## Tech Stack

- React 19
- Vite 7
- React Router 7
- Tailwind CSS 4

## Getting Started

### Prerequisites

- Node.js 20+ (recommended 22.12+)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   └── GalleryCard.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Products.jsx
│   ├── Gallery.jsx
│   ├── Process.jsx
│   └── Contact.jsx
├── App.jsx          # Main app with routing
├── main.jsx         # Entry point
└── index.css        # Global styles & Tailwind
```

## Customization

- **WhatsApp Number**: Update `WHATSAPP_NUMBER` in `src/pages/Contact.jsx` with your actual number (format: country code + number, no spaces or dashes)
- **Colors**: Customize in `src/index.css` under the `@theme` block
- **Content**: Edit page components in `src/pages/` for text and images
- **Farm Name**: The site is branded for Shivalaiya Dragon Farm throughout
