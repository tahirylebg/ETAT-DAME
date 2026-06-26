import CategoryCard from '@/components/menu/CategoryCard'
import { UtensilsCrossed, Coffee, Wine } from 'lucide-react'

export default function MenuPage() {
  return (
    <div className="px-6 pt-8 pb-6">
      <p className="text-xs uppercase tracking-wide text-creme-500 mb-2">
        Notre carte
      </p>
      <h1 className="text-4xl mb-2">Menu</h1>
      <p className="text-creme-700 mb-8">
        Toute la carte ÉTAT DAME, pensée pour choisir vite : base de la
        recette, options, prix, boissons.
      </p>

      <CategoryCard
        title="Eat"
        tagline="Brunch · Salé · Sucré"
        description="Pancakes, œufs, toasts, bowls..."
        href="/menu/eat"
        icon={UtensilsCrossed}
      />
      <CategoryCard
        title="Drinks"
        tagline="Café · Thé · Jus · Kombucha"
        description="Espresso, matcha, cold brew..."
        href="/menu/drink"
        icon={Coffee}
      />
      <CategoryCard
        title="Cocktails"
        tagline="Classiques · Signatures · Virgin"
        description="Mimosa, Negroni, Spritz..."
        href="/menu/cocktails"
        icon={Wine}
      />
    </div>
  )
}
