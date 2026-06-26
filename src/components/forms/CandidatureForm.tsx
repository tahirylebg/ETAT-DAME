'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'
import FileUpload from './FileUpload'
import Honeypot from './Honeypot'
import type { CandidatureFieldErrors } from '@/types'

export default function CandidatureForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<CandidatureFieldErrors>({})

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)
    setFieldErrors({})

    const formData = new FormData(e.currentTarget)

    try {
      const res = await fetch('/api/candidature', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()

      if (res.ok) {
        router.push('/contact/candidature/success')
        return
      }

      if (typeof data.error === 'string') {
        setFormError(data.error)
      } else if (data.error) {
        setFieldErrors(data.error)
      }
    } catch {
      setFormError('Erreur réseau, vérifiez votre connexion et réessayez.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Honeypot />

      <div className="grid grid-cols-2 gap-4">
        <Input
          id="firstName"
          name="firstName"
          label="Prénom *"
          required
          autoComplete="given-name"
          error={fieldErrors.firstName?.[0]}
        />
        <Input
          id="lastName"
          name="lastName"
          label="Nom *"
          required
          autoComplete="family-name"
          error={fieldErrors.lastName?.[0]}
        />
      </div>

      <Input
        id="email"
        name="email"
        type="email"
        label="Email *"
        required
        autoComplete="email"
        error={fieldErrors.email?.[0]}
      />

      <Input
        id="phone"
        name="phone"
        type="tel"
        label="Téléphone"
        autoComplete="tel"
        error={fieldErrors.phone?.[0]}
      />

      <Textarea
        id="message"
        name="message"
        label="Message *"
        required
        error={fieldErrors.message?.[0]}
      />

      <p className="text-xs uppercase tracking-wide text-creme-500 mb-1">
        CV — PDF ou Word
      </p>
      <FileUpload />

      {formError && (
        <p role="alert" aria-live="polite" className="text-sm text-red-700 mt-4">
          {formError}
        </p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma candidature'}
      </Button>
    </form>
  )
}
