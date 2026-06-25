import Button from '@/components/ui/Button'

export default function Header() {
  return (
    <header className="px-6 pt-8 pb-6 bg-creme-50">
      <p className="text-xs uppercase tracking-wide text-creme-500 mb-2">
        Brunch artisanal · Nîmes
      </p>
      <h1 className="text-4xl mb-4">État Dame</h1>
      <p className="text-creme-700 mb-6 max-w-md">
        Cuisine maison, produits frais du marché. Une carte courte, lisible,
        généreuse, pensée pour se décider vite.
      </p>
      <div className="flex flex-col gap-3 max-w-xs">
        <Button variant="primary">Voir le menu</Button>
        <Button variant="secondary">Infos pratiques</Button>
      </div>
      <div className="flex justify-between text-xs text-creme-500 mt-8 pt-4 border-t border-creme-300 max-w-md">
        <div>
          <p className="font-medium text-creme-700">Horaires</p>
          <p>Mar – Ven 9h–16h</p>
        </div>
        <div>
          <p className="font-medium text-creme-700">Adresse</p>
          <p>12 rue de la République, Nîmes</p>
        </div>
      </div>
    </header>
  )
}