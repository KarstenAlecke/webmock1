# Technology Specification

## Project Overview
Progressive Web App (PWA) with future native mobile app deployment for Android and iOS.

## Frontend Stack

### Core Framework
- **Framework**: React 18+
- **Build Tool**: Vite
- **Language**: TypeScript

### Mobile Deployment
- **Bridge**: Capacitor
  - Enables single codebase for web, iOS, and Android
  - ~95% code reuse across platforms
  - Access to native device APIs

### UI & Styling
- **CSS Framework**: Tailwind CSS
- **Component Library**: shadcn/ui (optional)
- **Responsive Design**: Mobile-first approach

## Backend & Services

### Database & Backend
- **Platform**: Supabase
  - PostgreSQL database
  - Real-time subscriptions
  - Row-level security
  - Storage
  - Edge functions

### Authentication
- **Provider**: Clerk
  - Multiple auth methods (email, OAuth, etc.)
  - User management
  - Cross-platform support

## State Management & Data Fetching
- **Data Fetching**: React Query / TanStack Query
- **Client State**: Zustand or React Context API

## PWA Features
- **Service Workers**: Workbox
- **Offline Support**: Cache-first strategies
- **Installability**: Web app manifest

## Development Tools
- **Package Manager**: npm/pnpm/yarn
- **Version Control**: Git
- **Repository**: GitHub
- **Code Quality**: ESLint, Prettier
- **Testing**: Vitest, React Testing Library

## Deployment

### Web/PWA Hosting
- **Platform**: Vercel
- **Integration**: Automatic deployment from GitHub
- **Features**: Preview deployments, edge functions, analytics

### Mobile Apps
- **iOS**: App Store (via Capacitor build)
- **Android**: Google Play Store (via Capacitor build)
- Native wrappers around web codebase

## Architecture Benefits
- Single codebase maintenance
- Faster time to market
- Consistent UX across platforms
- Easy updates and iterations
- Lower development costs
- Seamless CI/CD with GitHub → Vercel