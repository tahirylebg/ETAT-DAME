'use client'

import { useEffect, useState } from 'react'
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 bg-creme-50 border-t border-creme-300 flex justify-around py-2 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_-6px_16px_-4px_rgba(104,71,4,0.15)]' : 'shadow-none'
      }`}
    >
      {links.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center text-xs gap-1 px-3 py-2 min-w-[44px] touch-manipulation transition-all duration-200 active:scale-90 focus-visible:outline-2 focus-visible:outline-creme-700 focus-visible:outline-offset-2 ${
              isActive ? 'text-creme-900 font-medium' : 'text-creme-500 hover:text-creme-700'
            }`}
          >
            <Icon
              size={20}
              strokeWidth={isActive ? 2.5 : 2}
              className="transition-transform duration-200"
            />
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
