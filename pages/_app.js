import Preloader from "@/components/elements/Preloader"
import { useEffect, useState } from "react"


import "slick-carousel/slick/slick.css"
import "../node_modules/react-modal-video/css/modal-video.css"

import "/public/css/animate.min.css"
import "/public/css/bootstrap.min.css"
import "/public/css/magnific-popup.css"
import "/public/fontawesome/css/all.min.css"

import Cursor from "@/components/elements/Cursor"
import "/public/css/default.css"
import "/public/css/dripicons.css"
import "/public/css/meanmenu.css"
import "/public/css/responsive.css"
import "/public/css/style.css"

function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [])
    return (<>
        <Cursor />
        {!loading ? (
            <Component {...pageProps} />
        ) : (
            <Preloader />
        )}
    </>)
}

export default MyApp
