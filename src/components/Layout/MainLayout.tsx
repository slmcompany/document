'use client';

import React, { useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main 
        className={`flex-1 overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}
          ${isSidebarOpen ? 'sm:ml-0' : 'sm:ml-0'}
          ${isSidebarOpen ? 'ml-0' : 'ml-0'}
        `}
      >
        <div className="container p-4 mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}; 