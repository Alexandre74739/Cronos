'use client'

import { useState } from 'react'
import Image from 'next/image'
import Logo from '@/public/logo-site.svg'
import Link from 'next/link'
import PWAInstallButton from './PWAInstallButton'

const links = [
    { href: '/', label: 'Antiquité' },
    { href: '/moyen-age', label: 'Moyen Âge' },
    { href: '/renaissance', label: 'Renaissance' },
    { href: '/rev-industrielle', label: 'Rév. Industrielle' },
    { href: '/epoque-moderne', label: 'Époque Moderne' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="navbar">
            <div className="navbar-left">
                <Link href="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
                    <Image src={Logo} alt="ARTE Cronos" height={40} priority />
                </Link>

                <nav className="navbar-nav" aria-label="Navigation principale">
                    <ul>
                        {links.map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="navbar-actions">
                <div className="navbar-pwa">
                    <PWAInstallButton />
                </div>
                <button
                    className={`navbar-burger${isOpen ? ' is-open' : ''}`}
                    onClick={() => setIsOpen(prev => !prev)}
                    aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </button>
            </div>

            <ul
                id="mobile-menu"
                className={`navbar-panel${isOpen ? ' is-open' : ''}`}
                aria-hidden={!isOpen}
            >
                {links.map(({ href, label }) => (
                    <li key={href}>
                        <Link href={href} onClick={() => setIsOpen(false)}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    )
}
