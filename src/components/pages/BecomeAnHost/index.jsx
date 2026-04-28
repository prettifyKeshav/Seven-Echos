import React from 'react'
import Faq from './Faq'
import "@/uploads/styles/BecomeAnHost/BecomeAnHost.css"
import "@/uploads/styles/component/component.css"
import SetsUsApart from './SetsUsApart'
import Hero from '@/components/organisms/Hero'
import Testimonials from './Testimonials'

const BecomeAnHost = () => {
    return (
        <>
            <Hero
                imgSrc="/assets/images/becomeanhost/become-an-host-banner.jpg"
                imgHeight="626"
                imgWidth="1028"
                heading="Place Your Home in Trusted Hands"
                description="From daily care to guest experience, we manage every detail with quiet excellence."
            />
            <Testimonials />
            <SetsUsApart />
            <Faq />
        </>
    )
}

export default BecomeAnHost