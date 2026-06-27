import { Star } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import DragScroll from '@/components/ui/DragScroll'
import FloatingFoodIcons from './FloatingFoodIcons'

const reviews = [
  {
    name: 'bonjovigirl',
    quote: 'Un accueil exceptionnel dès notre arrivée. Une ambiance cosy et un service passionné.',
  },
  {
    name: 'Ricko_Nîmes',
    quote: 'Un brunch à découvrir absolument ! Des plats bien préparés et des cocktails équilibrés.',
  },
  {
    name: 'Viviane N',
    quote: 'Tout est absolument délicieux, avec des plats faits maison et des produits frais.',
  },
  {
    name: 'lou c',
    quote: 'Accueil chaleureux et attentionné, une cuisine colorée et raffinée.',
  },
  {
    name: 'Nono S',
    quote: 'Expérience excellente ! Un accueil exceptionnel et des ingrédients de grande qualité.',
  },
  {
    name: 'Corinne C',
    quote: 'Excellent au goût, très belle présentation, et un personnel attentionné.',
  },
]

export default function Testimonials() {
  return (
    <section className="relative px-6 md:px-10 lg:px-16 py-12 md:py-16 bg-creme-50 overflow-hidden">
      <FloatingFoodIcons />
      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal>
          <p className="text-xs uppercase tracking-wide text-creme-500 mb-2">
            Avis clients
          </p>
          <h2 className="text-3xl md:text-4xl mb-8">Ils ont aimé</h2>
        </Reveal>

        <DragScroll className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 md:-mx-10 md:px-10 lg:-mx-16 lg:px-16">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delayMs={i * 60} className="shrink-0 w-[280px] sm:w-[320px]">
              <div className="h-full bg-creme-100 rounded-card p-6 border border-creme-300 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-lg hover:border-creme-500">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={14}
                      className="fill-garrigue-700 text-garrigue-700"
                    />
                  ))}
                </div>
                <p className="font-display text-lg text-creme-900 mb-4">
                  « {review.quote} »
                </p>
                <p className="text-sm text-creme-700">{review.name}</p>
              </div>
            </Reveal>
          ))}
        </DragScroll>

        <Reveal delayMs={360}>
          <a
            href="https://www.tripadvisor.fr/Restaurant_Review-g187154-d33066471-Reviews-Etat_Dame-Nimes_Gard_Occitanie.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-sm text-creme-700 underline hover:text-creme-900 transition-colors"
          >
            Voir tous les avis sur TripAdvisor
          </a>
        </Reveal>
      </div>
    </section>
  )
}
