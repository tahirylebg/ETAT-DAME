import Link from 'next/link'
import SignatureMark from '@/components/ui/SignatureMark'

/*
    Le composant Footer est un pied de page réutilisable pour l'application. 
    Il affiche le nom de l'entreprise, une description, des liens vers les pages légales et les informations de copyright. 
    Le composant utilise des classes CSS pour définir l'apparence du pied de page, y compris le fond, les bordures et le padding.
    Il est conçu pour être utilisé dans différentes parties de l'application avec un style cohérent.
*/

const legalLinks = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/politique-confidentialite', label: 'Politique de confidentialité' },
]

export default function Footer() {
  return (
    <footer className="px-6 py-8 bg-creme-50">
      <SignatureMark className="w-5 h-5 text-creme-500 mb-6" />
      <p className="font-display text-lg text-creme-900 mb-1">État Dame</p>
      <p className="text-sm text-creme-700 mb-6">Brunch artisanal à Nîmes</p>

      <div className="flex flex-col gap-2 text-sm text-creme-700 mb-6">
        {legalLinks.map(({ href, label }) => (
          <Link key={href} href={href} className="hover:text-creme-900">
            {label}
          </Link>
        ))}
      </div>

      <p className="text-xs text-creme-500">
        © {new Date().getFullYear()} État Dame. Tous droits réservés.
      </p>
    </footer>
  )
}