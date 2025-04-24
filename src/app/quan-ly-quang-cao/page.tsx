export default function QuanLyQuangCao() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Quản lý quảng cáo</h1>
      
      <div className="prose max-w-none dark:prose-invert">
        <p>
          Trang này chứa thông tin về các tài khoản quảng cáo trên Google Ads, Facebook Ads và Zalo Ads, cùng với hướng dẫn quản lý chiến dịch.
        </p>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200 dark:bg-green-900 dark:border-green-800 mb-6">
          <p className="text-green-700 dark:text-green-300 font-medium">
            Lưu ý: Việc quản lý ngân sách quảng cáo cần được giám sát chặt chẽ và báo cáo định kỳ.
          </p>
        </div>
        
        <h2>Google Ads</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Tài khoản chính</h3>
          <p className="text-gray-600 dark:text-gray-300">Email: ads@sieulonmanh.com</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">ID tài khoản: 123-456-7890</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Người quản lý: Team Marketing</p>
          
          <h4 className="text-md font-medium text-gray-900 dark:text-white mt-4">Các chiến dịch hiện tại</h4>
          <ul className="list-disc pl-5 mt-2">
            <li>Chiến dịch tìm kiếm sản phẩm A</li>
            <li>Chiến dịch hiển thị thương hiệu</li>
            <li>Chiến dịch remarketing</li>
          </ul>
        </div>
        
        <h2>Facebook Ads</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Business Manager</h3>
          <p className="text-gray-600 dark:text-gray-300">facebook.com/business/sieulonmanh</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">ID: 987-654-3210</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Người quản lý: Team Social Media</p>
          
          <h4 className="text-md font-medium text-gray-900 dark:text-white mt-4">Các chiến dịch hiện tại</h4>
          <ul className="list-disc pl-5 mt-2">
            <li>Chiến dịch quảng cáo sản phẩm mới</li>
            <li>Chiến dịch tăng lượt theo dõi Fanpage</li>
            <li>Chiến dịch retargeting khách hàng tiềm năng</li>
          </ul>
        </div>
        
        <h2>Zalo Ads</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Tài khoản Zalo Ads</h3>
          <p className="text-gray-600 dark:text-gray-300">ads.zalo.me/sieulonmanh</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Người quản lý: Team Digital Marketing</p>
          
          <h4 className="text-md font-medium text-gray-900 dark:text-white mt-4">Các chiến dịch hiện tại</h4>
          <ul className="list-disc pl-5 mt-2">
            <li>Chiến dịch quảng cáo OA</li>
            <li>Chiến dịch quảng cáo article</li>
          </ul>
        </div>
        
        <h2>Quy trình quản lý chiến dịch</h2>
        
        <ol>
          <li>Lập kế hoạch chiến dịch (mục tiêu, đối tượng, ngân sách)</li>
          <li>Thiết kế nội dung quảng cáo</li>
          <li>Cài đặt và kích hoạt chiến dịch</li>
          <li>Theo dõi hiệu quả hàng ngày</li>
          <li>Điều chỉnh chiến lược nếu cần</li>
          <li>Báo cáo kết quả hàng tuần/tháng</li>
        </ol>
      </div>
    </div>
  );
} 