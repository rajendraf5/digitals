import type { Metadata } from 'next';
import { DM_Sans  } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import BootstrapJs from '@/components/BootstrapJs';
import BackToTop from '@/components/BackToTop';
export const metadata: Metadata = {
  title: 'Digital Legal Services Pvt Ltd',
  description: '',
}
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans', // optional (for CSS variables)
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSans.className}>
      <head>
      </head>
      <body>
        <BootstrapJs />
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="flex-grow-1">
            {children}
          </div>  
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  )
}