// CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES
export interface ICategoriesData {
  data: Datum[];
  links: Links;
  meta: Meta;
}

export interface Datum {
  id: number;
  name: string;
}

export interface Links {
  first: string;
  last: string;
  prev: null;
  next: null;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}
// CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES

// ===============================================================================================================================

// POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS

export interface IPostsData {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  featured_images: FeaturedImage[];
  content_html: string;
  categories: Category[];
  video: null | string;
  powerseo_title: null | string;
  powerseo_description: null | string;
  powerseo_keywords: null | string;
}

export interface Category {
  id: number;
  name: string;
}

export interface FeaturedImage {
  id: number;
  disk_name: string;
  file_name: string;
  path: string;
  extension: string;
}
// POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS POSTS
