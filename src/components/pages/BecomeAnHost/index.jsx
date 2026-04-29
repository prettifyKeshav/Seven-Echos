import React from 'react'
import Faq from './Faq'
import "@/uploads/styles/BecomeAnHost/BecomeAnHost.css"
import "@/uploads/styles/component/component.css"
import SetsUsApart from './SetsUsApart'
import Hero from './Hero'
import Testimonials from './Testimonials'
import WhatForYou from './WhatForYou'

const BecomeAnHost = () => {
    return (
        <>
            <Hero />
            <WhatForYou />
            <Testimonials />
            <SetsUsApart />
            <Faq />
        </>
    )
}

export default BecomeAnHost