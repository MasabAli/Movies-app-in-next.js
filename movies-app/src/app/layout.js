import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Mulish } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body className={inter.className}>
      
      <Header/>
      {children}
      
      </body>
    </html>
  )
}
