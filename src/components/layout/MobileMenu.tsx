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
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        className="fixed top-4 right-4 z-50 p-2.5 text-creme-900 touch-manipulation focus-visible:outline-2 focus-visible:outline-creme-700 focus-visible:outline-offset-2"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-creme-900/30 animate-fade-in-up"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed top-16 right-4 z-50 w-64 max-w-[calc(100vw-2rem)] bg-creme-50 rounded-card shadow-lg border border-creme-300 overflow-hidden animate-fade-in-up">
            <nav className="flex flex-col py-2">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-creme-900 touch-manipulation hover:bg-creme-100 transition-colors focus-visible:outline-2 focus-visible:outline-creme-700 focus-visible:outline-offset-2"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  )
}
