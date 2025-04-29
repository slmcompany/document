export default function QuanLyHeThongNAS() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Quản lý hệ thống NAS</h1>
      
      <div className="prose max-w-none dark:prose-invert">
        <p>
          Trang này cung cấp thông tin chi tiết về hệ thống lưu trữ mạng (NAS) của công ty, bao gồm thông tin kỹ thuật, cấu trúc thư mục và hướng dẫn cài đặt.
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
                <li><strong>Model:</strong> Synology DS423+</li>
                <li><strong>CPU:</strong> Intel&reg; Celeron&reg; J4125</li>
                <li><strong>RAM:</strong> 2 GB DDR4 SODIMM (nâng cấp tối đa 6 GB)</li>
                <li><strong>Storage:</strong> 4 x 3.5&quot; hoặc 2.5&quot; SATA SSD/HDD</li>
                <li><strong>Hot swappable drives:</strong> Có</li>
                <li><strong>Network:</strong> 2 x 1GbE RJ-45</li>
                <li><strong>External ports:</strong> 2 x USB 3.2 Gen 1</li>
                <li><strong>Form factor:</strong> Desktop</li>
                <li><strong>Kích thước (HxWxD):</strong> 166 x 199 x 223 mm</li>
                <li><strong>Trọng lượng:</strong> 2.18 kg</li>
                <li><strong>Wake on LAN/WAN:</strong> Có</li>
                <li><strong>Maximum IP cam:</strong> 40 (bao gồm 2 Free License)</li>
                <li><strong>OS:</strong> DSM 7.1</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Ổ cứng đã lắp đặt</h3>
              <ul className="mt-2">
                <li><strong>Số lượng:</strong> 2 Chiếc</li>
                <li><strong>Model:</strong> HAT3300-6T</li>
                <li><strong>Dung lượng:</strong> 6TB mỗi ổ</li>
                <li><strong>Loại:</strong> 3.5&quot; SATA Synology</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2>Thông tin truy cập NAS</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">NAS Văn phòng</h3>
              <ul className="mt-2">
                <li><strong>QuickConnect URL:</strong> <a href="https://quickconnect.to/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://quickconnect.to/</a></li>
                <li><strong>QuickConnect ID:</strong> slmjsc</li>
                <li><strong>Tài khoản:</strong> admin</li>
                <li><strong>Mật khẩu:</strong> Slm@879291</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h4 className="text-yellow-700 dark:text-yellow-300 font-medium">Lưu ý bảo mật</h4>
              <ul className="mt-2 text-yellow-700 dark:text-yellow-300">
                <li>Không chia sẻ thông tin đăng nhập với người không có quyền</li>
                <li>Thay đổi mật khẩu định kỳ</li>
                <li>Đăng xuất sau khi sử dụng xong</li>
                <li>Báo cáo ngay nếu phát hiện hoạt động đáng ngờ</li>
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
                  <td className="py-2 px-4">/SLM_DRIVE</td>
                  <td className="py-2 px-4">Lưu trữ dữ liệu chung của công ty</td>
                  <td className="py-2 px-4">Quản lý + Nhân viên được cấp quyền</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <td className="py-2 px-4">/Trường Giang</td>
                  <td className="py-2 px-4">Dữ liệu cá nhân - Trường Giang</td>
                  <td className="py-2 px-4">Trường Giang</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 px-4">/Tuỳ Phong</td>
                  <td className="py-2 px-4">Dữ liệu cá nhân - Tuỳ Phong</td>
                  <td className="py-2 px-4">Tuỳ Phong</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <h2>Hướng dẫn cài đặt và sử dụng NAS Synology</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Quy trình cài đặt NAS Synology</h3>
          
         
          
          <h4 className="font-medium text-gray-900 dark:text-white mt-4">Yêu cầu hệ thống:</h4>
          <ul className="mt-2 mb-4">
            <li>PC hoạt động ổn định với kết nối Internet</li>
            <li>Ổ cứng trống để lưu trữ dữ liệu (tùy vào nhu cầu)</li>
          </ul>
          
          <h4 className="font-medium text-gray-900 dark:text-white">Các bước cài đặt NAS Synology:</h4>
          
          <ol className="list-decimal pl-5 my-3">
            <li className="mb-2">
              <strong>Cài đặt phần mềm Synology Assistant</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Truy cập trang chủ Synology và tải xuống phần mềm Synology Assistant phù hợp với hệ điều hành</li>
                <li>Mở file tải xuống và bắt đầu quá trình cài đặt</li>
                <li>Thực hiện theo hướng dẫn để hoàn thành việc cài đặt</li>
              </ul>
            </li>
            
            <li className="mb-2">
              <strong>Kết nối NAS với PC</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Khởi động NAS Synology và kết nối với mạng LAN</li>
                <li>Mở Synology Assistant đã cài đặt ở bước trước</li>
                <li>Synology Assistant sẽ tự động tìm kiếm và hiển thị NAS Synology trên mạng</li>
              </ul>
            </li>
            
            <li className="mb-2">
              <strong>Cài đặt DSM (DiskStation Manager)</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Chọn NAS Synology trong danh sách và nhấp vào &quot;Cài đặt&quot; hoặc &quot;Thiết lập&quot;</li>
                <li>Làm theo hướng dẫn để cài đặt DSM lên NAS</li>
                <li>Quá trình cài đặt có thể mất vài phút</li>
              </ul>
            </li>
            
            <li className="mb-2">
              <strong>Tạo tài khoản quản trị</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Sau khi cài đặt DSM, bạn sẽ được yêu cầu tạo tài khoản quản trị</li>
                <li>Đặt tên cho máy chủ NAS, tên người dùng và mật khẩu cho tài khoản quản trị</li>
                <li>Đảm bảo sử dụng mật khẩu mạnh để bảo vệ NAS của bạn</li>
              </ul>
            </li>
            
            <li className="mb-2">
              <strong>Cấu hình NAS</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Đăng nhập vào DSM bằng tài khoản quản trị vừa tạo</li>
                <li>Cấu hình cài đặt cơ bản như thời gian, kết nối mạng, và quyền truy cập</li>
                <li>Thiết lập RAID (nếu cần) và định cấu hình ổ đĩa</li>
              </ul>
            </li>
            
            <li className="mb-2">
              <strong>Cài đặt các ứng dụng cần thiết</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Mở Package Center từ DSM để xem các ứng dụng có sẵn</li>
                <li>Cài đặt các ứng dụng cần thiết như File Station, Video Station, Photo Station, hoặc các ứng dụng khác tùy thuộc vào nhu cầu</li>
              </ul>
            </li>
            
            <li className="mb-2">
              <strong>Thiết lập chia sẻ và phân quyền</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Tạo các thư mục chia sẻ và thiết lập quyền truy cập cho người dùng</li>
                <li>Cấu hình các dịch vụ chia sẻ file như SMB, AFP, NFS, FTP theo nhu cầu</li>
              </ul>
            </li>
          </ol>
          
          <h4 className="font-medium text-gray-900 dark:text-white mt-4">Các tính năng chính của NAS Synology:</h4>
          
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Quản lý tệp:</strong> Truy cập, chia sẻ và đồng bộ hóa tệp của bạn từ mọi nơi</li>
            <li><strong>Sao lưu dữ liệu:</strong> Bảo vệ dữ liệu quan trọng của bạn trên nhiều thiết bị</li>
            <li><strong>Giải pháp video:</strong> Phát trực tuyến video đến mọi thiết bị và tổ chức thư viện video</li>
            <li><strong>Quản lý ảnh:</strong> Sắp xếp, duyệt và chia sẻ ảnh của bạn một cách dễ dàng</li>
            <li><strong>Giám sát an ninh:</strong> Quản lý camera IP và ghi lại cảnh quay quan trọng</li>
            <li><strong>Quản lý tải xuống:</strong> Tải xuống tệp mà không cần bật máy tính</li>
          </ul>
          
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-blue-700 dark:text-blue-300">
              <strong>Lưu ý:</strong> Để biết thêm thông tin chi tiết về cách cài đặt và sử dụng NAS Synology, vui lòng tham khảo tài liệu hướng dẫn chính thức từ Synology hoặc liên hệ với đội hỗ trợ kỹ thuật của công ty.
            </p>
          </div>
        </div>
        
        <h2 className="mt-6">Hướng dẫn tạo và phân quyền User/Group</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Giới thiệu về phân quyền trên NAS Synology</h3>
          
          <div className="prose dark:prose-invert mt-4">
            <p>
              Phân quyền trên NAS Synology là tính năng quan trọng giúp quản lý và kiểm soát quyền truy cập vào dữ liệu. 
              Có hai khái niệm chính cần nắm rõ:
            </p>
            
            <ul className="list-disc pl-5 mt-2">
              <li><strong>User (Người dùng):</strong> Tài khoản cá nhân của mỗi người dùng</li>
              <li><strong>Group (Nhóm):</strong> Tập hợp các User có cùng tính chất công việc (VD: nhóm kế toán, nhóm kỹ thuật)</li>
            </ul>
          </div>
          
          <h4 className="font-medium text-gray-900 dark:text-white mt-6">Các bước tạo User mới:</h4>
          
          <ol className="list-decimal pl-5 my-3">
            <li className="mb-2">
              <strong>Truy cập Control Panel</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Đăng nhập vào DSM với tài khoản admin</li>
                <li>Mở Control Panel từ Main Menu</li>
                <li>Chọn mục User & Group</li>
              </ul>
            </li>
            
            <li className="mb-2">
              <strong>Tạo User mới</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Nhấp vào nút Create để tạo user mới</li>
                <li>Điền thông tin cơ bản: tên người dùng, mật khẩu</li>
                <li>Chọn các group mà user sẽ tham gia</li>
                <li>Thiết lập giới hạn dung lượng (nếu cần)</li>
              </ul>
            </li>
            
            <li className="mb-2">
              <strong>Cấp quyền truy cập</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Chọn các ứng dụng mà user được phép sử dụng</li>
                <li>Thiết lập quyền truy cập vào các shared folder</li>
                <li>Xác định quyền đọc/ghi cho từng thư mục</li>
              </ul>
            </li>
          </ol>
          
          <h4 className="font-medium text-gray-900 dark:text-white mt-6">Các bước tạo và quản lý Group:</h4>
          
          <ol className="list-decimal pl-5 my-3">
            <li className="mb-2">
              <strong>Tạo Group mới</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Trong Control Panel, chọn tab Group</li>
                <li>Nhấp Create để tạo group mới</li>
                <li>Đặt tên và mô tả cho group</li>
              </ul>
            </li>
            
            <li className="mb-2">
              <strong>Thêm thành viên vào Group</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Chọn group cần quản lý</li>
                <li>Nhấp Edit Members để thêm/xóa thành viên</li>
                <li>Chọn các user cần thêm vào group</li>
              </ul>
            </li>
            
            <li className="mb-2">
              <strong>Thiết lập quyền cho Group</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Cấu hình quyền truy cập shared folder cho group</li>
                <li>Thiết lập quyền sử dụng ứng dụng cho group</li>
                <li>Áp dụng các chính sách bảo mật cho group</li>
              </ul>
            </li>
          </ol>
          
          <h4 className="font-medium text-gray-900 dark:text-white mt-6">Phân quyền trên Shared Folder:</h4>
          
          <div className="prose dark:prose-invert mt-4">
            <p>
              Khi tạo hoặc chỉnh sửa một shared folder, bạn có thể thiết lập các quyền sau:
            </p>
            
            <ul className="list-disc pl-5 mt-2">
              <li><strong>No access:</strong> Không có quyền truy cập</li>
              <li><strong>Read only:</strong> Chỉ có quyền đọc</li>
              <li><strong>Read/Write:</strong> Có quyền đọc và ghi</li>
              <li><strong>Admin:</strong> Có toàn quyền quản lý</li>
            </ul>
            
            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <p className="text-yellow-700 dark:text-yellow-300">
                <strong>Lưu ý quan trọng:</strong>
              </p>
              <ul className="list-disc pl-5 mt-2 text-yellow-700 dark:text-yellow-300">
                <li>Luôn tuân thủ nguyên tắc cấp quyền tối thiểu</li>
                <li>Thường xuyên rà soát và cập nhật quyền truy cập</li>
                <li>Xóa hoặc vô hiệu hóa tài khoản của nhân viên đã nghỉ việc</li>
                <li>Sử dụng mật khẩu mạnh và thay đổi định kỳ</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2 className="mt-6">Tài liệu tham khảo</h2>
        
        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
          <div className="prose dark:prose-invert">
            <p className="text-blue-700 dark:text-blue-300">
              <strong>Nguồn tham khảo chính thức từ MstarCorp:</strong>
            </p>
            <ul className="mt-2">
              <li>
                <a href="https://mstarcorp.vn/huong-dan-cai-dat-nas-synology/" 
                   className="text-blue-600 dark:text-blue-400 hover:underline font-medium" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Hướng dẫn cài đặt và các thao tác trên NAS Synology
                </a>
              </li>
              <li className="mt-2">
                <a href="https://mstarcorp.vn/goc-kien-thuc-nas-synology/" 
                   className="text-blue-600 dark:text-blue-400 hover:underline font-medium" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Góc kiến thức NAS Synology
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <h2 className="mt-6">Thông tin nhà cung cấp</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white m-0">Phân phối Hà Phương</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Official Account</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-md font-medium text-gray-900 dark:text-white">Thông tin liên hệ</h4>
              <ul className="mt-2">
                <li><strong>Danh mục:</strong> Doanh nghiệp</li>
                <li><strong>Địa chỉ:</strong> Số 39 Đường 3.9 Khu đô thị Gamuda Gardens, Phường Yên Sở, Quận Hoàng Mai, TP Hà Nội</li>
                <li><strong>Số điện thoại:</strong> 0964232066</li>
                <li><strong>Thời gian làm việc:</strong> 08:00 - 17:30</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-900 dark:text-white">Dịch vụ cung cấp</h4>
              <ul className="mt-2">
                <li>Bán thiết bị lưu trữ Synology</li>
                <li>Tư vấn giải pháp lưu trữ doanh nghiệp</li>
                <li>Bảo hành, bảo trì thiết bị</li>
                <li>Hỗ trợ kỹ thuật 24/7</li>
                <li>Cung cấp phụ kiện chính hãng</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2 className="mt-6">Thông tin hỗ trợ</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Người hỗ trợ</h3>
          
          <ul className="mt-2">
            <li><strong>Tên:</strong> Vũ Tiến Dũng</li>
            <li><strong>Số điện thoại:</strong> 0877565227</li>
          </ul>
        </div>
        
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-6">
          <p>Tài liệu tham khảo: 
            <a href="https://mstarcorp.vn/huong-dan-cai-dat-nas-synology/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Hướng dẫn cài đặt và các thao tác trên NAS Synology</a> - MstarCorp
          </p>
          <p className="mt-2">
            <a href="https://mstarcorp.vn/goc-kien-thuc-nas-synology/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Góc kiến thức NAS Synology</a> - MstarCorp
          </p>
        </div>
      </div>
    </div>
  );
} 