import CategoryCard from '@/components/menu/CategoryCard'
import PageHeader from '@/components/layout/PageHeader'
import FloatingFoodIcons from '@/components/home/FloatingFoodIcons'
import Reveal from '@/components/ui/Reveal'
import { UtensilsCrossed, Coffee, Wine } from 'lucide-react'

export default function MenuPage() {
  return (
    <div className="relative px-6 pt-8 pb-6 overflow-hidden">
      <FloatingFoodIcons />
      <div className="relative z-10">
        <PageHeader
          eyebrow="Notre carte"
          title="Menu"
          description="Toute la carte ÉTAT DAME, pensée pour choisir vite : base de la recette, options, prix, boissons."
        />

        <Reveal delayMs={0}>
          <CategoryCard
            title="Eat"
            tagline="Brunch · Salé · Sucré"
            description="Pancakes, œufs, toasts, bowls..."
            href="/menu/eat"
            icon={UtensilsCrossed}
            image="/images/menu/eat.webp"
          />
        </Reveal>
        <Reveal delayMs={80}>
          <CategoryCard
            title="Drinks"
            tagline="Café · Thé · Jus · Kombucha"
            description="Espresso, matcha, cold brew..."
            href="/menu/drink"
            icon={Coffee}
            image="/images/menu/drinks.jpg"
          />
        </Reveal>
        <Reveal delayMs={160}>
          <CategoryCard
            title="Cocktails"
            tagline="Classiques · Signatures · Virgin"
            description="Mimosa, Negroni, Spritz..."
            href="/menu/cocktails"
            icon={Wine}
            image="/images/menu/cocktails.webp"
          />
        </Reveal>
      </div>
    </div>
  )
}
