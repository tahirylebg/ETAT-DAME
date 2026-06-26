type SignatureMarkProps = {
  className?: string
}

export default function SignatureMark({ className }: SignatureMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
    >
      <path d="M30 10 a40 40 0 0 1 0 80 Z" fill="currentColor" />
    </svg>
  )
}
