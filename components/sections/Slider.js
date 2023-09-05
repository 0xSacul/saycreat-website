import React from 'react'
const TITLES = [
    "Creative",
    "UI/UX",
    "Logo",
    "Web",
];

export default function Slider() {
    const [titleIndex, setTitleIndex] = React.useState(0);
    const [title, setTitle] = React.useState(TITLES[0]);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setTitleIndex((prevTitleIndex) =>
                (prevTitleIndex + 1) % TITLES.length
            );
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    React.useEffect(() => {
        setTitle(TITLES[titleIndex]);
    }, [titleIndex]);

    return (
        <>
            <section id="parallax" className="slider-area fix p-relative">
                <div className="slider-shape ss-one layer" data-delay=".15s" data-depth="0.10"><img src="/img/bg/slider_shape01.png" alt="shape" /></div>
                <div className="slider-active">
                    <div className="single-slider slider-bg d-flex align-items-center" style={{ backgroundImage: 'url("/img/slider/bg-main.png")', backgroundColor: '#fff' }}>
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="slider-content s-slider-content p-relative">
                                    <span
                                        key={title}
                                        className="animated fadeInLeftOutRight"
                                    >{title} </span>
                                    <span>Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
