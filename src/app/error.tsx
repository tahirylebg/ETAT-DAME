'use client'

import { useEffect } from 'react'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="px-6 pt-16 pb-6 text-center">
      <Reveal>
        <p className="text-xs uppercase tracking-wide text-creme-500 mb-2">
          Erreur
        </p>
        <h1 className="text-3xl mb-3">Une erreur est survenue</h1>
        <p className="text-creme-700 mb-8 max-w-md mx-auto">
          Désolé, quelque chose s&apos;est mal passé. Vous pouvez réessayer.
        </p>
        <div className="max-w-xs mx-auto">
          <Button variant="primary" onClick={() => reset()} className="w-full">
            Réessayer
          </Button>
        </div>
      </Reveal>
    </div>
  )
}
