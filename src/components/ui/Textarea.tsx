import { TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export default function Textarea({ label, error, id, className = '', ...props }: TextareaProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-xs uppercase tracking-wide text-creme-500 mb-1">
        {label}
      </label>
      <textarea
        id={id}
        rows={4}
        className={`w-full px-4 py-2.5 rounded-card border bg-white text-creme-900 shadow-sm transition-colors duration-150 hover:border-creme-500 focus-visible:outline-2 focus-visible:outline-creme-700 focus-visible:outline-offset-2 ${
          error ? 'border-red-700' : 'border-creme-300'
        } ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-red-700 mt-1">{error}</p>}
    </div>
  )
}