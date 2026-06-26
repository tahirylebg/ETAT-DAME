import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="px-6 pt-16 pb-6 text-center">
      <p className="text-xs uppercase tracking-wide text-creme-500 mb-2">
        404
      </p>
      <h1 className="text-3xl mb-3">Page introuvable</h1>
      <p className="text-creme-700 mb-8 max-w-md mx-auto">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <div className="max-w-xs mx-auto">
        <Link href="/">
          <Button variant="primary" className="w-full">
            Retour à l&apos;accueil
          </Button>
        </Link>
      </div>
    </div>
  )
}