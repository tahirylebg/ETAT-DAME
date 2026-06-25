import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function Home() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-4xl mb-2">État Dame</h1>
      <p>Brunch artisanal à Nîmes</p>
      <div className="flex gap-4">
        <Button variant="primary">Voir le menu</Button>
        <Button variant="secondary">Infos pratiques</Button>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-2xl">
        <Card>
          <h3 className="font-display text-xl mb-2">Eat</h3>
          <p className="text-sm">Pancakes, œufs, toasts, bowls...</p>
        </Card>
        <Card>
          <h3 className="font-display text-xl mb-2">Drinks</h3>
          <p className="text-sm">Café, thé, jus, kombucha...</p>
        </Card>
      </div>
    </div>
  )
}