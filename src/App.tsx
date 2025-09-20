import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Products } from "./components/Products";
import { useAuthStore } from "./stores/authStore";
import { mockProducts, Product } from "./lib/mockData";
import {
  Zap,
  Star,
  TrendingUp,
  Shield,
  Truck,
  Award,
  Users,
} from "lucide-react";

// Home component for the main page
function Home({ searchQuery }: { searchQuery: string }) {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(mockProducts);

  useEffect(() => {
    filterProducts();
  }, [products, searchQuery]);

  const filterProducts = () => {
    let filtered = products;

    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const featuredProducts = filteredProducts.filter((p) => p.featured);
  const regularProducts = filteredProducts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
              <Zap className="h-12 w-12 text-yellow-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Power Up Your Tech Life
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover cutting-edge electronics and gadgets that transform how you
            work, play, and connect with the world.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-colors">
              <Star className="h-5 w-5 mr-2 text-yellow-400" />
              Premium Quality
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-colors">
              <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
              Latest Technology
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-gray-100 transition-colors">
              <Shield className="h-5 w-5 mr-2 text-blue-400" />
              Warranty Protected
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Free Shipping
              </h3>
              <p className="text-gray-600">
                Free delivery on all orders. Fast and reliable shipping
                worldwide.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Guarantee
              </h3>
              <p className="text-gray-600">
                All products come with manufacturer warranty and quality
                assurance.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock customer support for all your tech needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ⭐ Featured Products
            </h2>
            <p className="text-gray-600 text-lg">
              Hand-picked premium electronics for tech enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* All Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Electronics
          </h2>
          <p className="text-gray-600 text-lg">
            {searchQuery
              ? `Search results for "${searchQuery}" (${filteredProducts.length} products)`
              : "Explore our complete range of electronic devices"}
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full p-8 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <Zap className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              {searchQuery
                ? "Try adjusting your search terms or browse different categories"
                : "Check back soon for new products"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {(featuredProducts.length > 0
              ? regularProducts
              : filteredProducts
            ).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest tech news, product launches, and exclusive deals
            delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// Layout component that includes Header for all pages
function Layout({
  children,
  searchQuery,
  setSearchQuery,
}: {
  children: React.ReactNode;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={setSearchQuery} />
      {children}
    </div>
  );
}

// Main App component with routing
function App() {
  const { user, isAdmin } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState("");

  // Check if we should show admin dashboard
  if (window.location.pathname === "/admin" && isAdmin) {
    return (
      <>
        <AdminDashboard />
        <Toaster position="top-right" />
      </>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
              <Home searchQuery={searchQuery} />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
              <ContactUs />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
              <Products />
            </Layout>
          }
        />
      </Routes>
      <Toaster position="top-right" />
    </Router>
  );
}

export default App;
