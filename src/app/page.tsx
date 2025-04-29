'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  // Nếu chưa đăng nhập, chuyển hướng về trang login
  React.useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Chào mừng đến với hệ thống
            </h1>
            <p className="text-gray-600">
              Đây là trang chủ của ứng dụng. Bạn đã đăng nhập thành công.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 