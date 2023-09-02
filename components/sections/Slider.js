import Link from "next/link"


export default function Slider() {
    return (
        <>
            <section id="parallax" className="slider-area pt-120 fix p-relative">
                <div className="slider-shape ss-one layer" data-delay=".15s" data-depth="0.10"><img src="/img/bg/slider_shape01.png" alt="shape" /></div>
                <div className="slider-shape ss-three layer" data-depth="0.40"><img src="/img/bg/slider_shape03.png" alt="shape" /></div>
                <div className="slider-active">
                    <div className="single-slider slider-bg d-flex align-items-center" style={{ backgroundImage: 'url("/img/slider/bg-main.png")', backgroundColor: '#fff' }}>
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-lg-7 col-md-7">
                                    <div className="slider-content s-slider-content mt-100 p-relative">
                                        <h5 data-animation="fadeInUp" data-delay=".3s"><span><img src="/img/bg/cube.png" alt="icon01" /></span> creative designer</h5>
                                        <h2 data-animation="fadeInUp" data-delay=".6s">Hello, My Name's Miro Jakson</h2>
                                        <div className="slider-btn mb-105">
                                            <Link href="#contact" className="btn ss-btn mr-15" data-animation="fadeInUp" data-delay=".9s">Download CV </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 p-relative">
                                    <div className="img-main" data-animation="fadeInRight" data-delay=".3s"> <img src="/img/slider/main.png" alt="slider-overlay" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
