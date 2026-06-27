import { ButtonHTMLAttributes, ReactNode } from 'react'

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
    'px-6 py-2.5 min-h-[44px] rounded-card font-sans font-medium transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] touch-manipulation hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-creme-700 focus-visible:outline-offset-2'

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
