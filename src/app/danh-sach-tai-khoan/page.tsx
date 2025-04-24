export default function DanhSachTaiKhoan() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Danh sách tài khoản</h1>
      
      <div className="prose max-w-none dark:prose-invert">
        <p>
          Đây là danh sách tổng hợp các tài khoản quan trọng của công ty, bao gồm thông tin đăng nhập và mục đích sử dụng.
        </p>
        
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 dark:bg-yellow-900 dark:border-yellow-800 mb-6">
          <p className="text-yellow-700 dark:text-yellow-300 font-medium">
            Lưu ý: Thông tin tài khoản cần được bảo mật và chỉ chia sẻ với người có thẩm quyền.
          </p>
        </div>
        
        <h2>Danh sách tài khoản</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Tài khoản</th>
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Link</th>
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">User</th>
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Password</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">Shopee solomon</td>
                <td className="py-2 px-4">Pin:879291</td>
                <td className="py-2 px-4">sale@slmsolar.com</td>
                <td className="py-2 px-4">Slmglobal@879291</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <td className="py-2 px-4">Email sale solar</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">sale@slmsolar.com</td>
                <td className="py-2 px-4">SLM879291@</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">Email Sale Global</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">sale@slmglobal.vn</td>
                <td className="py-2 px-4">Slmglobal@879291</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <td className="py-2 px-4">Gmail SLM</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">slm.investmentjsc@gmail.com</td>
                <td className="py-2 px-4">Slm@879291</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">App Solis</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">sale@slmsolar.com</td>
                <td className="py-2 px-4">Solarmax123456@</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <td className="py-2 px-4">App Solarman</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">sale@slmsolar.com</td>
                <td className="py-2 px-4">Solarmax123456@</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">Deye Cloud</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4"></td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <td className="py-2 px-4">Luxpower</td>
                <td className="py-2 px-4">Email: sale@slmsolar.com. Địa chỉ: Tầng 5, tòa nhà Diamond Flower, Hoàng Đạo Thúy, Nhân Chính, Thanh Xuân, Hà Nội. Sdt: 0977 87 92 91</td>
                <td className="py-2 px-4">SoLarMax</td>
                <td className="py-2 px-4">Solarmax123456</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">Mắt bão</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">MB2768972</td>
                <td className="py-2 px-4">Slm879291@</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <td className="py-2 px-4">Router modem viettel</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">admin</td>
                <td className="py-2 px-4">U0NHFW</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">Email eliton</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">sale@eliton.vn</td>
                <td className="py-2 px-4">Eliton!@#879291</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <td className="py-2 px-4">Linked in</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">sale@slmsolar.com</td>
                <td className="py-2 px-4">SLM879291</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">Instagram</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">solar_max87</td>
                <td className="py-2 px-4">SLM879291</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <td className="py-2 px-4">iCloud eliton</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">sale@eliton.vn</td>
                <td className="py-2 px-4">Slm@879291</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">Tiktok SOLARMAX</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">0977 879 291</td>
                <td className="py-2 px-4">Slm@879291</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <td className="py-2 px-4">Zalo Solarmax</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">0977 879 291</td>
                <td className="py-2 px-4">Slm@879291</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">Tiktok ELITON</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">0988663387</td>
                <td className="py-2 px-4">Slm@879291</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <td className="py-2 px-4">Apple Developer</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">sale@slmsolar.com</td>
                <td className="py-2 px-4">Slm@879291</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">Linkedln</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">sale@slmsolar.com</td>
                <td className="py-2 px-4">Slm879291@</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <td className="py-2 px-4">Máy chủ web</td>
                <td className="py-2 px-4">https://server.slmglobal.vn/login</td>
                <td className="py-2 px-4">sale@slmsolar.com</td>
                <td className="py-2 px-4">Solarmax@879291</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">Tailwind</td>
                <td className="py-2 px-4">https://tailwindcss.com/plus/login</td>
                <td className="py-2 px-4">sale@slmsolar.com</td>
                <td className="py-2 px-4">Slm@879291</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 className="mt-8">Chính sách quản lý tài khoản</h2>
        
        <ul>
          <li>Mật khẩu nên được thay đổi định kỳ 3 tháng một lần</li>
          <li>Sử dụng xác thực hai yếu tố khi có thể</li>
          <li>Không chia sẻ thông tin đăng nhập qua kênh không bảo mật</li>
          <li>Báo cáo ngay khi phát hiện dấu hiệu bất thường</li>
        </ul>
      </div>
    </div>
  );
} 