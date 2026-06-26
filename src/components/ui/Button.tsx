import { ButtonHTMLAttributes, ReactNode } from 'react'

// Ce composant Button est un bouton réutilisable qui accepte des variantes de style (primaire ou secondaire) et des enfants React. 
// Il utilise des classes CSS pour appliquer les styles en fonction de la variante choisie. Le composant est conçu pour être flexible et peut être utilisé dans différentes parties de l'application avec des styles cohérents.
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base =
    'px-6 py-2.5 min-h-[44px] rounded-card font-sans font-medium transition-all duration-150 touch-manipulation hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-creme-700 focus-visible:outline-offset-2'

  const variants = {
    primary: 'bg-creme-900 text-creme-50 hover:bg-creme-700 hover:shadow-md',
    secondary: 'border border-creme-500 text-creme-700 hover:bg-creme-100 hover:border-creme-700',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}