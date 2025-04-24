# Kế hoạch dự án website tài liệu hướng dẫn

## Tổng quan
Website tài liệu hướng dẫn với sidebar bên trái để điều hướng và nội dung bên phải để hiển thị tài liệu. Thiết kế này giúp người dùng dễ dàng duyệt qua các chủ đề khác nhau trong khi vẫn có thể xem nội dung tài liệu. Website tập trung vào việc quản lý và bàn giao các tài nguyên quan trọng của công ty.

## Nội dung tài liệu
Website sẽ bao gồm các mục tài liệu hướng dẫn sau:

1. **Quản lý các tài khoản của công ty**
   - Danh sách tài khoản
   - Quy trình cấp quyền
   - Chính sách bảo mật
   - Thủ tục thay đổi mật khẩu

2. **Quản lý các tài khoản mạng xã hội**
   - Facebook
   - Instagram
   - LinkedIn
   - Twitter/X
   - TikTok
   - YouTube

3. **Quản lý quảng cáo**
   - Google Ads
   - Facebook Ads
   - Zalo Ads
   - Chiến lược và ngân sách

4. **Quản lý mã nguồn các website công ty trên Git**
   - Cấu trúc repository
   - Quy trình phát triển
   - Hướng dẫn commit và merge
   - CI/CD

5. **Quản lý App mobile SLM (Android/iOS)**
   - Tài khoản developer
   - Quy trình phát hành
   - Quản lý phiên bản
   - Hướng dẫn build

6. **Quản lý máy chủ nội bộ SLM (server, hosting)**
   - Danh sách máy chủ
   - Cấu hình và thông số
   - Quy trình backup
   - Xử lý sự cố

7. **Quản lý hệ thống NAS lưu trữ dữ liệu**
   - Cấu trúc thư mục
   - Quy trình backup
   - Phân quyền truy cập
   - Khôi phục dữ liệu

8. **Tổng hợp các thiết kế in ấn cũ**
   - Poster
   - Brochure
   - Danh thiếp
   - Tài liệu quảng cáo

9. **Quản lý tài khoản Tailwind trả phí (Social Scheduling Tool)**
   - Hướng dẫn sử dụng
   - Lịch đăng bài
   - Phân tích hiệu suất

10. **Quản lý tài khoản Google Maps của công ty**
    - Cập nhật thông tin
    - Phản hồi đánh giá
    - Thống kê và báo cáo

11. **Dữ liệu khác**
    - Flycam Phú An Viên
    - Tài liệu media khác

## Cấu trúc dự án
```
/
├── public/               # Tài nguyên tĩnh
│   ├── images/           # Hình ảnh
│   └── favicon.ico       # Favicon
├── src/                  # Mã nguồn
│   ├── components/       # Components React
│   │   ├── Layout/       # Layout chính
│   │   ├── Sidebar/      # Sidebar điều hướng
│   │   ├── Content/      # Nội dung chính
│   │   ├── Search/       # Tìm kiếm
│   │   └── UI/           # Components UI chung
│   ├── pages/            # Các trang
│   │   ├── accounts/     # Quản lý tài khoản công ty
│   │   ├── social/       # Quản lý mạng xã hội
│   │   ├── ads/          # Quản lý quảng cáo
│   │   ├── git/          # Quản lý mã nguồn
│   │   ├── mobile-app/   # Quản lý app mobile
│   │   ├── servers/      # Quản lý máy chủ
│   │   ├── nas/          # Quản lý hệ thống NAS
│   │   ├── designs/      # Thiết kế in ấn
│   │   ├── tailwind/     # Tài khoản Tailwind
│   │   ├── maps/         # Tài khoản Google Maps
│   │   └── other/        # Dữ liệu khác
│   ├── styles/           # CSS/SCSS
│   ├── data/             # Dữ liệu tài liệu
│   └── utils/            # Các tiện ích
├── package.json          # Phụ thuộc
└── README.md             # Hướng dẫn
```

## Công nghệ dự kiến
- **Frontend**: React.js, Next.js
- **Styling**: Tailwind CSS hoặc Styled Components
- **Content Management**: Markdown với MDX
- **Deployment**: Vercel hoặc Netlify
- **Authentication**: NextAuth.js hoặc Auth0 (để bảo vệ nội dung nội bộ)

## Tính năng chính
1. **Sidebar điều hướng**:
   - Menu phân cấp có thể mở rộng/thu gọn theo các mục quản lý
   - Hiển thị cấu trúc tài liệu
   - Đánh dấu mục đang xem
   - Khả năng thu gọn trên thiết bị di động

2. **Nội dung chính**:
   - Hiển thị tài liệu markdown đã được render
   - Định dạng code với syntax highlighting
   - Hỗ trợ hình ảnh, bảng và các định dạng phong phú
   - Mục lục (Table of Contents) cho mỗi trang
   - Khả năng nhúng video hướng dẫn

3. **Tìm kiếm**:
   - Tìm kiếm fulltext trong tài liệu
   - Hiển thị kết quả tìm kiếm với đoạn trích
   - Lọc kết quả theo danh mục

4. **Tính năng bổ sung**:
   - Chế độ tối/sáng
   - Phản hồi tài liệu (Có hữu ích không?)
   - Chia sẻ liên kết đến các phần cụ thể
   - In tài liệu
   - Hệ thống đăng nhập để bảo vệ thông tin nội bộ

## Lộ trình phát triển
1. **Giai đoạn 1: Thiết lập dự án và cấu trúc cơ bản**
   - Khởi tạo dự án Next.js
   - Thiết lập Tailwind CSS
   - Tạo layout cơ bản với sidebar và nội dung
   - Triển khai hệ thống xác thực

2. **Giai đoạn 2: Phát triển các components chính**
   - Xây dựng sidebar có thể thu gọn với các danh mục đã xác định
   - Phát triển trình render markdown
   - Tạo mục lục tự động
   - Tích hợp media viewer cho hình ảnh và video

3. **Giai đoạn 3: Nội dung và điều hướng**
   - Thiết lập hệ thống quản lý nội dung markdown cho từng mục tài liệu
   - Xây dựng hệ thống điều hướng giữa các danh mục
   - Tích hợp chức năng tìm kiếm
   - Nhập nội dung cho ít nhất 3 danh mục quan trọng nhất

4. **Giai đoạn 4: UI/UX và tối ưu hóa**
   - Cải thiện giao diện người dùng
   - Thêm chế độ tối/sáng
   - Tối ưu hóa hiệu suất
   - Đảm bảo tính responsive
   - Nhập nội dung cho các danh mục còn lại

5. **Giai đoạn 5: Triển khai và kiểm thử**
   - Triển khai lên nền tảng hosting
   - Kiểm thử trên nhiều trình duyệt và thiết bị
   - Thu thập phản hồi và cải thiện
   - Đào tạo người dùng

## Quản lý dự án
- **Version Control**: Git với GitHub
- **Task Management**: Trello hoặc GitHub Projects
- **CI/CD**: GitHub Actions
- **Content Creation**: Collaborative Markdown Editing

## Đo lường thành công
- Thời gian tải trang nhanh (< 2 giây)
- Điểm Lighthouse cao (> 90)
- Phản hồi tích cực từ người dùng về tính khả dụng
- Thời gian trung bình trên trang cao
- Số lượng người dùng đăng nhập và sử dụng thường xuyên
