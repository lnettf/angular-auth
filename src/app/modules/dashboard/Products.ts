export interface ResponseProducts {
  success: boolean;
  data: Product[];
  message: string;
}

export interface Product {
  id: number;
  name: string;
  detail: string;
  created_at: string;
  updated_at: string;
}
