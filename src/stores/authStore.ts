import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signUp: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAdmin: false,
      loading: false,

      signIn: async (email: string, password: string) => {
        set({ loading: true });
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Demo accounts
        if (email === 'admin@electrostore.com' && password === 'admin123') {
          const user = { id: '1', email, name: 'Admin User' };
          set({ user, isAdmin: true, loading: false });
          return { success: true };
        } else if (email === 'demo@example.com' && password === 'demo123') {
          const user = { id: '2', email, name: 'Demo User' };
          set({ user, isAdmin: false, loading: false });
          return { success: true };
        } else if (password === 'password123') {
          // Accept any email with password123 for demo
          const user = { id: '3', email, name: email.split('@')[0] };
          set({ user, isAdmin: false, loading: false });
          return { success: true };
        }
        
        set({ loading: false });
        return { success: false, error: 'Invalid credentials' };
      },

      signUp: async (email: string, password: string, name: string) => {
        set({ loading: true });
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const user = { id: Date.now().toString(), email, name };
        set({ user, isAdmin: false, loading: false });
        return { success: true };
      },

      signOut: () => {
        set({ user: null, isAdmin: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);