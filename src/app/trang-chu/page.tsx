export default function TrangChu() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tài liệu hướng dẫn</h1>
      
      <div className="prose max-w-none dark:prose-invert prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
        <p>
          Chào mừng bạn đến với tài liệu hướng dẫn bàn giao. Website này chứa các thông tin và hướng dẫn chi tiết về việc quản lý các tài nguyên quan trọng của công ty.
        </p>
        
        <h2>Nội dung bao gồm</h2>
        
        <ul>
          <li><strong>Quản lý các tài khoản của công ty</strong> - Tất cả thông tin về tài khoản và cách quản lý</li>
          <li><strong>Quản lý các tài khoản mạng xã hội</strong> - Facebook, Instagram, và các nền tảng khác</li>
          <li><strong>Quản lý quảng cáo</strong> - Google, Facebook, Zalo</li>
          <li><strong>Quản lý mã nguồn</strong> - Git repositories và các quy trình phát triển</li>
          <li><strong>Quản lý App mobile SLM</strong> - Cả Android và iOS</li>
          <li><strong>Quản lý máy chủ nội bộ</strong> - Server và hosting</li>
          <li><strong>Quản lý hệ thống NAS</strong> - Lưu trữ dữ liệu</li>
          <li><strong>Thiết kế in ấn</strong> - Poster, brochure và các tài liệu cũ</li>
          <li><strong>Quản lý tài khoản Tailwind</strong> - Social Scheduling Tool</li>
          <li><strong>Quản lý tài khoản Google Maps</strong> - Maps và các dịch vụ vị trí</li>
          <li><strong>Dữ liệu khác</strong> - Bao gồm Flycam Phú An Viên và các tài liệu khác</li>
        </ul>
        
        <h2>Hướng dẫn sử dụng</h2>
        
        <p>
          Sử dụng menu bên trái để điều hướng đến các mục tài liệu khác nhau. Mỗi phần sẽ có hướng dẫn chi tiết và thông tin cần thiết để quản lý hiệu quả tài nguyên tương ứng.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 dark:bg-blue-900 dark:border-blue-800">
          <h3 className="text-blue-800 dark:text-blue-200 mb-2">Lưu ý quan trọng</h3>
          <p className="text-blue-700 dark:text-blue-300">
            Tài liệu này chứa thông tin nội bộ quan trọng của công ty. Vui lòng bảo mật và không chia sẻ nội dung này với người ngoài.
          </p>
        </div>
      </div>
    </div>
  );
} 