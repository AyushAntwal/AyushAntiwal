import type { Metadata } from 'next'
import { Courier_Prime } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
export const text = Courier_Prime({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
});



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
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body>
        <Navbar/>
        <div className={text.className}>{children}</div>
        <Footer/>
      </body>
    </html>
  )
}
