import CandidatureForm from '@/components/forms/CandidatureForm'

export default function CandidaturePage() {
  return (
    <div className="px-6 pt-8 pb-6">
      <p className="text-xs uppercase tracking-wide text-creme-500 mb-2">
        Rejoindre l&apos;équipe
      </p>
      <h1 className="text-4xl mb-6">Candidature spontanée</h1>

      <CandidatureForm />
    </div>
  )
}