export default function DuLieuKhac() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dữ liệu khác</h1>
      
      <div className="prose max-w-none dark:prose-invert">
        <p>
          Trang này chứa thông tin về các dữ liệu quan trọng khác không thuộc các danh mục chính, bao gồm dữ liệu Flycam Phú An Viên và các tài liệu khác.
        </p>
        
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 dark:bg-amber-900 dark:border-amber-800 mb-6">
          <p className="text-amber-700 dark:text-amber-300 font-medium">
            Lưu ý: Các dữ liệu này cần được bảo quản cẩn thận và lưu trữ đúng quy định.
          </p>
        </div>
        
        <h2>Dữ liệu Flycam Phú An Viên</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <p className="mb-4">
            Dự án Flycam Phú An Viên bao gồm các video và hình ảnh chụp từ trên cao khuôn viên Phú An Viên theo các thời điểm khác nhau.
          </p>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Thông tin dự án</h3>
          <ul className="mt-2 mb-4">
            <li><strong>Thời gian thực hiện:</strong> 01/2022 - 06/2023</li>
            <li><strong>Số lượng video:</strong> 12 video (4K)</li>
            <li><strong>Số lượng hình ảnh:</strong> ~250 ảnh (độ phân giải cao)</li>
            <li><strong>Dung lượng tổng:</strong> ~68GB</li>
            <li><strong>Đơn vị thực hiện:</strong> Công ty Quay phim ABC</li>
          </ul>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Vị trí lưu trữ</h3>
          <ul className="mt-2">
            <li><strong>NAS:</strong> /Media/Projects/Flycam/PhuAnVien</li>
            <li><strong>Google Drive:</strong> Shared Drive &quot;Media Assets&quot; &gt; Flycam &gt; PhuAnVien</li>
            <li><strong>Backup ngoại tuyến:</strong> Ổ cứng di động #PAV-01 (lưu tại két sắt)</li>
          </ul>
        </div>
        
        <h2>Dữ liệu bản quyền âm nhạc</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Bản quyền đã mua</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Tên gói</th>
                  <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Nhà cung cấp</th>
                  <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Thời hạn</th>
                  <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Phạm vi sử dụng</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 px-4">Premium Music</td>
                  <td className="py-2 px-4">Epidemic Sound</td>
                  <td className="py-2 px-4">Hết hạn: 15/12/2023</td>
                  <td className="py-2 px-4">Video, website, mạng xã hội</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <td className="py-2 px-4">Sound Effects Pack</td>
                  <td className="py-2 px-4">Artlist.io</td>
                  <td className="py-2 px-4">Vĩnh viễn</td>
                  <td className="py-2 px-4">Tất cả dự án</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Tệp âm nhạc và hiệu ứng âm thanh được lưu trữ tại: /Media/Audio/Licensed
          </p>
        </div>
        
        <h2>Tài liệu pháp lý</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <p className="mb-4">
            Các tài liệu pháp lý quan trọng đã được số hóa và lưu trữ, bao gồm:
          </p>
          
          <ul className="list-disc pl-5">
            <li>Giấy phép kinh doanh</li>
            <li>Giấy chứng nhận đăng ký thương hiệu</li>
            <li>Hợp đồng thuê văn phòng</li>
            <li>Hợp đồng với đối tác chiến lược</li>
            <li>Giấy chứng nhận bảo hiểm</li>
            <li>Hồ sơ thuế</li>
          </ul>
          
          <div className="mt-4 bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Vị trí lưu trữ:</strong> /Documents/Legal<br />
              <strong>Quyền truy cập:</strong> Chỉ Ban Giám đốc và Phòng Hành chính<br />
              <strong>Mật khẩu bảo vệ:</strong> Có (liên hệ Trưởng phòng Hành chính để được cấp quyền)
            </p>
          </div>
        </div>
        
        <h2>Dữ liệu nghiên cứu thị trường</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="mb-4">
            Báo cáo nghiên cứu thị trường và phân tích cạnh tranh được thực hiện định kỳ:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-md p-3">
              <h4 className="font-medium text-gray-900 dark:text-white">Báo cáo thị trường 2023</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Phân tích xu hướng, đối thủ cạnh tranh, thị phần</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Vị trí: /Documents/Market_Research/2023</p>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-md p-3">
              <h4 className="font-medium text-gray-900 dark:text-white">Khảo sát khách hàng Q2/2023</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Kết quả khảo sát, phân tích dữ liệu và báo cáo</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Vị trí: /Documents/Surveys/2023Q2</p>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-md p-3">
              <h4 className="font-medium text-gray-900 dark:text-white">Phân tích đối thủ</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Đánh giá chi tiết 5 đối thủ cạnh tranh chính</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Vị trí: /Documents/Competitor_Analysis</p>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-md p-3">
              <h4 className="font-medium text-gray-900 dark:text-white">Dự báo xu hướng 2024</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Dự báo xu hướng thị trường năm tới</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Vị trí: /Documents/Market_Research/Forecasts</p>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Các dữ liệu này được bảo mật và chỉ chia sẻ nội bộ. Không được chia sẻ với bên thứ ba khi chưa được phép.
          </p>
        </div>
      </div>
    </div>
  );
} 