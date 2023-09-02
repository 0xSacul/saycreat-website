import Link from "next/link"

import { useState } from 'react'
export default function ServicesThree() {
    const [activeIndex, setActiveIndex] = useState(2)

    const handleMouseEnter = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section id="services" className="services-area services-bg  p-relative fix pt-120 pb-90 " style={{ background: '#1a1d88' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className={`s-single-services text-center mb-30 wow fadeInUp  animated ${activeIndex == 1 ? "active" : ""}`} data-animation="fadeInUp" data-delay=".2s" onMouseEnter={() => handleMouseEnter(1)} >
                                <div className="services-icon mb-30">
                                    <img src="/img/icon/se-icon1.png" alt="img" />
                                </div>
                                <div className="second-services-content">
                                    <h3><Link href="/single-service">Product Design</Link></h3>
                                    <p>I research  create breakthrough delightful ideas leading.</p>
                                    <Link href="/single-service" className="readmore">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`s-single-services text-center mb-30 wow fadeInUp  animated ${activeIndex == 2 ? "active" : ""}`} data-animation="fadeInUp" data-delay=".4s" onMouseEnter={() => handleMouseEnter(2)} >
                                <div className="services-icon mb-30">
                                    <img src="/img/icon/se-icon2.png" alt="img" />
                                </div>
                                <div className="second-services-content">
                                    <h3><Link href="/single-service">Website Design</Link></h3>
                                    <p>I research  create breakthrough delightful ideas leading.</p>
                                    <Link href="/single-service" className="readmore">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`s-single-services text-center mb-30 wow fadeInUp  animated ${activeIndex == 3 ? "active" : ""}`} data-animation="fadeInUp" data-delay=".6s" onMouseEnter={() => handleMouseEnter(3)} >
                                <div className="services-icon mb-30">
                                    <img src="/img/icon/se-icon3.png" alt="img" />
                                </div>
                                <div className="second-services-content">
                                    <h3><Link href="/single-service">Game Development</Link></h3>
                                    <p>I research  create breakthrough delightful ideas leading.</p>
                                    <Link href="/single-service" className="readmore">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
