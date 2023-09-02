import Link from "next/link"
import { useState } from "react"
export default function MobileMenu({ handleMobileMenu, isMobileMenu }) {
    const [isDropdown, setDropdown] = useState(false)
    const handleDropdown = () => setDropdown(!isDropdown)
    return (
        <>
            <div className="mobile-menu mean-container">
                <div className="mean-bar">
                    <Link href="#nav" className={`meanmenu-reveal ${isMobileMenu ? "" : "meanclose"}`} style={{ right: 0, left: 'auto', textAlign: 'center', textIndent: 0, fontSize: 18 }} onClick={handleMobileMenu}>
                        {!isMobileMenu ?
                            <>
                                <span><span><span></span></span></span>
                            </> : "X"}

                    </Link>
                    <nav className="mean-nav">
                        <ul style={{ display: `${isMobileMenu ? "block" : "none"}` }}>
                            <li className="has-sub">
                                <Link href="/#home">Home</Link>
                            </li>
                            <li><Link href="#video">About me</Link></li>
                            <li className="has-sub">
                                <Link href="#services">Services</Link>
                            </li>
                            <li><Link href="#portfolio">Portfolio</Link></li>
                            <li className="has-sub"><Link href="#">Other Pages</Link>
                                <ul style={{ display: `${isDropdown ? "block" : "none"}` }}>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/blog-details">Blog Deatils </Link></li>
                                    <li><Link href="/projects-details">Protfolio Deatils</Link></li>
                                </ul>
                                <Link className="mean-expand" href="#" style={{ fontSize: 18 }} onClick={handleDropdown}>{isDropdown?"-":"+"}</Link></li>
                            <li className="mean-last"><Link href="#contact">Contact</Link></li>
                        </ul>
                    </nav></div></div>

        </>
    )
}
