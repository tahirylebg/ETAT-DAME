import Link from 'next/link'
import Button from '@/components/ui/Button'
import { CheckCircle2 } from 'lucide-react'

export default function CandidatureSuccessPage() {
  return (
    <div className="px-6 pt-8 pb-6 text-center">
      <CheckCircle2 size={48} className="text-creme-700 mx-auto mb-4" />
      <h1 className="text-3xl mb-3">Candidature envoyée</h1>
      <p className="text-creme-700 mb-8 max-w-md mx-auto">
        Merci ! Votre candidature a bien été reçue. Nous vous recontacterons
        rapidement si votre profil correspond à nos besoins.
      </p>

      <div className="flex flex-col gap-3 max-w-xs mx-auto">
        <Link href="/">
          <Button variant="primary" className="w-full">
            Retour à l&apos;accueil
          </Button>
        </Link>
        <Link href="/menu">
          <Button variant="secondary" className="w-full">
            Voir le menu
          </Button>
        </Link>
      </div>
    </div>
  )
}