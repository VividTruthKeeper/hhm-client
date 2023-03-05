export interface IPostsData {
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
  prev_page_url: null;
  to: number;
  total: number;
}

export interface Datum {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  summary: string;
  has_summary: boolean;
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
