'use client'

import { Download } from "@deemlol/next-icons";
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
        className="font-ui text-sm font-bold text-border bg-secondary px-6 py-2 rounded-sm transition-all duration-300 hover:bg-gray-300"
      >
        Télécharger l'App{" "}
        <Download className="inline-block ml-2 size-4 text-black" />
      </button>

      {showIOSInstructions && isIOS && (
        <div className={tooltip}>
          <p>Pour installer l'app sur iOS :</p>
          <p className="mt-2">
            Appuyez sur Partager{" "}
            <span role="img" aria-label="share">
              ⎋
            </span>{" "}
            puis &quot;Sur l'écran d'accueil&quot;{" "}
            <span role="img" aria-label="add">
              ➕
            </span>
          </p>
        </div>
      )}

      {showFallback && !installPrompt && !isIOS && (
        <div className={tooltip}>
          <p>
            L'installation automatique n'est pas supportée sur ce navigateur.
          </p>
        </div>
      )}
    </div>
  );
}
