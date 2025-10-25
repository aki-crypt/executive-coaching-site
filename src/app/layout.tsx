import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'エグゼクティブコーチング | あなたのリーダーシップを変革する',
  description: 'リーダーと起業家のためのプロフェッショナルなエグゼクティブコーチングサービス',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <nav className="bg-brand-primary text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold">エグゼクティブコーチング</h1>
              </div>
              <div className="flex space-x-8">
                <a href="/" className="hover:text-brand-accent transition-colors">
                  ホーム
                </a>
                <a href="/coaching" className="hover:text-brand-accent transition-colors">
                  サービス
                </a>
                <a href="/booking" className="hover:text-brand-accent transition-colors">
                  予約する
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-brand-primary text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2025 エグゼクティブコーチング. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
