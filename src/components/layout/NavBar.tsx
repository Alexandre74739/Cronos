import Image from "next/image"
import Logo from "@/public/logo-site.svg"
import Link from 'next/link'
import PWAInstallButton from './PWAInstallButton'

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-left">
                <Link href="/" className="navbar-logo">
                    <Image src={Logo} alt="ARTE" height={48} />
                </Link>
                <nav>
                    <ul className="navbar-nav">
                        <li><Link href="/">Antiquité</Link></li>
                        <li><Link href="/moyen-age">Moyen Âge</Link></li>
                        <li><Link href="/renaissance">Renaissance</Link></li>
                        <li><Link href="/rev-industrielle">Rév. Industrielle</Link></li>
                        <li><Link href="/epoque-moderne">Époque Moderne</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="navbar-right">
                <PWAInstallButton />
            </div>
        </header>
    );
}
