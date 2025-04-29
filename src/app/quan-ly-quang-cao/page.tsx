export default function QuanLyQuangCao() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Quản lý quảng cáo Google Ads</h1>
      
      <div className="prose max-w-none dark:prose-invert">
        <p>
          Trang này chứa thông tin về các tài khoản quảng cáo trên Google Ads, Facebook Ads và Zalo Ads, cùng với hướng dẫn quản lý chiến dịch.
        </p>

        <div className="my-6" style={{ maxWidth: '600px' }}>
          <h2 className="text-2xl font-semibold mb-4">Video hướng dẫn nội bộ</h2>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/6RHWDPRYUjI"
              title="Hướng dẫn quản lý quảng cáo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            />
          </div>
        </div>

        <div className="my-6" style={{ maxWidth: '600px' }}>
          <h2 className="text-2xl font-semibold mb-4">Hướng dẫn từ chuyên gia</h2>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/w2pap-s46-Y"
              title="Hướng dẫn quản lý quảng cáo từ chuyên gia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            />
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200 dark:bg-green-900 dark:border-green-800 mb-6">
          <p className="text-green-700 dark:text-green-300 font-medium">
            Lưu ý: Việc quản lý ngân sách quảng cáo cần được giám sát chặt chẽ và báo cáo định kỳ.
          </p>
        </div>
      </div>
    </div>
  );
} 