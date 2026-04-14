'use client'

import { useState, useEffect } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function PWAInstallButton() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)
  const [showIOSInstructions, setShowIOSInstructions] = useState(false)
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    const isAlreadyInstalled = window.matchMedia('(display-mode: standalone)').matches

    setIsIOS(isIOSDevice)
    setIsStandalone(isAlreadyInstalled)

    const handler = (e: Event) => {
      e.preventDefault()
      setInstallPrompt(e as BeforeInstallPromptEvent)
    }

    window.addEventListener('beforeinstallprompt', handler)

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'none',
      })
    }

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  async function handleInstallClick() {
    if (installPrompt) {
      await installPrompt.prompt()
      const { outcome } = await installPrompt.userChoice
      if (outcome === 'accepted') {
        setInstallPrompt(null)
      }
    } else if (isIOS) {
      setShowIOSInstructions((prev) => !prev)
    } else {
      setShowFallback((prev) => !prev)
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={handleInstallClick}>Télécharger l&apos;App</button>

      {showIOSInstructions && isIOS && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          background: 'white',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '12px',
          width: '260px',
          zIndex: 100,
          fontSize: '14px',
        }}>
          <p>Pour installer l&apos;app sur iOS :</p>
          <p>Appuyez sur le bouton Partager <span role="img" aria-label="share">⎋</span> puis &quot;Sur l&apos;écran d&apos;accueil&quot; <span role="img" aria-label="add">➕</span></p>
        </div>
      )}

      {showFallback && !installPrompt && !isIOS && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          background: 'white',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '12px',
          width: '260px',
          zIndex: 100,
          fontSize: '14px',
        }}>
          <p>L&apos;installation automatique n&apos;est pas supportée sur ce navigateur.</p>
        </div>
      )}
    </div>
  )
}
