'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/menu', label: 'Menu' },
  { href: '/infos', label: 'Infos pratiques' },
  { href: '/contact', label: 'Contact' },
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/politique-confidentialite', label: 'Politique de confidentialité' },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        className="fixed top-4 right-4 z-50 p-2.5 text-creme-900 touch-manipulation focus-visible:outline-2 focus-visible:outline-creme-700 focus-visible:outline-offset-2"
      >
        <Menu size={24} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-creme-50">
          <div className="flex justify-between items-center px-6 pt-4 pb-4 border-b border-creme-300">
            <span className="font-display text-xl text-creme-900">État Dame</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
              className="p-2.5 -mr-2.5 text-creme-900 touch-manipulation focus-visible:outline-2 focus-visible:outline-creme-700 focus-visible:outline-offset-2"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3.5 border-b border-creme-300 text-creme-900 touch-manipulation focus-visible:outline-2 focus-visible:outline-creme-700 focus-visible:outline-offset-2"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
