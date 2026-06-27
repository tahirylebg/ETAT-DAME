import { prisma } from '@/lib/prisma'
import Card from '@/components/ui/Card'
import PageHeader from '@/components/layout/PageHeader'
import FloatingFoodIcons from '@/components/home/FloatingFoodIcons'
import Reveal from '@/components/ui/Reveal'
import HoursRow from '@/components/ui/HoursRow'
import { MapPin, Clock } from 'lucide-react'

const DAYS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']

function formatTime(time: string | null) {
  if (!time) return ''
  const [h, m] = time.split(':')
  return m === '00' ? `${h}h` : `${h}h${m}`
}

export default async function InfosPage() {
  const info = await prisma.restaurantInfo.findFirst()
  const hours = await prisma.openingHour.findMany({
    orderBy: [{ dayOfWeek: 'asc' }, { service: 'asc' }],
  })

  const hoursByDay = DAYS.map((label, dayOfWeek) => ({
    label,
    slots: hours.filter((hour) => hour.dayOfWeek === dayOfWeek),
  }))

  return (
    <div className="relative px-6 pt-8 pb-6 overflow-hidden">
      <FloatingFoodIcons />
      <div className="relative z-10">
        <PageHeader
          eyebrow="Infos pratiques"
          title="Ce qu'on veut savoir avant de venir."
        />

        {info && (
          <Reveal delayMs={0}>
            <Card className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-creme-300 shrink-0">
                  <MapPin size={18} className="text-creme-900" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-creme-500">Adresse</p>
                  <p className="text-creme-900 font-medium">
                    {info.address}, {info.postalCode} {info.city}
                  </p>
                </div>
              </div>

              <div className="rounded-card overflow-hidden border border-creme-300 mb-4">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    `${info.address}, ${info.postalCode} ${info.city}`
                  )}&output=embed`}
                  width="100%"
                  height="200"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  title="Localisation État Dame"
                />
              </div>

              <a
                href={info.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-4 py-2.5 min-h-[44px] rounded-card bg-creme-900 text-creme-50 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] touch-manipulation hover:bg-creme-700 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.97]"
              >
                Ouvrir dans Google Maps
              </a>
            </Card>
          </Reveal>
        )}

        <Reveal delayMs={80}>
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-creme-300 shrink-0">
                <Clock size={18} className="text-creme-900" />
              </span>
              <p className="text-xs uppercase tracking-wide text-creme-500">
                Horaires d&apos;ouverture
              </p>
            </div>
            {hoursByDay.map(({ label, slots }, i) => (
              <HoursRow
                key={label}
                label={label}
                dayIndex={i}
                schedule={
                  slots.length === 0 || slots.every((slot) => slot.isClosed)
                    ? 'Fermé'
                    : slots
                        .filter((slot) => !slot.isClosed)
                        .map((slot) => `${formatTime(slot.openTime)}-${formatTime(slot.closeTime)}`)
                        .join(' · ')
                }
              />
            ))}
          </Card>
        </Reveal>
      </div>
    </div>
  )
}
