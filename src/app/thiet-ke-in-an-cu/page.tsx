export default function ThietKeInAnCu() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Thiết kế in ấn cũ</h1>
      
      <div className="prose max-w-none dark:prose-invert">
        <p>
          Trang này lưu trữ thông tin về các thiết kế in ấn cũ của công ty, bao gồm poster, brochure, tờ rơi và các tài liệu khác.
        </p>
        
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 dark:bg-yellow-900 dark:border-yellow-800 mb-6">
          <p className="text-yellow-700 dark:text-yellow-300 font-medium">
            Lưu ý: Các file gốc (PSD, AI, EPS) được lưu trữ trên hệ thống NAS trong thư mục /Design/Print.
          </p>
        </div>
        
        <h2>Danh mục thiết kế</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Poster sự kiện</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Các poster quảng cáo sự kiện, khuyến mãi và giới thiệu sản phẩm.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Vị trí lưu trữ: <code>/Design/Print/Posters</code>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Định dạng: Adobe Illustrator (.ai), Photoshop (.psd), PDF
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Số lượng: 150+ thiết kế (2018-2022)
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Brochure</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Brochure giới thiệu công ty, sản phẩm và dịch vụ.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Vị trí lưu trữ: <code>/Design/Print/Brochures</code>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Định dạng: Adobe InDesign (.indd), PDF
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Số lượng: 25 thiết kế (2019-2022)
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Tờ rơi</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Tờ rơi quảng cáo, khuyến mãi và thông tin sản phẩm.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Vị trí lưu trữ: <code>/Design/Print/Flyers</code>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Định dạng: Adobe Illustrator (.ai), PDF
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Số lượng: 80+ thiết kế (2018-2022)
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Standee</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Standee trưng bày tại sự kiện, hội chợ và cửa hàng.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Vị trí lưu trữ: <code>/Design/Print/Standees</code>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Định dạng: Adobe Illustrator (.ai), PDF
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Số lượng: 30+ thiết kế (2019-2022)
            </p>
          </div>
        </div>
        
        <h2>Nhà in đối tác</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Tên công ty</th>
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Liên hệ</th>
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Dịch vụ</th>
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">In Ấn Phú Thịnh</td>
                <td className="py-2 px-4">Nguyễn Văn X - 090x.xxx.xxx</td>
                <td className="py-2 px-4">Offset, in kỹ thuật số</td>
                <td className="py-2 px-4">Đối tác lâu năm, giá tốt</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <td className="py-2 px-4">Quảng cáo Minh Phát</td>
                <td className="py-2 px-4">Trần Văn Y - 091x.xxx.xxx</td>
                <td className="py-2 px-4">In hiflex, decal, PP</td>
                <td className="py-2 px-4">Chất lượng cao, giao hàng nhanh</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">In ấn Tân Tiến</td>
                <td className="py-2 px-4">Lê Văn Z - 092x.xxx.xxx</td>
                <td className="py-2 px-4">In catalogue, brochure</td>
                <td className="py-2 px-4">Chuyên in ấn số lượng lớn</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 className="mt-8">Qui trình in ấn</h2>
        
        <ol className="list-decimal pl-5">
          <li>Thiết kế và hoàn thiện file</li>
          <li>Xuất file PDF hoặc AI theo yêu cầu của nhà in</li>
          <li>Gửi file cho nhà in và xác nhận thông số kỹ thuật</li>
          <li>Kiểm tra và phê duyệt bản in thử (proof)</li>
          <li>Sản xuất chính thức</li>
          <li>Kiểm tra chất lượng sản phẩm</li>
          <li>Lưu trữ file thiết kế và mẫu vật lý</li>
        </ol>
        
        <h2 className="mt-8">Thông số kỹ thuật phổ biến</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <ul className="mt-2">
            <li><strong>Độ phân giải:</strong> 300 dpi cho in ấn chất lượng cao</li>
            <li><strong>Màu sắc:</strong> CMYK (không sử dụng RGB cho in ấn)</li>
            <li><strong>Bleed:</strong> 3mm cho tất cả các cạnh</li>
            <li><strong>Font chữ:</strong> Chuyển thành đường viền (outline/convert to path)</li>
            <li><strong>Định dạng file:</strong> PDF/X-1a hoặc AI (Adobe Illustrator)</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 