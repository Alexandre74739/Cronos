import Image from "next/image"
import Logo from "@/public/logo-site.svg"
import Link from 'next/link'
import PWAInstallButton from './PWAInstallButton'

export default function Navbar() {
    return (
        <div>
            <nav>
                <div>
                    <Image src={Logo} alt="logo" />
                    <ul className="nav-item">
                        <li><Link href="/">Antiquité</Link></li>
                        <li><Link href="/about">Moyen Age</Link></li>
                        <li><Link href="/contact">Renaissance</Link></li>
                        <li><Link href="/contact">Rév Industrielle</Link></li>
                        <li><Link href="/contact">Epoque Moderne</Link></li>
                    </ul>
                </div>
                <PWAInstallButton />
            </nav>
        </div>
    );
}