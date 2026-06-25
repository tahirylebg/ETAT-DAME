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
  const base = 'px-6 py-2.5 rounded-card font-sans font-medium transition-colors'

  const variants = {
    primary: 'bg-creme-700 text-creme-50 hover:bg-creme-900',
    secondary: 'border border-creme-500 text-creme-700 hover:bg-creme-100',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}