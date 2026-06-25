'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, Info, Phone } from 'lucide-react'

const links = [
  { href: '/', label: 'Accueil', icon: Home },
  { href: '/menu', label: 'Menu', icon: BookOpen },
  { href: '/infos', label: 'Infos', icon: Info },
  { href: '/contact', label: 'Contact', icon: Phone },
]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-creme-50 border-t border-creme-300 flex justify-around py-2 z-50">
      {links.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center text-xs gap-1 px-3 py-1 ${
              isActive ? 'text-creme-900 font-medium' : 'text-creme-500'
            }`}
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            {label}
          </Link>
        )
      })}
    </nav>
  )
}