export interface INewPostsData {
  data: Datum[];
  links: Links;
  meta: Meta;
}

export interface Datum {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  type: string;
  featured_images: FeaturedImage[];
  video: string;
  content_html: string;
  categories: Category[];
  powerseo_title: string;
  powerseo_description: string;
  powerseo_keywords: string;
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

export interface Links {
  first: string;
  last: string;
  prev: null | string;
  next: null | string;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: string;
  to: number;
  total: number;
}
