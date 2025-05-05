export default function ThietKeInAnCu() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Thiết kế in ấn cũ</h1>
      
      <div className="prose max-w-none dark:prose-invert">
        <p>
          Đây là trang lưu trữ các tài liệu thiết kế và mẫu in ấn cũ của công ty. Các thiết kế này có thể được sử dụng làm tài liệu tham khảo hoặc làm cơ sở để phát triển các thiết kế mới.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 dark:bg-blue-900 dark:border-blue-800 mb-6">
          <h2 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">Kho lưu trữ thiết kế</h2>
          <p className="text-blue-700 dark:text-blue-300 mb-4">
            Truy cập Google Drive bên dưới để xem tất cả các tài liệu thiết kế cũ:
          </p>
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75M12 4C13.93 4 15.5 5.57 15.5 7.5C15.5 9.43 13.93 11 12 11C10.07 11 8.5 9.43 8.5 7.5C8.5 5.57 10.07 4 12 4M12 6C11.17 6 10.5 6.67 10.5 7.5C10.5 8.33 11.17 9 12 9C12.83 9 13.5 8.33 13.5 7.5C13.5 6.67 12.83 6 12 6Z" />
            </svg>
            <a
              href="https://drive.google.com/drive/folders/1wO2oV1kgsmXw6-aNi9DNHEhZ2xvhS3DY?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium dark:text-blue-400"
            >
              Mở Google Drive - Thiết kế in ấn cũ
            </a>
          </div>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4">Hướng dẫn sử dụng</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Tài liệu trong kho lưu trữ chỉ được sử dụng cho mục đích tham khảo nội bộ</li>
          <li>Không chia sẻ các thiết kế này với bên thứ ba khi chưa được phép</li>
          <li>Khi sử dụng lại các thiết kế cũ, cần kiểm tra các thông tin như: thông tin liên hệ, địa chỉ, giá cả, etc. để đảm bảo tính cập nhật</li>
          <li>Nếu cần chỉnh sửa thiết kế, vui lòng tạo bản sao và làm việc trên bản sao đó</li>
        </ol>
      </div>
    </div>
  );
} 