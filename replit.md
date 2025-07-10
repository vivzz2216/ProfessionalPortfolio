# Rest Express - Full Stack Portfolio Application

## Overview

This is a full-stack portfolio application built with React, Express.js, and PostgreSQL. It features a modern, futuristic design with a complete contact form system, user management capabilities, and a responsive portfolio showcase. The application follows a clean architecture pattern with separate client and server directories, shared schema definitions, and proper TypeScript implementation throughout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom futuristic theme using CSS variables
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **API Design**: RESTful API with JSON responses
- **Validation**: Zod schemas for request/response validation
- **Development**: Hot module replacement with Vite integration

### Key Components

#### Database Schema
- **Users Table**: Basic user management with username/password fields
- **Contact Messages Table**: Stores contact form submissions with name, email, subject, message, and timestamp
- **Schema Validation**: Drizzle Zod integration for type-safe database operations

#### API Endpoints
- `POST /api/contact` - Contact form submission with validation
- `GET /api/contact-messages` - Retrieve all contact messages (admin functionality)

#### Portfolio Features
- **Hero Section**: Dynamic typing animation with parallax effects
- **About Section**: Professional profile with animated elements
- **Skills Section**: Categorized technical skills with progress indicators
- **Projects Section**: Featured project showcase with GitHub/demo links
- **Contact Section**: 3D animated contact form with real-time validation

## Data Flow

1. **Client Request**: React components make API calls using TanStack Query
2. **API Processing**: Express.js routes handle requests with Zod validation
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Structured JSON responses with proper error handling
5. **UI Updates**: React Query automatically updates UI state based on server responses

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, Vite, Tailwind CSS
- **UI Components**: Radix UI primitives, shadcn/ui
- **Icons**: Lucide React, React Icons
- **Animations**: CSS animations and transitions
- **Forms**: React Hook Form, Hookform Resolvers
- **HTTP Client**: Fetch API with TanStack Query wrapper

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Validation**: Zod for schema validation
- **Session Management**: Connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

### Development Tools
- **TypeScript**: Full type safety across client and server
- **ESBuild**: Fast bundling for production builds
- **Drizzle Kit**: Database migrations and schema management
- **Replit Integration**: Development environment optimizations

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx with nodemon-like functionality
- **Database**: Neon development database
- **Environment**: Replit-optimized development setup

### Production Build
- **Frontend**: Vite build outputs to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Neon production database with connection pooling
- **Deployment**: Single-command deployment with `npm run build && npm start`

### Database Management
- **Migrations**: Drizzle Kit handles schema migrations
- **Connection**: Pool-based connections for scalability
- **Environment Variables**: `DATABASE_URL` for database configuration

The application is designed to be easily deployable on platforms like Replit, Vercel, or any Node.js hosting service with PostgreSQL support.

## Recent Changes: Latest modifications with dates

### December 2024 - Gen Z UI Overhaul & Hero Section Color Consistency
- **Complete redesign with modern Gen Z aesthetic**: Replaced traditional portfolio components with futuristic, interactive designs featuring gradients, glass morphism, and animated elements
- **Dazzling loading screen**: Added animated loading screen with neural network initialization theme, progress bars, and futuristic typography matching hero section colors
- **Enhanced project showcase**: Created `projects-section-genz.tsx` with card-based layout, hover effects, category filtering, and animated project stats
- **Modern skills section**: Built `skills-section-genz.tsx` with skill categories, progress indicators, achievement badges, and interactive animations
- **Real Earth globe**: Implemented realistic Earth visualization using uploaded Earth image with rotating animation, orbital rings, and hero-style color scheme
- **Professional about section**: Added profile image integration, resume download functionality, and hero section color consistency
- **Professional footer**: Clean, organized footer with contact info, social links, and technical specializations
- **Hero section color consistency**: Updated all sections (about, contact, loading) to match hero section's purple/pink gradient color scheme
- **Contact form enhancement**: Improved form styling with hero colors, better layout, and enhanced visual effects
- **Integrated Framer Motion**: Added smooth animations and transitions throughout the portfolio

