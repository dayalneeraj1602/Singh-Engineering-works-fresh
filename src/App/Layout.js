import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Singh Engineering Works - Industrial Solutions',
  description: 'Professional engineering and manufacturing services for industrial solutions',
  keywords: 'engineering, manufacturing, industrial, metalwork, fabrication',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}