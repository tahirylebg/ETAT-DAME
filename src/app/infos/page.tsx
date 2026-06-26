import { prisma } from '@/lib/prisma'
import Card from '@/components/ui/Card'

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
    <div className="px-6 pt-8 pb-6">
      <p className="text-xs uppercase tracking-wide text-creme-500 mb-2">
        Infos pratiques
      </p>
      <h1 className="text-4xl mb-6">Ce qu&apos;on veut savoir avant de venir.</h1>

      {info && (
        <Card className="mb-6">
          <p className="text-xs uppercase tracking-wide text-creme-500 mb-2">
            Adresse
          </p>
          <p className="text-creme-900 mb-4">
            {info.address}
            <br />
            {info.postalCode} {info.city}
            <br />
            {info.region}
          </p>

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

          <a href={info.mapsUrl} target="_blank" rel="noopener noreferrer" className="block text-center px-4 py-2.5 rounded-card border border-creme-300 text-creme-900 text-sm">
            Ouvrir dans Google Maps
          </a>
        </Card>
      )}

      <Card>
        <p className="text-xs uppercase tracking-wide text-creme-500 mb-3">
          Horaires d&apos;ouverture
        </p>
        {hoursByDay.map(({ label, slots }) => (
          <div
            key={label}
            className="flex justify-between py-2 border-b border-creme-300 last:border-0 text-sm"
          >
            <span className="text-creme-900">{label}</span>
            <span className="text-creme-700 text-right">
              {slots.length === 0 || slots.every((slot) => slot.isClosed)
                ? 'Fermé'
                : slots
                    .filter((slot) => !slot.isClosed)
                    .map((slot) => `${formatTime(slot.openTime)}-${formatTime(slot.closeTime)}`)
                    .join(' · ')}
            </span>
          </div>
        ))}
      </Card>
    </div>
  )
}