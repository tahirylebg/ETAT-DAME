'use client'

import { useRef, useState, ChangeEvent, DragEvent } from 'react'
import { Upload } from 'lucide-react'

const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]
const MAX_SIZE = 5 * 1024 * 1024 // 5 Mo

interface FileUploadProps {
  name?: string
}

export default function FileUpload({ name = 'cv' }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  function validateAndSet(file: File | undefined) {
    if (!file) return

    if (!ALLOWED_TYPES.includes(file.type)) {
      setError('Format invalide (PDF ou Word uniquement).')
      setFileName(null)
      if (inputRef.current) inputRef.current.value = ''
      return
    }
    if (file.size > MAX_SIZE) {
      setError('Le fichier dépasse 5 Mo.')
      setFileName(null)
      if (inputRef.current) inputRef.current.value = ''
      return
    }

    setError(null)
    setFileName(file.name)
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    validateAndSet(e.target.files?.[0])
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file && inputRef.current) {
      const dataTransfer = new DataTransfer()
      dataTransfer.items.add(file)
      inputRef.current.files = dataTransfer.files
    }
    validateAndSet(file)
  }

  return (
    <div>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`flex items-center gap-3 px-4 py-3 rounded-card border border-dashed cursor-pointer ${
          isDragging ? 'border-creme-700 bg-creme-100' : 'border-creme-300'
        }`}
      >
        <Upload size={18} className="text-creme-500 shrink-0" />
        <span className="text-sm text-creme-700 truncate">
          {fileName ?? 'Déposer ou parcourir un fichier (PDF ou Word, 5 Mo max)'}
        </span>
      </div>

      <input
        ref={inputRef}
        type="file"
        name={name}
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
        className="hidden"
      />

      {error && <p className="text-sm text-red-700 mt-2">{error}</p>}
    </div>
  )
}