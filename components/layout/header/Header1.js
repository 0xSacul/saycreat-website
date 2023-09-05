import Link from "next/link"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className="header-area header-three">
                <div id="header-sticky" className={`menu-area`}>
                    <div className="container-fluid">
                        <div className="second-menu">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="logo">
                                    <Link href="/"><img src="/img/logo/logo.png" alt="logo" className="w-15" /></Link>
                                </div>
                                <div className="d-flex align-items-center gap-4"
                                    style={{ marginRight: "1rem" }}
                                >
                                    <div className="d-flex align-items-center gap-2 social-hover">
                                        <i className="fab fa-twitter" /> <span>Twitter</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 social-hover">
                                        <i className="fab fa-instagram" /> <span>Instagram</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
