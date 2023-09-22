import React, { useState } from 'react'

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [budget, setBudget] = useState("Aucun")


    const handleSubmit = (e) => {
        e.preventDefault()

        if (name === '') {
            alert('Veuillez saisir votre nom')
            return
        } else if (email === '') {
            alert('Veuillez saisir votre email')
            return
        } else if (message === '') {
            alert('Veuillez saisir votre message')
            return
        } else if (subject === '') {
            alert('Veuillez saisir le sujet de votre message')
            return
        } else if (budget === '' || budget === 'Aucun') {
            alert('Veuillez saisir votre budget')
            return
        }

        console.log('Sending')

        let data = {
            name,
            email,
            message,
            subject,
            budget
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setMessage('')
                setSubject('')
                setBudget('')

                setTimeout(() => {
                    setSubmitted(false)
                }, 2500)
            }
        })

    }

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
                                                <input type="text" id="firstn" name="firstn" placeholder="Nom & Prénom" required
                                                    onChange={(e) => { setName(e.target.value) }} />

                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-subject mb-20">
                                                <i className="fas fa-envelope-open" />
                                                <input type="text" id="email" name="email" placeholder="Email" required
                                                    onChange={(e) => { setEmail(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-subject mb-20">
                                                <i className="fas fa-book" />
                                                <input type="text" id="subject" name="subject" placeholder="Sujet"
                                                    onChange={(e) => { setSubject(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-option mb-20">
                                                <i className="fas fa-dollar-sign" />
                                                <select name="room" id="rm" required onChange={(e) => { setBudget(e.target.value) }}>
                                                    <option value="Aucun"> Budget</option>
                                                    <option value="100€ ou moins">100€ ou moins</option>
                                                    <option value="200€">200€</option>
                                                    <option value="300€">300€</option>
                                                    <option value="400€">400€</option>
                                                    <option value="500€ ou plus">500€ ou plus</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-message mb-30">
                                                <i className="fas fa-pencil" />
                                                <textarea name="message" id="message" cols={30} rows={10} placeholder="Comment puis-je vous aider?"
                                                    onChange={(e) => { setMessage(e.target.value) }} />
                                            </div>
                                            <div className="slider-btn">
                                                {submitted ? <button className="btn ss-btn white" data-animation="fadeInRight" data-delay=".8s">Message Envoyé!</button> : <button className="btn ss-btn white" data-animation="fadeInRight" data-delay=".8s" onClick={(e) => { handleSubmit(e) }}>Envoyer</button>}
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
