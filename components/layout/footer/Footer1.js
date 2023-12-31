import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="footer-bg footer-p">
                <div className="footer-top">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-6 col-lg-6 col-sm-12 mt-120 mb-60 text-center">
                                <div className="section-title p-relative mb-50 wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s">
                                    <div className="f-logo">
                                        <img src="/img/logo/logo.png" alt="img" />
                                    </div>
                                    <p>“ Si vous pouvez en rêver, je peux le créer. ”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="copy-text">
                                Copyright © SAYCREAT {new Date().getFullYear()}. Tout droits réservés.
                            </div>
                            {/* <div className="col-lg-6 text-right text-xl-right">
                                <ul>
                                    <li><Link href="#">Careers</Link></li>
                                    <li><Link href="#">Refund Policy</Link></li>
                                    <li><Link href="#">Insights</Link></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