### January 2025 - Royal Portfolio Enhancement & Mind-Blowing UI Animations
- **Royal typography implementation**: Updated all components to use elegant royal fonts (Cinzel, Playfair Display, Cormorant Garamond) for sophisticated professional appearance
- **Enhanced technical skills section**: Created `skills-section-enhanced.tsx` with hexagonal grid layout, category-based skill organization, clean icons without progress bars, and crazy floating particle animations
- **Mind-blowing projects showcase**: Built `projects-section-enhanced.tsx` with exactly 6 project cards, no images, detailed descriptions, advanced hover effects, and matrix rain background animations
- **3D Globe contact form**: Added new 3D globe PNG to contact section with rotating animations, orbiting particles, and pulsing rings for enhanced visual appeal
- **Animated contact form**: Enhanced all form inputs with individual hover/focus animations, floating particles, gradient overlays, and royal-styled button with crown animation
- **Advanced background effects**: Implemented floating tech icons, particle systems, matrix rain effects, and pulsing gradients across all sections
- **Mind-blowing UI animations**: Added scale transforms, rotation effects, opacity transitions, and interactive hover states using Framer Motion throughout the portfolio

### January 2025 - Final Portfolio Refinement & Starfield Loading Screen
- **Starfield loading screen**: Created `loading-screen-starfield.tsx` with CSS parallax stars animation, gradient background, and progress bar loading animation
- **Hero section updates**: Changed animated text from "Tech Innovator, UI/UX Designer" to "Web Developer, Data Analyst, Backend Developer" and button text from "Explore my universe" to "Get to know me"
- **Header color consistency**: Updated "Technical Skills" header to purple/pink gradient and "Project Showcase" header to orange/red gradient for amazing visual appeal
- **Compact skills section**: Created `skills-section-compact.tsx` with 4 categories (Frontend, Backend, Database, DevOps), small skill cards without progress bars, and efficient space utilization
- **Experience stats**: Added professional stats showing 4+ years experience, 10+ technologies, and 10+ projects completed
- **Modern contact section**: Completely redesigned `contact-section-modern.tsx` with beautiful purple/pink/cyan gradients, contact information cards, and professional messaging
- **Removed royal references**: Cleaned up contact form by removing "Royal Message" text and implementing clean, professional styling
- **Consistent color scheme**: Applied purple/pink/cyan gradient theme throughout all sections for cohesive visual identity

### January 2025 - 3D Loading Screen & Final Polish
- **3D Loading Screen**: Implemented complex 3D loading animation using custom HTML5 Canvas with Web Components, featuring animated discs, particle systems, and blue gradient effects
- **Enhanced About Section**: Updated header to "About Me" with emerald/teal gradient, added descriptive subtitle, and improved layout alignment
- **Blue Fox Logo**: Changed fox logo gradient from orange to blue theme (#3b82f6 to #1d4ed8) matching the overall design
- **Navigation Enhancement**: Integrated blue fox logo in navigation beside "VIVEK PILLAI" with hover scale animation
- **Professional Header Styling**: Consistent gradient headers across all sections with proper spacing and typography

### January 2025 - Railway Deployment & PostgreSQL Integration
- **Database Migration**: Switched from Neon serverless to standard PostgreSQL for Railway compatibility
- **Environment Configuration**: Added `.env` file with local PostgreSQL connection string
- **Railway Deployment Setup**: Created `railway.json`, `nixpacks.toml`, and `Procfile` for seamless Railway hosting
- **Production Optimization**: Updated server configuration to use `process.env.PORT` for Railway deployment
- **PostgreSQL Dependencies**: Installed `pg` and `@types/pg` packages for direct PostgreSQL connection
- **Deployment Documentation**: Created comprehensive Railway deployment guide with database setup instructions

### January 2025 - Email-Based Contact System Migration
- **Database Removal**: Completely removed PostgreSQL database system and related dependencies
- **Gmail Integration**: Implemented nodemailer with Gmail SMTP for contact form submissions
- **Email Configuration**: Added EMAIL_USER and EMAIL_PASS environment variables for Gmail authentication
- **Contact Form Redesign**: Updated contact form to send emails directly to pillaivivek16@gmail.com
- **Admin System Removal**: Removed admin dashboard and authentication system
- **Schema Simplification**: Simplified schema to only include contact form validation
- **Professional Email Template**: Created HTML email template with contact form data formatting