import Slider from "react-slick"

const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
                                <h5>Avis Client</h5>
                                <h2>
                                    La confiance de nos clients
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <Slider {...settings} className="testimonial-active wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div className="single-testimonial text-center">
                                    <div className="testi-author">
                                        <img src="/img/testimonial/n2pa.webp" alt="img" style={{ maxWidth: '100px' }} />
                                    </div>
                                    <p>“Très créatif, SAYCREAT a su répondre à nos demandes dans un temps très court et toujours de façon professionnel.”</p>
                                    <div className="ta-info">
                                        <h6>Louis</h6>
                                        <span>Fondateur de N2PA.</span>
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
