import type { Metadata } from 'next'
import { Courier_Prime } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';



export const metadata: Metadata = {
  title: 'Ayush Antiwal',
  description: 'Ayush Antiwal - Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
