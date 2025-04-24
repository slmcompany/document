'use client';

import React from 'react';

interface DomainData {
  id: number;
  name: string;
  expiryDate: string;
}

export default function QuanLyTenMien() {
  const domains: DomainData[] = [
    { 
      id: 1, 
      name: 'eliton.com.vn', 
      expiryDate: '06/03/2026'
    },
    { 
      id: 2, 
      name: 'auxsol.com.vn', 
      expiryDate: '17/12/2025'
    },
    { 
      id: 3, 
      name: 'silemedia.com', 
      expiryDate: '19/10/2025'
    },
    { 
      id: 4, 
      name: 'slmglobal.vn', 
      expiryDate: '26/10/2025'
    },
    { 
      id: 5, 
      name: 'eliton.vn', 
      expiryDate: '06/03/2026'
    },
    { 
      id: 6, 
      name: 'auxsol.vn', 
      expiryDate: '17/12/2025'
    },
    { 
      id: 7, 
      name: 'steelman.vn', 
      expiryDate: '30/12/2025'
    }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quản lý tên miền</h1>
      
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-2 text-blue-700">Quản lý tên miền - Mắt Bão</h2>
        <p className="mb-2">Đăng nhập vào hệ thống quản lý tên miền Mắt Bão để thực hiện các thao tác quản lý và gia hạn tên miền.</p>
        <a 
          href="https://manage.matbao.net/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm1 0v12h12V3H4z" clipRule="evenodd" />
            <path d="M11 8a1 1 0 10-2 0v3a1 1 0 102 0V8z" />
            <path d="M10 4a1 1 0 100 2 1 1 0 000-2z" />
          </svg>
          Đăng nhập Mắt Bão
        </a>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow overflow-x-auto mb-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                STT
                <button className="ml-1 text-gray-400">
                  <span className="sr-only">Sắp xếp</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </button>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tên miền
                <button className="ml-1 text-gray-400">
                  <span className="sr-only">Sắp xếp</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </button>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ngày hết hạn
                <button className="ml-1 text-gray-400">
                  <span className="sr-only">Sắp xếp</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {domains.map((domain) => (
              <tr key={domain.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{domain.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <a href={'https://' + domain.name} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    {domain.name}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{domain.expiryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Thông tin liên hệ hỗ trợ</h2>
        <div className="flex flex-col space-y-1">
          <p><span className="font-medium">Người hỗ trợ:</span> Huyền Diệu</p>
          <p><span className="font-medium">Số điện thoại:</span> <a href="tel:0367650600" className="text-blue-500 hover:text-blue-700">0367650600</a></p>
        </div>
      </div>
    </div>
  );
} 