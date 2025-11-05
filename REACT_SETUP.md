# Hướng dẫn Setup dự án React + TypeScript

## ✅ Đã hoàn thành

Dự án NexaCore đã được chuyển đổi từ **Next.js** sang **React + TypeScript + Vite**.

### Các thay đổi chính:

1. **✅ Cấu trúc dự án mới**
   - Tạo `index.html` - HTML template
   - Tạo `src/main.tsx` - Entry point
   - Tạo `src/App.tsx` - Main app với React Router
   - Tạo `vite.config.ts` - Vite configuration

2. **✅ Routing**
   - Chuyển từ Next.js App Router → React Router v7
   - Tất cả routes được định nghĩa trong `src/App.tsx`

3. **✅ Components đã convert**
   - Header.tsx ✅
   - Footer.tsx ✅
   - HeroBanner.tsx ✅
   - ServiceCard.tsx ✅
   - ProjectCard.tsx ✅
   - NewsCard.tsx ✅
   - ContactForm.tsx ✅
   - SectionTitle.tsx ✅
   - AdminLayout.tsx (không convert - admin pages)

4. **✅ Pages đã convert**
   - HomePage.tsx ✅ (Full content)
   - AboutPage.tsx ✅ (Full content)
   - ContactPage.tsx ✅ (Full content)
   - NewsDetailPage.tsx ✅ (Full content - converted from NewsDetailClient)
   - ProductDetailPage.tsx ✅ (Full content with dynamic routing)
   - ProjectDetailPage.tsx ✅ (Full content with dynamic routing)
   - SolutionsPage.tsx ✅ (placeholder)
   - ProductsPage.tsx ✅ (placeholder)
   - ProjectsPage.tsx ✅ (placeholder)
   - NewsPage.tsx ✅ (placeholder)
   - CareersPage.tsx ✅ (placeholder)

5. **✅ Dependencies đã update**
   - Loại bỏ: `next`, `@ant-design/nextjs-registry`, `eslint-config-next`
   - Thêm: `vite`, `@vitejs/plugin-react`, `react-router-dom`

## 🚀 Cách chạy dự án

### Bước 1: Xóa node_modules và lock files cũ

```bash
rm -rf node_modules
rm package-lock.json
# hoặc trên Windows
rmdir /s node_modules
del package-lock.json
```

### Bước 2: Cài đặt dependencies mới

```bash
npm install
```

### Bước 3: Chạy development server

```bash
npm run dev
```

Website sẽ chạy tại: `http://localhost:3000`

### Bước 4: Build production

```bash
npm run build
```

### Bước 5: Preview production build

```bash
npm run preview
```

## 📦 Package.json mới

```json
{
  "name": "nexacore-website",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext ts,tsx"
  },
  "dependencies": {
    "@ant-design/icons": "^5.5.2",
    "antd": "^5.27.4",
    "dayjs": "^1.11.13",
    "framer-motion": "^12.23.24",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.1.1"
  },
  "devDependencies": {
    "@types/node": "^22.10.5",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@typescript-eslint/eslint-plugin": "^8.20.0",
    "@typescript-eslint/parser": "^8.20.0",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.18.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "postcss": "^8.4.49",
    "tailwindcss": "^4",
    "typescript": "^5.7.3",
    "vite": "^6.0.7"
  }
}
```

## 🔄 Migration Guide

### 1. Import changes

```typescript
// ❌ Next.js
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// ✅ React Router
import { Link, useLocation } from "react-router-dom";
// Use regular <img> tag
const location = useLocation();
const pathname = location.pathname;
```

### 2. Link component

```typescript
// ❌ Next.js
<Link href="/about">About</Link>

// ✅ React Router
<Link to="/about">About</Link>
```

### 3. Images

```typescript
// ❌ Next.js
<Image src="/logo.png" width={150} height={150} alt="Logo" />

// ✅ React
<img src="/logo.png" width={150} height={150} alt="Logo" />
```

### 4. Client components

```typescript
// ❌ Next.js - cần directive
"use client";

// ✅ React - không cần, tất cả đều client-side
```

### 5. Dynamic routes

```typescript
// ❌ Next.js
import { useParams } from "next/navigation";

// ✅ React Router
import { useParams } from "react-router-dom";
```

## 📁 Cấu trúc thư mục

