import Link from "next/link"

import { useState } from 'react'
export default function ServicesThree() {
    const [activeIndex, setActiveIndex] = useState(2)

    const handleMouseEnter = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section id="services" className="services-area services-bg  p-relative fix pt-120 pb-90 " style={{ background: '#0e0e10 ' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className={`s-single-services text-center wow fadeInUp animated ${activeIndex == 1 ? "active" : ""}`} data-animation="fadeInUp" data-delay=".2s" onMouseEnter={() => handleMouseEnter(1)} >
                                <div className="services-icon mb-30">
                                    <img src="/img/crea-logo.png" alt="img" className="pb-5" />
                                    <h3
                                        className="custom-color-white"
                                    >
                                        Création Logo
                                    </h3>
                                    <p>En tant que designer passionné, mon objectif est de créer des logos exceptionnels qui incarnent l'essence de votre entreprise. Découvrez comment je peux vous aider à marquer votre présence unique sur le marché.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`s-single-services text-center wow fadeInUp animated ${activeIndex == 2 ? "active" : ""}`} data-animation="fadeInUp" data-delay=".4s" onMouseEnter={() => handleMouseEnter(2)} >
                                <div className="services-icon mb-30">
                                    <img src="/img/crea-pub.png" alt="img" className="pb-5" />
                                    <h3
                                        className="custom-color-white"
                                    >
                                        Création Publicitaire
                                    </h3>
                                    <p>Je suis spécialisé dans la conception de fiches publicitaires, de flyers, d'affiches et bien plus encore pour mettre en avant votre entreprise.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`s-single-services text-center wow fadeInUp animated ${activeIndex == 3 ? "active" : ""}`} data-animation="fadeInUp" data-delay=".6s" onMouseEnter={() => handleMouseEnter(3)} >
                                <div className="services-icon mb-30">
                                    <img src="/img/identite-visuel.png" alt="img" className="pb-5" />
                                    <h3
                                        className="custom-color-white"
                                    >
                                        Identité visuel
                                    </h3>
                                    <p>Votre identité visuelle est votre empreinte digitale visuelle. Je suis là pour vous aider à créer une identité visuelle unique qui marquera les esprits et renforcera votre présence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
