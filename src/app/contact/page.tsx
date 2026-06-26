import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Phone, Mail, AtSign } from 'lucide-react'

export default async function ContactPage() {
  const info = await prisma.restaurantInfo.findFirst()

  return (
    <div className="px-6 pt-8 pb-6">
      <p className="text-xs uppercase tracking-wide text-creme-500 mb-2">
        Nous écrire
      </p>
      <h1 className="text-4xl mb-6">Contact</h1>

      {info && (
        <div className="flex flex-col gap-3 mb-8">
          <a href={`tel:${info.phone.replace(/\s/g, '')}`} className="block">
            <Card className="flex items-center gap-3">
              <Phone size={18} className="text-creme-500 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wide text-creme-500">Téléphone</p>
                <p className="text-creme-900">{info.phone}</p>
              </div>
            </Card>
          </a>

          <a href={`mailto:${info.email}`} className="block">
            <Card className="flex items-center gap-3">
              <Mail size={18} className="text-creme-500 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wide text-creme-500">Email</p>
                <p className="text-creme-900">{info.email}</p>
              </div>
            </Card>
          </a>

          <a href={`https://instagram.com/${info.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="flex items-center gap-3">
              <AtSign size={18} className="text-creme-500 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wide text-creme-500">Instagram</p>
                <p className="text-creme-900">{info.instagram}</p>
              </div>
            </Card>
          </a>
        </div>
      )}

      <Card>
        <p className="text-xs uppercase tracking-wide text-creme-500 mb-2">
          Rejoindre l&apos;équipe
        </p>
        <p className="text-creme-700 mb-4">
          Vous souhaitez travailler avec nous ? Envoyez-nous une candidature spontanée.
        </p>
        <Link href="/contact/candidature">
          <Button variant="primary" className="w-full">
            Déposer une candidature
          </Button>
        </Link>
      </Card>
    </div>
  )
}