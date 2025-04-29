'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Kiểm tra trạng thái đăng nhập từ localStorage khi component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLoginState = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(storedLoginState === 'true');
      setIsInitialized(true);
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      // Xác thực với thông tin đăng nhập cố định
      if (username === 'slm' && password === 'Slm@879291') {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  // Chỉ render children khi đã khởi tạo xong
  if (!isInitialized) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 