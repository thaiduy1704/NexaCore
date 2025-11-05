# NexaCore Website - React + TypeScript + Vite

Dự án website NexaCore đã được convert từ Next.js sang React thuần với TypeScript và Vite.

## Cấu trúc dự án

```
nexacore-website/
├── public/              # Static assets (images, favicon)
├── src/
│   ├── app/
│   │   └── globals.css  # Global styles
│   ├── components/      # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── NewsCard.tsx
│   │   ├── ContactForm.tsx
│   │   └── SectionTitle.tsx
│   ├── pages/          # Page components (routes)
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── ...
│   ├── lib/            # Utilities and mock data
│   │   ├── mockData.ts
│   │   └── metadata.ts
│   ├── types/          # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx         # Main app component with routing
│   └── main.tsx        # Entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Cài đặt

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy development server

```bash
npm run dev
```

Server sẽ chạy tại `http://localhost:3000`

### 3. Build production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Thay đổi chính so với Next.js

### 1. Routing
- **Next.js**: App Router với file-based routing
- **React**: React Router v7 với component-based routing

### 2. Navigation
```typescript
// Next.js
import Link from "next/link";
<Link href="/about">About</Link>

// React Router
import { Link } from "react-router-dom";
<Link to="/about">About</Link>
```

### 3. Images
```typescript
// Next.js
import Image from "next/image";
<Image src="/logo.png" alt="Logo" width={150} height={150} />

// React
<img src="/logo.png" alt="Logo" width={150} height={150} />
```

### 4. Client Components
- **Next.js**: Cần `"use client"` directive
- **React**: Tất cả components đều client-side by default

### 5. Metadata
- **Next.js**: Export metadata object
- **React**: Sử dụng `<title>` và `<meta>` tags trong `index.html`

## Stack công nghệ

- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool và dev server
- **React Router v7**: Client-side routing
- **Ant Design**: UI component library
- **Framer Motion**: Animation library
- **Tailwind CSS v4**: Utility-first CSS framework

## Scripts available

- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Cấu hình path alias

Dự án sử dụng `@/*` alias cho imports:

```typescript
import Header from "@/components/Header";
import { solutions } from "@/lib/mockData";
```

## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Pages đã được convert

- ✅ HomePage
- ✅ AboutPage
- ✅ ContactPage
- ⏳ SolutionsPage (cần tạo)
- ⏳ ProductsPage (cần tạo)
- ⏳ ProjectsPage (cần tạo)
- ⏳ NewsPage (cần tạo)
- ⏳ CareersPage (cần tạo)
- ⏳ Detail pages (cần tạo)

## Lưu ý

1. **Không còn SSR/SSG**: React SPA không có server-side rendering như Next.js
2. **SEO**: Cần setup React Helmet hoặc solution khác cho SEO nếu cần
3. **Image Optimization**: Không còn tự động optimize images như Next.js
4. **API Routes**: Cần backend riêng, không còn API routes của Next.js

## Bước tiếp theo

1. Tạo các pages còn lại (Solutions, Products, Projects, News, Careers)
2. Tạo các detail pages (Product detail, Project detail, News detail)
3. Setup SEO với React Helmet
4. Optimize images nếu cần
5. Setup backend API nếu cần
6. Deploy lên hosting (Netlify, Vercel, etc.)

