export default function QuanLyAppMobileSLM() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Quản lý App Mobile SLM</h1>
      
      <div className="prose max-w-none dark:prose-invert">
        <p>
          Trang này chứa thông tin chi tiết về ứng dụng di động của SLM, bao gồm tài khoản phát triển, quy trình xuất bản và cập nhật.
        </p>
        
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 dark:bg-orange-900 dark:border-orange-800 mb-6">
          <p className="text-orange-700 dark:text-orange-300 font-medium">
            Lưu ý: Các thông tin đăng nhập tài khoản App Store và Google Play Store là tài sản quan trọng, cần được bảo mật.
          </p>
        </div>

        <h2>Tổng quan dự án</h2>
        <p>
          Ứng dụng SLM là nền tảng được phát triển bằng công nghệ Expo và React Native, sử dụng TypeScript để đảm bảo tính an toàn cho mã nguồn. 
          Ứng dụng tập trung vào việc quản lý sản phẩm, theo dõi hoa hồng, và tương tác với người dùng.
        </p>

        <h3>Tính năng chính</h3>
        <ul className="list-disc pl-5">
          <li><strong>Quản lý tài khoản</strong>: Đăng nhập, cập nhật mật khẩu và quản lý thông tin cá nhân</li>
          <li><strong>Danh mục sản phẩm</strong>: Duyệt và tìm kiếm sản phẩm theo danh mục và thương hiệu</li>
          <li><strong>Thống kê hoa hồng</strong>: Theo dõi và phân tích hoa hồng</li>
          <li><strong>Thư viện ảnh</strong>: Quản lý và xem thư viện ảnh sản phẩm</li>
          <li><strong>Báo giá</strong>: Xem chi tiết báo giá và quản lý liên hệ</li>
        </ul>

        <h3>Công nghệ sử dụng</h3>
        <ul className="list-disc pl-5">
          <li><strong>Expo</strong>: Framework phát triển ứng dụng React Native</li>
          <li><strong>Expo Router</strong>: Hệ thống định tuyến file-based</li>
          <li><strong>React Native</strong>: Framework phát triển ứng dụng di động</li>
          <li><strong>TypeScript</strong>: Ngôn ngữ lập trình an toàn kiểu dữ liệu</li>
          <li><strong>AsyncStorage</strong>: Lưu trữ dữ liệu cục bộ</li>
          <li><strong>Reanimated</strong>: Animations mượt mà</li>
          <li><strong>Ant Design React Native</strong>: Thư viện UI components</li>
        </ul>
        
        <h2>Ứng dụng Android</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Google Play Console</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email đăng nhập:</p>
              <p className="text-gray-900 dark:text-white">android@sieulonmanh.com</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Phiên bản hiện tại:</p>
              <p className="text-gray-900 dark:text-white">1.2.5 (ngày phát hành: 15/06/2023)</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Bundle ID:</p>
              <p className="text-gray-900 dark:text-white">com.sieulonmanh.app</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Người phụ trách:</p>
              <p className="text-gray-900 dark:text-white">Trưởng nhóm Mobile</p>
            </div>
          </div>
          
          <h4 className="text-md font-medium text-gray-900 dark:text-white mt-4">Quy trình phát hành</h4>
          <ol className="list-decimal pl-5 mt-2">
            <li>Hoàn thành phát triển và kiểm thử nội bộ</li>
            <li>Tạo bản build release với keystore chính thức</li>
            <li>Tải APK/Bundle lên Play Console</li>
            <li>Kiểm tra thông tin và mô tả</li>
            <li>Phát hành bản beta cho tester</li>
            <li>Sau khi kiểm tra OK, phát hành chính thức</li>
          </ol>

          <h4 className="text-md font-medium text-gray-900 dark:text-white mt-4">Build cho Android với EAS Build</h4>
          <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded text-sm overflow-x-auto">
            <code>
{`# Build cho thiết bị phát triển
eas build --platform android --profile development

# Build phiên bản Preview (phân phối nội bộ)
eas build --platform android --profile preview

# Build phiên bản Production (phát hành chính thức)
eas build --platform android --profile production`}
            </code>
          </pre>

          <h4 className="text-md font-medium text-gray-900 dark:text-white mt-4">Build file APK cho Android</h4>
          <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded text-sm overflow-x-auto">
            <code>
{`# Build APK phiên bản Preview
eas build --platform android --profile preview-apk

# Build APK phiên bản Production
eas build --platform android --profile production-apk`}
            </code>
          </pre>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            <strong>Lưu ý:</strong> File APK có thể cài đặt trực tiếp trên thiết bị Android mà không cần thông qua Google Play Store. Phù hợp cho việc phân phối trực tiếp hoặc kiểm thử ứng dụng.
          </p>
        </div>
        
        <h2>Ứng dụng iOS</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Apple Developer & App Store Connect</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Apple ID:</p>
              <p className="text-gray-900 dark:text-white">ios@sieulonmanh.com</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Phiên bản hiện tại:</p>
              <p className="text-gray-900 dark:text-white">1.2.3 (ngày phát hành: 10/06/2023)</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Bundle ID:</p>
              <p className="text-gray-900 dark:text-white">com.sieulonmanh.app</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Người phụ trách:</p>
              <p className="text-gray-900 dark:text-white">Trưởng nhóm Mobile</p>
            </div>
          </div>
          
          <h4 className="text-md font-medium text-gray-900 dark:text-white mt-4">Quy trình phát hành</h4>
          <ol className="list-decimal pl-5 mt-2">
            <li>Hoàn thành phát triển và kiểm thử nội bộ</li>
            <li>Tạo bản build với certificate chính thức</li>
            <li>Tải lên TestFlight thông qua Xcode hoặc App Store Connect</li>
            <li>Kiểm tra bởi tester nội bộ</li>
            <li>Gửi phê duyệt App Store</li>
            <li>Sau khi được Apple phê duyệt, phát hành chính thức</li>
          </ol>

          <h4 className="text-md font-medium text-gray-900 dark:text-white mt-4">Build cho iOS với EAS Build</h4>
          <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded text-sm overflow-x-auto">
            <code>
{`# Chuẩn bị
npm install -g eas-cli
eas login

# Build cho Simulator (phát triển)
eas build --platform ios --profile development

# Build phiên bản Preview (phân phối nội bộ)
eas build --platform ios --profile preview

# Build phiên bản Production (phát hành chính thức)
eas build --platform ios --profile production`}
            </code>
          </pre>

          <h4 className="text-md font-medium text-gray-900 dark:text-white mt-4">Quản lý và theo dõi builds</h4>
          <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded text-sm overflow-x-auto">
            <code>
{`# Xem danh sách các builds đã thực hiện
eas build:list

# Kiểm tra trạng thái của một build cụ thể
eas build:show <build-id>

# Gửi ứng dụng lên App Store
eas submit --platform ios --profile production`}
            </code>
          </pre>
        </div>

        <h2>Cấu trúc dự án</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Cấu trúc thư mục chính</h3>
          
          <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded text-sm overflow-x-auto mt-2">
            <code>
{`slmapp/
├── app/                       # Chứa router và các trang (Expo Router)
│   ├── (auth)/                # Nhóm các trang liên quan đến xác thực
│   ├── (profile)/             # Nhóm các trang liên quan đến hồ sơ
│   ├── (products)/            # Nhóm các trang liên quan đến sản phẩm
│   ├── (brands)/              # Nhóm các trang liên quan đến thương hiệu
│   ├── (quotes)/              # Nhóm các trang liên quan đến báo giá
│   ├── (contacts)/            # Nhóm các trang liên quan đến liên hệ
│   ├── (stats)/               # Nhóm các trang liên quan đến thống kê
│   ├── (tabs)/                # Navigation tabs
│   ├── _layout.tsx            # Layout chính
│   └── +not-found.tsx         # Trang 404
├── src/                       # Mã nguồn chính của ứng dụng
│   ├── components/            # Các thành phần UI có thể tái sử dụng
│   │   ├── auth/              # Các thành phần xác thực
│   │   ├── layout/            # Các thành phần bố cục
│   │   ├── products/          # Các thành phần sản phẩm
│   │   ├── profile/           # Các thành phần hồ sơ
│   │   ├── ui/                # Các thành phần UI cơ bản
│   │   │   ├── buttons/
│   │   │   ├── cards/
│   │   │   ├── forms/
│   │   │   ├── modals/
│   │   │   └── typography/
│   │   └── shared/            # Các thành phần dùng chung
│   ├── hooks/                 # Các custom hooks
│   ├── context/               # Các context React
│   ├── services/              # Các dịch vụ API, xác thực và tích hợp bên thứ ba
│   ├── utils/                 # Các tiện ích
│   │   ├── helpers/           # Các hàm helper
│   │   ├── formatters/        # Các hàm định dạng
│   │   └── validation/        # Các hàm xác thực
│   ├── constants/             # Các hằng số và cấu hình
│   ├── models/                # Các kiểu TypeScript và interfaces
│   └── styles/                # Các styles, themes
├── assets/                    # Tài nguyên tĩnh
│   ├── images/
│   ├── fonts/
│   └── icons/
└── các file cấu hình`}
            </code>
          </pre>

          <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-4">Quy ước đặt tên</h3>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Thành phần</strong>: PascalCase (ví dụ: <code>ProductCard.tsx</code>)</li>
            <li><strong>Hook</strong>: camelCase với tiền tố &quot;use&quot; (ví dụ: <code>useAuth.ts</code>)</li>
            <li><strong>Context</strong>: PascalCase với hậu tố &quot;Context&quot; (ví dụ: <code>AuthContext.tsx</code>)</li>
            <li><strong>Utilities</strong>: camelCase (ví dụ: <code>formatDate.ts</code>)</li>
          </ul>
        </div>

        <h2>Build và Triển khai cho Web</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Build cho Web</h3>
          
          <p className="mt-2">Để export ứng dụng sang web, thực hiện các bước sau:</p>
          
          <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded text-sm overflow-x-auto mt-2">
            <code>
{`# Build ứng dụng web
npx expo export --platform web

# Chạy thử ứng dụng web đã build
npx serve dist`}
            </code>
          </pre>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Sau khi build thành công, thư mục <code>dist</code> sẽ chứa tất cả các file cần thiết để triển khai ứng dụng web. Bạn có thể triển khai thư mục này lên các dịch vụ hosting như Vercel, Netlify, Firebase Hosting, hoặc GitHub Pages.
          </p>
        </div>
        
        <h2>Tài nguyên phát triển</h2>
        
        <ul className="list-disc pl-5">
          <li>Mã nguồn: <code>github.com/slmcompany/mobileappreact</code></li>
          <li>Tài sản đồ họa: <code>nas/design/mobile-app</code></li>
          <li>Tài liệu API: <code>docs.api.sieulonmanh.com</code></li>
          <li>Firebase Project: <code>console.firebase.google.com/project/slm-mobile</code></li>
        </ul>

        <h2>Các lệnh hữu ích</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded text-sm overflow-x-auto">
            <code>
{`# Khởi chạy ứng dụng
npx expo start

# Khởi chạy trên Android
npm run android

# Khởi chạy trên iOS
npm run ios

# Khởi chạy trên web
npm run web

# Chạy tests
npm run test

# Kiểm tra lỗi linting
npm run lint

# Cấu trúc lại dự án
npm run setup-structure

# Tạo lại symbolic links
npm run create-symlinks

# Cập nhật các import paths
npm run update-imports`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
} 