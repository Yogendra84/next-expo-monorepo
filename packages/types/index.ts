import { ReactNode } from "react";

export interface IDefaultProps {
  className?: string;
  children?: ReactNode;
}

export type UserRole = "admin" | "editor" | "provider" | "student";
export interface User {
  id?: string;
  bio?: string;
  email: string;
  fullname: string;
  role: string;
  avatar?: string;
  created_at?: string;
}

export interface ICourse {
  id: string;
  title: string;
  price: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  courseCount: number;
  totalViews: number;
  totalRevenue: number;
  status: "active" | "inactive";
  color: string;
  createdAt?: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  oldPrice?: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  duration: string;
  level: string;
  category: string;
  authorId: string;
  authorName: string;
  image: File | null | string;
  status: "draft" | "published" | "archived";
  createdAt?: string;
  updatedAt?: string;
  views?: number;
  clicks?: number;
  affiliateLink: string;
  hasPromoCode: boolean;
  promoCode?: string;
  discount?: number;
}

export interface Review {
  id: string;
  courseId: string;
  courseName: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  content: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
  helpfulCount: number;
}

export interface PromoCode {
  id: string;
  code: string;
  description?: string;
  discount: number;
  expiresAt: string;
  usageLimit: number;
  usageCount: number;
  courseId?: string;
  status: "active" | "expired" | "disabled";
  createdAt?: string;
}

export interface DashboardStats {
  totalUsers: number;
  totalCourses: number;
  totalReviews: number;
  pendingReviews: number;
  totalRevenue: number;
  monthlyRevenue: number;
  activePromoCodes: number;
  totalViews: number;
  totalClicks: number;
  conversionRate: number;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: "published" | "draft" | "archived";
  authorId: string;
  authorName: string;
  category: string;
  tags: string[];
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  views: number;
  readTime: number; // estimated minutes
  featured: boolean;
}

export interface ApiCourse {
  id: number;
  title: string;
  slug: string;
  description: string;
  author_id: number;
  provider: number;
  provider_name: string;
  category: number;
  category_name: string;
  price: string;
  discount_price: string | null;
  rating: string;
  is_published: boolean;
  thumbnail_video: string | null;
  external_url: string;
  zip_file_key: string | null;
  created_at: string;
  updated_at: string;
}

export interface ApiCoursesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApiCourse[];
}

export interface ApiCategory {
  id: number;
  name: string;
  slug: string;
  thumbnail: string | null;
}

export interface ApiCategoriesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApiCategory[];
}

export interface ApiReview {
  id: number;
  user_email: string;
  course: number;
  course_title: string;
  rating: number;
  comment: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
  updated_at: string;
}

export interface ApiReviewsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApiReview[];
}

export interface ApiNews {
  id: number;
  title: string;
  slug: string;
  content: string;
  published_at: string;
  created_at: string;
}

export interface ApiNewsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApiNews[];
}

//
export interface RefinerValues {
  category: string;
  level: string;
  author: string;
  minPrice: number;
  maxPrice: number;
  rating: number;
}
