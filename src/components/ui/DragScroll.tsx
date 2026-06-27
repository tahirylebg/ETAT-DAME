'use client'

import { useRef, useState, type ReactNode, type MouseEvent } from 'react'

interface DragScrollProps {
  children: ReactNode
  className?: string
}

export default function DragScroll({ children, className = '' }: DragScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const startX = useRef(0)
  const startScrollLeft = useRef(0)

  function onMouseDown(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    setIsDragging(true)
    startX.current = e.pageX
    startScrollLeft.current = ref.current.scrollLeft
  }

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!isDragging || !ref.current) return
    e.preventDefault()
    const delta = e.pageX - startX.current
    ref.current.scrollLeft = startScrollLeft.current - delta
  }

  function stopDragging() {
    setIsDragging(false)
  }

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      className={`no-scrollbar ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} ${className}`}
    >
      {children}
    </div>
  )
}
