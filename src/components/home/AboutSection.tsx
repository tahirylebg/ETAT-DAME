import Reveal from '@/components/ui/Reveal'

export default function AboutSection() {
  return (
    <section className="bg-creme-50">
      <Reveal>
        <div className="text-center pt-8 md:pt-10">
          <span className="inline-block bg-creme-900 text-creme-50 text-sm md:text-base uppercase tracking-wide font-medium px-4 py-1.5 rounded-card">
            L&apos;histoire d&apos;État Dame
          </span>
        </div>

        <div className="px-6 md:px-10 lg:px-16 py-6 md:py-8 max-w-3xl mx-auto text-center">
          <p className="text-creme-700 md:text-lg">
            À 27 ans, Naïm a ouvert État Dame au cœur de Nîmes, dans le
            sillage de sa mère et entouré des femmes de sa vie — celles à qui
            le nom du lieu rend hommage. Un endroit chaleureux et familial,
            pensé pour un brunch sans chichi le matin et des tapas du monde
            dès le soir, avec des cocktails maison imaginés par celles qui
            l&apos;ont inspiré.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
