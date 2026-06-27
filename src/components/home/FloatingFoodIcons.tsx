import { Croissant, Coffee, CupSoda, EggFried, Cherry, Sandwich } from 'lucide-react'

const icons = [
  { Icon: Croissant, top: '6%', left: '4%', size: 56, duration: '7s', delay: '0s' },
  { Icon: Coffee, top: '14%', left: '88%', size: 48, duration: '8s', delay: '0.5s' },
  { Icon: CupSoda, top: '62%', left: '92%', size: 52, duration: '6.5s', delay: '1s' },
  { Icon: EggFried, top: '70%', left: '2%', size: 50, duration: '7.5s', delay: '1.5s' },
  { Icon: Cherry, top: '40%', left: '10%', size: 36, duration: '6s', delay: '0.8s' },
  { Icon: Sandwich, top: '8%', left: '50%', size: 44, duration: '9s', delay: '0.3s' },
]

export default function FloatingFoodIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {icons.map(({ Icon, top, left, size, duration, delay }, i) => (
        <div
          key={i}
          className="absolute pointer-events-auto animate-float text-creme-700/30 transition-colors duration-300 hover:text-garrigue-700/50"
          style={{ top, left, animationDuration: duration, animationDelay: delay }}
        >
          <Icon size={size} strokeWidth={1.25} />
        </div>
      ))}
    </div>
  )
}
