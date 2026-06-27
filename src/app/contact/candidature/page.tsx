import CandidatureForm from '@/components/forms/CandidatureForm'
import PageHeader from '@/components/layout/PageHeader'
import FloatingFoodIcons from '@/components/home/FloatingFoodIcons'

export default function CandidaturePage() {
  return (
    <div className="relative px-6 pt-8 pb-6 overflow-hidden">
      <FloatingFoodIcons />
      <div className="relative z-10">
        <PageHeader eyebrow="Rejoindre l'équipe" title="Candidature spontanée" />

        <CandidatureForm />
      </div>
    </div>
  )
}
