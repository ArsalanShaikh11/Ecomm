# E-commerce Backend API

A comprehensive MongoDB-based backend for the e-commerce application built with Node.js, Express, and MongoDB.

## Features

- **Authentication & Authorization**: JWT-based auth with role-based access control
- **Product Management**: CRUD operations for products with image uploads
- **Order Management**: Complete order lifecycle management
- **Cart System**: Persistent shopping cart functionality
- **Category Management**: Hierarchical category system
- **Payment Integration**: Stripe payment processing
- **Email Notifications**: Automated email sending
- **Image Upload**: Cloudinary integration for image storage
- **Admin Dashboard**: Comprehensive admin controls
- **API Documentation**: Well-documented REST API

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer + Cloudinary
- **Email**: Nodemailer
- **Payments**: Stripe
- **Security**: Helmet, CORS, Rate Limiting

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   ```bash
   cp env.example .env
   ```

   Update the `.env` file with your configuration:

   ```env
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   PORT=5000
   NODE_ENV=development
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRE=7d
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
   FRONTEND_URL=http://localhost:5173
   ```

4. **Start the server**

   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/forgot-password` - Forgot password
- `POST /api/auth/reset-password` - Reset password
- `PUT /api/auth/update-password` - Update password

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)
- `GET /api/products/featured` - Get featured products
- `GET /api/products/search` - Search products
- `GET /api/products/category/:categoryId` - Get products by category

### Orders

- `GET /api/orders` - Get all orders (Admin)
- `GET /api/orders/my-orders` - Get user orders
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create order
- `PUT /api/orders/:id/status` - Update order status (Admin)
- `PUT /api/orders/:id/cancel` - Cancel order

### Cart

- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item
- `DELETE /api/cart/remove/:productId` - Remove item from cart
- `DELETE /api/cart/clear` - Clear cart

### Categories

- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get single category
- `POST /api/categories` - Create category (Admin)
- `PUT /api/categories/:id` - Update category (Admin)
- `DELETE /api/categories/:id` - Delete category (Admin)
- `GET /api/categories/tree` - Get category tree

### Users

- `GET /api/users` - Get all users (Admin)
- `GET /api/users/:id` - Get single user (Admin)
- `PUT /api/users/:id` - Update user (Admin)
- `DELETE /api/users/:id` - Delete user (Admin)
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Payments

- `POST /api/payments/create-intent` - Create payment intent
- `POST /api/payments/confirm` - Confirm payment
- `POST /api/payments/refund` - Create refund

## Database Models

### User

- Personal information (name, email, phone)
- Authentication data
- Role-based access control
- Address management
- Preferences

### Product

- Product details (name, description, price)
- Image management
- Category association
- Stock management
- Reviews and ratings
- SEO metadata

### Order

- Order information
- Customer details
- Order items
- Shipping address
- Payment information
- Status tracking

### Category

- Hierarchical structure
- SEO optimization
- Image support
- Sort ordering

### Cart

- User-specific cart
- Item management
- Price calculations
- Stock validation

## Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for password security
- **Rate Limiting**: Prevent API abuse
- **CORS Protection**: Cross-origin request security
- **Input Validation**: Request data validation
- **Helmet**: Security headers
- **Role-based Access**: Admin and user permissions

## Error Handling

- Centralized error handling middleware
- Custom error messages
- HTTP status codes
- Development vs production error details

## File Upload

- **Multer**: File upload handling
- **Cloudinary**: Cloud image storage
- **Image Processing**: Automatic resizing and optimization
- **File Validation**: Type and size restrictions

## Email System

- **Nodemailer**: Email sending
- **Templates**: Pre-built email templates
- **Verification**: Email verification system
- **Notifications**: Order and account notifications

## Payment Integration

- **Stripe**: Payment processing
- **Payment Intents**: Secure payment handling
- **Refunds**: Refund management
- **Webhooks**: Payment status updates

## Development

### Scripts

```bash
npm run dev      # Start development server
npm start        # Start production server
npm test         # Run tests
```

### Project Structure

```
backend/
├── src/
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── utils/          # Utility functions
│   └── server.js       # Main server file
├── uploads/            # File uploads (local)
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details
