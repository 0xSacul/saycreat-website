

export default function Contact() {
    return (
        <>
            <section id="contact" className="contact-area after-none contact-bg pb-120 p-relative fix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 order-1">
                            <div className="section-title p-relative mb-50 pl-60 wow fadeInLeft  animated" data-animation="fadeInLeft" data-delay=".4s">
                                <h5>prendre contact</h5>
                                <h2 className="pt-2">
                                    N'hésitez pas à poser des questions
                                </h2>
                            </div>
                            <div className="contact-info pl-60">
                                <div className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                    <p className="pb-2">Amiens, France</p>
                                    <p>contact@saycreat.fr</p>
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
                                                <input type="text" id="firstn" name="firstn" placeholder="Nom & Prénom" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-subject mb-20">
                                                <i className="fas fa-envelope-open" />
                                                <input type="text" id="email" name="email" placeholder="Email" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-subject mb-20">
                                                <i className="fas fa-book" />
                                                <input type="text" id="subject" name="subject" placeholder="Sujet" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-option mb-20">
                                                <i className="fas fa-dollar-sign" />
                                                <select name="room" id="rm">
                                                    <option value="sports-massage"> Budget</option>
                                                    <option value={1}>100€ ou moins</option>
                                                    <option value={2}>200€</option>
                                                    <option value={3}>300€</option>
                                                    <option value={4}>400€</option>
                                                    <option value={5}>500€ ou plus</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-message mb-30">
                                                <i className="fas fa-pencil" />
                                                <textarea name="message" id="message" cols={30} rows={10} placeholder="Comment puis-je vous aider?" />
                                            </div>
                                            <div className="slider-btn">
                                                <button className="btn ss-btn white" data-animation="fadeInRight" data-delay=".8s">Envoyer</button>
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
