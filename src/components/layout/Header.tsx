import Button from '@/components/ui/Button'
import SignatureMark from '@/components/ui/SignatureMark'
import Reveal from '@/components/ui/Reveal'

export default function Header() {
  return (
    <header className="relative px-6 pt-8 pb-6 bg-creme-50 overflow-hidden md:px-0 md:py-16">
      <div className="relative md:grid md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_420px] md:gap-12 lg:gap-20 md:items-start">
        <SignatureMark className="absolute -right-6 -top-10 w-56 h-56 text-creme-900 opacity-[0.06] pointer-events-none md:hidden" />

        <div>
          <Reveal delayMs={0}>
            <p className="relative text-xs uppercase tracking-wide text-creme-500 mb-2">
              Brunch artisanal · Nîmes
            </p>
            <h1 className="relative text-4xl md:text-6xl mb-4">État Dame</h1>
          </Reveal>

          <Reveal delayMs={80}>
            <p className="relative text-creme-700 mb-6 max-w-md lg:max-w-lg md:text-lg lg:text-xl">
              Cuisine maison, produits frais du marché. Une carte courte, lisible,
              généreuse, pensée pour se décider vite.
            </p>
          </Reveal>

          <Reveal delayMs={160}>
            <div className="relative flex flex-col gap-3 max-w-xs">
              <Button variant="primary">Voir le menu</Button>
              <Button variant="secondary">Infos pratiques</Button>
            </div>
          </Reveal>

          <Reveal delayMs={240}>
            <div className="relative flex justify-between text-xs text-creme-500 mt-8 pt-4 border-t border-creme-300 max-w-md">
              <div>
                <p className="font-medium text-creme-700">Horaires</p>
                <p>Lundi 11h-15h</p>
                <p>Mardi fermé</p>
                <p>Mercredi fermé</p>
                <p>Jeudi 11h-15h
                         18h30-23h
                </p>
                <p>Vendredi 11h-15h
                            18h30-23h
                </p>
                <p>Samedi 11h-15h
                          18h30-23h
                </p>
                <p>Dimanche 11h-15h</p>
              </div>
              <div>
                <p className="font-medium text-creme-700">Adresse</p>
                <p>12 rue de la République, Nîmes</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={120} className="hidden md:block">
          <div className="md:flex md:flex-col md:justify-between md:h-full md:bg-creme-100 md:rounded-card md:p-8 lg:p-10 md:min-h-[420px] lg:min-h-[480px]">
            <SignatureMark className="w-16 h-16 lg:w-20 lg:h-20 text-garrigue-700 transition-transform duration-500 hover:rotate-12" />
            <div>
              <p className="font-display text-2xl lg:text-3xl text-creme-900 mb-2">
                Local, sans détour.
              </p>
              <p className="text-sm lg:text-base text-creme-700">
                Une cuisine de quartier pensée pour Nîmes : produits frais,
                recettes simples, prix lisibles.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  )
}
