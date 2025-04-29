'use client';

import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Chỉ chuyển hướng nếu chưa đăng nhập và không đang ở trang login
    if (!isLoggedIn && pathname !== '/login') {
      router.push('/login');
    }
  }, [isLoggedIn, pathname, router]);

  // Không hiển thị nội dung cho đến khi xác thực thành công
  if (!isLoggedIn && pathname !== '/login') {
    return null;
  }

  return <>{children}</>;
}; 