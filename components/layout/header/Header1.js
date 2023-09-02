import Link from "next/link"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className="header-area header-three">
                <div id="header-sticky" className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container-fluid">
                        <div className="second-menu">
                            <div className="row align-items-center">
                                <div className="col-lg-1 col-md-12">
                                    <div className="logo">
                                        <Link href="/"><img src="/img/logo/logo.png" alt="logo" /></Link>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8 text-center">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-sub">
                                                    <Link href="#home">Home</Link>
                                                </li>
                                                <li><Link href="#video">About me</Link></li>
                                                <li className="has-sub">
                                                    <Link href="#services">Services</Link>
                                                </li>
                                                <li><Link href="#portfolio">Portfolio</Link></li>
                                                <li className="has-sub"><Link href="#">Other Pages</Link>
                                                    <ul>
                                                        <li><Link href="/blog">Blog</Link></li>
                                                        <li><Link href="/blog-details">Blog Deatils </Link></li>
                                                        <li><Link href="/projects-details">Protfolio Deatils</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="#contact">Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block">
                                    <div className="header-social">
                                        <span>
                                            <Link href="#" title="Facebook"><i className="fab fa-behance" />  Behance</Link>
                                            <Link href="#" title="LinkedIn"><i className="fab fa-dribbble" /> Dribbble</Link>
                                        </span>
                                        {/*  /social media icon redux */}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <MobileMenu handleMobileMenu={handleMobileMenu} isMobileMenu={isMobileMenu}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
