import Link from 'next/link'
import SignatureMark from '@/components/ui/SignatureMark'

const legalLinks = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/politique-confidentialite', label: 'Politique de confidentialité' },
]

export default function Footer() {
  return (
    <footer className="px-6 py-8 bg-creme-50">
      <SignatureMark className="w-5 h-5 text-creme-500 mb-6" />
      <p className="font-display text-lg text-creme-900 mb-2">État Dame</p>

      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-creme-700 mb-6">
        <span>Brunch artisanal à Nîmes</span>
        {legalLinks.map(({ href, label }) => (
          <span key={href} className="flex items-center gap-2">
            <span className="text-creme-300">·</span>
            <Link href={href} className="hover:text-creme-900 transition-colors">
              {label}
            </Link>
          </span>
        ))}
      </div>

      <p className="text-xs text-creme-500">
        © {new Date().getFullYear()} État Dame. Tous droits réservés.
      </p>
    </footer>
  )
}
