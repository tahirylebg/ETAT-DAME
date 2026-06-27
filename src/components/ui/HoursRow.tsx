'use client'

import { useEffect, useState } from 'react'

interface HoursRowProps {
  label: string
  schedule: string
  dayIndex: number
}

export default function HoursRow({ label, schedule, dayIndex }: HoursRowProps) {
  const [isToday, setIsToday] = useState(false)

  useEffect(() => {
    const todayIndex = (new Date().getDay() + 6) % 7
    setIsToday(todayIndex === dayIndex)
  }, [dayIndex])

  return (
    <div
      className={`flex justify-between items-center py-2.5 px-2 -mx-2 rounded-card border-b border-creme-300 last:border-0 text-sm transition-colors duration-200 hover:bg-creme-50 ${
        isToday ? 'bg-creme-100' : ''
      }`}
    >
      <span className="flex items-center gap-2 text-creme-900">
        {label}
        {isToday && (
          <span className="text-[10px] uppercase tracking-wide bg-garrigue-700 text-creme-50 px-1.5 py-0.5 rounded">
            Aujourd&apos;hui
          </span>
        )}
      </span>
      <span className="text-creme-700 text-right">{schedule}</span>
    </div>
  )
}
