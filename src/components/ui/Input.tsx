import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export default function Input({ label, error, id, className = '', ...props }: InputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-xs uppercase tracking-wide text-creme-500 mb-1">
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-4 py-2.5 min-h-[44px] rounded-card border bg-white text-creme-900 shadow-sm transition-colors duration-150 hover:border-creme-500 focus-visible:outline-2 focus-visible:outline-creme-700 focus-visible:outline-offset-2 ${
          error ? 'border-red-700' : 'border-creme-300'
        } ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-red-700 mt-1">{error}</p>}
    </div>
  )
}