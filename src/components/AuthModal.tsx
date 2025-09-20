import React, { useState } from "react";
import { X, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useAuthStore } from "../stores/authStore";
import toast from "react-hot-toast";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, signUp, loading } = useAuthStore();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset form validation
    if (isSignUp && (!name.trim() || !email.trim() || !password.trim())) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!email.trim() || !password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      if (isSignUp) {
        const result = await signUp(email.trim(), password, name.trim());
        if (result.success) {
          toast.success(
            "Account created successfully! Welcome to ElectroStore!"
          );
          // Reset form
          setEmail("");
          setPassword("");
          setName("");
          onClose();
        } else {
          toast.error(result.error || "Sign up failed");
        }
      } else {
        const result = await signIn(email.trim(), password);
        if (result.success) {
          toast.success("Welcome back!");
          // Reset form
          setEmail("");
          setPassword("");
          onClose();
        } else {
          toast.error(result.error || "Sign in failed");
        }
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

  const demoLogin = async (email: string, password: string, type: string) => {
    try {
      const result = await signIn(email, password);
      if (result.success) {
        toast.success(`Signed in as ${type}!`);
        // Reset form
        setEmail("");
        setPassword("");
        setName("");
        onClose();
      } else {
        toast.error(result.error || `${type} login failed`);
      }
    } catch (error) {
      toast.error("Demo login failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative transform transition-all">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-6 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <User className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-gray-600">
            {isSignUp
              ? "Join ElectroStore and start shopping!"
              : "Sign in to your account"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-blue-400 disabled:to-purple-400 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:hover:scale-100"
          >
            <User className="h-5 w-5" />
            <span>
              {loading
                ? "Please wait..."
                : isSignUp
                ? "Create Account"
                : "Sign In"}
            </span>
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">
            Or try demo accounts
          </span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="mb-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-xs text-blue-700 text-center">
            <strong>Demo Credentials:</strong>
            <br />
            Admin: admin@electrostore.com / admin123
            <br />
            User: demo@example.com / demo123
            <br />
            Or use any email with password: password123
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() =>
              demoLogin("demo@example.com", "demo123", "Demo User")
            }
            disabled={loading}
            className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Demo User Account
          </button>
          <button
            onClick={() =>
              demoLogin("admin@electrostore.com", "admin123", "Admin")
            }
            disabled={loading}
            className="w-full border border-emerald-300 hover:bg-emerald-50 text-emerald-700 font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Admin Account
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            {isSignUp
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}
