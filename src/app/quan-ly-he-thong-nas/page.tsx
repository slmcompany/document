export default function QuanLyHeThongNAS() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Quản lý hệ thống NAS</h1>
      
      <div className="prose max-w-none dark:prose-invert">
        <p>
          Trang này cung cấp thông tin chi tiết về hệ thống lưu trữ mạng (NAS) của công ty, bao gồm thông tin kỹ thuật, cấu trúc thư mục và quy trình sao lưu.
        </p>
        
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 dark:bg-indigo-900 dark:border-indigo-800 mb-6">
          <p className="text-indigo-700 dark:text-indigo-300 font-medium">
            Lưu ý: Hệ thống NAS chứa dữ liệu quan trọng của công ty. Chỉ nhân viên được phân quyền mới có thể truy cập các thư mục cụ thể.
          </p>
        </div>
        
        <h2>Thông tin hệ thống</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Thông số kỹ thuật</h3>
              <ul className="mt-2">
                <li><strong>Model:</strong> Synology DS1621+</li>
                <li><strong>CPU:</strong> AMD Ryzen V1500B</li>
                <li><strong>RAM:</strong> 32GB DDR4</li>
                <li><strong>Storage:</strong> 6x 8TB HDD (RAID 6)</li>
                <li><strong>Expansion:</strong> 2x 2TB SSD (cache)</li>
                <li><strong>Network:</strong> 2x 1GbE + 10GbE add-in card</li>
                <li><strong>OS:</strong> DSM 7.1</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Thông tin truy cập</h3>
              <ul className="mt-2">
                <li><strong>IP nội bộ:</strong> 192.168.1.200</li>
                <li><strong>Hostname:</strong> nas.slm.local</li>
                <li><strong>Web UI:</strong> https://nas.slm.local:5001</li>
                <li><strong>Giao thức:</strong> SMB, NFS, FTP, WebDAV</li>
                <li><strong>VPN Remote:</strong> Có (OpenVPN)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2>Cấu trúc thư mục</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Thư mục</th>
                  <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Mô tả</th>
                  <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Phân quyền</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 px-4">/Public</td>
                  <td className="py-2 px-4">Dữ liệu dùng chung</td>
                  <td className="py-2 px-4">Tất cả nhân viên</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <td className="py-2 px-4">/Marketing</td>
                  <td className="py-2 px-4">Tài liệu marketing, hình ảnh, video</td>
                  <td className="py-2 px-4">Phòng Marketing</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 px-4">/Design</td>
                  <td className="py-2 px-4">File thiết kế (PSD, AI, Figma)</td>
                  <td className="py-2 px-4">Phòng Thiết kế</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <td className="py-2 px-4">/Development</td>
                  <td className="py-2 px-4">Mã nguồn và tài liệu phát triển</td>
                  <td className="py-2 px-4">Phòng IT</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 px-4">/HR</td>
                  <td className="py-2 px-4">Tài liệu nhân sự</td>
                  <td className="py-2 px-4">Phòng Nhân sự</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <td className="py-2 px-4">/Backup</td>
                  <td className="py-2 px-4">Backup máy chủ và cơ sở dữ liệu</td>
                  <td className="py-2 px-4">Admin IT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <h2>Quy trình sao lưu</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Lịch sao lưu tự động</h3>
          
          <ul className="mt-2">
            <li><strong>Database:</strong> Mỗi 6 giờ</li>
            <li><strong>Website:</strong> Mỗi ngày (1h sáng)</li>
            <li><strong>Email:</strong> Mỗi ngày (2h sáng)</li>
            <li><strong>Thư mục quan trọng:</strong> Mỗi ngày (3h sáng)</li>
            <li><strong>Snapshot toàn bộ:</strong> Mỗi tuần (Chủ nhật, 4h sáng)</li>
          </ul>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-4">Sao lưu bên ngoài</h3>
          
          <ul className="mt-2">
            <li><strong>Sao lưu lên Cloud:</strong> Amazon S3 (hàng ngày)</li>
            <li><strong>Sao lưu offsite:</strong> Ổ cứng ngoài (hàng tuần, lưu trữ tại két sắt)</li>
          </ul>
        </div>
        
        <h2>Hướng dẫn sử dụng</h2>
        
        <h3>Kết nối từ Windows</h3>
        <ol className="list-decimal pl-5">
          <li>Mở File Explorer</li>
          <li>Nhập <code>\\nas.slm.local</code> hoặc <code>\\192.168.1.200</code> vào thanh địa chỉ</li>
          <li>Nhập tên người dùng và mật khẩu khi được yêu cầu</li>
        </ol>
        
        <h3 className="mt-4">Kết nối từ macOS</h3>
        <ol className="list-decimal pl-5">
          <li>Trong Finder, chọn Go &gt; Connect to Server</li>
          <li>Nhập <code>smb://nas.slm.local</code> hoặc <code>smb://192.168.1.200</code></li>
          <li>Nhập tên người dùng và mật khẩu khi được yêu cầu</li>
        </ol>
      </div>
    </div>
  );
} 