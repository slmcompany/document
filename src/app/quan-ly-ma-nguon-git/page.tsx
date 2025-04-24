export default function QuanLyMaNguonGit() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Quản lý mã nguồn Git</h1>
      
      <div className="prose max-w-none dark:prose-invert">
        <p>
          Trang này cung cấp thông tin về các repository Git của công ty, quy trình phát triển và hướng dẫn quản lý mã nguồn.
        </p>
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 dark:bg-purple-900 dark:border-purple-800 mb-6">
          <p className="text-purple-700 dark:text-purple-300 font-medium">
            Lưu ý: Mã nguồn là tài sản quan trọng của công ty, cần được bảo vệ và quản lý cẩn thận.
          </p>
        </div>
        
        <h2>Danh sách Repository</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Tên dự án</th>
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">URL Repository</th>
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Công nghệ</th>
                <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Cập nhật</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">Mobile App</td>
                <td className="py-2 px-4">
                  <a href="https://github.com/slmcompany/mobileappreact" className="text-blue-600 hover:underline">
                    github.com/slmcompany/mobileappreact
                  </a>
                </td>
                <td className="py-2 px-4">TypeScript</td>
                <td className="py-2 px-4">22/04/2025</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <td className="py-2 px-4">Admin SLM</td>
                <td className="py-2 px-4">
                  <a href="https://github.com/slmcompany/adminslm" className="text-blue-600 hover:underline">
                    github.com/slmcompany/adminslm
                  </a>
                  {" | "}
                  <a href="https://admin.slmglobal.vn" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    admin.slmglobal.vn
                  </a>
                </td>
                <td className="py-2 px-4">Vue</td>
                <td className="py-2 px-4">17/04/2025</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">Web App</td>
                <td className="py-2 px-4">
                  <a href="https://github.com/slmcompany/webapp" className="text-blue-600 hover:underline">
                    github.com/slmcompany/webapp
                  </a>
                  {" | "}
                  <a href="https://app.slmsolar.com" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    app.slmsolar.com
                  </a>
                </td>
                <td className="py-2 px-4">TypeScript</td>
                <td className="py-2 px-4">31/03/2025</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <td className="py-2 px-4">Solomon</td>
                <td className="py-2 px-4">
                  <a href="https://github.com/slmcompany/solomon2025" className="text-blue-600 hover:underline">
                    github.com/slmcompany/solomon2025
                  </a>
                  {" | "}
                  <a href="https://solomonindustries.us/" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    solomonindustries.us
                  </a>
                </td>
                <td className="py-2 px-4">Astro</td>
                <td className="py-2 px-4">29/03/2025</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">SLM API</td>
                <td className="py-2 px-4">
                  <a href="https://github.com/slmcompany/slmbackend" className="text-blue-600 hover:underline">
                    github.com/slmcompany/slmbackend
                  </a>
                  {" | "}
                  <a href="https://api.slmglobal.vn" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    api.slmglobal.vn
                  </a>
                </td>
                <td className="py-2 px-4">Python</td>
                <td className="py-2 px-4">24/03/2025</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <td className="py-2 px-4">SLM Solar</td>
                <td className="py-2 px-4">
                  <a href="https://github.com/slmcompany/slmsolar.com" className="text-blue-600 hover:underline">
                    github.com/slmcompany/slmsolar.com
                  </a>
                  {" | "}
                  <a href="https://slmsolar.com" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    slmsolar.com
                  </a>
                </td>
                <td className="py-2 px-4">Astro</td>
                <td className="py-2 px-4">20/03/2025</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">Sile Media</td>
                <td className="py-2 px-4">
                  <a href="https://github.com/slmcompany/silemedia.vn" className="text-blue-600 hover:underline">
                    github.com/slmcompany/silemedia.vn
                  </a>
                  {" | "}
                  <a href="https://silemedia.com" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    silemedia.com
                  </a>
                </td>
                <td className="py-2 px-4">Astro</td>
                <td className="py-2 px-4">12/03/2025</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <td className="py-2 px-4">Steel Man</td>
                <td className="py-2 px-4">
                  <a href="https://github.com/slmcompany/steelman" className="text-blue-600 hover:underline">
                    github.com/slmcompany/steelman
                  </a>
                  {" | "}
                  <a href="https://steelman.vn" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    steelman.vn
                  </a>
                </td>
                <td className="py-2 px-4">Astro</td>
                <td className="py-2 px-4">12/03/2025</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-4">SLM Global</td>
                <td className="py-2 px-4">
                  <a href="https://github.com/slmcompany/slmglobal.vn" className="text-blue-600 hover:underline">
                    github.com/slmcompany/slmglobal.vn
                  </a>
                  {" | "}
                  <a href="https://slmglobal.vn" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    slmglobal.vn
                  </a>
                </td>
                <td className="py-2 px-4">Astro</td>
                <td className="py-2 px-4">12/03/2025</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <td className="py-2 px-4">Eliton</td>
                <td className="py-2 px-4">
                  <a href="https://github.com/slmcompany/eliton.vn" className="text-blue-600 hover:underline">
                    github.com/slmcompany/eliton.vn
                  </a>
                  {" | "}
                  <a href="https://eliton.vn" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    eliton.vn
                  </a>
                </td>
                <td className="py-2 px-4">Astro</td>
                <td className="py-2 px-4">12/03/2025</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 className="mt-8">Quy trình Git Flow</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Các nhánh chính</h3>
          
          <ul className="list-disc pl-5 mt-2">
            <li><strong>main/master</strong>: Nhánh sản phẩm chính thức, luôn ở trạng thái có thể release</li>
            <li><strong>develop</strong>: Nhánh phát triển, chứa các tính năng đã hoàn thành chờ release</li>
            <li><strong>feature/*</strong>: Các nhánh phát triển tính năng mới</li>
            <li><strong>hotfix/*</strong>: Các nhánh sửa lỗi khẩn cấp</li>
            <li><strong>release/*</strong>: Nhánh chuẩn bị cho phiên bản mới</li>
          </ul>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-4">Quy trình làm việc</h3>
          
          <ol className="list-decimal pl-5 mt-2">
            <li>Tạo nhánh feature từ develop</li>
            <li>Phát triển tính năng trên nhánh feature</li>
            <li>Tạo Pull Request vào nhánh develop</li>
            <li>Code review và merge vào develop</li>
            <li>Khi sẵn sàng release, tạo nhánh release từ develop</li>
            <li>Test và fix bug trên nhánh release</li>
            <li>Merge nhánh release vào main và develop</li>
          </ol>
        </div>
        
        <h2>Hướng dẫn truy cập</h2>
        
        <p>
          Để được cấp quyền truy cập vào repository, vui lòng liên hệ với quản trị viên Git hoặc trưởng nhóm IT.
        </p>
        
        <p>
          Mọi thành viên cần cài đặt SSH key và 2FA để đảm bảo an toàn khi truy cập và làm việc với repository.
        </p>
      </div>
    </div>
  );
} 