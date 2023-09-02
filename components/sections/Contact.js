

export default function Contact() {
    return (
        <>
            <section id="contact" className="contact-area after-none contact-bg pb-120 p-relative fix">
                <div className="animations-01"><img src="/img/bg/an-img-08.png" alt="an-img-01" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 order-1">
                            <div className="section-title p-relative mb-50 pl-60 wow fadeInLeft  animated" data-animation="fadeInLeft" data-delay=".4s">
                                <h5><span><img src="/img/bg/cube.png" alt="icon01" /></span> get in touch</h5>
                                <h2>
                                    Feel Free To Ask Anything
                                </h2>
                                <p>Above creature the rule blessed brought. Multiply they're one. Gathering own waters beast blessed.</p>
                            </div>
                            <div className="contact-info pl-60">
                                <div className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                    <p>251 Purple Sunset Avenue Brooklyn, BXY 92101 mewsi@example.com</p>
                                </div>
                                <div className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                    <p>251 Purple Sunset Avenue Brooklyn, BXY 92101 mewsi@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 order-2">
                            <div className="contact-bg">
                                <form action="mail.php" method="post" className="contact-form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-name mb-20">
                                                <i className="fas fa-user" />
                                                <input type="text" id="firstn" name="firstn" placeholder="First Name" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-subject mb-20">
                                                <i className="fas fa-envelope-open" />
                                                <input type="text" id="email" name="email" placeholder="Eamil" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-subject mb-20">
                                                <i className="fas fa-book" />
                                                <input type="text" id="subject" name="subject" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-option mb-20">
                                                <i className="fas fa-dollar-sign" />
                                                <select name="room" id="rm">
                                                    <option value="sports-massage"> Budget</option>
                                                    <option value={1}>$100</option>
                                                    <option value={2}>$200</option>
                                                    <option value={3}>$300</option>
                                                    <option value={4}>$400</option>
                                                    <option value={5}>$500</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-message mb-30">
                                                <i className="fas fa-pencil" />
                                                <textarea name="message" id="message" cols={30} rows={10} placeholder="Write comments" />
                                            </div>
                                            <div className="slider-btn">
                                                <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Submit Request</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
