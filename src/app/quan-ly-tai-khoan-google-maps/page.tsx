export default function QuanLyTaiKhoanGoogleMaps() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Quản lý tài khoản Google Maps</h1>
      
      <div className="prose max-w-none dark:prose-invert">
        <p>
          Trang này chứa thông tin về tài khoản Google Maps Business của công ty, bao gồm địa điểm đã đăng ký, thông tin đăng nhập và hướng dẫn quản lý.
        </p>
        
        <div className="bg-lime-50 p-4 rounded-lg border border-lime-200 dark:bg-lime-900 dark:border-lime-800 mb-6">
          <p className="text-lime-700 dark:text-lime-300 font-medium">
            Lưu ý: Tài khoản Google Maps là tài sản quan trọng giúp khách hàng tìm kiếm doanh nghiệp trên Google. Đảm bảo thông tin luôn được cập nhật.
          </p>
        </div>
        
        <h2>Thông tin tài khoản</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Tên công ty:</p>
              <p className="text-gray-900 dark:text-white">Công ty cổ phần đầu tư SLM</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Loại hình:</p>
              <p className="text-gray-900 dark:text-white">Công ty năng lượng mặt trời ở Việt Nam</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Đánh giá:</p>
              <p className="text-gray-900 dark:text-white">5.0 ⭐ (11 đánh giá trên Google)</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Trạng thái:</p>
              <p className="text-green-600 dark:text-green-400">Đang mở cửa</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Số điện thoại:</p>
              <p className="text-gray-900 dark:text-white">0969 663 387</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Địa điểm:</p>
              <p className="text-gray-900 dark:text-white">Diamond Flower Tower</p>
            </div>
          </div>
        </div>
        
        <h2>Địa điểm đã đăng ký</h2>
        
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Văn phòng Hà Nội</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              P. Hoàng Đạo Thúy, Trung Hòa Nhân Chính, Thanh Xuân, Hà Nội
            </p>
            <div className="flex items-center mt-2">
              <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-gray-600 dark:text-gray-300 text-sm">5.0/5.0 (11 đánh giá)</span>
            </div>
            <div className="mt-4">
              <a href="https://g.co/kgs/SkPco3e" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm inline-flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Xem trên Google Maps
              </a>
            </div>
          </div>
        </div>
        
        <h2>Hướng dẫn quản lý</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Truy cập tài khoản Google Maps</h3>
          
          <ol className="list-decimal pl-5 mt-2">
            <li>Truy cập liên kết chính thức: <a href="https://g.co/kgs/SkPco3e" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://g.co/kgs/SkPco3e</a></li>
            <li>Đăng nhập bằng email: sale@slmsolar.com</li>
            <li>Hoặc đăng nhập vào <a href="https://business.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Business Profile</a></li>
          </ol>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-4">Cập nhật thông tin cơ bản</h3>
          
          <ol className="list-decimal pl-5 mt-2">
            <li>Đăng nhập vào Google Business Profile thông qua liên kết trang chính</li>
            <li>Chọn địa điểm cần cập nhật từ danh sách</li>
            <li>Cập nhật thông tin như giờ làm việc, số điện thoại, địa chỉ web</li>
            <li>Thêm hình ảnh mới (nên cập nhật ít nhất 3 tháng/lần)</li>
            <li>Kiểm tra và phản hồi đánh giá của khách hàng trong vòng 24h</li>
          </ol>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-4">Đăng bài và tin tức</h3>
          
          <ol className="list-decimal pl-5 mt-2">
            <li>Truy cập tab &quot;Bài đăng&quot; trong Google Business Profile</li>
            <li>Chọn loại bài đăng (Tin tức, Sự kiện, Ưu đãi, v.v.)</li>
            <li>Thêm nội dung và hình ảnh/video có chất lượng cao</li>
            <li>Thêm nút kêu gọi hành động rõ ràng</li>
            <li>Đặt lịch hoặc đăng ngay với tần suất 1-2 bài/tuần</li>
          </ol>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-4">Quản lý hình ảnh và video</h3>
          
          <ol className="list-decimal pl-5 mt-2">
            <li>Tải lên hình ảnh có độ phân giải cao (tối thiểu 720px)</li>
            <li>Đặt tên và mô tả đầy đủ cho mỗi hình ảnh</li>
            <li>Phân loại hình ảnh (sản phẩm, không gian, đội ngũ, v.v.)</li>
            <li>Tải lên video ngắn (30-90 giây) giới thiệu không gian làm việc</li>
            <li>Cập nhật ảnh bìa định kỳ (2 tháng/lần)</li>
          </ol>
        </div>
        
        <h2>Thống kê và phân tích</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="mb-4">
            Thống kê Google Maps Business cung cấp thông tin quan trọng về cách khách hàng tìm và tương tác với doanh nghiệp của bạn trên Google.
          </p>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Các chỉ số quan trọng cần theo dõi</h3>
          
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Lượt tìm kiếm:</strong> Số lần doanh nghiệp xuất hiện trong kết quả tìm kiếm</li>
            <li><strong>Lượt xem:</strong> Số lần hồ sơ của bạn được xem trên Google Maps và Tìm kiếm</li>
            <li><strong>Hoạt động:</strong> Các hành động của khách hàng (gọi điện, truy cập website, yêu cầu chỉ đường)</li>
            <li><strong>Đánh giá:</strong> Số lượng và chất lượng đánh giá của khách hàng</li>
            <li><strong>Hình ảnh:</strong> Số lượt xem hình ảnh của doanh nghiệp</li>
          </ul>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-4">Báo cáo định kỳ</h3>
          
          <ul className="list-disc pl-5 mt-2">
            <li>Xuất báo cáo thống kê hàng tháng từ trang insights</li>
            <li>So sánh dữ liệu với tháng trước và cùng kỳ năm trước</li>
            <li>Theo dõi xu hướng từ khóa tìm kiếm phổ biến</li>
            <li>Phân tích đối thủ cạnh tranh trong khu vực</li>
            <li>Lập kế hoạch tối ưu hóa dựa trên dữ liệu phân tích</li>
          </ul>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Truy cập vào liên kết <a href="https://g.co/kgs/SkPco3e" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://g.co/kgs/SkPco3e</a> và chọn tab &quot;Thống kê&quot; để xem các báo cáo chi tiết.
          </p>
        </div>
      </div>
    </div>
  );
} 