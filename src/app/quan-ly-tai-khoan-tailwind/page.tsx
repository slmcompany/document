export default function QuanLyTaiKhoanTailwind() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Quản lý tài khoản Tailwind Plus</h1>
      
      <div className="prose max-w-none dark:prose-invert">
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 dark:bg-yellow-900 dark:border-yellow-800 mb-6">
          <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-300 mb-2">Thông tin đăng nhập</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400">URL:</p>
              <p className="text-yellow-900 dark:text-yellow-200">
                <a href="https://tailwindcss.com/plus/login" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  tailwindcss.com/plus/login
                </a>
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400">Email:</p>
              <p className="text-yellow-900 dark:text-yellow-200">sale@slmsolar.com</p>
            </div>
            <div>
              <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400">Mật khẩu:</p>
              <p className="text-yellow-900 dark:text-yellow-200">Slm@879291</p>
            </div>
          </div>
        </div>

        <p>
          Trang này cung cấp thông tin về Tailwind Plus (trước đây là Tailwind UI) - bộ công cụ thiết kế UI từ nhà phát triển Tailwind CSS.
        </p>
        
        <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200 dark:bg-cyan-900 dark:border-cyan-800 mb-6">
          <p className="text-cyan-700 dark:text-cyan-300 font-medium">
            Lưu ý: Tailwind Plus cung cấp hơn 500+ component UI, templates và UI kit để xây dựng giao diện hiện đại, đáp ứng cho dự án của bạn.
          </p>
        </div>
        
        <h2>Thông tin Tailwind Plus</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Website chính thức:</p>
              <p className="text-gray-900 dark:text-white">
                <a href="https://tailwindcss.com/plus" className="text-blue-600 hover:underline">tailwindcss.com/plus</a>
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Giá cả:</p>
              <p className="text-gray-900 dark:text-white">$299 (cá nhân) / $979 (teams) - trả một lần</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Thời hạn:</p>
              <p className="text-gray-900 dark:text-white">Lifetime access (vĩnh viễn)</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Phát triển bởi:</p>
              <p className="text-gray-900 dark:text-white">Tailwind Labs</p>
            </div>
          </div>
        </div>
        
        <h2>Các sản phẩm chính của Tailwind Plus</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              UI Blocks
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Hơn 500+ component được thiết kế chuyên nghiệp, đáp ứng đầy đủ, có thể tùy chỉnh theo ý thích.
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>Marketing (Hero Sections, CTAs, Pricing)</li>
              <li>Application UI (Forms, Tables, Modals)</li>
              <li>Ecommerce (Product Views, Carts, Checkouts)</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center">
              <svg className="w-5 h-5 mr-2 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Templates
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Các mẫu website hiện đại được xây dựng bằng React và Next.js, dễ dàng tùy chỉnh.
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>Spotlight (Template website cá nhân)</li>
              <li>Radiant (Template marketing SaaS)</li>
              <li>Protocol (Template tài liệu API)</li>
              <li>Và nhiều mẫu khác</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center">
              <svg className="w-5 h-5 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              UI Kit (Catalyst)
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Bộ starter kit cho React để xây dựng hệ thống component riêng với Tailwind CSS.
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>Các component như Button, Input, Table</li>
              <li>Dễ dàng tùy chỉnh và mở rộng</li>
              <li>Được thiết kế bởi team Tailwind CSS</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center">
              <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Private Community
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Cộng đồng Discord riêng cho thành viên để kết nối với các designer và developer khác.
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>Hỗ trợ từ cộng đồng</li>
              <li>Trao đổi trực tiếp với team Tailwind Labs</li>
              <li>Chia sẻ kinh nghiệm và best practices</li>
            </ul>
          </div>
        </div>
        
        <h2>Hướng dẫn sử dụng</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Bắt đầu với Tailwind Plus</h3>
          
          <ol className="list-decimal pl-5 mt-2">
            <li>Mua license tại <a href="https://tailwindcss.com/plus" className="text-blue-600 hover:underline">tailwindcss.com/plus</a></li>
            <li>Đăng nhập vào tài khoản và truy cập vào Dashboard</li>
            <li>Khám phá thư viện UI Blocks để tìm component phù hợp</li>
            <li>Tải xuống các templates hoặc component cần thiết</li>
            <li>Tích hợp các component vào dự án của bạn</li>
            <li>Tùy chỉnh các component theo nhu cầu thiết kế</li>
          </ol>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-4">Sử dụng Catalyst UI Kit</h3>
          
          <ol className="list-decimal pl-5 mt-2">
            <li>Cài đặt Catalyst UI Kit vào dự án React</li>
            <li>Import và sử dụng các component cơ bản</li>
            <li>Tùy chỉnh theme và styling theo brand</li>
            <li>Mở rộng các component sẵn có để tạo component mới</li>
          </ol>
        </div>
        
        <h2>Lợi ích của Tailwind Plus</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Tiết kiệm thời gian</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Có sẵn hơn 500+ component và templates giúp giảm thời gian phát triển UI đáng kể.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Chất lượng chuyên nghiệp</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Được thiết kế bởi team phát triển Tailwind CSS với tiêu chuẩn cao.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Dễ dàng tùy biến</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Mọi component đều dễ dàng tùy chỉnh để phù hợp với thiết kế của dự án.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Truy cập vĩnh viễn</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Mua một lần, sử dụng mãi mãi và nhận các cập nhật mới trong tương lai.
              </p>
            </div>
          </div>
        </div>
        
        <h2>Câu hỏi thường gặp</h2>
        
        <div className="space-y-4 mb-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Tôi có thể sử dụng Tailwind Plus cho dự án khách hàng không?</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Có! Bạn có thể sử dụng Tailwind Plus để xây dựng các dự án tùy chỉnh cho khách hàng. Tuy nhiên, bạn không thể sử dụng nó để tạo sản phẩm phân phối lại như theme hay UI kit.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Tailwind Plus có hỗ trợ framework nào?</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Templates được xây dựng bằng Next.js và React. UI Components có sẵn trong ba định dạng: React, Vue và HTML thuần. Các component React và Vue tương thích với Headless UI.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Có giảm giá cho sinh viên không?</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Có, Tailwind Labs cung cấp giấy phép hạn chế giảm giá cho sinh viên hoặc cá nhân có thu nhập dưới $30,000 USD/năm. Liên hệ support@tailwindcss.com để biết thêm chi tiết.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 