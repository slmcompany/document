'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from '../Sidebar/Sidebar';
import { AuthGuard } from '../AuthGuard';
import { useAuth } from '@/contexts/AuthContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { isLoggedIn, logout } = useAuth();
  const pathname = usePathname();
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Kiểm tra xem có cần bảo vệ trang hiện tại không
  const isLoginPage = pathname === '/login';

  return (
    <div className="flex h-screen overflow-hidden bg-white dark:bg-gray-900">
      {/* Sidebar chỉ hiển thị khi đã đăng nhập */}
      {isLoggedIn && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}

      {/* Main Content */}
      <main 
        className={`flex-1 overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out
          ${isLoggedIn && isSidebarOpen ? 'md:ml-64' : 'md:ml-0'}
          ${isLoggedIn && isSidebarOpen ? 'sm:ml-0' : 'sm:ml-0'}
          ${isLoggedIn && isSidebarOpen ? 'ml-0' : 'ml-0'}
        `}
      >
        {isLoggedIn && (
          <div className="p-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end">
              <button
                onClick={logout}
                className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        )}
        
        <div className="container p-4 mx-auto">
          {isLoginPage ? (
            children
          ) : (
            <AuthGuard>{children}</AuthGuard>
          )}
        </div>
      </main>
    </div>
  );
}; 