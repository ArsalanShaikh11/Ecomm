export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  stock: number;
  featured: boolean;
  rating: number;
  reviews: number;
}

export interface Order {
  id: string;
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered";
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  date: string;
  customerEmail: string;
}

export const mockProducts: Product[] = [];

export const mockOrders: Order[] = [];
