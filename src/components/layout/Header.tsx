import Image from 'next/image'
import Link from 'next/link'
import { Clock, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'
import SignatureMark from '@/components/ui/SignatureMark'
import Reveal from '@/components/ui/Reveal'

export default function Header() {
  return (
    <header className="relative bg-creme-50">
      <div className="relative left-1/2 -translate-x-1/2 w-screen">
        <div className="relative h-[460px] md:h-[560px] overflow-hidden">
          <Image
            src="/images/hero/brunch.png"
            alt="Table de brunch État Dame : œufs brouillés, pancakes, toast avocat, croissant et boissons"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-creme-900/85 via-creme-900/55 to-creme-900/10" />

          <div className="relative z-10 h-full max-w-7xl mx-auto flex flex-col justify-center px-6 md:px-10 lg:px-16">
            <Reveal delayMs={0}>
              <p className="text-xs uppercase tracking-wide text-creme-300 mb-2">
                Brunch artisanal · Nîmes
              </p>
              <h1 className="text-5xl md:text-7xl text-creme-50 mb-4">État Dame</h1>
            </Reveal>

            <Reveal delayMs={80}>
              <p className="text-creme-100 mb-6 max-w-md lg:max-w-lg md:text-lg">
                Cuisine maison, produits frais du marché. Une carte courte, lisible,
                généreuse, pensée pour se décider vite.
              </p>
            </Reveal>

            <Reveal delayMs={160}>
              <div className="flex flex-col sm:flex-row gap-3 max-w-xs sm:max-w-none">
                <Link href="/menu">
                  <Button variant="primary" className="w-full">Voir le menu</Button>
                </Link>
                <Link href="/infos">
                  <Button variant="primary" className="w-full">Infos pratiques</Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="bg-creme-900">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3 text-creme-100">
              <Clock size={18} className="text-creme-300 shrink-0" />
              <p className="text-sm">
                Jeu-Sam 11h-15h · 18h30-23h
                <br />
                Lun, Dim 11h-15h
              </p>
            </div>
            <div className="flex items-center gap-3 text-creme-100">
              <MapPin size={18} className="text-creme-300 shrink-0" />
              <p className="text-sm">12 rue de la République, Nîmes</p>
            </div>
            <div className="flex items-center gap-2 sm:justify-end text-creme-300">
              <SignatureMark className="w-5 h-5" />
              <span className="font-display text-base">État Dame</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
