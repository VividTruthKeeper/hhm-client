export interface INewPostsData {
  status_code: number;
  message: string;
  data: Data;
}

export interface Data {
  current_page: number;
  data: Datum[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: string;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface Datum {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  video: string | null;
  summary: string;
  has_summary: boolean;
  featured_images: FeaturedImage[];
  categories: Category[];
}

export interface Category {
  id: number;
  name: string;
  pivot: Pivot;
}

export interface Pivot {
  post_id: number;
  category_id: number;
}

export interface FeaturedImage {
  id: number;
  disk_name: string;
  file_name: string;
  file_size: number;
  content_type: string;
  title: string;
  description: string | null;
  field: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
  path: string;
  extension: string;
}
