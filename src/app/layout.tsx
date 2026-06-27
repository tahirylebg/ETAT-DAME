import type { Metadata } from 'next'
import { Yeseva_One, Karla } from 'next/font/google'
import './globals.css'
import Footer from '@/components/layout/Footer'
import NavBar from '@/components/layout/NavBar'
import MobileMenu from '@/components/layout/MobileMenu'

const playfair = Yeseva_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-playfair',
  display: 'swap',
})
const inter = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'État Dame — Brunch artisanal à Nîmes',
  description: 'Brunch situé à Nîmes, fait maison, produits frais et de saison.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="pb-16">
        <MobileMenu />
        <div className="md:max-w-4xl lg:max-w-6xl xl:max-w-7xl md:mx-auto md:px-10 lg:px-16">
          {children}
        </div>
        <div className="md:max-w-4xl lg:max-w-6xl xl:max-w-7xl md:mx-auto md:px-10 lg:px-16">
          <Footer />
        </div>
        <NavBar />
      </body>
    </html>
  )
}