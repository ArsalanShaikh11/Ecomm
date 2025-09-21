# Backend Setup Guide

I've created a comprehensive MongoDB backend for your e-commerce application. Here's what has been built and how to set it up:

## 🚀 What's Been Created

### **Complete Backend Structure**

```
backend/
├── src/
│   ├── controllers/     # API controllers
│   ├── middleware/      # Authentication & validation
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── utils/          # Utilities (email, cloudinary)
│   └── server.js       # Main server file
├── package.json        # Dependencies
├── env.example         # Environment variables template
└── README.md          # Detailed documentation
```

### **Key Features Built**

- ✅ **Complete API** with 40+ endpoints
- ✅ **MongoDB Models** for Users, Products, Orders, Categories, Cart
- ✅ **Authentication** with JWT tokens
- ✅ **Role-based Access** (Admin, Customer)
- ✅ **File Upload** with Cloudinary integration
- ✅ **Payment Processing** with Stripe
- ✅ **Email System** with Nodemailer
- ✅ **Security** with Helmet, CORS, Rate limiting
- ✅ **Error Handling** and validation

## 📋 Setup Instructions

### 1. **Install Backend Dependencies**

```bash
cd backend
npm install
```

### 2. **Environment Configuration**

Create a `.env` file in the backend directory:

```bash
cp env.example .env
```

Update the `.env` file with your credentials:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/ecommerce
# or for MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/ecommerce

# Server
PORT=5000
NODE_ENV=development

# JWT
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Email (for notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Stripe (for payments)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

### 3. **Database Setup**

#### Option A: Local MongoDB

1. Install MongoDB locally
2. Start MongoDB service
3. Use: `MONGODB_URI=mongodb://localhost:27017/ecommerce`

#### Option B: MongoDB Atlas (Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Get your connection string
4. Use: `MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce`

### 4. **External Services Setup**

#### Cloudinary (Image Storage)

1. Go to [Cloudinary](https://cloudinary.com)
2. Create a free account
3. Get your cloud name, API key, and API secret
4. Add them to your `.env` file

#### Stripe (Payments)

1. Go to [Stripe](https://stripe.com)
2. Create an account
3. Get your test secret key
4. Add it to your `.env` file

#### Email (Gmail SMTP)

1. Enable 2-factor authentication on Gmail
2. Generate an app password
3. Use your Gmail and app password in `.env`

### 5. **Start the Backend**

```bash
# Development mode
npm run dev

# Production mode
npm start
```

The API will be available at `http://localhost:5000`

## 🔗 API Endpoints

### **Authentication**

- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout user

### **Products**

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### **Orders**

- `GET /api/orders` - Get all orders (Admin)
- `GET /api/orders/my-orders` - Get user orders
- `POST /api/orders` - Create order
- `PUT /api/orders/:id/status` - Update order status (Admin)

### **Cart**

- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item
- `DELETE /api/cart/remove/:productId` - Remove item from cart

### **Categories**

- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category (Admin)
- `PUT /api/categories/:id` - Update category (Admin)

## 🔧 Frontend Integration

To connect your React frontend to this backend:

1. **Update API calls** in your frontend to use `http://localhost:5000/api`
2. **Add authentication headers** to API requests
3. **Update data models** to match the backend schemas
4. **Implement error handling** for API responses

## 📊 Database Models

### **User Model**

- Personal info (name, email, phone)
- Authentication data
- Role-based access
- Address management

### **Product Model**

- Product details (name, description, price)
- Image management
- Category association
- Stock management
- Reviews and ratings

### **Order Model**

- Order information
- Customer details
- Order items
- Shipping address
- Payment information
- Status tracking

### **Category Model**

- Hierarchical structure
- SEO optimization
- Image support

### **Cart Model**

- User-specific cart
- Item management
- Price calculations

## 🛡️ Security Features

- **JWT Authentication** - Secure token-based auth
- **Password Hashing** - bcrypt for password security
- **Rate Limiting** - Prevent API abuse
- **CORS Protection** - Cross-origin request security
- **Input Validation** - Request data validation
- **Role-based Access** - Admin and user permissions

## 🚀 Next Steps

1. **Install dependencies**: `cd backend && npm install`
2. **Set up environment variables** in `.env`
3. **Configure external services** (MongoDB, Cloudinary, Stripe)
4. **Start the backend**: `npm run dev`
5. **Test the API** using Postman or your frontend
6. **Update frontend** to use the new API endpoints

## 📝 Testing the API

You can test the API using:

- **Postman** - Import the API collection
- **Thunder Client** (VS Code extension)
- **curl** commands
- **Your React frontend**

## 🔍 Health Check

Once running, visit: `http://localhost:5000/api/health`

You should see:

```json
{
  "status": "success",
  "message": "E-commerce API is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

The backend is now ready to power your e-commerce application! 🎉