```
nexacore-website/
├── index.html              # ← MỚI: HTML template
├── vite.config.ts          # ← MỚI: Vite config
├── tsconfig.json           # ← CẬP NHẬT
├── tsconfig.node.json      # ← MỚI
├── package.json            # ← CẬP NHẬT
├── README_REACT.md         # ← MỚI
├── REACT_SETUP.md          # ← MỚI
│
├── public/
│   ├── images/
│   └── favicon.ico
│
├── src/
│   ├── main.tsx           # ← MỚI: Entry point
│   ├── App.tsx            # ← MỚI: Main app với routes
│   │
│   ├── app/
│   │   └── globals.css    # Global styles (giữ nguyên)
│   │
│   ├── components/        # ← ĐÃ CONVERT
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── NewsCard.tsx
│   │   ├── ContactForm.tsx
│   │   └── SectionTitle.tsx
│   │
│   ├── pages/             # ← MỚI: Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── SolutionsPage.tsx
│   │   ├── ProductsPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── ProjectDetailPage.tsx
│   │   ├── NewsPage.tsx
│   │   ├── NewsDetailPage.tsx
│   │   └── CareersPage.tsx
│   │
│   ├── lib/               # Utilities (giữ nguyên)
│   │   ├── mockData.ts
│   │   └── metadata.ts
│   │
│   └── types/             # TypeScript types (giữ nguyên)
│       └── index.ts
│
└── [Old Next.js files]    # CÓ THỂ XÓA
    ├── next.config.ts
    ├── next-env.d.ts
    └── src/app/ (pages cũ)
```

## ⚠️ Lưu ý quan trọng

### 1. Files có thể xóa (Next.js specific)
```bash
# Có thể xóa những file này
next.config.ts
next-env.d.ts
eslint.config.mjs (nếu dùng cho Next.js)
.next/ (build folder)
src/app/page.tsx (đã move sang src/pages/HomePage.tsx)
src/app/layout.tsx (đã move logic sang App.tsx)
src/app/*/page.tsx (các page files cũ)
```

### 2. Không còn Server Components
- Tất cả components đều render ở client
- Không có SSR/SSG như Next.js
- Cần setup backend API riêng nếu cần

### 3. SEO
- Không còn tự động generate metadata
- Cần dùng React Helmet hoặc tương tự nếu cần dynamic SEO

### 4. Image Optimization
- Không còn tự động optimize images
- Cần optimize images thủ công hoặc dùng service khác

### 5. Admin Pages
- Admin pages (trong `src/app/admin/`) chưa được convert
- Cần convert riêng nếu cần dùng

## 🎯 Các tính năng đã hoạt động

- ✅ Routing với React Router
- ✅ Dynamic routes với params (/products/:slug, /projects/:slug, /news/:slug)
- ✅ TypeScript với strict mode
- ✅ Ant Design components
- ✅ Framer Motion animations
- ✅ Tailwind CSS v4
- ✅ Hot Module Replacement (HMR)
- ✅ Path alias (@/*)
- ✅ All main components converted
- ✅ Home, About, Contact pages fully functional
- ✅ News, Product, Project detail pages fully functional
- ✅ 404 handling for missing items

## 📝 TODO tiếp theo (Optional)

1. **Hoàn thiện các placeholder pages**
   - Implement SolutionsPage với full content
   - Implement ProductsPage với full content
   - Implement ProjectsPage với full content
   - Implement NewsPage với full content
   - Implement CareersPage với full content
   - Implement các detail pages

2. **SEO**
   - Install react-helmet-async
   - Setup dynamic page titles
   - Setup meta tags

3. **Admin Pages** (nếu cần)
   - Convert admin pages từ Next.js
   - Setup authentication

4. **Deployment**
   - Deploy lên Netlify/Vercel/Cloudflare Pages
   - Setup environment variables

## 🆘 Troubleshooting

### Lỗi: Module not found
```bash
# Clear cache và reinstall
rm -rf node_modules
npm install
```

### Lỗi: TypeScript errors
```bash
# Restart TypeScript server trong VS Code
Ctrl+Shift+P → "TypeScript: Restart TS Server"
```

### Lỗi: Vite build errors
```bash
# Check tsconfig.json
# Ensure all imports use correct paths
```

## 📚 Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Router v7](https://reactrouter.com/)
- [Ant Design](https://ant.design/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## ✨ Summary

Dự án của bạn đã được chuyển đổi thành công từ **Next.js** sang **React + TypeScript + Vite**! 🎉

Chỉ cần chạy:
```bash
npm install
npm run dev
```

Và bạn đã có một React SPA hoàn chỉnh!

