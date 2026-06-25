import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'État Dame — Brunch artisanal à Nîmes',
  description: 'Brunch situé à Nîmes, fait maison, produits frais et de saison.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}