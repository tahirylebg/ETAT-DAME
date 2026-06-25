'use client'

import { useEffect } from 'react'

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
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Une erreur est survenue</h2>
      <p>Désolé, quelque chose s&apos;est mal passé.</p>
      <button onClick={() => reset()}>Réessayer</button>
    </div>
  )
}