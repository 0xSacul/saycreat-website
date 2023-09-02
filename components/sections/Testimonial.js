import Slider from "react-slick"

const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

export default function Testimonial() {
    return (
        <>
            <section id="testimonial" className="testimonial-area pt-120 pb-115 p-relative fix">
                <div className="animations-01"><img src="/img/bg/an-img-03.png" alt="an-img-01" /></div>
                <div className="animations-02"><img src="/img/bg/an-img-04.png" alt="contact-bg-an-01" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb-35 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                <h5>client feedback</h5>
                                <h2>
                                    Trusted By Clients
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <Slider {...settings} className="testimonial-active wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div className="single-testimonial text-center">
                                    <div className="testi-author">
                                        <img src="/img/testimonial/testi_avatar.png" alt="img" />
                                    </div>
                                    <p>“ I’d love to meet up with you to discuss your venture  collaboration. ”</p>
                                    <div className="ta-info">
                                        <h6>Miranda H. Halimson</h6>
                                        <span>Founder Of Miranda Ltd.</span>
                                    </div>
                                </div>
                                <div className="single-testimonial text-center">
                                    <div className="testi-author">
                                        <img src="/img/testimonial/testi_avatar_02.png" alt="img" />
                                    </div>
                                    <p>“ I’d love to meet up with you to discuss your venture  collaboration. ”</p>
                                    <div className="ta-info">
                                        <h6>Rosalina D. William</h6>
                                        <span>CEO Of Rosalia Co.</span>
                                    </div>
                                </div>
                                <div className="single-testimonial text-center">
                                    <div className="testi-author">
                                        <img src="/img/testimonial/testi_avatar_03.png" alt="img" />
                                    </div>
                                    <p>“ I’d love to meet up with you to discuss your venture  collaboration. ”</p>
                                    <div className="ta-info">
                                        <h6>Alexis A. Alvon</h6>
                                        <span>CEO Of Alvon Co</span>
                                    </div>
                                </div>
                                <div className="single-testimonial text-center">
                                    <div className="testi-author">
                                        <img src="/img/testimonial/testi_avatar.png" alt="img" />
                                    </div>
                                    <p>“ I’d love to meet up with you to discuss your venture  collaboration. ”</p>
                                    <div className="ta-info">
                                        <h6>Margie Dose</h6>
                                        <span>Web Developer</span>
                                    </div>
                                </div>
                                <div className="single-testimonial text-center">
                                    <div className="testi-author">
                                        <img src="/img/testimonial/testi_avatar_02.png" alt="img" />
                                    </div>
                                    <p>“ I’d love to meet up with you to discuss your venture  collaboration. ”</p>
                                    <div className="ta-info">
                                        <h6>Rock Dloder</h6>
                                        <span>Web Developer</span>
                                    </div>
                                </div>
                                <div className="single-testimonial text-center">
                                    <div className="testi-author">
                                        <img src="/img/testimonial/testi_avatar.png" alt="img" />
                                    </div>
                                    <p>“ I’d love to meet up with you to discuss your venture  collaboration. ”</p>
                                    <div className="ta-info">
                                        <h6>Miranda H. Halimson</h6>
                                        <span>Founder Of Miranda Ltd.</span>
                                    </div>
                                </div>
                                <div className="single-testimonial text-center">
                                    <div className="testi-author">
                                        <img src="/img/testimonial/testi_avatar_02.png" alt="img" />
                                    </div>
                                    <p>“ I’d love to meet up with you to discuss your venture  collaboration. ”</p>
                                    <div className="ta-info">
                                        <h6>Rosalina D. William</h6>
                                        <span>CEO Of Rosalia Co.</span>
                                    </div>
                                </div>
                                <div className="single-testimonial text-center">
                                    <div className="testi-author">
                                        <img src="/img/testimonial/testi_avatar_03.png" alt="img" />
                                    </div>
                                    <p>“ I’d love to meet up with you to discuss your venture  collaboration. ”</p>
                                    <div className="ta-info">
                                        <h6>Alexis A. Alvon</h6>
                                        <span>CEO Of Alvon Co</span>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
