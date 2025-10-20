'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-bg-primary flex items-center justify-center transition-opacity duration-500">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-bg-tertiary border-t-accent-purple rounded-full animate-spin mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-text-primary">Loading NovaVerse...</h2>
      </div>
    </div>
  )
}