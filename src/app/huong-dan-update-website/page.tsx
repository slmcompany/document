'use client';

import React from 'react';

export default function HuongDanUpdateWebsite() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Hướng dẫn cập nhật website</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. Hướng dẫn tải và cài đặt VS-Code cho máy Windows</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <p className="font-medium">Truy cập trang chủ Visual Studio Code</p>
            <p>Mở trình duyệt và truy cập vào <a href="https://code.visualstudio.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://code.visualstudio.com/</a></p>
          </li>
          <li>
            <p className="font-medium">Tải xuống VS Code</p>
            <p>Nhấn vào nút &quot;Download for Windows&quot; để tải xuống phiên bản dành cho Windows</p>
          </li>
          <li>
            <p className="font-medium">Cài đặt VS Code</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Mở file cài đặt đã tải xuống</li>
              <li>Đồng ý với điều khoản sử dụng</li>
              <li>Chọn vị trí cài đặt (nên để mặc định)</li>
              <li>Khuyến nghị chọn các tùy chọn: &quot;Thêm VS Code vào PATH&quot; và &quot;Tạo shortcut trên Desktop&quot;</li>
              <li>Nhấn &quot;Install&quot; và đợi quá trình cài đặt hoàn tất</li>
            </ul>
          </li>
          <li>
            <p className="font-medium">Cài đặt các extension cần thiết</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Astro - hỗ trợ phát triển Astro framework</li>
              <li>Tailwind CSS IntelliSense - hỗ trợ gợi ý CSS</li>
              <li>Git Extension Pack - hỗ trợ làm việc với Git</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. Tải code về máy</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <p className="font-medium">Cài đặt Git</p>
            <p>Nếu chưa có Git, hãy tải và cài đặt từ <a href="https://git-scm.com/downloads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://git-scm.com/downloads</a></p>
          </li>
          <li>
            <p className="font-medium">Mở Terminal hoặc Command Prompt</p>
            <p>Bạn có thể mở Terminal trong VS Code bằng cách nhấn <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl + `</code></p>
          </li>
          <li>
            <p className="font-medium">Clone repository</p>
            <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
              <code>git clone https://github.com/slmcompany/slmsolar.vn.git</code>
            </pre>
          </li>
          <li>
            <p className="font-medium">Di chuyển vào thư mục dự án</p>
            <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
              <code>cd slmsolar.vn</code>
            </pre>
          </li>
        </ol>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. Hướng dẫn cài đặt và build (Astro framework)</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <p className="font-medium">Cài đặt Node.js</p>
            <p>Astro yêu cầu Node.js phiên bản 16.12.0 trở lên. Tải từ <a href="https://nodejs.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://nodejs.org/</a></p>
          </li>
          <li>
            <p className="font-medium">Cài đặt các dependencies</p>
            <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
              <code>npm install</code>
            </pre>
            <p>hoặc nếu sử dụng Yarn:</p>
            <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
              <code>yarn</code>
            </pre>
          </li>
          <li>
            <p className="font-medium">Chạy môi trường phát triển</p>
            <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
              <code>npm run dev</code>
            </pre>
            <p>Mặc định, website sẽ chạy tại địa chỉ <code className="bg-gray-100 px-1 py-0.5 rounded">localhost:4321</code></p>
          </li>
          <li>
            <p className="font-medium">Thực hiện các thay đổi cần thiết</p>
            <p>Chỉnh sửa các file trong thư mục <code className="bg-gray-100 px-1 py-0.5 rounded">src</code></p>
          </li>
          <li>
            <p className="font-medium">Build project</p>
            <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
              <code>npm run build</code>
            </pre>
            <p>Kết quả build sẽ được tạo trong thư mục <code className="bg-gray-100 px-1 py-0.5 rounded">dist</code></p>
          </li>
        </ol>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">4. Hướng dẫn đẩy code lên Git (bao gồm thư mục dist)</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <p className="font-medium">Cấu hình Git (nếu chưa thực hiện)</p>
            <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
              <code>git config --global user.name &quot;Tên của bạn&quot;<br/>git config --global user.email &quot;email@example.com&quot;</code>
            </pre>
          </li>
          <li>
            <p className="font-medium">Đăng nhập vào GitHub</p>
            <p>Sử dụng một trong các phương thức sau:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <p>Đăng nhập qua trình duyệt:</p>
                <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
                  <code>git credential-manager github login</code>
                </pre>
              </li>
              <li>
                <p>Hoặc sử dụng Personal Access Token:</p>
                <p>Tạo token tại <a href="https://github.com/settings/tokens" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/settings/tokens</a> và sử dụng khi được yêu cầu nhập mật khẩu</p>
              </li>
            </ul>
          </li>
          <li>
            <p className="font-medium">Kiểm tra trạng thái Git</p>
            <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
              <code>git status</code>
            </pre>
          </li>
          <li>
            <p className="font-medium">Đảm bảo thư mục dist không bị ignore</p>
            <p>Mở file <code className="bg-gray-100 px-1 py-0.5 rounded">.gitignore</code> và đảm bảo rằng không có dòng <code className="bg-gray-100 px-1 py-0.5 rounded">dist/</code> hoặc có dấu <code className="bg-gray-100 px-1 py-0.5 rounded">#</code> đằng trước để comment nó</p>
          </li>
          <li>
            <p className="font-medium">Thêm các file đã thay đổi vào staging area</p>
            <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
              <code>git add .</code>
            </pre>
          </li>
          <li>
            <p className="font-medium">Commit các thay đổi</p>
            <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
              <code>git commit -m &quot;Mô tả các thay đổi đã thực hiện&quot;</code>
            </pre>
          </li>
          <li>
            <p className="font-medium">Push code lên GitHub</p>
            <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
              <code>git push origin main</code>
            </pre>
            <p>Thay <code className="bg-gray-100 px-1 py-0.5 rounded">main</code> bằng tên nhánh bạn đang làm việc nếu khác</p>
          </li>
        </ol>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">5. Truy cập máy chủ Rebuild</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <p className="font-medium">Đăng nhập vào Coolify</p>
            <p>Truy cập vào hệ thống quản lý Coolify của máy chủ</p>
          </li>
          <li>
            <p className="font-medium">Tìm dự án slmsolar.vn</p>
            <p>Trong dashboard của Coolify, tìm đến dự án có tên &quot;slmsolar.vn&quot;</p>
          </li>
          <li>
            <p className="font-medium">Rebuild dự án</p>
            <p>Nhấn vào nút &quot;Rebuild&quot; hoặc &quot;Deploy&quot; để triển khai lại dự án</p>
          </li>
          <li>
            <p className="font-medium">Kiểm tra logs</p>
            <p>Theo dõi logs để đảm bảo quá trình triển khai diễn ra thành công</p>
          </li>
          <li>
            <p className="font-medium">Kiểm tra website</p>
            <p>Sau khi rebuild thành công, truy cập website để đảm bảo các thay đổi đã được áp dụng đúng</p>
          </li>
        </ol>
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="font-medium text-yellow-800">Lưu ý:</p>
          <p className="text-yellow-700">Máy chủ đang chạy Coolify với dự án slmsolar.vn cấu hình như Static Nginx Pack. Đảm bảo rằng thư mục <code className="bg-gray-100 px-1 py-0.5 rounded">dist</code> đã được đẩy lên Git trước khi rebuild.</p>
        </div>
      </div>
    </div>
  );
} 