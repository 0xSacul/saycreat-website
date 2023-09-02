import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Cta() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="cta-area cta-bg pt-160" style={{ backgroundImage: 'url(/img/bg/cta_bg.png)' }}>
                <div className="container">
                    <div className="row justify-content-center text-center align-items-center">
                        <div className="col-lg-12">
                        <a onClick={() => setOpen(true)}  className="popup-video mb-50"><img src="/img/bg/play-button.png" alt="circle_right" /></a>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}
