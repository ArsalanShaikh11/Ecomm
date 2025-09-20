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
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  date: string;
  customerEmail: string;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    description: 'The ultimate iPhone with titanium design, A17 Pro chip, and advanced camera system with 5x telephoto zoom.',
    price: 1199.99,
    image_url: 'https://images.pexels.com/photos/14999950/pexels-photo-14999950.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Smartphones',
    stock: 25,
    featured: true,
    rating: 4.8,
    reviews: 1247
  },
  {
    id: '2',
    name: 'MacBook Pro 16" M3 Max',
    description: 'Supercharged for pros with the new M3 Max chip, stunning Liquid Retina XDR display, and up to 22 hours of battery life.',
    price: 2499.99,
    image_url: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Laptops',
    stock: 15,
    featured: true,
    rating: 4.9,
    reviews: 892
  },
  {
    id: '3',
    name: 'AirPods Pro 2nd Gen',
    description: 'Next-level Active Noise Cancellation and Adaptive Transparency with personalized Spatial Audio and USB-C charging.',
    price: 249.99,
    image_url: 'https://images.pexels.com/photos/8000432/pexels-photo-8000432.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Headphones',
    stock: 50,
    featured: true,
    rating: 4.7,
    reviews: 2156
  },
  {
    id: '4',
    name: 'Apple Watch Ultra 2',
    description: 'The most rugged and capable Apple Watch with precision dual-frequency GPS, up to 36 hours of battery life.',
    price: 799.99,
    image_url: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Smartwatches',
    stock: 30,
    featured: false,
    rating: 4.6,
    reviews: 743
  },
  {
    id: '5',
    name: 'iPad Pro 12.9" M2',
    description: 'The ultimate iPad experience with M2 chip, Liquid Retina XDR display, and support for Apple Pencil hover.',
    price: 1099.99,
    image_url: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tablets',
    stock: 20,
    featured: false,
    rating: 4.8,
    reviews: 567
  },
  {
    id: '6',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Ultimate Android flagship with built-in S Pen, 200MP camera, and Galaxy AI for enhanced productivity.',
    price: 1299.99,
    image_url: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Smartphones',
    stock: 35,
    featured: false,
    rating: 4.7,
    reviews: 1089
  },
  {
    id: '7',
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling headphones with crystal clear hands-free calling and 30-hour battery life.',
    price: 399.99,
    image_url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Headphones',
    stock: 40,
    featured: false,
    rating: 4.6,
    reviews: 1834
  },
  {
    id: '8',
    name: 'Dell XPS 13 Plus',
    description: 'Ultra-thin premium laptop with stunning InfinityEdge display, 12th Gen Intel processors, and modern design.',
    price: 1399.99,
    image_url: 'https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Laptops',
    stock: 18,
    featured: false,
    rating: 4.5,
    reviews: 456
  },
  {
    id: '9',
    name: 'Google Pixel Watch 2',
    description: 'Advanced health and fitness tracking with Wear OS by Google, heart rate monitoring, and safety features.',
    price: 349.99,
    image_url: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Smartwatches',
    stock: 25,
    featured: false,
    rating: 4.4,
    reviews: 321
  },
  {
    id: '10',
    name: 'Microsoft Surface Pro 9',
    description: 'Laptop versatility and tablet portability with 12th Gen Intel Core processors and all-day battery life.',
    price: 999.99,
    image_url: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tablets',
    stock: 22,
    featured: false,
    rating: 4.3,
    reviews: 678
  },
  {
    id: '11',
    name: 'Bose QuietComfort Ultra',
    description: 'Premium wireless headphones with world-class noise cancellation and immersive spatial audio.',
    price: 429.99,
    image_url: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Headphones',
    stock: 33,
    featured: false,
    rating: 4.7,
    reviews: 892
  },
  {
    id: '12',
    name: 'ASUS ROG Zephyrus G16',
    description: 'Ultra-slim gaming laptop with RTX 4070, AMD Ryzen 9 processor, and 240Hz OLED display.',
    price: 2199.99,
    image_url: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    category: 'Laptops',
    stock: 12,
    featured: true,
    rating: 4.8,
    reviews: 234
  }
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    total: 1449.98,
    status: 'delivered',
    items: [
      { id: '1', name: 'iPhone 15 Pro Max', quantity: 1, price: 1199.99 },
      { id: '3', name: 'AirPods Pro 2nd Gen', quantity: 1, price: 249.99 }
    ],
    date: '2024-01-15',
    customerEmail: 'john.doe@example.com'
  },
  {
    id: 'ORD-002',
    total: 2499.99,
    status: 'shipped',
    items: [
      { id: '2', name: 'MacBook Pro 16" M3 Max', quantity: 1, price: 2499.99 }
    ],
    date: '2024-01-14',
    customerEmail: 'sarah.wilson@example.com'
  },
  {
    id: 'ORD-003',
    total: 1199.98,
    status: 'processing',
    items: [
      { id: '4', name: 'Apple Watch Ultra 2', quantity: 1, price: 799.99 },
      { id: '7', name: 'Sony WH-1000XM5', quantity: 1, price: 399.99 }
    ],
    date: '2024-01-13',
    customerEmail: 'mike.johnson@example.com'
  },
  {
    id: 'ORD-004',
    total: 649.98,
    status: 'pending',
    items: [
      { id: '5', name: 'iPad Pro 12.9" M2', quantity: 1, price: 1099.99 }
    ],
    date: '2024-01-12',
    customerEmail: 'emma.davis@example.com'
  }
];