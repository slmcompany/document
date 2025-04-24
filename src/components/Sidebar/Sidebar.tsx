'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  UserGroupIcon, 
  UsersIcon, 
  SpeakerWaveIcon, 
  CodeBracketSquareIcon,
  DevicePhoneMobileIcon, 
  ServerIcon, 
  PencilSquareIcon,
  PhotoIcon,
  MapIcon,
  DocumentTextIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface NavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  children?: NavItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { title: 'Trang chủ', path: '/trang-chu', icon: <HomeIcon className="w-6 h-6" /> },
    { title: 'Danh sách tài khoản', path: '/danh-sach-tai-khoan', icon: <UserGroupIcon className="w-6 h-6" /> },
    { title: 'Quản lý tài khoản mạng xã hội', path: '/quan-ly-tai-khoan-mang-xa-hoi', icon: <UsersIcon className="w-6 h-6" /> },
    { title: 'Quản lý quảng cáo', path: '/quan-ly-quang-cao', icon: <SpeakerWaveIcon className="w-6 h-6" /> },
    { title: 'Quản lý mã nguồn Git', path: '/quan-ly-ma-nguon-git', icon: <CodeBracketSquareIcon className="w-6 h-6" /> },
    { title: 'Quản lý App mobile SLM', path: '/quan-ly-app-mobile-slm', icon: <DevicePhoneMobileIcon className="w-6 h-6" /> },
    { title: 'Quản lý máy chủ nội bộ SLM', path: '/quan-ly-may-chu-noi-bo-slm', icon: <ServerIcon className="w-6 h-6" /> },
    { title: 'Quản lý hệ thống NAS', path: '/quan-ly-he-thong-nas', icon: <ServerIcon className="w-6 h-6" /> },
    { title: 'Thiết kế in ấn cũ', path: '/thiet-ke-in-an-cu', icon: <PencilSquareIcon className="w-6 h-6" /> },
    { title: 'Quản lý tài khoản Tailwind', path: '/quan-ly-tai-khoan-tailwind', icon: <PhotoIcon className="w-6 h-6" /> },
    { title: 'Quản lý tài khoản Google Maps', path: '/quan-ly-tai-khoan-google-maps', icon: <MapIcon className="w-6 h-6" /> },
    { title: 'Quản lý tên miền', path: '/quan-ly-ten-mien', icon: <GlobeAltIcon className="w-6 h-6" /> },
    { title: 'Dữ liệu khác', path: '/du-lieu-khac', icon: <DocumentTextIcon className="w-6 h-6" /> },
  ];

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item) => {
      const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
      
      return (
        <div key={item.path} className="mb-1">
          <Link 
            href={item.path}
            className={`flex items-center px-4 py-2 text-sm rounded-lg ${
              isActive 
                ? 'bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-white' 
                : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
            }`}
          >
            <div className={`${isOpen ? 'mr-3' : 'mx-auto'}`}>
              {item.icon}
            </div>
            <span className={`${isOpen ? 'block' : 'hidden md:hidden'}`}>{item.title}</span>
          </Link>
        </div>
      );
    });
  };

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden" 
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-30 h-screen transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64 md:translate-x-0 md:w-20'
        } bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <div className={`${isOpen ? 'block' : 'hidden md:hidden'}`}>
            <h2 className="text-xl font-semibold">Tài liệu hướng dẫn</h2>
          </div>
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div className="h-full px-3 py-4 overflow-y-auto">
          <nav className="h-full space-y-1">
            {renderNavItems(navItems)}
          </nav>
        </div>
      </aside>
    </>
  );
}; 