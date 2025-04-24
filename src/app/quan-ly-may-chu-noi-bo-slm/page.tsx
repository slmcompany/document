export default function QuanLyMayChuNoiBoSLM() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Quản lý máy chủ nội bộ SLM</h1>
      
      <div className="prose max-w-none dark:prose-invert">
        <p>
          Trang này cung cấp thông tin chi tiết về hệ thống máy chủ nội bộ của SLM, bao gồm cấu hình, thông tin đăng nhập và quy trình bảo trì.
        </p>
        
        <div className="bg-red-50 p-4 rounded-lg border border-red-200 dark:bg-red-900 dark:border-red-800 mb-6">
          <p className="text-red-700 dark:text-red-300 font-medium">
            Lưu ý quan trọng: Thông tin trong trang này chỉ dành cho nhân viên IT được ủy quyền. Tuyệt đối không chia sẻ thông tin đăng nhập máy chủ.
          </p>
        </div>
        
        <h2>Danh sách máy chủ</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Tên máy chủ</th>
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">IP nội bộ</th>
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Mục đích</th>
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Hệ điều hành</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">SLM-WEB-01</td>
                <td className="py-2 px-4">212.85.25.175</td>
                <td className="py-2 px-4">Web server chính</td>
                <td className="py-2 px-4">Ubuntu 24.04 + Coolify</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 className="mt-8">Cấu hình cơ bản</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">SLM-WEB-01 (Hostinger KVM4)</h3>
            <ul className="mt-2">
              <li><strong>Tên máy chủ:</strong> srv791468.hstgr.cloud</li>
              <li><strong>CPU:</strong> 4 nhân vCPU</li>
              <li><strong>RAM:</strong> 16GB</li>
              <li><strong>Storage:</strong> 200GB dung lượng đĩa NVMe</li>
              <li><strong>Hệ điều hành:</strong> Ubuntu 24.04</li>
              <li><strong>Platform:</strong> Coolify (Self-hosted PaaS)</li>
              <li><strong>IPv4:</strong> 212.85.25.175</li>
              <li><strong>SSH User:</strong> root</li>
              <li><strong>Vị trí máy chủ:</strong> Indonesia - Jakarta</li>
              <li><strong>Ngày hết hạn:</strong> 2026-04-14</li>
              <li><strong>Tự động gia hạn:</strong> Bật</li>
            </ul>
            <div className="mt-3 flex flex-col space-y-2">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                <a href="https://www.hostinger.com/vn/vps" target="_blank" rel="noopener noreferrer">Hostinger VPS KVM4</a>
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                <a href="https://server.slmglobal.vn/login" target="_blank" rel="noopener noreferrer">Truy cập Coolify Dashboard</a>
              </p>
            </div>
          </div>
        </div>
        
        <h2>Quy trình bảo trì</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Lịch bảo trì định kỳ</h3>
          
          <ul className="mt-2">
            <li><strong>Hàng ngày:</strong> Kiểm tra logs, monitoring alerts</li>
            <li><strong>Hàng tuần:</strong> Kiểm tra các bản cập nhật bảo mật, xem xét logs</li>
            <li><strong>Hàng tháng:</strong> Cập nhật hệ thống (các bản vá bảo mật), kiểm tra backup</li>
            <li><strong>Hàng quý:</strong> Bảo trì phần cứng, kiểm tra hiệu suất, tối ưu hóa</li>
          </ul>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-4">Quy trình khi có sự cố</h3>
          
          <ol className="list-decimal pl-5 mt-2">
            <li>Xác định vấn đề thông qua hệ thống monitoring</li>
            <li>Thông báo cho team IT và các bên liên quan</li>
            <li>Đánh giá mức độ nghiêm trọng và tác động</li>
            <li>Thực hiện các biện pháp khắc phục</li>
            <li>Ghi lại sự cố và giải pháp vào hệ thống quản lý sự cố</li>
            <li>Phân tích nguyên nhân gốc rễ và triển khai biện pháp phòng ngừa</li>
          </ol>
        </div>
        
        <h2>Thông tin liên hệ khẩn cấp</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <ul className="mt-2">
            <li><strong>IT Manager:</strong> Đoàn Hải Minh - +84 88 9156262</li>
            <li><strong>Email team:</strong> sale@slmsolar.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 