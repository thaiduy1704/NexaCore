// Common Types
export interface NavItem {
  key: string;
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  image: string;
  solution: string;
  result: string;
  date: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  category: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
}
