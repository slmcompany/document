export default function AccountsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Quản lý các tài khoản của công ty</h1>
      
      <div className="prose max-w-none dark:prose-invert">
        <p>
          Phần này bao gồm thông tin về các tài khoản chính của công ty và cách quản lý chúng.
        </p>
        
        <h2>Danh sách tài khoản</h2>
        <p>Danh sách các tài khoản quan trọng của công ty và thông tin đăng nhập sẽ được liệt kê ở đây.</p>
        
        <div className="not-prose">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Tên tài khoản
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Mục đích
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Người quản lý
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    example@company.com
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    Email chính thức
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    Admin IT
                  </td>
                </tr>
                {/* Thêm các hàng khác ở đây */}
              </tbody>
            </table>
          </div>
        </div>
        
        <h2>Quy trình cấp quyền</h2>
        <p>Quy trình cấp quyền cho nhân viên mới hoặc điều chỉnh quyền truy cập.</p>
        <ol>
          <li>Yêu cầu cấp quyền phải được gửi từ quản lý trực tiếp</li>
          <li>Xác nhận danh tính và vai trò của nhân viên</li>
          <li>Cấp quyền truy cập dựa trên vai trò</li>
          <li>Theo dõi và ghi lại các quyền đã cấp</li>
        </ol>
        
        <h2>Chính sách bảo mật</h2>
        <p>Các chính sách bảo mật áp dụng cho tất cả tài khoản công ty.</p>
        <ul>
          <li>Mật khẩu phải đáp ứng tiêu chuẩn độ phức tạp</li>
          <li>Xác thực hai yếu tố bắt buộc cho các tài khoản quan trọng</li>
          <li>Không được chia sẻ thông tin đăng nhập</li>
          <li>Đăng xuất khi không sử dụng</li>
        </ul>
        
        <h2>Thủ tục thay đổi mật khẩu</h2>
        <p>Quy trình thay đổi mật khẩu định kỳ hoặc khi cần thiết.</p>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 dark:bg-yellow-900/30 dark:border-yellow-800 my-4">
          <h3 className="text-yellow-800 dark:text-yellow-200 mb-2">Lưu ý</h3>
          <p className="text-yellow-700 dark:text-yellow-300">
            Mật khẩu phải được thay đổi ít nhất 3 tháng một lần và không được sử dụng lại mật khẩu đã dùng trước đó.
          </p>
        </div>
      </div>
    </div>
  );
} 