import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/Contact"
import Cta from "@/components/sections/Cta"
import ServicesThree from "@/components/sections/ServicesThree"
import Slider from "@/components/sections/Slider"
import Testimonial from "@/components/sections/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Slider />
                <ServicesThree />
                <Testimonial />
                <Cta />
                <Contact />
            </Layout>
        </>
    )
}