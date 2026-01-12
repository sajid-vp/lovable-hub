import { useState, useCallback } from "react";
import { mockUser, type User } from "@/data/mockData";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>(() => {
    // Check localStorage for persisted auth state
    const stored = localStorage.getItem("auth");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Always use the latest mockUser data but preserve auth status
        if (parsed.isAuthenticated) {
          return { isAuthenticated: true, user: mockUser };
        }
        return { isAuthenticated: false, user: null };
      } catch {
        return { isAuthenticated: false, user: null };
      }
    }
    return { isAuthenticated: false, user: null };
  });

  const login = useCallback((email: string, password: string) => {
    // Mock login - in real app, this would call an API
    if (email && password) {
      const newState = { isAuthenticated: true, user: mockUser };
      setAuthState(newState);
      localStorage.setItem("auth", JSON.stringify(newState));
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setAuthState({ isAuthenticated: false, user: null });
    localStorage.removeItem("auth");
  }, []);

  return {
    isAuthenticated: authState.isAuthenticated,
    user: authState.user,
    login,
    logout,
  };
}
