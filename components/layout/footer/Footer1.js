import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="footer-bg footer-p">
                <div className="footer-top p-relative fix">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-6 col-lg-6 col-sm-12 text-center">
                                <div className="section-title p-relative mb-50 wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s">
                                    <div className="f-logo">
                                        <img src="/img/logo/logo.png" alt="img" />
                                    </div>
                                    <p>“ I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce. ”</p>
                                </div>
                                <div className="footer-social mt-10 mb-120 wow fadeInDown  animated" data-animation="fadeInDown" data-delay=".4s">
                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                    <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                    <Link href="#"><i className="fab fa-youtube" /></Link>
                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="copy-text">
                                    Copyright © Zcube {new Date().getFullYear()} . All rights reserved.
                                </div>
                            </div>
                            <div className="col-lg-6 text-right text-xl-right">
                                <ul>
                                    <li><Link href="#">Careers</Link></li>
                                    <li><Link href="#">Refund Policy</Link></li>
                                    <li><Link href="#">Insights</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
