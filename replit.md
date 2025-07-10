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

### July 2025 - Professional Blue Theme Redesign
- **Consistent blue theme**: Implemented professional blue color scheme throughout all sections for modern, clean appearance
- **Clean component architecture**: Created new clean versions of all major sections (about, skills, projects, contact) with modern minimal design
- **Skills section redesign**: Removed percentage bars, replaced with modern tech stack icons and styled cards in responsive grid layout
- **Projects section enhancement**: Professional project cards with hover effects, status badges, GitHub stats, and clean typography
- **Contact form optimization**: Removed circular patterns, implemented clean minimal contact form with blue theme and smooth transitions
- **Hero section refinement**: Updated to blue gradient background with consistent color usage
- **Loading screen consistency**: Applied blue theme colors to loading screen animations and effects
- **Improved spacing and typography**: Enhanced font consistency, alignment, and spacing across all sections
- **Professional presentation**: Focused on clean, modern, minimal UI design suitable for corporate environments