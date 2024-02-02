import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Providers from '@/lib/provider';
import Notifications from '@/components/Notifications';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ZARA India | New Collection Online',
  description: 'ZARA India | New Collection Online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          (inter.className, `overflow-x-hidden tracking-wide box-border`)
        }
        suppressHydrationWarning={true}
      >
        <Providers>
          <div className="relative ">
            <Header />
            {children}
            <Notifications />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
