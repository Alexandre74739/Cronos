'use client'

import { useState, useEffect } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function PWAInstallButton() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isIOS, setIsIOS] = useState(false)
  const [showIOSInstructions, setShowIOSInstructions] = useState(false)
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    setIsIOS(isIOSDevice)

    const handler = (e: Event) => {
      e.preventDefault()
      setInstallPrompt(e as BeforeInstallPromptEvent)
    }

    window.addEventListener('beforeinstallprompt', handler)

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js', { scope: '/', updateViaCache: 'none' })
    }

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  async function handleInstallClick() {
    if (installPrompt) {
      await installPrompt.prompt()
      const { outcome } = await installPrompt.userChoice
      if (outcome === 'accepted') setInstallPrompt(null)
    } else if (isIOS) {
      setShowIOSInstructions((prev) => !prev)
    } else {
      setShowFallback((prev) => !prev)
    }
  }

  const tooltip = "absolute top-[calc(100%+0.75rem)] right-0 bg-card text-white border border-border p-4 w-65 z-200 text-sm"

  return (
    <div className="relative">
      <button
        onClick={handleInstallClick}
        className="font-ui text-sm font-semibold text-border bg-secondary px-6 py-2 border-0 transition-all duration-200 hover:bg-[#b3b3b3]"
      >
        Télécharger l&apos;App
      </button>

      {showIOSInstructions && isIOS && (
        <div className={tooltip}>
          <p>Pour installer l&apos;app sur iOS :</p>
          <p className="mt-2">
            Appuyez sur Partager{' '}
            <span role="img" aria-label="share">⎋</span>{' '}
            puis &quot;Sur l&apos;écran d&apos;accueil&quot;{' '}
            <span role="img" aria-label="add">➕</span>
          </p>
        </div>
      )}

      {showFallback && !installPrompt && !isIOS && (
        <div className={tooltip}>
          <p>L&apos;installation automatique n&apos;est pas supportée sur ce navigateur.</p>
        </div>
      )}
    </div>
  )
}
