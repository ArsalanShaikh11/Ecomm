import React from "react";
import { Zap, Users, Award, Globe, Heart, Target } from "lucide-react";

export function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
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
            About ElectroStore
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Your trusted partner in cutting-edge electronics and innovative
            technology solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To democratize technology by making premium electronics accessible
              to everyone, while providing exceptional service and support that
              empowers our customers to embrace the future of innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Innovation First
              </h3>
              <p className="text-gray-600">
                We stay ahead of the curve, bringing you the latest and most
                innovative technology products as soon as they hit the market.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Customer-Centric
              </h3>
              <p className="text-gray-600">
                Every decision we make is guided by what's best for our
                customers. Your satisfaction is our ultimate goal.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Global Reach
              </h3>
              <p className="text-gray-600">
                Serving customers worldwide with fast, reliable shipping and
                comprehensive support in multiple languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020 by a team of passionate tech enthusiasts,
                  ElectroStore began as a small startup with a big vision: to
                  bridge the gap between cutting-edge technology and everyday
                  consumers.
                </p>
                <p>
                  What started as a garage operation selling refurbished
                  smartphones has grown into a comprehensive electronics
                  marketplace serving millions of customers worldwide. Our
                  journey has been marked by continuous innovation,
                  customer-first thinking, and an unwavering commitment to
                  quality.
                </p>
                <p>
                  Today, we're proud to offer everything from the latest
                  smartphones and laptops to smart home devices and gaming
                  accessories, all backed by our industry-leading customer
                  service and support.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">2M+</div>
                  <div className="text-sm opacity-90">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50K+</div>
                  <div className="text-sm opacity-90">Products Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-sm opacity-90">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-90">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the passionate individuals who make ElectroStore possible.
              From tech experts to customer service champions, our team is
              dedicated to bringing you the best electronics shopping
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tech Experts
              </h3>
              <p className="text-gray-600">
                Our product specialists stay on top of the latest trends and
                technologies to help you make informed decisions.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Every product undergoes rigorous testing to ensure it meets our
                high standards for performance and reliability.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Customer Support
              </h3>
              <p className="text-gray-600">
                Our support team is here 24/7 to help with any questions or
                issues you might have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Innovation
              </h3>
              <p className="text-blue-100 text-sm">
                Embracing new technologies and creative solutions
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Integrity
              </h3>
              <p className="text-blue-100 text-sm">
                Honest, transparent, and ethical in all our dealings
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Excellence
              </h3>
              <p className="text-blue-100 text-sm">
                Striving for the highest quality in everything we do
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Accessibility
              </h3>
              <p className="text-blue-100 text-sm">
                Making technology accessible to everyone, everywhere
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
