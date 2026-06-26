'use client'

import { useState } from 'react'
import type { MenuTab } from '@/types'

interface MenuTabsProps {
  tabs: MenuTab[]
}

export default function MenuTabs({ tabs }: MenuTabsProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id)

  const activeTab = tabs.find((tab) => tab.id === activeId)

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto border-b border-creme-300 mb-6 pb-px">
        {tabs.map((tab) => {
          const isActive = tab.id === activeId
          return (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className={`shrink-0 px-3 py-2 text-xs uppercase tracking-wide border-b-2 transition-colors duration-200 touch-manipulation focus-visible:outline-2 focus-visible:outline-creme-700 focus-visible:outline-offset-2 ${
                isActive
                  ? 'border-creme-900 text-creme-900 font-medium'
                  : 'border-transparent text-creme-500 hover:text-creme-700'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div key={activeId} className="animate-fade-in-up">
        {activeTab?.content}
      </div>
    </div>
  )
}
