# 🚀 NexaCore Website - Setup Instructions

## Quick Start

### 1. Install Dependencies

```bash
cd nexacore-website
npm install
```

This will install all required packages:
- Next.js 15.5.4
- React 19.1.0
- TypeScript 5
- Tailwind CSS 4
- Ant Design 5.27.4
- Ant Design Icons 6.1.0
- Framer Motion 12.23.24
- Day.js 1.11.13

### 2. Run Development Server

```bash
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000)

### 3. Access the Website

**Public Pages:**
- Home: [http://localhost:3000](http://localhost:3000)
- About: [http://localhost:3000/about](http://localhost:3000/about)
- Solutions: [http://localhost:3000/solutions](http://localhost:3000/solutions)
- Products: [http://localhost:3000/products](http://localhost:3000/products)
- Projects: [http://localhost:3000/projects](http://localhost:3000/projects)
- News: [http://localhost:3000/news](http://localhost:3000/news)
- Careers: [http://localhost:3000/careers](http://localhost:3000/careers)
- Contact: [http://localhost:3000/contact](http://localhost:3000/contact)

**Admin Panel:**
- Login: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- Dashboard: [http://localhost:3000/admin/dashboard](http://localhost:3000/admin/dashboard)

**Admin Credentials:**
- Username: `admin`
- Password: `admin123`

## 📁 Project Structure

```
nexacore-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # About page
│   │   ├── solutions/         # Solutions page
│   │   ├── products/          # Products + [slug] pages
│   │   ├── projects/          # Projects + [slug] pages
│   │   ├── news/              # News + [slug] pages
│   │   ├── careers/           # Careers page
│   │   ├── contact/           # Contact page
│   │   ├── admin/             # Admin panel
│   │   │   ├── login/         # Admin login
│   │   │   ├── dashboard/     # Dashboard
│   │   │   ├── news/          # News CRUD
│   │   │   ├── projects/      # Projects CRUD
│   │   │   └── products/      # Products CRUD
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Header.tsx         # Main navigation
│   │   ├── Footer.tsx         # Site footer
│   │   ├── HeroBanner.tsx     # Hero section
│   │   ├── ServiceCard.tsx    # Solution cards
│   │   ├── ProjectCard.tsx    # Project cards
│   │   ├── NewsCard.tsx       # News cards
│   │   ├── ContactForm.tsx    # Contact form
│   │   ├── SectionTitle.tsx   # Section headers
│   │   └── AdminLayout.tsx    # Admin layout
│   ├── lib/
│   │   ├── mockData.ts        # Sample data
│   │   └── metadata.ts        # SEO metadata
│   └── types/
│       └── index.ts           # TypeScript types
├── public/                     # Static files
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Design & Features

### Color Scheme
- Primary Blue: `#0052CC`
- Secondary Blue: `#1890FF`
- Background: `#F5F7FA`
- Dark: `#001529`

### Key Features
✅ Fully responsive design (mobile, tablet, desktop)
✅ Smooth animations with Framer Motion
✅ Professional Ant Design components
✅ SEO-optimized pages
✅ Admin CMS with localStorage
✅ Dynamic routing for products, projects, and news
✅ Contact form with validation
✅ Career application system
✅ Google Maps integration

## 🔧 Available Scripts

```bash
# Development server (with Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 📝 Content Management

### Using the Admin Panel

1. **Login**: Go to `/admin/login` and use credentials (admin/admin123)

2. **Dashboard**: View statistics and quick actions

3. **Manage Content**:
   - **News**: Add, edit, delete news articles
   - **Projects**: Manage case studies and projects
   - **Products**: Update product information

4. **Data Storage**: All changes are saved to browser localStorage

### Updating Mock Data

Edit `src/lib/mockData.ts` to change default content:
- `solutions` - Service offerings
- `projects` - Case studies
- `products` - Product catalog
- `newsArticles` - News items
- `jobs` - Career listings
- `teamMembers` - Leadership team

## 🌐 Deployment

### Recommended: Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Alternative: Build & Deploy

```bash
npm run build
npm start
```

Deploy the `.next` folder to any Node.js hosting.

## 🎯 Customization Guide

### Change Branding

1. **Logo**: Update Header.tsx and Footer.tsx
2. **Colors**: Edit globals.css and tailwind.config
3. **Fonts**: Modify layout.tsx (currently using Inter)

### Add New Page

1. Create folder in `src/app/[page-name]/`
2. Add `page.tsx` file
3. Update Header.tsx navigation

### Modify Admin Features

Edit files in `src/app/admin/` to customize:
- Authentication logic
- CRUD operations
- Dashboard widgets

## 🔐 Security Notes

⚠️ **Important for Production:**
- Replace mock authentication with real auth (NextAuth.js, Auth0, etc.)
- Use a real database instead of localStorage
- Add environment variables for sensitive data
- Implement proper user roles and permissions
- Add CSRF protection
- Enable HTTPS

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Ant Design grid breakpoints:
- xs: < 576px
- sm: ≥ 576px
- md: ≥ 768px
- lg: ≥ 992px
- xl: ≥ 1200px

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## 📚 Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Library**: Ant Design 5
- **Icons**: Ant Design Icons
- **Animations**: Framer Motion
- **Dates**: Day.js
- **Fonts**: Inter (Google Fonts)

## 💡 Best Practices

1. **Performance**: Use Next/Image for all images in production
2. **SEO**: Metadata is configured per route
3. **Accessibility**: Ant Design components include ARIA attributes
4. **Code Quality**: TypeScript for type safety
5. **Responsive**: Mobile-first design approach

## 📞 Support

For questions or issues:
1. Check the README.md
2. Review Next.js documentation: https://nextjs.org/docs
3. Ant Design docs: https://ant.design/components/overview

---

**Happy Coding! 🚀**

