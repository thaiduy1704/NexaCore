# NexaCore Corporate Website

A modern, professional corporate website built with Next.js 14+, TypeScript, Tailwind CSS, and Ant Design.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS, Ant Design
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **SEO Optimized**: Metadata configuration for all pages
- **Admin Dashboard**: Full-featured admin panel with CRUD operations
- **Content Management**: Manage news, projects, and products through the admin interface
- **Smooth Animations**: Framer Motion for elegant transitions and animations
- **Professional UI**: Clean, corporate design with Ant Design components

## 📦 Tech Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Library**: Ant Design 5.27.4
- **Icons**: Ant Design Icons
- **Animations**: Framer Motion
- **Date Library**: Day.js

## 🏗️ Project Structure

```
nexacore-website/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── solutions/      # Solutions page
│   │   ├── products/       # Products listing and detail pages
│   │   ├── projects/       # Projects/case studies pages
│   │   ├── news/           # News articles pages
│   │   ├── careers/        # Careers page
│   │   ├── contact/        # Contact page
│   │   ├── admin/          # Admin dashboard
│   │   │   ├── login/      # Admin login
│   │   │   ├── dashboard/  # Admin overview
│   │   │   ├── news/       # News CRUD
│   │   │   ├── projects/   # Projects CRUD
│   │   │   └── products/   # Products CRUD
│   │   ├── layout.tsx      # Root layout with Header/Footer
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── NewsCard.tsx
│   │   ├── ContactForm.tsx
│   │   ├── SectionTitle.tsx
│   │   └── AdminLayout.tsx
│   ├── lib/                # Utility functions and data
│   │   ├── mockData.ts     # Mock data for content
│   │   └── metadata.ts     # SEO metadata configurations
│   └── types/              # TypeScript type definitions
│       └── index.ts
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎯 Pages & Routes

### Public Pages
- `/` - Home page with hero, about preview, solutions, projects, clients, and CTA
- `/about` - Company information, vision, mission, values, leadership team
- `/solutions` - Detailed solutions and services overview
- `/products` - Product listing and individual product detail pages
- `/projects` - Case studies and project portfolio
- `/news` - News articles and announcements
- `/careers` - Job listings and application form
- `/contact` - Contact form, company information, and map

### Admin Panel
- `/admin/login` - Admin authentication (username: admin, password: admin123)
- `/admin/dashboard` - Dashboard overview with statistics
- `/admin/news` - CRUD operations for news articles
- `/admin/projects` - CRUD operations for projects
- `/admin/products` - CRUD operations for products

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd nexacore-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#0052CC`
- **Secondary Blue**: `#1890FF`
- **Background Light**: `#F5F7FA`
- **Dark Text**: `#1A1A1A`
- **Dark Background**: `#001529`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, 600 weight
- **Body**: Regular, 400 weight

### Components
All UI components use Ant Design with custom theme configuration matching the brand colors.

## 🔐 Admin Panel Access

**Default Credentials**:
- Username: `admin`
- Password: `admin123`

**Features**:
- Dashboard with statistics and quick actions
- Full CRUD operations for:
  - News articles
  - Projects/Case studies
  - Products
- Data persistence using localStorage
- Responsive admin interface
- Authentication protection

## 📝 Content Management

The admin panel allows you to:
1. Create, read, update, and delete news articles
2. Manage project case studies
3. Add and edit product information
4. All data is stored in browser localStorage for demo purposes

## 🎯 Key Features

### Home Page
- Animated hero section with gradient background
- Company overview with key statistics
- Solutions showcase with icon cards
- Featured projects carousel
- Client logos grid
- Call-to-action sections

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile navigation
- Responsive grid layouts
- Touch-friendly interface

### Performance
- Next.js App Router for optimal performance
- Image optimization ready (use Next/Image for production)
- Code splitting and lazy loading
- Turbopack for faster development

## 🔧 Customization

### Adding New Content

1. **Mock Data**: Edit `src/lib/mockData.ts` to add default content
2. **Admin Panel**: Use the admin dashboard to add/edit content dynamically
3. **Types**: Update TypeScript types in `src/types/index.ts` if adding new fields

### Styling

- **Global Styles**: Edit `src/app/globals.css`
- **Component Styles**: Use Tailwind utility classes
- **Theme**: Modify Ant Design theme in `src/app/layout.tsx`

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/components/Header.tsx`

## 🌐 Deployment

This is a Next.js application and can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Docker containers**
- **Any Node.js hosting**

### Deployment Steps (Vercel)

```bash
npm install -g vercel
vercel
```

## 📄 License

This project is created for NexaCore. All rights reserved.

## 🤝 Support

For support or questions, contact the development team.

---

**Built with ❤️ using Next.js, TypeScript, and Ant Design**
