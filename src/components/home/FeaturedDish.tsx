import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'

export default function FeaturedDish() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-12 md:py-16 bg-creme-100">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="group relative h-64 md:h-96 rounded-card overflow-hidden order-1">
              <Image
                src="/images/menu/pancakes.jpg"
                alt="Pancakes maison, pâte à tartiner et bananes fraîches — État Dame"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="order-2 bg-creme-50 p-8 md:p-10">
              <span className="block h-1 w-16 bg-creme-900 mb-6" />
              <p className="text-xs uppercase tracking-wide text-creme-500 mb-2">
                Le plat du moment
              </p>
              <h2 className="text-3xl md:text-4xl mb-4">Pancakes maison</h2>
              <p className="text-creme-700 md:text-lg">
                Trois pancakes moelleux, pâte à tartiner et bananes fraîches.
                Simple, généreux, sans chichi — exactement ce qu&apos;on aime
                servir un dimanche matin.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
