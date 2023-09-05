import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Cta() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="cta-area cta-bg pt-200" style={{ backgroundImage: 'url(/img/bg/cta_bg.png)' }}>
            </section>
        </>
    )
}
