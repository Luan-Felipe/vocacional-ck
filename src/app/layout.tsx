import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans, Noto_Sans_TC } from 'next/font/google'
import Header from './header/Header'
import Footer from './footer/Footer'


const open = Open_Sans({ subsets: ['latin'] })
const noto = Noto_Sans_TC({
  subsets: ['latin'],
  weight: '700'
})
export const metadata: Metadata = {
  title: 'Vocacional CK',
  description: 'Teste vocacional da Codigo Kid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={open.className}>
      <Header />
        {children}
      <Footer/>
      </body>
    </html>
  )
}
