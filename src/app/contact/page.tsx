import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import PageHeader from '@/components/layout/PageHeader'
import FloatingFoodIcons from '@/components/home/FloatingFoodIcons'
import Reveal from '@/components/ui/Reveal'
import { Phone, Mail, AtSign, UserPlus } from 'lucide-react'

export default async function ContactPage() {
  const info = await prisma.restaurantInfo.findFirst()

  return (
    <div className="relative px-6 pt-8 pb-6 overflow-hidden">
      <FloatingFoodIcons />
      <div className="relative z-10">
        <PageHeader eyebrow="Nous écrire" title="Contact" />

        {info && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            <Reveal delayMs={0}>
              <a href={`tel:${info.phone.replace(/\s/g, '')}`} className="block group h-full">
                <Card className="flex items-center gap-3 h-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] touch-manipulation group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-creme-500">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-creme-300 shrink-0">
                    <Phone size={18} className="text-creme-900" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-creme-500">Téléphone</p>
                    <p className="text-creme-900 font-medium">{info.phone}</p>
                  </div>
                </Card>
              </a>
            </Reveal>

            <Reveal delayMs={60}>
              <a href={`mailto:${info.email}`} className="block group h-full">
                <Card className="flex items-center gap-3 h-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] touch-manipulation group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-creme-500">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-creme-300 shrink-0">
                    <Mail size={18} className="text-creme-900" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-creme-500">Email</p>
                    <p className="text-creme-900 font-medium break-all">{info.email}</p>
                  </div>
                </Card>
              </a>
            </Reveal>

            <Reveal delayMs={120}>
              <a
                href={`https://instagram.com/${info.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block group h-full"
              >
                <Card className="flex items-center gap-3 h-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] touch-manipulation group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-creme-500">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-creme-300 shrink-0">
                    <AtSign size={18} className="text-creme-900" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-creme-500">Instagram</p>
                    <p className="text-creme-900 font-medium">{info.instagram}</p>
                  </div>
                </Card>
              </a>
            </Reveal>
          </div>
        )}

        <Reveal delayMs={180}>
          <Card className="bg-creme-900 border-creme-900">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-creme-50/15 shrink-0">
                <UserPlus size={20} className="text-creme-50" />
              </span>
              <p className="text-xs uppercase tracking-wide text-creme-300">
                Rejoindre l&apos;équipe
              </p>
            </div>
            <p className="text-creme-100 mb-4">
              Vous souhaitez travailler avec nous ? Envoyez-nous une candidature spontanée.
            </p>
            <Link href="/contact/candidature">
              <Button
                variant="secondary"
                className="w-full !border-creme-50 !text-creme-50 hover:!bg-creme-50/10"
              >
                Déposer une candidature
              </Button>
            </Link>
          </Card>
        </Reveal>
      </div>
    </div>
  )
}
